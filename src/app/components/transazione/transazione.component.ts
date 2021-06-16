import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/models/account';
import { InternalTransactionService } from 'src/app/services/internalTransaction/internal-transaction.service';
import { InternalTransaction } from 'src/app/models/internal-transaction';

@Component({
  selector: 'app-transazione',
  templateUrl: './transazione.component.html',
  styleUrls: ['./transazione.component.css']
})
export class TransazioneComponent implements OnInit {

  public account: Account = new Account();
  public transazioni: InternalTransaction[] = new Array<InternalTransaction>();

  constructor(private accountService: AccountService, private internalTransactionService:InternalTransactionService ) { }

  ngOnInit() {
    this.account = this.accountService.getLoggedUser();
    this.internalTransactionService.findById(this.account.id, this.successo.bind(this), this.fallimento.bind(this));
  }

  successo(data:any) {
    this.transazioni=data;
  }

  fallimento(err:String, err_code:String){
    alert(err);
  }



}
