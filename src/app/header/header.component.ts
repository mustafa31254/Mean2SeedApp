import { Component, OnInit } from '@angular/core';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

   public isCollapsed = false;

  ngOnInit() {
  }

}
