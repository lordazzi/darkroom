import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatingComponent } from './chating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatingComponent
  ],
  exports: [
    ChatingComponent
  ]
})
export class ChatingModule { }
