import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // API url
  baseApiUrl = "https://file.io"
  //baseApiUrl = "C:\Users\tintu\Desktop\Angular\angular-file-upload\src\uploads"


  constructor(private http: HttpClient) { }

  // Returns an observable
  upload(file: any): Observable<any> {

    // Create form data
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData)
  }

  download(key: any) { 
    return this.http.get(this.baseApiUrl, key)
  }

  update(key: any) { 
    return this.http.patch(this.baseApiUrl, key)
  }

  remove(key: any){
    return this.http.delete(this.baseApiUrl, key)
  }

}
