import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[] = []

  getDashboardMovies(): void {
    this.movieService.getMovies().subscribe(theseMovies => this.movies = theseMovies.sort((movie1, movie2)=> movie2.releaseYear - movie1.releaseYear));

  }

  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
    this.getDashboardMovies();
  }

  prodYearOverDecade(movie:Movie){
    if((new Date().getFullYear() - movie.releaseYear) > 10){
      return true
    }
    return false
  }

}
