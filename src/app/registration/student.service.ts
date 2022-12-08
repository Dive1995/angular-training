import { Injectable } from '@angular/core';
import { IStudent } from './IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: IStudent[] = [
    {name:'Student 1', address:'Address 1', phone:765376766},
    {name:'Student 2', address:'Address 2', phone:725334726},
    {name:'Student 3', address:'Address 3', phone:755376476},
  ];

  constructor() { }

  allStudents(): any{
    return this.students;
  }

  addNewStudent(student: IStudent): IStudent[]{
    this.students.push(student);
    return this.students;
  }
}
