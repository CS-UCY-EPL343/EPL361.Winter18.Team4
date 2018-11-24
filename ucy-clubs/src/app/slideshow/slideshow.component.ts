import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  imageUrls=[
    ' assets/slideshow_img/MAIN.png',
    ' assets/slideshow_img/main.jpg',
    ' assets/slideshow_img/img06.jpg',
    ' assets/slideshow_img/pic3.jpg',
    ' assets/slideshow_img/img04.jpg'];


  constructor() {
  }

  ngOnInit() {
  }

}
