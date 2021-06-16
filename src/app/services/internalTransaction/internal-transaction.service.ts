import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternalTransactionService extends ApiService{

  constructor( http: HttpClient) {
    super(http);
  }

  findById(id:number,callbackOnSuccess: any, callbackOnFailure: any){
          this.doGet("internalTransaction/findById/"+id,callbackOnSuccess,callbackOnFailure);
  }

}
