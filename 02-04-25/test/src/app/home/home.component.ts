import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name:any ="Bhanu"
  // rollno:number=254
  // name1: string | boolean ="teja"
  // name3:any=325

  constructor(private userService: UserService){
    console.log(this.userService.getUsers())
  }

  users:any=[]
  ngOnInit(){
    this.userService.getUsers().subscribe((data:any)=>this.users=data)
  }
  isDisables:boolean=false

  display(n: any) {
    this.name=n.value;

  }
  hobbies:any=["eating","sleeping","playing"]

}
