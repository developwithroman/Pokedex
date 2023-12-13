import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: 'pokedex',
    loadChildren: () =>
      import('./pokedex-list/pokedex-list.module').then(
        (m) => m.PokedexListModule
      ),
  },
  {
    path: 'pokedex/:id',
    loadChildren: () =>
      import('./pokemon-details/pokemon-details.module').then(
        (m) => m.PokemonDetailsModule
      ),
  },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
