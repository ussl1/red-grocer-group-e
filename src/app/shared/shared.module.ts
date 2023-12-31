import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './lazy-loading/product-card/product-card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductCardComponent,
  ]
})
export class SharedModule { }
