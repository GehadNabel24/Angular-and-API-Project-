import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../shared/Interfaces/Product';
import { AllproductService } from '../../shared/services/allproduct.service';
import { SearchPipe } from '../../shared/pipe/search.pipe';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule,SearchPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  products: Product[] = [];
  searchterm: string = '';

  constructor(private _AllproductService: AllproductService) {}

  ngOnInit(): void {
    this._AllproductService.getAllProduct().subscribe({
      next: (responce) => {
        this.products = responce;
        console.log(responce);
      },
    });
  }
  getProducts() {
    this._AllproductService.getAllProduct().subscribe((response: Product[]) => {
      this.products = response;
    });
  }
  removeProductFromStore(id: number): void 
  {
    this._AllproductService.removeProduct(id).subscribe({
      next: (response) => {
        console.log(response);
        console.log('product remove');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
