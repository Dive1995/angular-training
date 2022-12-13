import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-new-student',
  templateUrl: './create-new-student.component.html',
  styleUrls: ['./create-new-student.component.scss']
})
export class CreateNewStudentComponent implements OnInit {
  registrationForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    address: '',
    mobileNum:'',
    landlineNum:'',
    dateOfBirth:'',
    batch:2022,
    degreeId:'2'
  });

  constructor(private studentService: StudentService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addNewStudent(){
    console.log("Submit");
    console.log(this.registrationForm.value);
    
    this.router.navigateByUrl('/reg');
  }
}
