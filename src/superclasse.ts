
import { Router } from '@angular/router';
import { Account } from './app/models/account';
import { Staff } from './app/models/staff';
import { AccountService } from './app/services/account/account.service';
import { StaffService } from './app/services/staff/staff.service';

export class Superclasse {
	
     staffRegistrato: Staff = new Staff();
     staff: Staff = new Staff();  
     logged:boolean = false;
     account: Account= new Account();
    // loading : Boolean = true;
    // loadedSuperclass : Boolean = true;
    constructor(protected router:Router, protected staffService: StaffService, protected accountService: AccountService){
        // this.user=userservice.getLoggedUser();
       
    }
    logout(): void {
    //  this.user=new User();
    // this.userservice.setLoggedUser(this.user);
    // this.userservice.changeLoaded();
    // this.router.navigate(['/']);

  }

  logoutStaff(): void {
    this.staff=new Staff();
    this.staffService.setLoggedUser(this.staff);
    this.router.navigate(['/login']);

  }
 
  
}
