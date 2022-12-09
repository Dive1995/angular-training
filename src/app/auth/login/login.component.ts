import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      username : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password : new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  ngOnInit(): void {
    
  }

  goBack(): void{
    this.location.back();
  }

  login(){
    console.log(this.loginForm.value);
    console.log(this.loginForm);
    
    this.authService.login();
    this.location.back();
  }

}
