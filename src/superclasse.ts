
import { Router } from '@angular/router';
import { Account } from './app/models/account';
import { HelpCenter } from './app/models/help-center';
import { Staff } from './app/models/staff';
import { AccountService } from './app/services/account/account.service';
import { StaffService } from './app/services/staff/staff.service';
import { HelpCenterThread } from './app/models/help-center-thread';
import { HelpCenterService } from './app/services/helpCenter/help-center.service';

export class Superclasse {

  
  staffRegistrato: Staff = new Staff();
  staff: Staff = new Staff();
  logged: boolean = true;
  accountRegistrato: Account = new Account();
  account: Account = this.accountService.getLoggedUser();
  helpCenter: HelpCenter = new HelpCenter();
  helpCenterThread: HelpCenterThread = new HelpCenterThread();
  // loading : Boolean = true;
  // loadedSuperclass : Boolean = true;
  constructor(protected router: Router, protected staffService: StaffService,
    protected accountService: AccountService, protected helpCenterService: HelpCenterService) {
    // this.user=userservice.getLoggedUser();

  }
  logout(): void {
    
    window.localStorage.clear();
    window.location.replace('/login-account');

  }

  logoutStaff(): void {
    this.staff = new Staff();
    this.staffService.setLoggedUser(this.staff);
    this.router.navigate(['/login']);

  }
  changeLogged(): void {
    if (this.logged) {
      this.logged = false;
    } else {
      this.logged = true;
    }
  }


}
