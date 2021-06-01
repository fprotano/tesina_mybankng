import { Component, OnInit } from '@angular/core';
import { Superclasse } from 'src/superclasse';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff/staff.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  extends Superclasse implements OnInit {

  controllo:boolean;

  constructor(private  staffservice:StaffService, router:Router) {
    super(router, staffservice);
  }



  ngOnInit() {
  }
   doLogin(){
    this.staffservice.login(this.staff,this.loginSuccess.bind(this),this.loginFailure.bind(this));
  }
  loginSuccess(data:any){
      if(data!=undefined){
     this.staff=data;
     var OTP = prompt("Per favore inserisci il tuo codice OTP:")
     this.controlOtp(OTP);
      } else {
        alert("errore login");
      }
  }
  loginFailure(err:String ,err_code :String){
    alert("errore login");
  }

  controlOtp(OTP:String){
    this.staff.otpCode=OTP;
    this.staffservice.controlOTP(this.staff,this.onControlSuccess.bind(this), this.onControlFailure.bind(this))
  }

  onControlSuccess(data : any){
      this.staffservice.setLoggedUser(this.staff);
      this.controllo = data;
      if(this.controllo){
        this.router.navigate(["/homestaff"]);
      }
  }
  
  onControlFailure(err:String ,err_code :String){
    alert("OTP errato");
  }

}
