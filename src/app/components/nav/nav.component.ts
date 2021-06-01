import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';
import { Superclasse } from 'src/superclasse';
import { StaffService } from 'src/app/services/staff/staff.service';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-navigazione',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent extends Superclasse implements OnInit {

 
  constructor(router:Router, staffService:StaffService, accountService:AccountService) {
   super(router, staffService, accountService);
   }

  ngOnInit() {
  }

}
