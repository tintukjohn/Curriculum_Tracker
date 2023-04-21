import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent {

  constructor(private router:Router,private api:ApiService,
    private fb:FormBuilder,private route:ActivatedRoute){}

  responseForm = this.fb.group(
    {
      Comment: ['', Validators.required],

      file: ['', Validators.required]
    })


  onFileSelect(event: any){

  }

  onSubmit(){

  }

}
