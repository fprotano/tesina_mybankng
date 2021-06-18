import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { Superclasse } from 'src/superclasse';
import { StaffService } from 'src/app/services/staff/staff.service';
import { AccountService } from 'src/app/services/account/account.service';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';

@Component({
  selector: 'app-navigazione',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent extends Superclasse implements OnInit {


  constructor(router: Router, staffService: StaffService, accountService: AccountService, helpcenterservice: HelpCenterService) {
    super(router, staffService, accountService, helpcenterservice);
  }

  ngOnInit() {
    this.account = this.accountService.getLoggedUser();
  }

  findHelpCenter() {
    this.helpCenterService.findHelpCenter(this.helpCenter, this.success.bind(this), this.failure.bind(this), this.account.id);
  }

  success(data: any) {
    this.helpCenter = data;
    this.helpCenterService.setHelpCenter(this.helpCenter);
    this.router.navigate(["/helpCenterThread"]);
  }

  failure() {
    this.router.navigate(["/help-center"]);
  }

}
