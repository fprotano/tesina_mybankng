import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Faq } from 'src/app/models/faq';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService extends ApiService{
  constructor(http: HttpClient) {
    super(http);
  }

  insert(model: Faq , callbackOnSuccess: any, callbackOnFailure: any) {
       this.doPost("faq/insert",model,callbackOnSuccess,callbackOnFailure);
  }

  update(id:Number, model: Faq , callbackOnSuccess: any, callbackOnFailure: any){
     this.doPost("faq/update/"+id, model , callbackOnSuccess , callbackOnFailure );
  }
  // nel controller lato spring manca il metodo di update
  delete(id:Number,callbackOnSuccess: any, callbackOnFailure: any){
    this.doGet("faq/delete/"+id,callbackOnSuccess,callbackOnFailure);
  }


  findAll(callbackOnSuccess: any, callbackOnFailure: any) {
    this.doGet("faq/findAll",callbackOnSuccess,callbackOnFailure);
  }

  findById(id:Number,callbackOnSuccess: any, callbackOnFailure: any){
     this.doGet("faq/findOne/"+id,callbackOnSuccess,callbackOnFailure);
  }









}
