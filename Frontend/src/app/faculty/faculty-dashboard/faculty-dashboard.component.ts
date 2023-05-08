import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
import {AuthService} from'../../auth-service.service'

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent {


  user = {
    username:'',
    id:''
  }

  constructor(private apiService: ApiService, private route: Router, private dialog: MatDialog, private authService:AuthService ) { }
  requirements: any = []
  filteredRequirements: any = [];
  searchTerm!: string;

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.apiService.getRequirementsList().subscribe(res => {
      //console.log('incoming data', res)
      this.requirements = res;
      this.filteredRequirements = res;
    })
  }

  download(id: any) {

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

  openDialog() {
    this.dialog.open(PopUpComponent);
  }
}
