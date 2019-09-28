import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
