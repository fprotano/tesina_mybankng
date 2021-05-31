import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Superclasse } from 'src/superclasse';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-homestaff',
  templateUrl: './homestaff.component.html',
  styleUrls: ['./homestaff.component.css']
})
export class HomestaffComponent extends Superclasse implements OnInit {
  
  constructor(router:Router, private staffservice:StaffService) {
   super(router);
   }

  ngOnInit(): void {
   this.staff=this.staffservice.getLoggedUser();
    
  }

  

}
