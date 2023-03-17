import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Funcionalidad2Page } from './funcionalidad2.page';

const routes: Routes = [
  {
    path: '',
    component: Funcionalidad2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidad2PageRoutingModule {}
