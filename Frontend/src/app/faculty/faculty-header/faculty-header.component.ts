import { Component,Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-faculty-header',
  templateUrl: './faculty-header.component.html',
  styleUrls: ['./faculty-header.component.css']
})


export class FacultyHeaderComponent {

  @Output() searchcriteria = new EventEmitter<String>();


  search() {
      // this.searchcriteria.emit(this.searchTerm)
  }
}
