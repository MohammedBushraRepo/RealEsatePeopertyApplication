import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any) {
  let UserArray = [];
  if (localStorage.getItem('Users')) { //check local storage if there is user save it in the variable
    UserArray = JSON.parse(localStorage.getItem('Users'));
  }
  // comparison between the given user and the existing one
  return UserArray.find((p:any) => p.userName === user.userName && p.password === user.password);
}

}