
import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-rating1',
	standalone: true,
	imports: [NgbRatingModule],
	templateUrl: './rating1.component.html',
  styleUrls: ['./rating1.component.css']
})
export class Rating1Component {
	currentRate = 8;
}