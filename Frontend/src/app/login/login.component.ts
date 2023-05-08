import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import {AuthService} from'../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  signin = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(8)])
  })


 

  constructor(private authservice:AuthService){}

  ngOnInit(): void {
    
  }

  get login():any{
    return this.signin.controls
  }


 userLogin(){

  
  this.authservice.userLogin(this.signin)
  alert("user logged in successfully")

  if(this.signin.valid){

    console.log(this.signin.value)
    // send the object to database
  }else{
    
    // console.log("Form is not valid")

    // throw the error using toaster and with required  fields
    this.validateAllFormFileds(this.signin);
    alert("Your form is invalid")




  }
 }



private validateAllFormFileds(formGroup:FormGroup){
  Object.keys(formGroup.controls).forEach(field=>{
  const control = formGroup.get(field);
  if(control instanceof FormControl){
    control.markAsDirty({onlySelf:true});
  }else if(control instanceof FormGroup){
    this.validateAllFormFileds(control)
  }
  })

}
}


