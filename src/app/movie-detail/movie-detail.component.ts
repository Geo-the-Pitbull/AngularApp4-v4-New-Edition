import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Models/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {
  @Input() movie!: Movie;

  getMovieFromParam(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovieById(id).subscribe(theMovie => this.movie = theMovie);
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    this.movieService.updateMovie(this.movie).subscribe(()=>this.goBack());
  } 
  
  // deleteMovie(id): void{
  //   this.movieService.deleteMovie(this.movie).subscribe(()=>this.goBack());
  // }
  
  constructor(private route: ActivatedRoute, private location: Location, private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieFromParam();
  }
  deleteMovie(movieId: number){
    if(confirm("Are you sure you want to delete this punk")){
      this.movieService.deleteMovie(movieId).subscribe(()=>{
        this.router.navigate(['/dashboard'])
      });

    }
  }

}
