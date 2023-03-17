import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Funcionalidad1Page } from './funcionalidad1.page';

const routes: Routes = [
  {
    path: '',
    component: Funcionalidad1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidad1PageRoutingModule {}
