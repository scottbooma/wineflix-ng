import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LogoComponent } from './logo/logo.component';
import { NavLinksComponent } from './nav-links/nav-links.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DrinkButtonComponent } from './drink-button/drink-button.component';
import { MoreInfoButtonComponent } from './more-info-button/more-info-button.component';
import { HeroWineComponent } from './hero-wine/hero-wine.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { NewBadgeComponent } from './new-badge/new-badge.component';
import { WineListingComponent } from './wine-listing/wine-listing.component';
import { DrinkAgainComponent } from './drink-again/drink-again.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavLinksComponent,
    UserAvatarComponent,
    NavBarComponent,
    DrinkButtonComponent,
    MoreInfoButtonComponent,
    HeroWineComponent,
    HeroContentComponent,
    HeroImageComponent,
    NewBadgeComponent,
    WineListingComponent,
    DrinkAgainComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
