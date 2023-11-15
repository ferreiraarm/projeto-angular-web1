import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sllides1',
	standalone: true,
	imports: [NgbCarouselModule, NgIf],
  templateUrl: './sllides1.component.html',
 
  styleUrls: ['./sllides1.component.css']
})
export class Sllides1Component implements OnInit {
  images: Array<string> = []
  ngOnInit(): void {
    this.images = ["assets/Calistenia.jpg", "assets/crossfit.jpg","assets/Arnold_Schwarzenegger_1974.jpg"];
    console.log(this.images);
    

  }
}