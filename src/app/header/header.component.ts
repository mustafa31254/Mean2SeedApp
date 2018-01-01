import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private As:AuthService) { }

   public isCollapsed = false;

  ngOnInit() {
  }
logOut(){
this.As.logOut();
}
isLoggedIn(){
 return this.As.isLoggedIn();
}
}
