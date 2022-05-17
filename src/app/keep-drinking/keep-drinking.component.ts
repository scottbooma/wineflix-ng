import { Component, Input } from '@angular/core';
import { Wine } from '../../utilities';

@Component({
  selector: 'app-keep-drinking',
  templateUrl: './keep-drinking.component.html',
  styleUrls: ['./keep-drinking.component.css'],
})
export class KeepDrinkingComponent {
  @Input() unfinishedWines: Wine[] = [];
}
