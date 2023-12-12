import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.scss',
})
export class PokedexListComponent implements OnInit {
  constructor(public pokemonService: PokemonService) {}
  pokemonList$!: Observable<any[]>;
  ngOnInit() {
    this.pokemonList$ = this.pokemonService.fetchPokemonList();
  }
  extractIdFromUrl(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 2]; // Adjust the index based on the URL structure
  }
}
