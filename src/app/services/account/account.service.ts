import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/models/account';

@Injectable({
	providedIn: 'root'
})
export class AccountService extends ApiService {

	constructor(http: HttpClient) {
		super(http);
	}

	registrazione(model: Account, callbackOnSuccess: any, callbackOnFailure: any) {
		 this.doPost("account/registrazione",model,callbackOnSuccess,callbackOnFailure);
	}
	
	controlloOTP(model: Account, callbackOnSuccess: any, callbackOnFailure: any){
	     this.doPost("account/confermaOTP", model ,  callbackOnSuccess, callbackOnFailure);
  }
  
  PasswordDimenticata(model:Account,callbackOnSuccess: any, callbackOnFailure: any){
    	 this.doPost("account/ PasswordDimenticata",model,callbackOnSuccess,callbackOnFailure);
	}
  
 

 login(model: Account , callbackOnSuccess,callbackOnFailure){
    this.doPost("account/login",model,callbackOnSuccess,callbackOnFailure);
  }

 setLoggedUser(value: any) {
      if (value != undefined) {
        window.localStorage.setItem("account", JSON.stringify(value));
      } 
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
