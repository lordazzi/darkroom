import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectUserGenderComponent } from './select-user-gender.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SelectUserGenderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SelectUserGenderComponent
  ]
})
export class SelectUserGenderModule { }
