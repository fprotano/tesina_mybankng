
import { Component, OnInit } from '@angular/core';
import { Superclasse } from 'src/superclasse';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-visualizza-informazioni',
  templateUrl: './visualizza-informazioni.component.html',
  styleUrls: ['./visualizza-informazioni.component.css']
})
export class VisualizzaInformazioniComponent extends Superclasse implements OnInit {

  constructor(private staffservice:StaffService,router: Router, accountService: AccountService) {
    super(router, staffservice, accountService);
  }

  ngOnInit() {
    this.account= this.accountService.getLoggedUser();
  }

}