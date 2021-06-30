import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/models/account';
import { Payment } from 'src/app/models/payment';

@Injectable({
	providedIn: 'root'
})
export class AccountService extends ApiService {

	constructor(http: HttpClient) {
		super(http);
  }

  findAccountByEmail(email:string,callbackOnSuccess,callbackOnFailure){
    this.doPost("account/findByEmail",email,callbackOnSuccess,callbackOnFailure);
  }

	registrazione(model: Account, callbackOnSuccess: any, callbackOnFailure: any) {
		 this.doPost("account/registrazione",model,callbackOnSuccess,callbackOnFailure);
	}
	
	controlloOTP(model: Account, callbackOnSuccess: any, callbackOnFailure: any){
	     this.doPost("account/confermaOTP", model ,  callbackOnSuccess, callbackOnFailure);
  }
  
  PasswordDimenticata(model:Account,callbackOnSuccess: any, callbackOnFailure: any){
    	 this.doPost("account/pswD",model,callbackOnSuccess,callbackOnFailure);
	}
  
 

 login(model: Account , callbackOnSuccess,callbackOnFailure){
    this.doPost("account/login",model,callbackOnSuccess,callbackOnFailure);
  }

  fillPayment(model: Payment, callbackOnSuccess,callbackOnFailure){
    this.doPost("payment/fillPayment",model,callbackOnSuccess,callbackOnFailure);
  }
  fillPaymentWithTransactionId(model: Payment, callbackOnSuccess, callbackOnFailure){
    this.doPost("payment/fillPaymentWithTransactionId",model,callbackOnSuccess,callbackOnFailure);
  }

 setLoggedUser(value: any) {
      if (value != undefined) {
        window.localStorage.setItem("account", JSON.stringify(value));
      } 
    }

    setPayment(value: any) {
      if (value != undefined) {
        window.localStorage.setItem("payment", JSON.stringify(value));
      } 
    }
    getPayment(): any {
      
        var ret = window.localStorage.getItem("payment");
        if (ret != null) {
        ret = JSON.parse(ret);
        }
        return ret;
      }

      pay(model: Payment, callbackOnSuccess,callbackOnFailure){
            this.doPost("internalTransaction/insert",model,callbackOnSuccess,callbackOnFailure);
      }
    
      sendPaymentData(model: Payment, callbackOnSuccess,callbackOnFailure){
        this.doPost("payment/sendData",model,callbackOnSuccess,callbackOnFailure);
      }
    getLoggedUser(): any {
      
        var ret = window.localStorage.getItem("account");
        // if (ret == null && default_value != undefined) {
        //   return default_value;
        // }
        if (ret != null) {
          ret = JSON.parse(ret);
          
        }
        return ret;
      }

}
