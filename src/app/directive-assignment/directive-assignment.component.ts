import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styles: [`
    .white-text { 
      color : white;
    }
    `]
})
export class DirectiveAssignmentComponent implements OnInit {

  showText : boolean = false;

  buttonText : string = 'Display Details'

  messages = [];

  rowCount = 0;

  onButtonClicked(){
    // update history list
    this.rowCount = this.rowCount+1;
    this.messages.push(new Date());
    
    // show text and change button label
    this.showText = !this.showText;
    if (this.showText){
      this.buttonText = 'Hide Details';
    } else {
      this.buttonText = 'Display Details';
    }
  }

  getBackgroundColor(){
    if (this.rowCount >= 5) {
      return 'blue';
    } else {
      return 'white'
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
