import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.css']
})
export class ApprovedListComponent {
  constructor(private apiService: ApiService, private route: Router, private dialog: MatDialog) { }
  requirements: any = []
  filteredRequirements: any = [];
  searchTerm!: string;
  approvedlList: any = []

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.apiService.getRequirementsList().subscribe(res => {
      //console.log('incoming data', res)
      this.requirements = res;
      this.filteredRequirements = res;
      this.approvedlList = res;
//       if(this.approvedlList.status){
// this.requirements = res;
//       }
    })
  }

  download(id: any){

  }
  search() {
    this.filteredRequirements = this.requirements.filter((requirement: { area: string; name: string; category: string; inst: string; }) => {
      
      return (
        requirement.area.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        requirement.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        requirement.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        requirement.inst.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    });
  }

  openDialog(){
    this.dialog.open(PopUpComponent);
  }

  logout(){
    
  }

}
