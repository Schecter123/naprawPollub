import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-change-password',
  templateUrl: './account-change-password.component.html',
  styleUrls: ['./account-change-password.component.css']
})
export class AccountChangePasswordComponent implements OnInit {

  @Input() user;
  newPassword;
  password;

  constructor() { }

  ngOnInit() {
  }

  changePassword(){
  console.log(this.user)
  }

}
