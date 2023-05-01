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
  
  resform : any = new FormGroup ({
    'comments' : new FormControl(''),
    'doc' : new FormControl('')
  })
  

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
    
    

onvalueSubmit() {
    this.api.addRes(this.resform.value).subscribe(res => {
      console.log(res);
      if(res){
        alert('Response sent Successfully!')
        this.router.navigate(['/faculty-dashboard']);
      }
    })
    }
    

}
