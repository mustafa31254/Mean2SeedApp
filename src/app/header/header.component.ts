import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

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
