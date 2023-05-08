import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private apiService: ApiService, private route: Router) { }
  
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
  
 

}
