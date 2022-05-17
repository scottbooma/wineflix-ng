import { Component, Input } from '@angular/core';
import { heroContent } from '../../data';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.css'],
})
export class HeroContentComponent {
  heroContent = heroContent;
}
