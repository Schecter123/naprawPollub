import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    if(!this.authService.isLogged)
    {
      this.authService.show();
    }
  }

}
