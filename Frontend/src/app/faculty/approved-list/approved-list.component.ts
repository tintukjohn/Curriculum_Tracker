import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.css']
})
export class ApprovedListComponent {
  constructor(private apiService: ApiService, private route: Router, private dialog: MatDialog, private fileUploadService: FileUploadService) { }

  filteredApprovedlList: any = [];
  searchTerm!: string;
  approvedlList: any = []
  file: any = null// Variable to store file
  downloadedList: any = []
  downloadKey: any = null

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.apiService.getRequirementsList().subscribe(res => {
      this.approvedlList = res;
      this.filteredApprovedlList = res;
    })
  }

  download(id: any) {
    console.log('id is: ', id)
    this.apiService.getOneRes(id).subscribe(response => {
      this.downloadedList = response
      this.downloadKey = this.downloadedList.fileDetails.key
      console.log('Key is: ', this.downloadKey)
    })

    this.fileUploadService.download(this.downloadKey).subscribe(res => {
      this.file = res;
    })
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
