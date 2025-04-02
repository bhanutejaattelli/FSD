import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private userService: UserService){}
    
  users:any=[]
  ngOnInit():void{
    this.userService.getUsers().subscribe((data:any)=>this.users=data)
  }
}
