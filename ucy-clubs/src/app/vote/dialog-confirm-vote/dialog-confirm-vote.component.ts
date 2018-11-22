import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {VoteComponent} from "../vote.component";
import {DanceClass} from "../../DanceClass";
import {UsersStructure} from "../../UsersStructure";

@Component({
  selector: 'app-dialog-confirm-vote',
  template: 'passed in {{data.user}}{{data.vote}}',
  templateUrl: './dialog-confirm-vote.component.html',
})

export class DialogConfirmVoteComponent  {

  constructor(
    public dialogRef: MatDialogRef<VoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) {
  }

  onNoClick() {
    this.dialogRef.close()
  }

  onSubmitVote() {
    let user = this.data.user;
    user.voted = true;
    console.log(user);
    this.dialogRef.close()
  }
}

export class DialogData {
  user: UsersStructure;
  votes:DanceClass[];
  }

