
import { Product } from './../../Models/ProductModel';
import { Component, OnInit } from '@angular/core';
// import { Subscription } from "rxjs/Rx";
import 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/products/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

   selectedProduct: Product;
  private productIndex: string;
  // private subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private PService: ProductService) {






     this.route.params.subscribe(
      (params: any) => {
        this.productIndex = params['id'];

this.getProduct(this.productIndex);


//     this.PService.getProduct(this.productIndex).subscribe((data :any) =>{
//          // return the object
//          console.log(data.product)


//         this.selectedProduct = data.product;


//          // output the here object
//          console.log(this.selectedProduct);

// }

//         );

}
    )



//         this.PService.getProduct(this.productIndex).subscribe((data) =>{
//          // return the object
//          console.log(data.product)

//         this.selectedProduct = data.product,
//          //output the here object
//          console.log(this.selectedProduct);

// }

//         );

// output undefine





}

getProduct(id:string){

    this.PService.getProduct(id).subscribe((data :any) =>{
         // return the object
         console.log(data)



        this.selectedProduct = data.product;
        //transform the product
        // this.selectedProduct = new Product(data.product._id,
        // data.product.name,
        // data.product.description,
        // data.product.price)


         // output the here object
         console.log(this.selectedProduct);

}

        );
}

   onEdit() {
    this.router.navigate(['/products', this.productIndex, 'edit']);
  }

  onDelete() {
    // this.PService.deleteProduct(this.selectedProduct);
    this.router.navigate(['/products']);
  }



  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
