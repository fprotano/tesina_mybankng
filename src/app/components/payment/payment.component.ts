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
    this.accountService.fillPaymentWithTransactionId(this.payment, this.callbackSuccess.bind(this), this.callbackFailure.bind(this));

  }
  callbackSuccess(data:any){
    this.payment=data;
    this.paySend();
  }
  callbackFailure(data:any){
    alert(data);
  }
  
  paySend(){
    console.log(this.payment)
    this.accountService.pay(this.payment, this.callbackPaymnetOnSuccess.bind(this), this.callbackPaymnetOnFailure.bind(this));
  }
  undo(){
    this.paySend();
    window.localStorage.removeItem("payment");
    
  }

  callbackPaymnetOnSuccess(data: any): void {

    this.accountService.sendPaymentData(this.payment, this.callbackPaymentDataSuccess.bind(this), this.callbackPaymentDataFailure.bind(this));
  }

  callbackPaymnetOnFailure(data: any): any {
    alert(data);
  }
  callbackPaymentDataSuccess(data: any): any {
    window.localStorage.setItem("urlSuccess", this.payment.urlSuccess)
    this.router.navigate(["/pagamentoeseguito"]);
  }
  callbackPaymentDataFailure(data: any): any {
    alert(data);
  }

}
