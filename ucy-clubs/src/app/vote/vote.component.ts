import { Component, OnInit } from '@angular/core';
import {DANCECLASSES} from '../mock-dance-classes';
import {USERS} from '../mock-users';
import { MatSelectionListChange} from "@angular/material";
import { DanceClass, AvailableHours} from "../DanceClass";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  danceClasses = DANCECLASSES;
  selectedOptions: DanceClass[];
  constructor() { }

  ngOnInit() {
  }

  onVote(change : MatSelectionListChange) {
    console.log("I hate myself");
    console.log(this.selectedOptions);
  }

  onClickMe() {

  }
}
