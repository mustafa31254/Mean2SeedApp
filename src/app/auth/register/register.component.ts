import { AuthService } from './../auth.service';
import { User } from './../../Models/UserModel';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;


  constructor(private fb:FormBuilder,private Us:AuthService) { }

  ngOnInit() {
  
this.createForm()

// this.registerForm=this.fb.group({
//      email:['',Validators.required],
//      password:['',Validators.required]
  
// })
}

createForm(){
this.registerForm=this.fb.group({
     email:['',Validators.required],
     password:['',Validators.required]
  
  

})
}

onSubmit(){
  const user= new User(this.registerForm.get('email').value,this.registerForm.get('password').value );
  console.log(this.registerForm.get('email').value);
this.Us.register(user).subscribe(data=>console.log(data),
error=>console.log(error));
}

}
