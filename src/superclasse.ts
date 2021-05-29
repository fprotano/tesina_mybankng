
import { Router } from '@angular/router';
import { Staff } from './app/models/staff';

export class Superclasse {

  staff: Staff = new Staff();  
    
    // loading : Boolean = true;
    // loadedSuperclass : Boolean = true;
    constructor(protected router:Router){
        // this.user=userservice.getLoggedUser();
       
    }
    logout(): void {
    //  this.user=new User();
    // this.userservice.setLoggedUser(this.user);
    // this.userservice.changeLoaded();
    // this.router.navigate(['/']);

  }
 
  
}
