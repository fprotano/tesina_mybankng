import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent extends Superclasse implements OnInit {
  payment: Payment;
  constructor(private staffservice:StaffService,router: Router, accountService: AccountService) {
	super(router, staffservice, accountService);
 }

  ngOnInit() {
    this.payment = this.accountService.getPayment();
  }

  pay(){
    this.accountService.pay(this.payment, this.callbackPaymnetOnSuccess.bind(this), this.callbackPaymnetOnFailure.bind(this));
  }

  callbackPaymnetOnSuccess(data: any): void {

    console.log('nel callbackPaymnetOnSuccess del makePayment > ' + JSON.stringify(data));
    this.payment = data;

    var myform = document.getElementById('payment');

    myform.action = this.payment.urlNotify;
    myform.email.value = this.payment.email;
    myform.amount.value = this.payment.amount;
    myform.customCode.value = this.payment.customCode;
    myform.urlSuccess.value = this.payment.urlSuccess;
    myform.urlUnDo.value = this.payment.urlUndo;
    myform.urlNotify.value = this.payment.urlNotify;

   myform.submit();
  }

  callbackPaymnetOnFailure(data: any): any {
    console.log(data);
  }

}
