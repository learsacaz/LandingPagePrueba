import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    redirectTo: 'La Marca'
  },
  {
    path:'La Marca',
    loadChildren:()=>import('./la-marca/la-marca-routing.module').then(m=>m.LaMarcaRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
