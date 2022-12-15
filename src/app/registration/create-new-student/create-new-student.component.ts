import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DegreeService } from '../degree.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-new-student',
  templateUrl: './create-new-student.component.html',
  styleUrls: ['./create-new-student.component.scss']
})
export class CreateNewStudentComponent implements OnInit {
  degreeList: any;

  registrationForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
    mobileNum:['', [Validators.required,Validators.pattern("(07)[0-9 ]{8}")]],
    landlineNum:['',[Validators.pattern("(0)[0-9 ]{9}")]],
    dateOfBirth:['1995-11-04', [Validators.required, this.dateValidator]],
    batch:[2022, Validators.required],
    degreeId:['', Validators.required]
  });

  constructor(
    private studentService: StudentService, 
    private router: Router, 
    private degreeService: DegreeService,
    private formBuilder: FormBuilder) {
      degreeService.getAllDegree().subscribe(res => {
        console.log(res);
        
        this.degreeList = res;
      });
    }

  ngOnInit(): void {
  }

  addNewStudent(){
    if(this.registrationForm.valid){
      this.studentService.addNewStudent(this.registrationForm.value).subscribe(res => console.log(res))
      this.registrationForm.reset();
    }else{
      this.registrationForm.markAllAsTouched();
    }
    // this.router.navigateByUrl('/reg');
  }

  dateValidator(control: AbstractControl){
    const currentYear = new Date().getFullYear();
    const studentBirthYear = new Date(control.value).getFullYear();

    if(control.value && (currentYear - studentBirthYear >= 20)){
      return null;
    }
    return { "dateValidator": true};
  }
}
