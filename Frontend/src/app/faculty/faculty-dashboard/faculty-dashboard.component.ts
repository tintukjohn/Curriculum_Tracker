import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
import { AuthService } from '../../auth-service.service'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {


  // user = {
  //   username: '',
  //   id: ''
  // }

  // constructor(private apiService: ApiService, private route: Router, private dialog: MatDialog, private authService: AuthService) { }

  // requirements: any = []
  // filteredRequirements: any = [];
  // searchTerm!: string;
  // response: any = []
  // responseSubmitted: Boolean = false
  // id: any

  // ngOnInit(): void {
  //   this.getData()
  //   this.authService.userInfo.subscribe(value => {
  //     if (value) {
  //       this.user.id = value.userid;
  //       this.user.username = value.username
  //     }
  //   })
  // }

  // getSingleDetails(id: any) {
  //   this.apiService.getFullList(id).subscribe(res => {
  //     console.log('incoming data', res)
  //     this.requirements = res;
  //     this.filteredRequirements = res;
  //     this.id = this.requirements._id
  //   })
  // }


  // getData() {
  //   this.apiService.getRequirementsList().subscribe(res => {
  //     console.log('incoming data', res)
  //     this.requirements = res;
  //     this.filteredRequirements = res;
  //     this.id = this.requirements._id
  //   })
  // }

  // search() {
  //   this.filteredRequirements = this.requirements.filter((requirement: { area: string; name: string; category: string; inst: string; }) => {
  //     return (
  //       requirement.area.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //       requirement.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //       requirement.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //       requirement.inst.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
  //   });
  // }

  // openDialog() {
  //   this.dialog.open(PopUpComponent);
  // }


    user = {
    username: '',
    id: ''
  }

  show : boolean

  title = 'Faculty-Dashboard'
  displayedColumns: string[] = ['index', '_id', 'name', 'area', 'inst', 'category', 'duration', 'status', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService, private route: Router, private dialog: MatDialog, private authService: AuthService) { 
    this.show = false;
  }

  requirements: any = []
  req_id: any 

  ngOnInit(): void {
    this.getData()
    this.authService.userInfo.subscribe(value => {
          if (value) {
            this.user.id = value.userid;
            this.user.username = value.username
          }
        })
  }

  openDioalog() {
    this.dialog.open(FacultyDashboardComponent, {
      width: '30%'
    })
  }

  getData() {
    this.apiService.getRequirementsList().subscribe({
      next: (res) => {
        this.requirements = res
        this.req_id = this.requirements._id
        this.dataSource = new MatTableDataSource(this.requirements);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error: (err) => {
        alert("Error while fetching the requirements!!")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClicked(row: any){
    const id= row._id
    this.route.navigate(['/response-form',id])
  }
}
