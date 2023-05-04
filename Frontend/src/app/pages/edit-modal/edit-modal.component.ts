import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit{

  editRes : any = new FormGroup ({
    'comments' : new FormControl(''),
    'doc' : new FormControl('')
  })


  constructor(private apiService: ApiService, private route :Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getCurrentdata(this.router.snapshot.params['id']).subscribe((result =>{
      this.editRes = new FormGroup({
        'comments' : new FormControl((result as any).comments),
        'doc': new FormControl((result as any).doc)
        
      })
    }))
  }
  


 onUpdate(){
    this.apiService.updateResponse(this.editRes.value, this.router.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
      if(result){
        alert('Edited Curriculum Successfully')
        this.route.navigate(['/submission'])
      }
    })
  }

  onFileSelect(event:any){

  }
}
