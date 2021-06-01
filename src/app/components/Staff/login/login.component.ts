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


  loginOtp : Boolean = false;
  constructor(private  staffservice:StaffService, router:Router) {
    super(router, staffservice);
  }



  ngOnInit() {
  }
   doLogin(){
    this.staffservice.login(this.staff,this.loginSuccess.bind(this),this.loginFailure.bind(this));
  }
  loginSuccess(data:any){
    this.loginOtp=true;
      if(data!=undefined){
     this.staff=data;
     this.staffservice.setLoggedUser(this.staff);
     alert("Login effettuata con successo.");
     this.router.navigate(["/homestaff"]);
      } else {
        alert("errore login sbagliata ciao bello");
      }
  }
  loginFailure(err:String ,err_code :String){
    alert("errore login sbagliata ciao bello");
  }

}
