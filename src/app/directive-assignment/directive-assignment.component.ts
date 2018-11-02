import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent implements OnInit {

  showText : boolean = false;

  buttonText : string = 'Display Details'

  messages = [];

  rowCount = 0;

  onButtonClicked(){
    // update history list
    this.rowCount = this.rowCount+1;
    this.messages.push('New Message'+this.rowCount);
    
    // show text and change button label
    this.showText = !this.showText;
    if (this.showText){
      this.buttonText = 'Hide Details';
    } else {
      this.buttonText = 'Display Details';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
