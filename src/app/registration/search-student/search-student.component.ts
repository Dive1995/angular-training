import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {
  searchName: string = '';
  title: string = 'Search  Student';
  @Input() searchResultFromParent: any;

  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(){    
    this.searchEvent.emit(this.searchName);
  }

}
