import { ProductService } from './products/product.service';
import { appRoutes } from './AppRouting';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { ErrorService } from './error/error.service';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductListItemComponent } from './products/product-list/product-list-item/product-list-item.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    ProductsComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductEditComponent,
    ProductStartComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    appRoutes
  ],
  providers: [AuthService,ErrorService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
