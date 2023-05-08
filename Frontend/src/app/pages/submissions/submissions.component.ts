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

  responses: any = []
  approvedCurriculums: any[] = [];



  constructor(private apiService: ApiService, private route: Router, private sanitizer: DomSanitizer, private http: HttpClient, private modalService: NgbModal) { }



  ngOnInit() {
    this.getData()
    // approved curriculums
    const savedCurriculums = localStorage.getItem('approvedCurriculums');
    if (savedCurriculums) {
      this.approvedCurriculums = JSON.parse(savedCurriculums);
      this.filterApprovedResponses();
    }
  }

  getData() {
    this.apiService.getResponsesList().subscribe(res => {
      //console.log('incoming data', res)
      this.responses = res
      this.filterApprovedResponses();
    })
  }

  filterApprovedResponses() {
    this.responses = this.responses.filter((response: { _id: any; }) => {
      return !this.approvedCurriculums.some((curriculum) => {
        return response._id === curriculum._id;
      });
    });
  }

  delete(id: any) {
    this.apiService.deleteResponse(id).subscribe(res => {
      console.log('Response from deleteResponse():', res);
      if (res) {
        this.responses = this.responses.filter((response: any) => response.id !== id);
        console.log('Updated Responses array:', this.responses);
        alert('Response deleted successfully!');
        this.getData(); // Refresh the data from the server
      }
    })
  }

  approve(response: any) {
    const isAlreadyApproved = this.approvedCurriculums.some((curriculum) => curriculum._id === response._id);
    if (!isAlreadyApproved) {
      this.approvedCurriculums.push(response);
      localStorage.setItem('approvedCurriculums', JSON.stringify(this.approvedCurriculums));
      this.filterApprovedResponses();
      // this.responses = this.responses.filter((res: any) => res._id !== response._id);
    }
  }









}












