import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sevices/user.service';
import { User } from 'src/app/models/user';
import { Superclasse } from 'src/app/superclasse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends Superclasse implements OnInit {
  
  constructor(userservice:UserService, router:Router) {
   super(userservice, router);
   }

  ngOnInit(): void {
    console.log("CIAOOOOOO " + JSON.stringify(this.user));
    this.user=this.userservice.getLoggedUser();
  }

  

}
