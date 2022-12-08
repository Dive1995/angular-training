import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private location: Location, private authService: AuthService) { 
    this.loginForm = new FormGroup({
      username : new FormControl(null),
      password : new FormControl(null)
    })
  }

  ngOnInit(): void {
    
  }

  goBack(): void{
    this.location.back();
  }

  login(){
    console.log(this.loginForm.value);
    this.authService.login();
    this.location.back();
  }

}
