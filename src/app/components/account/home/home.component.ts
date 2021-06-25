import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';
import { Payment } from 'src/app/models/payment';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Superclasse implements OnInit {
  payment: Payment = new Payment();
  flag: string = window.localStorage.getItem("flag");
  constructor(private staffservice: StaffService, router: Router, accountService: AccountService,
    helpcenterservice: HelpCenterService, private route: ActivatedRoute) {
    super(router, staffservice, accountService, helpcenterservice);
  }

  ngOnInit() {
    if(this.flag==null){
      this.router.navigate(["/login-account"]);
    }
    this.account = this.accountService.getLoggedUser();
    console.log("AAAAAAAAAAAAAAAA" + JSON.stringify(this.account));
    if(this.accountService.getPayment()!=null){
    this.payment = this.accountService.getPayment();
    }
    if(this.flag=="true"){
      this.flag="false";
      window.localStorage.setItem("flag", this.flag);
      window.location.reload();
    }
    console.log(this.ngOnInit);
    
    if (this.payment.email != null) {
      console.log(JSON.stringify(this.payment));
      this.router.navigate(["/payment"]);
    }
  }



}
