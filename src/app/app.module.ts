import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { ActorsTileComponent } from './actors-tile/actors-tile.component';
import { AppRoutingModule } from './app-routing-module';
import { FilmListComponent } from './film-list/film-list.component';
import { LandingPageComponent } from './landing-page/landing-page-component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    AppMenuComponent,
    FilmInfoComponent,
    ActorsTileComponent,
    FilmListComponent,
    LandingPageComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
