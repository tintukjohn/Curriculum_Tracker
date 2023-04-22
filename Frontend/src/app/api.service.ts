import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  apiUrl: String = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getRequirementsList() {
    return this.http.get(`${this.apiUrl}/requirementlist`)
  }
}


