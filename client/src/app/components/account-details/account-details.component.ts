import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit, OnDestroy {

  loggedUser;
  user;
  subscribtion;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.loggedUser = localStorage.getItem("loggedUser");
      this.subscribtion = this.activatedRoute.data.subscribe( data => {
        this.user = data.user
      });
  }

  ngOnDestroy(){
    this.subscribtion.unsubscribe();
  }

}
