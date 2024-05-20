import { CommonModule } from '@angular/common';
import { AllproductService } from './../../shared/services/allproduct.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../shared/Interfaces/Product';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _AllproductService: AllproductService
  ) {}

  productDetails: Product = {} as Product;
  brand:string=''
  category:string=''
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let productId: any = params.get('id');
        console.log(productId);
        this._AllproductService.getCategoryDetails(productId).subscribe({
          next: (response) => {
            console.log(response)
           this. brand=response.productBrand
           this. category=response.productType
           console.log(this.category)
            this.productDetails=response;
          },
        });
      },
    });

  }
}
