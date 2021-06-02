import { Component, OnInit } from '@angular/core';
import { Superclasse } from 'src/superclasse';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { ExternalTransaction } from 'src/app/models/external-transaction';
import { ExternalTransactionService } from 'src/app/services/externalTransaction/external-transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-external-transactions',
  templateUrl: './list-external-transactions.component.html',
  styleUrls: ['./list-external-transactions.component.css']
})
export class ListExternalTransactionsComponent extends Superclasse implements OnInit {

  transactions: Array<ExternalTransaction> = new Array();

  constructor(private staffservice:StaffService,router: Router, accountService: AccountService, protected externaltransactionservice : ExternalTransactionService) {
	  super(router, staffservice, accountService);
 }

  ngOnInit() {
    this.staff=this.staffService.getLoggedUser();
    this.externaltransactionservice.findTransactions(this.staff.id,this.findSuccess.bind(this), this.findFailure.bind(this));
  }

  findSuccess(data: any) {
    console.log(data);
		this.transactions = data;
	}


	findFailure(err: String, err_code: String) {
		alert("Errore durante il caricamento delle transazioni");
	}

}
