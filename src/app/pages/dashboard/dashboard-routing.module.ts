import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsaSySampanasaComponent } from 'src/app/features/layout/asa-sy-sampanasa/asa-sy-sampanasa.component';
import { HampiditraComponent } from 'src/app/features/layout/hampiditra/hampiditra.component';
import { LisitryNyMpivavakaComponent } from 'src/app/features/layout/lisitry-ny-mpivavaka/lisitry-ny-mpivavaka.component';
import { NotFoundComponentComponent } from 'src/app/features/layout/not-found-component/not-found-component.component';
import { RantsanaSyAntokoMpihiraComponent } from 'src/app/features/layout/rantsana-sy-antoko-mpihira/rantsana-sy-antoko-mpihira.component';
import { SampanaComponent } from 'src/app/features/layout/sampana/sampana.component';
import { TaranakaComponent } from 'src/app/features/layout/taranaka/taranaka.component';

const routes: Routes = [
  {
    path:'lisitra',
    component : LisitryNyMpivavakaComponent
  },
  {
    path:'hampiditra',
    component : HampiditraComponent
  },
  {
    path:'sampana',
    component : SampanaComponent
  },
  {
    path:'rantsana',
    component : RantsanaSyAntokoMpihiraComponent
  },
  {
    path:'asa',
    component : AsaSySampanasaComponent
  },
  {
    path:'taranaka',
    component : TaranakaComponent
  },
  {
    path:'**',
    component : NotFoundComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
