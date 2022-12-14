import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true;

  constructor() { }

  login(): void{
    this.isLoggedIn = true;
  }

  signOut(){
    this.isLoggedIn = false;
  }
}
