import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any=[]
  // [
  //   {id:1,name:"Bhanu",dept:"CSE"},
  //   {id:2,name:"Teja",dept:"IT"},
  //   {id:3,name:"Rahul",dept:"ECE"},
  //   {id:4,name:"Sai",dept:"EEE"},
  //   {id:5,name:"Rahul",dept:"CSE"},
  //   {id:6,name:"mahesh",dept:"CSE"},
  // ]

  constructor(private http:HttpClient) { }

  getUsers(){
    this.users= this .http.get('https://jsonplaceholder.typicode.com/users')
    return this.users;
  }
}
