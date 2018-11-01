import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-assignment',
  templateUrl: './data-binding-assignment.component.html',
  styleUrls: ['./data-binding-assignment.component.css']
})
export class DataBindingAssignmentComponent implements OnInit {

  userName : string = "Ernie";

  constructor() { }

  ngOnInit() {
  }

  onResteButtonClicked(){
    this.userName = "";
  }

  onUpdateUserName(event : Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
