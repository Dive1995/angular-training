import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from '../IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  student?: IStudent;
  
  toggleModel: boolean = false;
  firstName: string = "";
  lastName: string = "";
  batch?: number;

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentService.getStudent(params['id']).subscribe(res => {        
        this.student = res;
        this.firstName = this.student?.firstName;
        this.lastName = this.student?.lastName;
        this.batch = this.student?.batch;
      });
    });
  }

  showForm(){
    this.toggleModel = true;
  }

  update(){
    
    var student = {...this.student, firstName:this.firstName, lastName:this.lastName, batch: this.batch};   
    console.log(student);
    
    this.studentService.updateStudent(student).subscribe(res => console.log(res));
  }

}
