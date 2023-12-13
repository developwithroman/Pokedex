import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.scss',
})
export class PokedexListComponent implements OnInit {
  constructor(public pokemonService: PokemonService) {}
  pokemonList$!: Pokemon[];
  ngOnInit() {
    this.pokemonService.pokemonList$.subscribe((data) => {
      this.pokemonList$ = data;
    });
    this.pokemonService.getPokemonList();
  }
  extractIdFromUrl(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 2]; // Adjust the index based on the URL structure
  }
}
