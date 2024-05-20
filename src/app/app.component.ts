
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet,Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Componant/footer/footer.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './shared/pipe/search.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [    
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    FooterComponent,RouterModule,
    // BrowserAnimationsModule, 
    CarouselModule, 
    FormsModule,
    SearchPipe,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
}
