import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details.component';

const routes: Routes = [{ path: '', component: PokemonDetailsComponent }];

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetailsModule {}
