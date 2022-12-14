import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {
  baseUrl = "https://localhost:7288/api/degree";

  constructor(private http: HttpClient) { }

  getAllDegree():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  getDegreeById(id: number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
