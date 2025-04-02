import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent }  from './about/about.component';
import { HttpClient } from '@angular/common/http';

//component decorator
@Component({
  selector: 'cvr',
  standalone:true,
  imports: [RouterOutlet, HomeComponent,AboutComponent,ContactComponent,RouterLink],
  templateUrl: './app.component.html',
  // template:`<h1>this is template</h1>`,
  // styles:`h1{color:red}`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
