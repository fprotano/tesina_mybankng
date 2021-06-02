import { Component, OnInit } from '@angular/core';
import { HelpCenterThread } from 'src/app/models/help-center-thread';
import { Superclasse } from 'src/superclasse';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Router } from '@angular/router';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent extends Superclasse implements OnInit {


  // tslint:disable-next-line: new-parens
  threads: Array<HelpCenterThread> = new Array();
  constructor(private staffservice:StaffService,router: Router, accountService: AccountService, protected helpcenterservice : HelpCenterService) {
	super(router, staffservice, accountService);
 }

  ngOnInit() {
    this.helpcenterservice.findThreads(this.findSuccess.bind(this), this.findFailure.bind(this));
  }


  findSuccess(data: any) {
		this.threads = data;
	}


	findFailure(err: String, err_code: String) {
		alert("Errore , email gia' esistente");
	}
}
