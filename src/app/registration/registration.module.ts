import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';



@NgModule({
  declarations: [
    CreateNewStudentComponent,
    ShowAllStudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
