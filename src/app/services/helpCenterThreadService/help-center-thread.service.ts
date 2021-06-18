import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { HelpCenterThread } from 'src/app/models/help-center-thread';

@Injectable({
  providedIn: 'root'
})
export class HelpCenterThreadService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  insert(model: HelpCenterThread, callbackOnSuccess: any, callbackOnFailure: any, id: Number) {
    const url = `helpCenterThread/insert/${id}`;
    this.doPost(url, model, callbackOnSuccess, callbackOnFailure);
  }

  findById( id: Number, callbackOnSuccess: any, callbackOnFailure: any) {
    const url = `helpCenterThread/findById/${id}`;
    this.doGet(url, callbackOnSuccess, callbackOnFailure);
  }
}
