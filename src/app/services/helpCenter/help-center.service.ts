import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { HelpCenter } from 'src/app/models/help-center';

@Injectable({
  providedIn: 'root'
})
export class HelpCenterService extends ApiService {

  constructor(http: HttpClient) {
		super(http);
	}

  findThreads(callbackOnSuccess,callbackOnFailure){
    this.doGet("helpCenterThread/findAll",callbackOnSuccess,callbackOnFailure);
  }

 insert(model: HelpCenter, callbackOnSuccess: any, callbackOnFailure: any, id:number) {
	const url = `helpCenter/insert/${id}`; 
	alert(url);
		 this.doPost(url,model,callbackOnSuccess,callbackOnFailure);
	}
}
