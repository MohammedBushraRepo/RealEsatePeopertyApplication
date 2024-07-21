import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService{

constructor() { }

addUser(user: User) { //method to save multiable users
  let users = []; //create array to save objects users and already existing users
  if (localStorage.getItem('Users')) {//if there already users in the localstorage
    users = JSON.parse(localStorage.getItem('Users')); // get the users and convert from string to json
    users = [user, ...users]; //...users means create users object and add to the existing items in the arrray
  } else {
    users = [user];
  }
  localStorage.setItem('Users', JSON.stringify(users)); //save the object into json after convert from json to string in order to Save it
}

}