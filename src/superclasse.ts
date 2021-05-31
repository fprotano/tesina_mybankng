
import { Router } from '@angular/router';
import { Staff } from './app/models/staff';
import { StaffService } from './app/services/staff/staff.service';

export class Superclasse {

  staff: Staff = new Staff();  
     logged:boolean = false;
    // loading : Boolean = true;
    // loadedSuperclass : Boolean = true;
    constructor(protected router:Router, protected staffService:StaffService){
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
    this.router.navigate(['/register']);

  }
 
  
}
