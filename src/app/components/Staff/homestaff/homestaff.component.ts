import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Superclasse } from 'src/superclasse';
import { StaffService } from 'src/app/services/staff/staff.service';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-homestaff',
  templateUrl: './homestaff.component.html',
  styleUrls: ['./homestaff.component.css']
})
export class HomestaffComponent extends Superclasse implements OnInit {
  
  constructor(router:Router, staffService:StaffService, accountService:AccountService) {
   super(router, staffService, accountService);
   }

  ngOnInit(): void {
   this.staff=this.staffService.getLoggedUser();
    
  }

  

}
