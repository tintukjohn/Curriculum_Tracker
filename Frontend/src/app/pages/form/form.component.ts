import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

reqform : any = new FormGroup ({
  'name' : new FormControl(''),
  'area' : new FormControl(''),
  'inst' : new FormControl(''),
  'category' : new FormControl(''),
  'duration' : new FormControl('')
})


constructor(private apiService: ApiService, private router: Router){ }

ngOnInit(): void {
  
}
onSubmit(){
  this.apiService.addReq(this.reqform.value).subscribe(res => {
    console.log(res)
    if(res){
      alert('Requirement Sent Successfully')
      this.router.navigate(['/admindashboard'])
    }
  })
}
}
