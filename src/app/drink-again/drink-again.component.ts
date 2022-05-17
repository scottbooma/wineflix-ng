import { Component, Input } from '@angular/core';
import { Wine } from '../../utilities';
@Component({
  selector: 'app-drink-again',
  templateUrl: './drink-again.component.html',
  styleUrls: ['./drink-again.component.css'],
})
export class DrinkAgainComponent {
  @Input() finishedWines: Wine[] = [];
}
