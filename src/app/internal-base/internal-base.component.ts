import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-internal-base',
  templateUrl: './internal-base.component.html',
  styleUrls: ['./internal-base.component.scss']
})
export class InternalBaseComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) { 
    this.isLoggedIn = this.authService.loggedInStatus();
  }

  ngOnInit(): void {
  }

  signOut():void{
    this.authService.signOut();
    this.isLoggedIn = this.authService.loggedInStatus();
    this.router.navigateByUrl('/');
  }

  

}
