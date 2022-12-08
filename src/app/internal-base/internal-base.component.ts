import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-internal-base',
  templateUrl: './internal-base.component.html',
  styleUrls: ['./internal-base.component.scss']
})
export class InternalBaseComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { 
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  ngOnInit(): void {
  }

  signOut():void{
    this.authService.signOut();
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  

}
