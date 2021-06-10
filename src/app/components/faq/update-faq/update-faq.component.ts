import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq/faq.service';
import { ActivatedRoute } from '@angular/router';
import { Faq } from 'src/app/models/faq';

@Component({
  selector: 'app-update-faq',
  templateUrl: './update-faq.component.html',
  styleUrls: ['./update-faq.component.css']
})
export class UpdateFaqComponent implements OnInit {
  id : Number;
  faq : Faq = null;
  faqAggiornato : Faq = new Faq();
  message_update : String ;
  constructor(private faqService :FaqService , private rout : ActivatedRoute) { 
    this.rout.paramMap.subscribe(params => { // rappresenta una funzione anonima
          this.id =Number.parseInt(params.get("id"));
          this.faqService.findById(this.id,this.successFind.bind(this), this.failureFind.bind(this));
     });
  }

  ngOnInit(): void {
  }

  successFind(data : any){
     this.faq = data;
     this.faqAggiornato.id = this.faq.id;
     this.faqAggiornato.question = this.faq.question;
     this.faqAggiornato.answer = this.faq.answer;
  }
  failureFind(err:String , err_code : String){
      alert(err);
  }

  update(){
   this.faqService.update(this.id,this.faqAggiornato,this.successUpdate.bind(this),this.failureUpdate.bind(this));
 }


  successUpdate(data : any){
    this.faq = data;
    this.message_update = "Faq aggiornato con successo."; 
 //   this.router.navigate(['/?/??']);
  }
  failureUpdate(err:String , err_code : String){
    this.message_update  = err;
  
  }




}
