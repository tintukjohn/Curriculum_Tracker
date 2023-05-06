import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { FileUploadService } from '../file-upload.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.css']
})
export class ApprovedListComponent implements OnInit{

  constructor(private apiService: ApiService, private route: Router, private dialog: MatDialog, private fileUploadService: FileUploadService, private http: HttpClient, private sanitizer: DomSanitizer) { }

  filteredApprovedlList: any = [];
  searchTerm!: string;
  approvedlList: any = []
  file: any = null// Variable to store file
  downloadedList: any = []
  downloadKey: any = null
  name = 'Angular 15';
  fileUrl: SafeResourceUrl | undefined;
 

  ngOnInit() {
    this.getData()
   
  }
    


  getData() {
    this.apiService.getRequirementsList().subscribe(res => {
      this.approvedlList = res;
      this.filteredApprovedlList = res;
     
    })
  }

  // download(id: any) {
  //   console.log('id is: ', id)
  //   this.apiService.getOneRes(id).subscribe(response => {
  //     this.downloadedList = response
  //     this.downloadKey = this.downloadedList.fileDetails.key
  //     console.log('Key is: ', this.downloadKey)
  //   })

  //   this.fileUploadService.download(this.downloadKey).subscribe(res => {
  //     this.file = res;
  //   })
  // }



download(approvedlList:any) {
  const data = `Name: ${approvedlList.name}, Area: ${approvedlList.area}, Inst : ${approvedlList.inst}, Category: ${approvedlList.category}, Duration: ${approvedlList.duration}`;
  const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${approvedlList.name}.txt`);
  link.click();
  window.URL.revokeObjectURL(url);
}





  search() {
    this.filteredApprovedlList = this.approvedlList.filter((content: { area: string; name: string; category: string; inst: string; }) => {

      return (
        content.area.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        content.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        content.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        content.inst.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  openDialog() {
    this.dialog.open(PopUpComponent);
  }

 

  // logout(){}

}

