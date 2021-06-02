import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelpCenterService extends ApiService {

  constructor(http: HttpClient) {
		super(http);
	}

  findThreads(callbackOnSuccess,callbackOnFailure){
    this.doGet("helpCenter/findAllThreads",callbackOnSuccess,callbackOnFailure);
  }
}
