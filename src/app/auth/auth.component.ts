import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private AS:AuthService) { }

  ngOnInit() {
  }
  // logOut(){
  //   this.AS.logOut();
  // }

}
