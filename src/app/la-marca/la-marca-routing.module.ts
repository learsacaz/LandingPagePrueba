import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaMarcaComponent } from './la-marca.component';

const routes: Routes = [
  {
    path:'',
    component:LaMarcaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaMarcaRoutingModule { }
