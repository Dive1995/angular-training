import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';



@NgModule({
  declarations: [
    CreateNewStudentComponent,
    ShowAllStudentsComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  exports: []
})
export class RegistrationModule { }
