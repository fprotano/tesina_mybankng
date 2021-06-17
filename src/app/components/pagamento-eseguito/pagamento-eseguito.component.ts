import { Component, OnInit } from '@angular/core';
import { Superclasse } from 'src/superclasse';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-pagamento-eseguito',
  templateUrl: './pagamento-eseguito.component.html',
  styleUrls: ['./pagamento-eseguito.component.css']
})
export class PagamentoEseguitoComponent extends Superclasse implements OnInit {
  payment: Payment = null;
  constructor(private staffservice:StaffService,router: Router, accountService: AccountService,private route: ActivatedRoute) {
  super(router, staffservice, accountService);
  
 }

  ngOnInit() {
    this.accountService.setPayment(this.payment);
  }

}
