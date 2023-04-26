import { Component , OnInit} from '@angular/core';
import { FormBuilder,FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent implements OnInit{
  
  
  

  constructor(private router:Router,private api:ApiService,
             private fb:FormBuilder,private route:ActivatedRoute,
             private http: HttpClient){}

  ngOnInit(): void {
      
    }


  responseForm = this.fb.group(
    {
      Comment: ['', Validators.required],

      file: ['', Validators.required]
    })
  
   

  onFileSelect(event:any){

}
   
    
    

  onSubmit() {
    
    }
    

}
