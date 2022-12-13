import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "https://localhost:7288/api/student";

  // students: IStudent[] = [
  //   {name:'Student 1', address:'Address 1', phone:765376766},
  //   {name:'Student 2', address:'Address 2', phone:725334726},
  //   {name:'Student 3', address:'Address 3', phone:755376476},
  // ];

  constructor(private http: HttpClient) { }

  // allStudents(): any{
  //   return this.students;
  // }

  // addNewStudent(student: IStudent): IStudent[]{
  //   this.students.push(student);
  //   return this.students;
  // }

  getStudent(registerId: string): Observable<IStudent>{
    return this.http.get<IStudent>(`${this.baseUrl}/${registerId}`);
  }

  getAllStudent(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.baseUrl);
  }

  addNewStudent(student: any): Observable<IStudent>{
    return this.http.post<IStudent>(`${this.baseUrl}/create`, {student})
  }

}
