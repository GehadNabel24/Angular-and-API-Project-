import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllproductService } from '../../../shared/services/allproduct.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-edit-product',
  standalone: true, 
   templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  imports: [FormsModule, CommonModule],

})
export class EditProductComponent implements OnInit {
  productDetails: any = {
    name: '',
    price: 0,
    description: '',
    quantity: 1,
    categoryId: 4,
    image: '',
    rating: 0,
    id: 0,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: AllproductService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.productDetails.id = +idParam; // Convert idParam to number
        this.loadProductDetails();
      }
    });
  }

  loadProductDetails(): void {
    this.productsService.getProductDetails(this.productDetails.id).subscribe({
      next: (response: any) => {
        this.productDetails = response;
      },
      error: (err) => console.error('Error fetching product details', err),
    });
  }

  updateProduct(productId: number, productDetails: any) {
    const url = `http://localhost:5000/api/Products/${productId}`;
    return this.httpClient.put(url, productDetails);
  }

  onSubmit(): void {
    console.log("submit")
    console.log(this.productDetails);
    this.updateProduct(this.productDetails.id, this.productDetails).subscribe({
      next: (response) => {
        console.log('Product updated successfully', response);
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.log(this.productDetails)
        console.error('Error updating product', err)
      },
    });
  }
}
