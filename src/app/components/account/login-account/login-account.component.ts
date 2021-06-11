import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})
export class LoginAccountComponent extends Superclasse implements OnInit  {
	

  constructor(private staffservice:StaffService,router: Router, accountService: AccountService,) {
	super(router, staffservice, accountService);
 }

  ngOnInit() {
  }

doLoginAccount(){
    this.accountService.login(this.account,this.loginSuccess.bind(this),this.loginFailure.bind(this));
  }

  loginSuccess(data:any){
      if(data!=undefined){
     this.account=data;
     var OTP = prompt ("per favore inserisci l'otp");
     
     this.accountService.setLoggedUser(this.account);
     this.controlloOTP(OTP) 
     } else {
        alert("errore login sbagliata");
      }
  }
  loginFailure(err:String ,err_code :String){
    alert("errore login sbagliata");
  }
  
  controlloOTP(OTP:String){
   this.account.otpCode=OTP;
    this.accountService.controlloOTP(this.account,this.onControlSuccess.bind(this), onControlFailure.bind(this))
  
}
 onControlSuccess(data : any){
      this.accountServiceervice.setLoggedUser(this.account);
      this.controllo = data;
      if(this.controllo){
        this.router.navigate(["/homestaff"]);
      }
  }
  
  onControlFailure(err:String ,err_code :String){
    alert("OTP errato");
  }
}
