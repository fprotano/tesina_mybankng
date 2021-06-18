import { Component, OnInit } from '@angular/core';
import { Superclasse } from 'src/superclasse';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { Payment } from 'src/app/models/payment';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';

@Component({
  selector: 'app-pagamento-eseguito',
  templateUrl: './pagamento-eseguito.component.html',
  styleUrls: ['./pagamento-eseguito.component.css']
})
export class PagamentoEseguitoComponent extends Superclasse implements OnInit {

  urlSuccess: string = "";
  constructor(private staffservice: StaffService, router: Router, accountService: AccountService,
    helpcenterservice: HelpCenterService, private route: ActivatedRoute) {
    super(router, staffservice, accountService, helpcenterservice);
  }

  ngOnInit() {
    this.urlSuccess = window.localStorage.getItem("urlSuccess");
    console.log(this.urlSuccess);
    window.localStorage.removeItem("payment");
  }

}
