import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  message : string = '';
  isProcess : boolean = false ;
  className = 'd-none';
  
  signup = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    email:new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(8)]),
    // passwordConfirm:new FormControl('',[Validators.required, Validators.minLength(8)])
  });

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
    
  }
  get register():any{
    return this.signup.controls;
  }

  onSubmit(){
    this.isProcess = true;
    this.apiService.signup(this.signup.value).subscribe(res => {
      console.log(res)
      if(res.success){
        this.isProcess = false;
        this.message = "Account Has Been Created";
        this.className = 'alert alert-success';
      }else{
        this.isProcess = false;
        this.message = res.message;
        this.className = 'alert alert-danger';
      }
    },err =>{
      this.isProcess = false;
        this.message = "Server error !!";
        this.className = 'alert alert-danger';
    })
  }

}
