import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  constructor(private userService: UserService){ }
  
  users:any=[]
  ngOnInit():void{
    this.userService.getUsers().subscribe((data:any)=>this.users=data)
  }
}
