import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ProductCardComponent } from 'src/app/shared/lazy-loading/product-card/product-card.component';




@NgModule({
  declarations: [
    HomeComponent,
    FeatureCardComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
