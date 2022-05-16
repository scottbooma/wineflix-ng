import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroWineComponent } from './hero-wine.component';

describe('HeroWineComponent', () => {
  let component: HeroWineComponent;
  let fixture: ComponentFixture<HeroWineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroWineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
