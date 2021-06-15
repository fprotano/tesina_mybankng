import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  payment: Payment = new Payment();
 	constructor(private staffservice:StaffService,router: Router, accountService: AccountService,private route: ActivatedRoute) {
  super(router, staffservice, accountService);
  
 }

  ngOnInit() {
  this.account= this.accountService.getLoggedUser();
  this.payment= this.accountService.getPayment();

  if(this.payment.email!=null){
    this.router.navigate(["/payment"]);
  }
  }

  
  
}
