import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.css']
})
export class EvenOddComponent implements OnInit {

  oddNumbers = [1 , 3 , 5 ];
  evenNumbers = [2 , 4 , 6 ];

  onlyOdd = true;

  constructor() { }

  ngOnInit() {
  }

}
