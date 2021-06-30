
import { Component, OnInit } from '@angular/core';
import { Superclasse } from 'src/superclasse';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-visualizza-informazioni',
  templateUrl: './visualizza-informazioni.component.html',
  styleUrls: ['./visualizza-informazioni.component.css']
})
export class VisualizzaInformazioniComponent extends Superclasse implements OnInit {

  flag: Boolean = false;
  constructor(private staffservice:StaffService,router: Router, accountService: AccountService, helpcenterservice: HelpCenterService) {
    super(router, staffservice, accountService,helpcenterservice);
  }
  payment: Payment = this.accountService.getPayment();
  ngOnInit() {
    this.account= this.accountService.getLoggedUser();
  }


}