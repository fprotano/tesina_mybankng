import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  logged:boolean = false;
  constructor(private appService : AppService) {


     this.appService.onLoginStatusChanged.subscribe((logged: boolean) => {
         
       //todo
         
       this.logged=logged;

         
     });
     


   }

  ngOnInit() {
  }

}
