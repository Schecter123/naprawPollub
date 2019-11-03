import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-account-change-password',
  templateUrl: './account-change-password.component.html',
  styleUrls: ['./account-change-password.component.css']
})
export class AccountChangePasswordComponent implements OnInit {

  @Input() user;
  newPassword;
  password;

  constructor(private userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
  }

  changePassword(){
    this.userService.changePasssword({
      idUser: this.user.id,
      newPassword: this.newPassword,
      oldPassword: this.password
    }, this.user.id).subscribe(
      (data) => {
        this.messageService.success('Hasło zostało zmienione')
      },
      (error) => {
        console.log(error)
        this.messageService.error('Niepoprawne dane')
      }
    );
  }

}
