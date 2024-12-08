import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAttractedGenderComponent } from './select-attracted-gender.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SelectAttractedGenderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SelectAttractedGenderComponent
  ]
})
export class SelectAttractedGenderModule { }
