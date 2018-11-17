import { Component, OnInit } from '@angular/core';
import {DanceClass} from '../DanceClass';
import {DANCECLASSES} from '../mock-dance-classes';

@Component({
  selector: 'app-dance-classes',
  templateUrl: './dance-classes.component.html',
  styleUrls: ['./dance-classes.component.css']
})
export class DanceClassesComponent implements OnInit {
  danceClasses = DANCECLASSES;
  selectedClass: DanceClass;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }
  onSelect(danceClass: DanceClass): void {
    this.selectedClass = danceClass;
  }

}
