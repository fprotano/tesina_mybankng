
import { Router } from '@angular/router';
import { Account } from './app/models/account';
import { HelpCenter } from './app/models/help-center';
import { Staff } from './app/models/staff';
import { AccountService } from './app/services/account/account.service';
import { StaffService } from './app/services/staff/staff.service';

export class Superclasse {
	
     staffRegistrato: Staff = new Staff();
     staff: Staff = new Staff();  
     logged:boolean = false;
     account: Account= new Account();
     helpCenter: HelpCenter= new HelpCenter();
    // loading : Boolean = true;
    // loadedSuperclass : Boolean = true;
    constructor(protected router:Router, protected staffService: StaffService, protected accountService: AccountService){
        // this.user=userservice.getLoggedUser();
       
    }
    logout(): void {
     this.account=new Account();
    this.accountService.setLoggedUser(this.account);
    this.router.navigate(['/login-account']);

  }

  logoutStaff(): void {
    this.staff=new Staff();
    this.staffService.setLoggedUser(this.staff);
    this.router.navigate(['/login']);

  }
 
  
}
