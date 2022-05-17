import { Component } from '@angular/core';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { wines } from '../data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faPlay = faPlay;
  faInfoCircle = faInfoCircle;
  title = 'angular-template';
  wines = wines;
  finishedWines = wines.filter((wine) => wine.isFinished);
  unfinishedWines = wines.filter((wine) => !wine.isFinished);
}
