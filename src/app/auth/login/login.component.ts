import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { User } from './../../Models/UserModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private fb:FormBuilder,private AS:AuthService ) { }

  ngOnInit() {

this.createLoginForm()
  }

createLoginForm(){
  this.loginForm=this.fb.group({
  email:['',Validators.required],
  password:['',Validators.required]
})
}
onSubmit(){
console.log(this.loginForm.get('email').value);
 const user= new User(this.loginForm.get('email').value,this.loginForm.get('password').value );

  this.AS.login(user).subscribe(data=>{
    localStorage.setItem('token',data.token);
    localStorage.setItem('userId',data.userId);

  },error=>console.error(error))
this.loginForm.reset();

}


}
