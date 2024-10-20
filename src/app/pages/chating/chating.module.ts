import { NgIconsModule } from '@ng-icons/core';
import { tablerHeart, tablerHeartBroken } from '@ng-icons/tabler-icons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatingComponent } from './chating.component';

@NgModule({
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      tablerHeart,
      tablerHeartBroken
    })
  ],
  declarations: [
    ChatingComponent
  ],
  exports: [
    ChatingComponent
  ]
})
export class ChatingModule { }
