import { Component, OnInit, VERSION } from '@angular/core';
import { ActorInfo } from './models/actor-info.model';
import { FilmInfo } from './models/film-info.model';
import { GetFilmService } from './services/get-film.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies: FilmInfo[];

  constructor(private filmService: GetFilmService) {}

  ngOnInit() {
    this.movies = this.filmService.getMovieList();
  }
}
