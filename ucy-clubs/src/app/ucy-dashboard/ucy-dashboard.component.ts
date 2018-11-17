import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {Club } from "../MOCK-CLUBS";

@Component({
  selector: 'app-ucy-dashboard',
  templateUrl: './ucy-dashboard.component.html',
  styleUrls: ['./ucy-dashboard.component.css']
})
export class UcyDashboardComponent implements OnInit {


  club = Club;

  constructor() { }

  ngOnInit() {
  }

}
