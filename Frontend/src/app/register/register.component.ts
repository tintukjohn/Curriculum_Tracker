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
    this.apiService.signup(this.signup.value).subscribe(res => {
      console.log(res)
      if(res){
        alert('Requirement Sent Successfully')
        this.router.navigate(['/faculty'])
      }
    })
  }

}
