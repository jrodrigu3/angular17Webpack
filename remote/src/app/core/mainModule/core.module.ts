import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainPageComponent } from '../../pages/main-page/main-page.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MainPageComponent
  ]
})
export class CoreModule { }
