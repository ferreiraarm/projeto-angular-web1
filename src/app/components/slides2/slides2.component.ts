

import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-slides2',
  templateUrl: './slides2.component.html',
	standalone: true,
  styleUrls: ['./slides2.component.css'],
	imports: [NgbCarouselModule, NgIf],
	
})


export class Slides2Component implements OnInit {
  images: Array<string> = []
  ngOnInit(): void {
    this.images = ["assets/Calistenia vcasa.png", "assets/Crossfit 21e.png","assets/FF.png"];
    console.log(this.images);
    

  }
}