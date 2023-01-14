import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LisitryNyMpivavakaComponent } from './lisitry-ny-mpivavaka/lisitry-ny-mpivavaka.component';
import { HampiditraComponent } from './hampiditra/hampiditra.component';
import { SampanaComponent } from './sampana/sampana.component';
import { RantsanaSyAntokoMpihiraComponent } from './rantsana-sy-antoko-mpihira/rantsana-sy-antoko-mpihira.component';
import { AsaSySampanasaComponent } from './asa-sy-sampanasa/asa-sy-sampanasa.component';
import { TaranakaComponent } from './taranaka/taranaka.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';



@NgModule({
  declarations: [
    LisitryNyMpivavakaComponent,
    HampiditraComponent,
    SampanaComponent,
    RantsanaSyAntokoMpihiraComponent,
    AsaSySampanasaComponent,
    TaranakaComponent,
    NotFoundComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
