import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-wine',
  templateUrl: './hero-wine.component.html',
  styleUrls: ['./hero-wine.component.css'],
})
export class HeroWineComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageUrl = '';
  @Input() description = '';
}
