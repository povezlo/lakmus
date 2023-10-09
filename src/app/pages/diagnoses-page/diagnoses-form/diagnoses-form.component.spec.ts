import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { DiagnosesFormComponent } from '../diagnoses-form/diagnoses-form.component'

describe('DiagnosesFormComponent', () => {
  let component: DiagnosesFormComponent
  let fixture: ComponentFixture<DiagnosesFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiagnosesFormComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(DiagnosesFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
