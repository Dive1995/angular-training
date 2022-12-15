import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = localStorage.getItem('auth') == null ? false : JSON.parse(localStorage.getItem('auth')!).isLoggedIn;
  }

  loggedInStatus(){
    return this.isLoggedIn;
  }

  login(): void{
    this.isLoggedIn = true;
    this.setLocalStorage(this.isLoggedIn);
  }

  signOut(){
    this.isLoggedIn = false;
    this.setLocalStorage(this.isLoggedIn);
  }

  private setLocalStorage(value: boolean){
    localStorage.setItem('auth', JSON.stringify({isLoggedIn: value}));
  }
}
