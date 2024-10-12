import { Component } from '@angular/core';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-request-review',
  standalone: true,
  imports: [ProgressBarComponent,RouterLink],
  templateUrl: './request-review.component.html',
  styleUrl: './request-review.component.css'
})
export class RequestReviewComponent {

}
