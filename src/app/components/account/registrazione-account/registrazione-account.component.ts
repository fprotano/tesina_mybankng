import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';

@Component({
	selector: 'app-registrazione-account',
	templateUrl: './registrazione-account.component.html',
	styleUrls: ['./registrazione-account.component.css']
})
export class RegistrazioneAccountComponent extends Superclasse implements OnInit {



	constructor(private staffservice:StaffService,router: Router, accountService: AccountService,) {
	super(router, staffservice, accountService);
 }

	ngOnInit() {
	}


	submitAccount() {
		this.accountService.registrazione(this.account, this.submitSuccess.bind(this), this.submitFailure.bind(this));
	}

	submitSuccess(data: any) {
		this.account = data;
		this.accountService.setLoggedUser(this.account);
		this.router.navigate(["/home"]);
	}


	submitFailure(err: String, err_code: String) {
		alert("Errore , email gia' esistente");
	}
//	reset(form: NgForm) {
//		this.active = null;
//		form.reset();
//	}
}
