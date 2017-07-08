import { Product } from 'app/Models/ProductModel';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})




export class ProductEditComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  private productIndex: string;
  private product: Product;
  private isNew = true;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.productIndex = params['id'];
          //this.product = this.productService.getProduct(this.productIndex);
        } else {
          this.isNew = true;
          this.product = null;
        }
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newProduct = this.productForm.value;
  //  console.log(newProduct);
    if (this.isNew) {
      this.productService.addProduct(newProduct).subscribe(
        data=>console.log(data),
        error =>console.error(error)
      )
    } else {
     console.log('Not Implemented');
      // this.productService.editProduct(this.product, newProduct);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  // onAddItem(name: string, amount: string) {
  //   (<FormArray>this.recipeForm.controls['ingredients']).push(
  //     new FormGroup({
  //       name: new FormControl(name, Validators.required),
  //       amount: new FormControl(amount, [
  //         Validators.required,
  //         Validators.pattern("\\d+")
  //       ])
  //     })
  //   );
  // }

  // onRemoveItem(index: number) {
  //   (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  private initForm() {
    let name = '';
    let price ='';
    let description = '';


    if (!this.isNew) {

      name = this.product.name;
      price=this.product.price;
      description = this.product.description;
    }
    this.productForm = this.formBuilder.group({
      name: [name, Validators.required],
      price: [price, Validators.required],
      description: [description, Validators.required],

    });
  }

}
