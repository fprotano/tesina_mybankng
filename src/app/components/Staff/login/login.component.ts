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

  constructor(private  staffService:StaffService, router:Router) {
    super(router);
  }



  ngOnInit() {
  }
   doLogin(){
    this.staffService.login(this.staff,this.loginSuccess.bind(this),this.loginFailure.bind(this));
  }
  loginSuccess(data:any){
     this.staff=data;
     this.staffService.setLoggedUser(this.staff);
     alert("Login effettuata con successo.");
     this.router.navigate(["/homestaff"]);
  }
  loginFailure(err:String ,err_code :String){
    alert("errore login sbagliata ciao bello");
  }

}
