import { User } from './../Models/UserModel';
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers ,RequestOptions} from '@angular/http';
import 'rxjs/Rx';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ErrorService } from 'app/error/error.service';



@Injectable()
export class AuthService {

  constructor(private http:Http,private ErService: ErrorService) { }

register(user: User) {
  const body = JSON.stringify(user);

 const headers = new Headers({ 'Content-Type': 'application/json' });



return this.http.post('http://localhost:3000/users/register', body, { headers : headers})
.map( (response: Response) => response.json())
.catch((error: Response) => {
this.ErService.getError(error.json());
  return Observable.throw(error.json());
}
  )
}

 login(user: User) {
    const body = JSON.stringify(user);
    // let userUrl='http://localhost:3000/users/register';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/users/login', body , options)
                    .map((response: Response) => response.json())
                    .catch((error: Response) => {
                     this.ErService.getError(error.json());
                      return Observable.throw(error.json());
                    });
  }
logOut(){
  localStorage.clear();
}

isLoggedIn(){
  return localStorage.getItem('token')!==null;
}


//  private extractData(res: Response) {
//     let body = res.json();
//     return body.data || { };
//   }
//   private handleError (error: Response | any) {
//     // In a real world app, you might use a remote logging infrastructure
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body = error.json() || '';
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Observable.throw(errMsg);
//   }


}
