import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-custom-event',
  templateUrl: './custom-event.component.html',
  styleUrls: ['./custom-event.component.css']
})
export class CustomEventComponent implements OnInit {

   @Output() customEvent = new EventEmitter< {eventName : string, eventContent : string} >();

  constructor() { }

  ngOnInit() {
  }

  onFireEvent(){
    this.customEvent.emit(
      eventName = 'customEvent',
      eventContent = 'custom vent content'
    }
    )
  }

}
