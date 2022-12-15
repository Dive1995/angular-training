import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from '../IStudent';
import { SearchStudentComponent } from '../search-student/search-student.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-show-all-students',
  templateUrl: './show-all-students.component.html',
  styleUrls: ['./show-all-students.component.scss']
})
export class ShowAllStudentsComponent implements OnInit, AfterViewInit {
  studentList: IStudent[] = [];
  registerId: string='';
  searchResult: any;

  childTitle: any;
  @ViewChild(SearchStudentComponent) child: any;

  constructor(
    private router: Router, 
    private studentService: StudentService
    ) {
      this.getAllStudent();
    // this.studentService.getStudent('CS20220001').subscribe(res => console.log(res));
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      setTimeout(() => {
        this.childTitle = this.child.title;
      },0)      
  }

  getAllStudent(){
    this.studentService.getAllStudent().subscribe(res => this.studentList = res.students);
  }

  addNewUser(){
    this.router.navigateByUrl('/reg/new-student')
  }

  searchStudent(value: any){    
    this.studentService.searchStudentByName(value).subscribe(res => this.searchResult=res);
  }

  goToPreviousPage(){
    if(this.studentService.currentPage > 1){
      this.studentService.currentPage -= 1;
      this.getAllStudent();
    }
  }

  goToNextPage(){
    if(this.studentService.currentPage ){
      this.studentService.currentPage += 1;
      this.getAllStudent();
    }
  }

}
