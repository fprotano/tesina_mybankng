import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Superclasse } from 'src/superclasse';

@Component({
  selector: 'app-homestaff',
  templateUrl: './homestaff.component.html',
  styleUrls: ['./homestaff.component.css']
})
export class HomestaffComponent extends Superclasse implements OnInit {
  
  constructor(router:Router) {
   super(router);
   }

  ngOnInit(): void {
   
    
  }

  

}
