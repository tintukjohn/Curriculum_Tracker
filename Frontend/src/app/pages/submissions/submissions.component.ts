import { Component, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../edit-modal/edit-modal.component';


@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent {
  
  responses : any = []


  constructor(private apiService: ApiService, private route: Router, private sanitizer: DomSanitizer, private http: HttpClient, private modalService: NgbModal) { }
 


  ngOnInit(){
    this.getData()
  }
  
  getData() {
    this.apiService.getResponsesList().subscribe(res => {
      //console.log('incoming data', res)
      this.responses = res
    })
  }
  
  }

  

 


