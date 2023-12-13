import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { PokedexListComponent } from './pokedex-list.component';

const routes: Routes = [{ path: '', component: PokedexListComponent }];

@NgModule({
  declarations: [PokedexListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedexListModule {}
