import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../shared/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AllproductService } from '../../shared/services/allproduct.service';
import { Product } from '../../shared/Interfaces/Product';
import { CartService } from '../../shared/services/CartService';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselModule, SearchPipe, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(
    private _AllproductService: AllproductService,
    private _CartService: CartService
  ) {}
  products: Product[] = [];
  Category: any[] = [];

  searchterm: string = '';
  // Option Of Cursoul

  addtoCart(id: number): void 
  {
    this._CartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        console.log('product add to DB');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  //////////////////

  ngOnInit(): void {
    this._AllproductService.getAllProduct().subscribe({
      next: (responce) => {
        this.products = responce;
        console.log(responce);
      },
    });
  }
}
