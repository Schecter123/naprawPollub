import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users;

  constructor(private userService: UserService){}
  
  ngOnInit(){
    this.userService.getUsers().subscribe( res => this.users = res);
  }
}
