import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {VoteComponent} from "../vote.component";
import {DanceClass} from "../../DanceClass";


@Component({
  selector: 'app-dialog-confirm-vote',
  templateUrl: './dialog-confirm-vote.component.html',
  styleUrls: ['./dialog-confirm-vote.component.css']
})

export class DialogConfirmVoteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close()
  }
  public toString = () : string => {
    var str1 = new String( "This is string one" );
    var str2 = new String( "This is string two" );
    var str3 = str1.concat( str2 );
    return
  }
}

export interface DialogData {
  name: string;
  vote:DanceClass[]
}

