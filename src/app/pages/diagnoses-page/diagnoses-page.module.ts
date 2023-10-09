import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, type Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { DiagnosesFormComponent } from './diagnoses-form/diagnoses-form.component'

const routes: Routes = [{
  path: '', component: DiagnosesFormComponent
}]
@NgModule({
  declarations: [
    DiagnosesFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [DiagnosesFormComponent]
})
export class DiagnosesPageModule { }
