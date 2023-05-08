import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
import { AuthService } from '../../auth-service.service'

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {


  user = {
    username: '',
    id: ''
  }

  constructor(private apiService: ApiService, private route: Router, private dialog: MatDialog, private authService: AuthService) { }

  requirements: any = []
  filteredRequirements: any = [];
  searchTerm!: string;
  response: any = []
  responseSubmitted: Boolean = false
  id: any 

  ngOnInit(): void {
    this.getData()
   // this.getResponse(this.id)
    this.authService.userInfo.subscribe(value => {
      if (value) {
        this.user.id = value.userid;
        this.user.username = value.username
      }
    })

  }

  getData() {
    this.apiService.getRequirementsList().subscribe(res => {
      // this.apiService.getFullList().subscribe(res => {
      console.log('incoming data', res)
      this.requirements = res;
      this.filteredRequirements = res;
      this.id = this.requirements._id
    })
  }

  // getResponse(id: any) {
  //   //const id = this.requirements._id
  //   console.log(id)
  //   this.apiService.getOneRes(id).subscribe(res => {
  //     //console.log('incoming data', res)
  //     this.response = res;
  //     if (this.response.responsed) { return false}
  //   })
  //   // this.route.navigate([/response-form/id])
  // }

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
