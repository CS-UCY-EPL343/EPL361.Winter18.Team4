import { Component, OnInit } from '@angular/core';
import {DANCECLASSES} from '../mock-dance-classes';
import {USERS} from '../mock-users';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { DanceClass} from "../DanceClass";
import {MatSelectionListChange} from "@angular/material";
import {UsersStructure} from "../UsersStructure";
import {DialogConfirmVoteComponent} from "./dialog-confirm-vote/dialog-confirm-vote.component";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  profiles = USERS;
  curProfile: UsersStructure = {
  name: 'Μιχάλης',
  surname: 'Αθανασόπουλος',
  email: 'matha01@cs.ucy.ac.cy',
  phoneNumber: 97745362,
  password: 'apoel4ever',
  clubEnrolls: [],
  voted: false
  };
  danceClasses = DANCECLASSES;
  selectedOptions: DanceClass[];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onVote(change : MatSelectionListChange) {
    console.log("I hate myself");

  }
  onClickMe(): void {
    const dialogRef = this.dialog.open(DialogConfirmVoteComponent, {
      width: '30%',
      data: {name: this.curProfile.name, vote: this.selectedOptions}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
