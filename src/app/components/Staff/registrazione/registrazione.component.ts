import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/models/staff';
import { StaffService } from 'src/app/services/staff/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {
staff: Staff = new Staff();
  constructor(private  staffService:StaffService, private router:Router) { }

  ngOnInit() {
  }


submit(){
    this.staffService.registrazione(this.staff,this.submitSuccess.bind(this),this.submitFailure.bind(this));
   }
  
   submitSuccess(data : any){
     
     this.router.navigate(['/user']);
   }

   
   submitFailure(err : String , err_code : String){
     alert("Errore , email gia' esistente");
   }





}
