import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Superclasse implements OnInit {
  payment: Payment;
 	constructor(private staffservice:StaffService,router: Router, accountService: AccountService) {
	super(router, staffservice, accountService);
 }

  ngOnInit() {
  this.account= this.accountService.getLoggedUser();
  this.accountService.fillPayment(this.account, this.fillSuccess.bind(this), this.fillFailure.bind(this));
  }

  fillSuccess(data:any){
      if(data!=undefined){
     this.payment=data;
     this.accountService.setPayment(this.payment);
     this.router.navigate(["/pagamento"]);
      } 
     } 
  fillFailure(err:String ,err_code :String){
    alert("errore login sbagliata");
  }
  
}
