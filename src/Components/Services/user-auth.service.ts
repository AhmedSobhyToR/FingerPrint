import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  login(userName:string, password:string){
    let token = '123';
    localStorage.setItem('token', token);
  }

  logout(){
    localStorage.removeItem('token')
  }
  
  get isUserLogin():boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }
}
