import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingDarkroomComponent } from './searching-darkroom.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SearchingDarkroomComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchingDarkroomComponent
  ]
})
export class SearchingDarkroomModule { }
