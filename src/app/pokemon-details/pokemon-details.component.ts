import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonDetail, PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  detailUrl!: string;
  constructor(
    private route: ActivatedRoute,
    public pokemonService: PokemonService
  ) {}
  pokemonDetail$!: Observable<PokemonDetail>;
  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.detailUrl = `https://pokeapi.co/api/v2/pokemon/${param['id']}/`;
      this.pokemonDetail$ = this.pokemonService.fetchPokemonDetails(
        this.detailUrl
      );
    });
  }
}
