import { Component, OnInit } from '@angular/core';
import {DANCECLASSES} from '../mock-dance-classes';
import {USERS} from '../mock-users';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  danceClasses = DANCECLASSES;
  constructor() { }

  ngOnInit() {
  }

}
