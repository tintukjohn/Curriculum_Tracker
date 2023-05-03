import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  


  apiUrl: String = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  // All things Requirement
  getRequirementsList() {
    return this.http.get(`${this.apiUrl}/requirementlist`)
  }

  addReq(data:any){
    return this.http.post(`${this.apiUrl}/require`, data)
  }

  updateReq(id:any, data: any) {
    return this.http.put(`${this.apiUrl}/require/${data}`, id)
  }
 
  deleteRequire(id:any){
    return this.http.delete(`${this.apiUrl}/require/${id}`)
  }

  // All things Responses

  getResponsesList() {
    return this.http.get(`${this.apiUrl}/responselist`)
  }

  addRes(data:any){
    return this.http.post(`${this.apiUrl}/response`, data)
  }

  deleteResponse(id:any){
    return this.http.delete(`${this.apiUrl}/response/${id}`)
  }

  updateResponse(id: any, data:any){
    return this.http.put(`${this.apiUrl}/response/${data}`, id)
  }

  getCurrentdata(id:any){
    return this.http.get(`${this.apiUrl}/response/${id}`)
  }
  //register

  signup(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, data) 
  }
}


