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
  registerId: string='';
  searchResult: any;

  constructor(
    private router: Router, 
    private studentService: StudentService
    ) {
    this.studentService.getAllStudent().subscribe(res => this.studentList = res);
    this.studentService.getStudent('CS20220001').subscribe(res => console.log(res));
  }

  ngOnInit(): void {
  }

  addNewUser(){
    this.router.navigateByUrl('/reg/new-student')
  }

  searchStudent(value: any){    
    this.studentService.searchStudentByName(value).subscribe(res => this.searchResult=res);
  }

}
