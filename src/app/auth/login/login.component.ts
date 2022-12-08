import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private location: Location, private authService: AuthService) { }

  ngOnInit(): void {
  }

  goBack(): void{
    this.location.back();
  }

  login(){
    this.authService.login();
    this.location.back();
  }

}
