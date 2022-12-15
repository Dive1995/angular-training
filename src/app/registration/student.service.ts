import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './IStudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl: string = "https://localhost:7288/api/student";
  currentPage: number = 1;


  constructor(private http: HttpClient) { }

  getStudent(registerId: string): Observable<IStudent>{
    return this.http.get<IStudent>(`${this.baseUrl}/${registerId}`);
  }

  getAllStudent(): Observable<any>{
    //student?page=2
    return this.http.get<any>(`${this.baseUrl}?page=${this.currentPage}`);
  }

  addNewStudent(student: any): Observable<IStudent>{
    return this.http.post<IStudent>(`${this.baseUrl}/create`, student)
  }

  searchStudentByName(name: string): Observable<IStudent[]>{
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      }), 
    };
    return this.http.post<IStudent[]>(`${this.baseUrl}/search`, JSON.stringify(name), requestOptions);
  }

}
