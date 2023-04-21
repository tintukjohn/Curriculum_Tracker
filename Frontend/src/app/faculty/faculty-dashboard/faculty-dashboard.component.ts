import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent {

  constructor(private apiService: ApiService, private route: Router) { }
  requirements: any = []

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.apiService.getRequirementsList().subscribe(res => {
      //console.log('incoming data', res)
      this.requirements = res
    })
  }

  download(id: any){

  }
}
