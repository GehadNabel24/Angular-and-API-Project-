import { FooterComponent } from './../footer/footer.component';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RouterOutlet } from '@angular/router';
import { NavMainComponent } from '../nav-main/nav-main.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [NavMainComponent,LoginComponent,RegisterComponent,RouterOutlet,FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
