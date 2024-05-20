import { AdminComponent } from './Componant/admin/admin.component';
import { ContactComponent } from './Componant/contact/contact.component';
import { CheckoutComponent } from './Componant/checkout/checkout.component';
import { authUserGuard } from './shared/guards/auth-user.guard';
import { RegisterComponent } from './Componant/register/register.component';
import { LoginComponent } from './Componant/login/login.component';
import { NotFoundComponent } from './Componant/not-found/not-found.component';
import { ProductsComponent } from './Componant/products/products.component';
import { HomeComponent } from './Componant/home/home.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import{Router}from '@angular/router';
import { MainLayoutComponent } from './Componant/main-layout/main-layout.component';
import { CartComponent } from './Componant/cart/cart.component';
import { BrandsComponent } from './Componant/brands/brands.component';
import { AuthenLayoutComponent } from './Componant/authen-layout/authen-layout.component';
import { DetailsComponent } from './Componant/details/details.component';
export const routes: Routes = [
  //{path:"",component:HomeComponent,pathMatch:"full",title:"Home Page"},
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authUserGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'products', component: ProductsComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'contact', component: ContactComponent },
     
    
    ],
  },
  {
    path: '',
    component: AuthenLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {  path: 'admin', component: AdminComponent }
  ,
  { path: '**', component: NotFoundComponent, title: 'Error' },
];
