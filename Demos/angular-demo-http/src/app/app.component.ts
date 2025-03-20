import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeApiService } from './poke-api.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  pokeApiService: PokeApiService;

  constructor(service: PokeApiService) {
    this.pokeApiService = service
  }


  ngOnInit(): void {
    this.pokeApiService.getData().subscribe((body) => {console.log(body)})
  }

}
