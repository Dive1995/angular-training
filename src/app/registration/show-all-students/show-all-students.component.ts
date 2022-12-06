import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-students',
  templateUrl: './show-all-students.component.html',
  styleUrls: ['./show-all-students.component.scss']
})
export class ShowAllStudentsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addNewUser(){
    this.router.navigateByUrl('/reg/new-student')
  }

}
