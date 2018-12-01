import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-account-example',
  templateUrl: './account-example.component.html',
  styleUrls: ['./account-example.component.css'],
  providers: [AccountsService]
})
export class AccountExampleComponent implements OnInit{
  accounts: {name: string, status : string}[] = [];

  constructor( private accountsService : AccountsService) {}

  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
}
