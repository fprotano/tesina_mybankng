import { Component, OnInit } from '@angular/core';
import { Superclasse } from 'src/superclasse';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff/staff.service';
import { HelpCenterService } from 'src/app/services/helpCenter/help-center.service';
import { HelpCenterThreadService } from 'src/app/services/helpCenterThreadService/help-center-thread.service';
import { NgForm } from '@angular/forms';
import { HelpCenterThread } from 'src/app/models/help-center-thread';

@Component({
  selector: 'app-help-center-thread',
  templateUrl: './help-center-thread.component.html',
  styleUrls: ['./help-center-thread.component.css']
})
export class HelpCenterThreadComponent extends Superclasse implements OnInit {

  question: NgForm;
  helpCenterThreads: HelpCenterThread[] = new Array<HelpCenterThread>();

  // tslint:disable-next-line: max-line-length
  constructor(private staffservice: StaffService, router: Router, accountService: AccountService, helpCenterService: HelpCenterService, protected helpCenterThreadService: HelpCenterThreadService) {
    super(router, staffservice, accountService, helpCenterService);
  }

  ngOnInit() {
    this.account = this.accountService.getLoggedUser();
    this.helpCenter = this.helpCenterService.getHelpCenter();
    this.findById();
  }

  Insert(question) {
    this.helpCenterThreadService.insert(this.helpCenterThread, this.submitSuccess.bind(this), this.submitFailure.bind(this), this.helpCenter.id);
    this.question.reset();
  }

  submitSuccess(data: any) {
    this.helpCenterThread = data;
  }

  submitFailure(err: String, err_code: String) {
  }

  findById() {
    this.helpCenterThreadService.findById(this.helpCenter.id, this.Success.bind(this), this.Failure.bind(this));
  }

  Success(data: any) {
    this.helpCenterThreads = data;
  }

  Failure(err: String, err_code: String) {
  }


}


