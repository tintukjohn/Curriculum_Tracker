import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent {
  

  constructor(private apiService: ApiService, private route: Router, private sanitizer: DomSanitizer, private http: HttpClient) { }
 
 


  ngOnInit(){
   
  }

 
 
  
  }

  

 


