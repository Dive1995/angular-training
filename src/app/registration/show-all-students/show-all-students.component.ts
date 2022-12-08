import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from '../IStudent';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-show-all-students',
  templateUrl: './show-all-students.component.html',
  styleUrls: ['./show-all-students.component.scss']
})
export class ShowAllStudentsComponent implements OnInit {
  studentList: IStudent[] = [];

  constructor(private router: Router, private studentService: StudentService) {
    this.studentList = this.studentService.allStudents();
  }

  ngOnInit(): void {
  }

  addNewUser(){
    this.router.navigateByUrl('/reg/new-student')
  }

}
