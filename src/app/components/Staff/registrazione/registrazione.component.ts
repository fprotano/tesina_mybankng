import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
staff: Staff = new Staff();
  constructor(private  staffService:StaffService) { }

  ngOnInit() {
  }


submit(){
    this.staffService.registrazione(this.staff,this.submitSuccess.bind(this),this.submitFailure.bind(this));
   }
  
   submitSuccess(data : any){
     alert("Registrazione avvenuta con successo");
  
   }

   submitFailure(err : String , err_code : String){
     alert("Errore , email gia' esistente");
   }





}
