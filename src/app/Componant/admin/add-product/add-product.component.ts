import { UpdtateAddProductService } from './../../../shared/services/updtate-add-product.service';
import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,NgModel,
  ReactiveFormsModule,
  Validators,
  FormsModule
} from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private http: HttpClient, private _Router: Router,  private _FormBuilder: FormBuilder,private _UpdtateAddProductService:UpdtateAddProductService) {}
 
  loginForm: FormGroup = this._FormBuilder.group({
    name: '',
    id:0,
    price: 0,
    description: '',
    quantity: 0,
    image: '',
    categoryId:4,
    discount:0,
    rating:3,
  });

  onsubmit() 
  {
    this._UpdtateAddProductService.addProduct(this.loginForm.value).subscribe
    ({
      next: (response) => {
       
        console.log(response)
        this._Router.navigate(['/admin']);
      
      },

      error: (err) => 
        {
        console.log(err)
       
    }
  })
  
  }
}
