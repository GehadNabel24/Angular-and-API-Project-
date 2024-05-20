import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-authen',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-authen.component.html',
  styleUrl: './nav-authen.component.css'
})
export class NavAuthenComponent {

}
