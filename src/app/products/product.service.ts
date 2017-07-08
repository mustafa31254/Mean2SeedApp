import { Observable } from 'rxjs/Observable';
import { Injectable,Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Product } from 'app/Models/ProductModel';
import 'rxjs/Rx';
// import 'rxjs/operators/map';


import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ErrorService } from 'app/error/error.service';

@Injectable()
export class ProductService {
products: Product[]=[];
  constructor(private http: Http, private ErS: ErrorService) { }


getProducts(){
  const headers = new Headers({ 'Content-Type': 'application/json' });
  return this.http.get('http://localhost:3000/products', { headers : headers})
  .map((response: Response) => response.json())
  .catch( (error: any) =>
  {

    this.ErS.getError(error.json());
    return Observable.throw(error);
  })
}
getallProducts(){
  this.getProducts().subscribe(data=>{
    this.products=data.products;


})
}


getProduct(id:string){
const headers = new Headers({ 'Content-Type': 'application/json' });
  return this.http.get('http://localhost:3000/products/'+id, { headers : headers})
  .map((response: Response) => response.json())
  .catch( (error: any) =>
  {

    this.ErS.getError(error.json());
    return Observable.throw(error);
  })



}
addProduct(product:Product){

  const body= JSON.stringify(product);

  const headers = new Headers({ 'Content-Type': 'application/json' });
return this.http.post('http://localhost:3000/products', body, { headers : headers})
.map( (response: Response) => response.json())

.catch((error: Response) => {
this.ErS.getError(error.json());
  return Observable.throw(error || 'Server error');
}
  );
}
deleteProduct(){

}
}
