import { Component, OnInit } from '@angular/core';
import {IImage} from "ng-simple-slideshow";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    {
      url: 'assets/slideshow_img/img01.jpg',
      caption: 'The first slide',
      href: '#config'
    },
    {
      url: 'assets/slideshow_img/img02.jpg',
      caption: 'The first slide',
      href: '#config'
    },

  ];


  constructor() {
  }

  ngOnInit() {
  }

}
