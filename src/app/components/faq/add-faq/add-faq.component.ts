import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq/faq.service';
import { Faq } from 'src/app/models/faq';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.css']
})
export class AddFaqComponent implements OnInit {
  message_feedback : String ;
  faq : Faq = new Faq();
  constructor(private faqService:FaqService) { }

  ngOnInit(): void {
  }

  insertFaq(){
       this.faqService.insert(this.faq,this.successInsert.bind(this),this.failureInsert.bind(this));
  }

  successInsert(data:any){
      this.message_feedback="Il Faq e' stato inserito correttamente.";
  }

  failureInsert(err:String , err_code:String){
      this.message_feedback=err;
  }


}
