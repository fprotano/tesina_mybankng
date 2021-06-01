import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Router } from '@angular/router';
import { Superclasse } from 'src/superclasse';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent extends Superclasse implements OnInit {

  constructor( router:Router, staffService:StaffService, accountService: AccountService,) {

    super(router, staffService, accountService);
   }

  ngOnInit() {
  }


submit(){
    this.staffService.registrazione(this.staffRegistrato,this.submitSuccess.bind(this),this.submitFailure.bind(this));
   }
  
   submitSuccess(data : any){
     this.router.navigate(['/homestaff']);
   }

   
   submitFailure(err : String , err_code : String){
     alert("Errore , email gia' esistente");
   }





}
