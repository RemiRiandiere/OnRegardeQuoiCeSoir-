import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { ActorsTileComponent } from './actors-tile/actors-tile.component';
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, FilmInfoComponent, ActorsTileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
