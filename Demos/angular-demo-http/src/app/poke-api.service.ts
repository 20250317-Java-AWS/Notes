import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService{
  client: HttpClient;
  constructor(client: HttpClient) { 
    this.client = client;
  }

  getData(): Observable<object> {
    return this.client.get('https://pokeapi.co/api/v2/pokemon/ditto')
  }

  
}
