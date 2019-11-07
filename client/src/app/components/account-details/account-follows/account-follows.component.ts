import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-follows',
  templateUrl: './account-follows.component.html',
  styleUrls: ['./account-follows.component.css']
})
export class AccountFollowsComponent implements OnInit {

  @Input() user;
  
  constructor() { }

  ngOnInit() {
  }

}
