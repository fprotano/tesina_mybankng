import { Component, OnInit } from '@angular/core';
import { HelpCenterThread } from 'src/app/models/help-center-thread';
import { Superclasse } from 'src/superclasse';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Router } from '@angular/router';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
import { HelpCenter } from 'src/app/models/help-center';

@Component({
	selector: 'app-help-center',
	templateUrl: './help-center.component.html',
	styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent extends Superclasse implements OnInit {


	// tslint:disable-next-line: new-parens
	threads: Array<HelpCenterThread> = new Array();
	helpcenters: HelpCenter[] = new Array<HelpCenter>();

	constructor(private staffservice: StaffService, router: Router, accountService: AccountService, protected helpcenterservice: HelpCenterService) {
		super(router, staffservice, accountService);
	}

	ngOnInit() {
		this.helpcenterservice.findThreads(this.account.id, this.findSuccess.bind(this), this.findFailure.bind(this));
		this.account = this.accountService.getLoggedUser();
		this.findAccountId();
	}



	findSuccess(data: any) {
		console.log("AAAAAAAAA   " + data);
		this.threads = data;
	}


	findFailure(err: String, err_code: String) {
		alert("Errore , email gia' esistente");
	}

	Insert() {
		this.helpcenterservice.insert(this.helpCenter, this.submitSuccess.bind(this), this.submitFailure.bind(this), this.account.id);
	}

	submitSuccess(data: any) {
		this.helpCenter = data;
	}

	submitFailure(err: String, err_code: String) {
		alert("Errore");
	}

	findAccountId() {
		this.helpcenterservice.findAccountId(this.success.bind(this), this.failure.bind(this), this.account.id);
	}

	success(data: any) {
		this.helpcenters = data;
	}

	failure(err: String, err_code: String) {
		alert("Non trovato");

	}
}
