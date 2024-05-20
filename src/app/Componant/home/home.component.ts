import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
 import { AllproductService } from '../../shared/services/allproduct.service';

import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
// import { ToastrService } from 'ngx-toastr';
import { Category } from '../../shared/Interfaces/category';
import { Product } from '../../shared/Interfaces/Product';
// import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
// import { CartService } from 'src/app/core/services/cart.service';
import { SearchPipe } from '../../shared/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
// import { WhishlistService } from 'src/app/core/services/whishlist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    RouterLink,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _AllproductService: AllproductService,
    // private _CartService: CartService,
    // private _ToastrService: ToastrService,
    private _Renderer2: Renderer2,
    // private _WhishlistService: WhishlistService
  ) {}

  products: Product[] = [];
  catgories: Category[] = [];
  wishListData: string[] = []; // Data ---> wishlist -> add , remove  ["id","id","id"]

  term: string = '';

  ngOnInit(): void {
    this._AllproductService.getAllProduct().subscribe({
      next: (response) => {
        console.log('products', response);
        this.products = response;
      },
      error:(err)=>
        {
          console.log(err)
        }
    });

    // this._ProductService.getCategories().subscribe({
    //   next: (response) => {
    //     console.log('Categories', response);
    //     this.catgories = response.data;
    //   },
    // });

    // this._WhishlistService.getWhishList().subscribe({
    //   next: (response) => {
    //     // console.log('wishlist', response.data); // data --->[{id:} ,{id:}]  ===> ["id","id"];
    //     // [ item._id , item._id ,item._id ]
    //     const newData = response.data.map((item: any) => item._id);
    //     this.wishListData = newData;
    //     // console.log('newData', newData);
    //   },
    // });
  }

  //                  button refrence (btnAdd)
  // addProduct(id: any, element: HTMLButtonElement): void {
  //   this._Renderer2.setAttribute(element, 'disabled', 'true');

  //   this._CartService.addToCart(id).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       console.log(response.message);
  //       this._ToastrService.success(response.message);
  //       this._Renderer2.removeAttribute(element, 'disabled');

  //       this._CartService.cartNumber.next(response.numOfCartItems);
  //     },
  //     error: (err) => {
  //       this._Renderer2.removeAttribute(element, 'disabled');
  //     },
  //   });
  // }

  // addFav(prodId: string | undefined): void {
  //   this._WhishlistService.addToWhishList(prodId).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this._ToastrService.success(response.message);
  //       this.wishListData = response.data; // ["id","id","id"] --> wishlist
  //     },
  //   });
  // }

  // removeFav(prodId: string | undefined): void {
  //   this._WhishlistService.removeWhishList(prodId).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this._ToastrService.success(response.message);
  //       this.wishListData = response.data; // ["id","id","id"] --> wishlist
  //     },
  //   });
  // }

  categoryOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['next', 'prev'],
    autoplay: true,
    autoplayTimeout: 7000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };

  mainSlideOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    navText: ['next', 'prev'],
    items: 1,
    nav: false,
  };
}
