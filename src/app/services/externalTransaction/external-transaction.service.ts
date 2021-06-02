import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExternalTransactionService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  findTransactions(id:number,callbackOnSuccess,callbackOnFailure){
    this.doPost("externalTransaction/findAllByStaffId",id,callbackOnSuccess,callbackOnFailure);
  }
}
