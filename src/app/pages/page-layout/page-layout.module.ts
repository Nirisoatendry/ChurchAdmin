import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from 'src/app/features/header/header.component';
import { SidemenuComponent } from 'src/app/features/sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    
  ]
})
export class PageLayoutModule { }
