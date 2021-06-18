import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
import { Superclasse } from 'src/superclasse';
import { Payment } from 'src/app/models/payment';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-payment',
  templateUrl: './transazione-esterna.component.html',
  styleUrls: ['./transazione-esterna.component.css']
})
export class TransazioneEsternaComponent extends Superclasse implements OnInit {
  payment: Payment = new Payment();
  accountRicevente: Account = new Account();
  @ViewChild('transazioneEsternaForm', { static: false }) myform: ElementRef<HTMLFormElement>;
  constructor(private staffservice: StaffService, router: Router, accountService: AccountService, helpcenterService: HelpCenterService){
    super(router, staffservice, accountService, helpcenterService);
  }

  ngOnInit() {
    this.payment = this.accountService.getPayment();
    this.accountService.findAccountByEmail(this.payment.email, this.callbackFindOnSuccess.bind(this), this.callbackFindOnFailure.bind(this));
    // this.payment.account = this.accountService.getLoggedUser();
    // console.log(this.payment);
  }

  externalPay() {
    this.accountService.pay(this.payment, this.callbackPaymnetOnSuccess.bind(this), this.callbackPaymnetOnFailure.bind(this));
  }

  // intoccabile
  callbackPaymnetOnSuccess(data: any): void {
    this.accountService.sendPaymentData(this.payment, this.callbackPaymentDataSuccess.bind(this), this.callbackPaymentDataFailure.bind(this));
  }

  callbackPaymnetOnFailure(data: any): any {
    console.log(data);
  }
  callbackPaymentDataSuccess(data: any): any {
    window.localStorage.setItem("urlSuccess", this.payment.urlSuccess)
    console.log("transazioneEsterna::: " + data);
    this.router.navigate(["/pagamentoeseguito"]);
  }
  callbackPaymentDataFailure(data: any): any {
    console.log(data);
  }

  callbackFindOnSuccess(data: any): void {
    this.accountRicevente = data;
  }

  callbackFindOnFailure(data: any): any {
    console.log(data);
  }

}
