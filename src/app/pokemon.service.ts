import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
export interface PokemonDetail {
  name: string;
  base_experience: string;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  forms: {
    name: string;
    url: string;
  }[];
  height: number;
  held_items: any[]; // Adjust this to the correct type if possible
  // Add other properties if present in your actual data
}

export interface Pokemon {
  name: string;
  url: string;
}
export interface CacheInterface {
  [url: string]: PokemonDetail;
}
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  private pokemonListSubject: BehaviorSubject<Pokemon[]> = new BehaviorSubject<
    Pokemon[]
  >([]);
  private pokemonDetailSubject: BehaviorSubject<CacheInterface> =
    new BehaviorSubject<CacheInterface>({});

  pokemonList$: Observable<any[]> = this.pokemonListSubject.asObservable();
  pokemonDetail$: Observable<CacheInterface> =
    this.pokemonDetailSubject.asObservable();
  constructor(private http: HttpClient) {}

  fetchPokemonList(): Observable<any[]> {
    return this.http
      .get<any>(`${this.baseUrl}?limit=15`)
      .pipe(map((data) => data.results));
  }

  fetchPokemonDetails(url: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(url).pipe(map((data) => data));
  }

  getPokemonList(): void {
    this.fetchPokemonList().subscribe((data) =>
      this.pokemonListSubject.next(data)
    );
  }
  getPokemonDetails(url: string): void {
    if (!this.pokemonDetailSubject.value[url]) {
      this.fetchPokemonDetails(url).subscribe((data) => {
        const updatedCache = {
          ...this.pokemonDetailSubject.value,
          [url]: data,
        };
        this.pokemonDetailSubject.next(updatedCache);
      });
    }
  }
}
