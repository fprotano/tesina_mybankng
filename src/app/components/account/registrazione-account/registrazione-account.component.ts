import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';

@Component({
	selector: 'app-registrazione-account',
	templateUrl: './registrazione-account.component.html',
	styleUrls: ['./registrazione-account.component.css']
})
export class RegistrazioneAccountComponent extends Superclasse implements OnInit {

	flag: string = "true";
	constructor(private staffservice:StaffService,router: Router, accountService: AccountService, helpCenterService: HelpCenterService) {
	super(router, staffservice, accountService, helpCenterService);
 }

	ngOnInit() {
		this.changeLogged();
	}


	submitAccount() {
		this.accountService.registrazione(this.accountRegistrato, this.submitSuccess.bind(this), this.submitFailure.bind(this));
	}

	submitSuccess(data: any) {
		this.accountRegistrato= data;
		this.accountService.setLoggedUser(this.accountRegistrato);
		window.localStorage.setItem("flag", this.flag);
		this.router.navigate(["/home"]);
	}


	submitFailure(err: String, err_code: String) {
		alert(err);
	}
//	reset(form: NgForm) {
//		this.active = null;
//		form.reset();
//	}
}
