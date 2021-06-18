import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Superclasse } from 'src/superclasse';
import { Account } from 'src/app/models/account';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})
export class LoginAccountComponent extends Superclasse implements OnInit  {
	
  
  payment: Payment = new Payment();
  constructor(private staffservice:StaffService,router: Router, accountService: AccountService,private route: ActivatedRoute) {
  super(router, staffservice, accountService);
  
 }

  ngOnInit() {
    this.account=new Account();
    this.staffService.setLoggedUser(this.account);
    var self = this;
    this.route.paramMap.subscribe(function(params){
      

      var id =  params.get('id');
      console.log("id arrivato" + id);
      if(id!=null){
        self.payment=new Payment();
        self.payment.id = parseInt(id);
        self.accountService.fillPayment(self.payment, self.fillSuccess.bind(self), self.fillFailure.bind(self));
      }
    });
  }

doLoginAccount(){
    this.accountService.login(this.account,this.loginSuccess.bind(this),this.loginFailure.bind(this));
  }
  fillSuccess(data:any){
      if(data!=undefined){
     this.payment=data;
     this.accountService.setPayment(this.payment);
     console.log(JSON.stringify(this.payment) + "  AAAAA");
      } 
     }
  fillFailure(err:String ,err_code :String){
    alert("Pagamento non accessibile");
  }


  loginSuccess(data:any){
      if(data!=undefined){
     this.account=data;
     var OTP = prompt ("per favore inserisci l'otp");
     this.controlloOTP(OTP);
      } 
     } 
  loginFailure(err:String ,err_code :String){
    alert("errore login sbagliata");
  }
  
  controlloOTP(OTP:String){
   this.account.otpCode=OTP;
    this.accountService.controlloOTP(this.account,this.onControlSuccess.bind(this),this.onControlFailure.bind(this))
    
}
 onControlSuccess(data : any){
      this.accountService.setLoggedUser(this.account);
      this.account = data;
      console.log(this.logged);
      this.router.navigate(["/home"]);
      
  }
  
  onControlFailure(err:String ,err_code :String){
    alert("OTP errato");
    

  }
}
