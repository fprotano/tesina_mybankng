import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Superclasse implements OnInit {

 	constructor(private staffservice:StaffService,router: Router, accountService: AccountService) {
	super(router, staffservice, accountService);
 }

  ngOnInit() {
  }

}
