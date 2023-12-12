import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  { path: 'pokedex', component: PokedexListComponent },
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
  { path: '', redirectTo: '/pokedex', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
