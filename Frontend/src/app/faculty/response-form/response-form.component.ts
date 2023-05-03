import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent implements OnInit {

  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: any = null// Variable to store file
  req_id: any

  resform: any = new FormGroup({
  //  'req_id': new FormControl(''),
    'comments': new FormControl(''),
    'doc': new FormControl('')
  })


  constructor(private router: Router, private api: ApiService,
    private fb: FormBuilder, private route: ActivatedRoute,
    private http: HttpClient, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.req_id = this.route.snapshot.paramMap.get('id');
  }


  // responseForm = this.fb.group(
  //   {
  //     Comment: ['', Validators.required]

  //     doc: ['', Validators.required]
  //   })



  onFileSelect(event: any) {
    this.file = event.target.files[0];
  }

  onValueSubmit() {

    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {

          // Short link via api response
          this.shortLink = event.link;

          this.loading = false; // Flag variable

          this.resform.addControl('fileDetails', new FormControl('', Validators.required));
          this.resform.patchValue({
            fileDetails: event
         });

         this.resform.addControl('req_id', new FormControl('', Validators.required));
         this.resform.patchValue({
          req_id: this.req_id
        });

        this.resform.addControl('approve', new FormControl('', Validators.required));
        this.resform.patchValue({
          approve: false
       });


        this.api.addRes(this.resform.value).subscribe(res => {
            console.log(res);
            if (res) {
              alert('Response sent Successfully!')
               this.router.navigate(['/faculty-dashboard']);
            }
          })


        }
      }
    );




  }


}
