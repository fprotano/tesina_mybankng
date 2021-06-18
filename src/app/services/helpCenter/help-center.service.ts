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

  findThreads(id: Number, callbackOnSuccess, callbackOnFailure) {
    this.doPost("helpCenterThread/findAll", id, callbackOnSuccess, callbackOnFailure);
  }

  insert(model: HelpCenter, callbackOnSuccess: any, callbackOnFailure: any, id: number) {
    const url = `helpCenter/insert/${id}`;
    this.doPost(url, model, callbackOnSuccess, callbackOnFailure);
  }

  findAccountId(callbackOnSuccess, callbackOnFailure, id: Number) {
    const url = `helpCenter/fAid/${id}`;
    this.doGet(url, callbackOnSuccess, callbackOnFailure);
  }

  setHelpCenter(value: any) {
    if (value != undefined) {
      window.localStorage.setItem("helpCenter", JSON.stringify(value));
    }
  }

  getHelpCenter(): any {
    var ret = window.localStorage.getItem("helpCenter");
    if (ret != null) {
      ret = JSON.parse(ret);
    }
    return ret;
  }

  findHelpCenter(model: HelpCenter, callbackOnSuccess: any, callbackOnFailure: any, id: Number) {
    const url = `helpCenter/findHC/${id}`;
    this.doPost(url, model, callbackOnSuccess, callbackOnFailure);
  }
}
