import { Component, OnInit } from '@angular/core';
import {EVENTSINFO} from "../mock-events";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  events = EVENTSINFO;
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
