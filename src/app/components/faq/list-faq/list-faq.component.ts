import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq/faq.service';
import { Faq } from 'src/app/models/faq';

@Component({
  selector: 'app-list-faq',
  templateUrl: './list-faq.component.html',
  styleUrls: ['./list-faq.component.css']
})
export class ListFaqComponent implements OnInit {
  faq_list: Faq[] = new Array<Faq>();
  message_feedback: String = "";
  constructor(private faqService:FaqService) { }

  ngOnInit(): void {
    this.faqService.findAll(this.caricamentoFaqOk.bind(this), this.caricamentoFaqNo.bind(this));
  }

  caricamentoFaqOk(data: any) {
   this.faq_list = data;
  }
  caricamentoFaqNo(err: String, err_code: String) {
    alert(err);
  }

  delete(id : Number){
    
    this.faqService.delete(id,this.successDelete.bind(this), this.failureDelete.bind(this));
  }

  successDelete(data: any){
     this.message_feedback = "Cancellazione avvenuta con successo.";
     this.faqService.findAll(this.caricamentoFaqOk.bind(this), this.caricamentoFaqNo.bind(this));
  }
  failureDelete(err: String, err_code: String){
     this.message_feedback=err;
  }










}
