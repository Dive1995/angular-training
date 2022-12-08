import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private authsservice: AuthService) { }

  ngOnInit(): void {
    console.log(this.authsservice.isLoggedIn);
    
  }

}
