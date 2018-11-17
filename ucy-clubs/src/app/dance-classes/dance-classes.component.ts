import { Component, OnInit } from '@angular/core';
import {DanceClass} from '../DanceClass';

@Component({
  selector: 'app-dance-classes',
  templateUrl: './dance-classes.component.html',
  styleUrls: ['./dance-classes.component.css']
})
export class DanceClassesComponent implements OnInit {
  danceClass: DanceClass = {
    id: 1,
    name: 'Tango'
  };
  constructor() { }

  ngOnInit() {
  }

}
