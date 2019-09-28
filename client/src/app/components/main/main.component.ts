import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users;

  constructor(private userService: UserService){}
  
  ngOnInit(){
    const usersObservable = this.userService.getUsers();
    usersObservable.subscribe((response) => {
      this.users = response;
      this.users = this.users.users;
      console.log(this.users)
    });
       
  }

}
