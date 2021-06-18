import { Component, OnInit } from '@angular/core';
import { Superclasse } from 'src/superclasse';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff/staff.service';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';

@Component({
  selector: 'app-cambia-password',
  templateUrl: './cambia-password.component.html',
  styleUrls: ['./cambia-password.component.css']
})
export class CambiaPasswordComponent extends Superclasse implements OnInit {

  constructor(private staffservice:StaffService,router: Router,accountService: AccountService, helpcenterservice: HelpCenterService) { 
  super(router, staffservice, accountService,helpcenterservice);
  }

  ngOnInit() {
  }
  cambiaPassword(){
    this.accountService.PasswordDimenticata(this.accountRegistrato,this.cambiaPasswordSuccess.bind(this),this.cambiaPasswordFailure.bind(this));
  }
  cambiaPasswordSuccess(data:any){
  alert("Password cambiata con successo") ;
  this.router.navigate(["/login-account"]);

  }
  cambiaPasswordFailure(err:string ,err_code:string){
    alert(err);
  }




}
