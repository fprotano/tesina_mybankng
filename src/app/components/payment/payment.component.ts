import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';
import { Payment } from 'src/app/models/payment';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent extends Superclasse implements OnInit {
  payment: Payment = new Payment();
  @ViewChild('paymentForm', {static: false}) myform: ElementRef<HTMLFormElement>;
 	constructor(private staffservice:StaffService,router: Router, accountService: AccountService, helpcenterservice: HelpCenterService) {
	super(router, staffservice, accountService, helpcenterservice);
 }

  ngOnInit() {
    this.payment = this.accountService.getPayment();
    this.payment.account=this.accountService.getLoggedUser();
    console.log(this.payment);
  }

  pay(){
    this.accountService.pay(this.payment, this.callbackPaymnetOnSuccess.bind(this), this.callbackPaymnetOnFailure.bind(this));
  }
  undo(){
    window.localStorage.removeItem("payment");
    this.router.navigate(["/home"]);
  }

  callbackPaymnetOnSuccess(data: any): void {



    this.accountService.sendPaymentData(this.payment, this.callbackPaymentDataSuccess.bind(this), this.callbackPaymentDataFailure.bind(this));
  //   console.log('nel callbackPaymnetOnSuccess del makePayment > ' + JSON.stringify(data));
  //   this.payment = data;

  //   this.myform.nativeElement.action = this.payment.urlNotify;
  //   this.myform.nativeElement.email.value = this.payment.email;
  //   this.myform.nativeElement.amount.value = this.payment.amount;
  //   this.myform.nativeElement.transactionId.value = this.payment.transactionId;
  //   this.myform.nativeElement.customCode.value = this.payment.customCode;
  //   this.myform.nativeElement.urlSuccess.value = this.payment.urlSuccess;
  //   this.myform.nativeElement.urlUnDo.value = this.payment.urlUndo;
  //   this.myform.nativeElement.urlNotify.value = this.payment.urlNotify;
  //   console.log(this.payment);
  //  this.myform.nativeElement.submit();
  //  this.router.navigate[("/home")];
  }

  callbackPaymnetOnFailure(data: any): any {
    alert(data);
  }
  callbackPaymentDataSuccess(data: any): any {
    window.localStorage.setItem("urlSuccess", this.payment.urlSuccess)
    console.log("AAAAAAAAAAAAAAAAAAAA " + data);
    this.router.navigate(["/pagamentoeseguito"]);
  }
  callbackPaymentDataFailure(data: any): any {
    alert(data);
  }

}
