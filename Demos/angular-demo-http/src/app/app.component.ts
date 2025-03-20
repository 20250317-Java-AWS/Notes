import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeApiService, Pokemon, PokeResults } from './poke-api.service';
import { PokemonComponent } from "./pokemon/pokemon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PokemonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  pokeApiService: PokeApiService;
  pokeResults: PokeResults = {results: []}

  constructor(service: PokeApiService) {
    this.pokeApiService = service
  }


  ngOnInit(): void {
    this.pokeApiService.getPokemonResults().subscribe((body) => {
      // console.log(body.results[0])
      this.pokeResults = body
      for(let i = 0; i < this.pokeResults.results.length; i++) {
        this.pokeApiService.getPokemon(this.pokeResults.results[i].name).subscribe((body) => {
          this.pokeResults.results[i] = body
        })
      }
    })
  }

}
