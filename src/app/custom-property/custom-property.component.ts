import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-property',
  templateUrl: './custom-property.component.html',
  styleUrls: ['./custom-property.component.css']
})
export class CustomPropertyComponent implements OnInit {

  @Input('customProperty') element = { type : 'empty' , name : 'empty', content : 'empty'};

  constructor() { }

  ngOnInit() {
  }

}
