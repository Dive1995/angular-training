import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-new-student',
  templateUrl: './create-new-student.component.html',
  styleUrls: ['./create-new-student.component.scss']
})
export class CreateNewStudentComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  addNewStudent(data: NgForm){
    console.log(data);
    this.studentService.addNewStudent(data.value);
  }
}
