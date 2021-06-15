import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  payment: Payment = new Payment();
  @ViewChild('payment', {static: false}) myform: ElementRef<HTMLFormElement>;
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

    this.myform.nativeElement.action = this.payment.urlNotify;
    this.myform.nativeElement.email.value = this.payment.email;
    this.myform.nativeElement.amount.value = this.payment.amount;
    this.myform.nativeElement.transactionId.value = this.payment.transaction_id;
    this.myform.nativeElement.customCode.value = this.payment.customCode;
    this.myform.nativeElement.urlSuccess.value = this.payment.urlSuccess;
    this.myform.nativeElement.urlUnDo.value = this.payment.urlUndo;
    this.myform.nativeElement.urlNotify.value = this.payment.urlNotify;

   this.myform.nativeElement.submit();
  }

  callbackPaymnetOnFailure(data: any): any {
    console.log(data);
  }

}
