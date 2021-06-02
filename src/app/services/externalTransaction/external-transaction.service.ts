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

  findTransactions(callbackOnSuccess,callbackOnFailure){
    this.doGet("externalTransaction/findAll",callbackOnSuccess,callbackOnFailure);
  }
}
