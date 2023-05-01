import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  


  apiUrl: String = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getRequirementsList() {
    return this.http.get(`${this.apiUrl}/requirementlist`)
  }

  addReq(data:any){
    return this.http.post(`${this.apiUrl}/require`, data)
  }

  getResponsesList() {
    return this.http.get(`${this.apiUrl}/responselist`)
  }

  addRes(data:any){
    return this.http.post(`${this.apiUrl}/response`, data)
  }
  
}


