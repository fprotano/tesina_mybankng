import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Router } from '@angular/router';
import { Superclasse } from 'src/superclasse';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent extends Superclasse implements OnInit {

  constructor(private  staffservice:StaffService, router:Router) {

    super(router, staffservice);
   }

  ngOnInit() {
  }


submit(){
    this.staffservice.registrazione(this.staff,this.submitSuccess.bind(this),this.submitFailure.bind(this));
   }
  
   submitSuccess(data : any){
     this.staff=data;
     this.staffservice.setLoggedUser(this.staff);
     this.router.navigate(['/homestaff']);
   }

   
   submitFailure(err : String , err_code : String){
     alert("Errore , email gia' esistente");
   }





}
