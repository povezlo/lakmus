import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, TrackByFunction, OnDestroy } from '@angular/core'
import { Validators, FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms'

import { Subscription } from 'rxjs';

import { fadeInAnimation } from './animation';
import { IDiagnosesIcpc2, ApiService, IDiagnosesFormValues, IEncounterData, JsonService } from 'src/app/shared';

@Component({
  selector: 'app-diagnoses-form',
  templateUrl: './diagnoses-form.component.html',
  styleUrls: ['./diagnoses-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInAnimation]
})
export class DiagnosesFormComponent implements OnInit, OnDestroy {
  diagnosesForm!: FormGroup;
  diagnosesIcpc2List: IDiagnosesIcpc2[] = []
  json: IEncounterData | null = null;

  showFields: boolean[] = [true];
  minDate = new Date();
  hasError = false;

  subscription = new Subscription();
  trackByFn: TrackByFunction<IDiagnosesIcpc2> = (_, item) => item.id

  constructor (
    private readonly fb: FormBuilder,
    private readonly apiService: ApiService,
    private readonly jsonService: JsonService,
    private cdr: ChangeDetectorRef
    ) {}

  get diagnosisControl(): AbstractControl<any, any>[] {
    return (<FormArray>this.diagnosesForm.get('diagnosis')).controls;
  }

  ngOnInit(): void {
    this.getDiagnosesIcpc2List();
    this.initForm();
  }

  initForm(): void {
    this.diagnosesForm = this.fb.group({
      diagnosis: this.fb.array([]),
      selectedDate: ['', Validators.required]
    });
    this.addFormGroup(1);
  }

  getDiagnosesIcpc2List(): void {
    const apiSub = this.apiService.get<IDiagnosesIcpc2[]>('Dictionaries/icpc2', {IsPublic: true, Search: 'Хо'})
    .subscribe((res: IDiagnosesIcpc2[]) => {
      this.diagnosesIcpc2List = res;
      this.cdr.markForCheck();
    });

    this.subscription.add(apiSub);
  }

  createFormGroup(): FormGroup {
  return this.fb.group({
    select: [''],
    note: ['']
  });
}

  addFormGroup(numberOfGroup: number = 1): void {
    const productsArray = this.diagnosesForm?.get('diagnosis') as FormArray
    for(let i = 0; i < numberOfGroup; i++) {
      productsArray.push(this.createFormGroup());
    }
    this.showFields.push(true);
  }

  generateJson(): void {
    if ((this.diagnosesForm?.valid) === true) {
      this.hasError = false;
      const formValues: IDiagnosesFormValues = this.diagnosesForm.value;
      this.json = this.jsonService.getJson(formValues, this.diagnosesIcpc2List);
    } else {
      this.hasError = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
