import { Injectable } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class StaffService  extends ApiService {

 private staff:Staff;
  constructor(http: HttpClient) {
    super(http);
  }
registrazione(model:Staff , callbackOnSuccess:any, callbackOnFailure:any){
       this.doPost("staff/registrazione",model,callbackOnSuccess,callbackOnFailure);
  }


  setLoggedUser(value : any) {
      if (value != undefined) {
        window.localStorage.setItem("user", JSON.stringify(value));
      } 
    }
    
    getLoggedUser() : any {
      
        var ret = window.localStorage.getItem("user");
        // if (ret == null && default_value != undefined) {
        //   return default_value;
        // }
        if (ret != null) {
          ret = JSON.parse(ret);
          
        }
        return ret;
      }
}