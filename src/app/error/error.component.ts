import { Error } from './../Models/ErrorModel';
import { ErrorService } from './error.service';
import { async } from '@angular/core/testing';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component ({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
 error: Error;
 show = "none";
  constructor(private ERService: ErrorService) { }
onErrorHandled(){
  this.show='none';
}

  ngOnInit() {
this.ERService.errorEvent.subscribe(
  (error: Error) =>{
    this.error = error;
    this.show= "block";
  }
  )
}

}
