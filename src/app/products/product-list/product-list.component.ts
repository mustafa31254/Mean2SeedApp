
import { Component, OnInit, OnDestroy } from '@angular/core';
//import { Product } from '../../Models/ProductModel';
import 'rxjs/Rx';
import { ProductService } from "app/products/product.service";
import { Product } from "app/Models/ProductModel";
//import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit  {
  //private subscription: Subscription;

    products: Product[]=[];
  constructor(private Ps: ProductService) { }


  ngOnInit() {
   this.Ps.getProducts().subscribe(
      (data) =>{
      console.log(data.products)
       this.products = data.products;
      }
       )


 }



// ngOnDestroy(){
//   this.subscription.unsubscribe();
// }
}
