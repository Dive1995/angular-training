import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateNewStudentComponent } from './create-new-student/create-new-student.component';
import { ShowAllStudentsComponent } from './show-all-students/show-all-students.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchStudentComponent } from './search-student/search-student.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';


@NgModule({
  declarations: [
    CreateNewStudentComponent,
    ShowAllStudentsComponent,
    RegistrationComponent,
    SearchStudentComponent,
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: []
})
export class RegistrationModule { }
