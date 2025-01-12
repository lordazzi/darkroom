import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisconnectModalComponent } from './disconnect-modal.component';
import { NgIconsModule } from '@ng-icons/core';
import { tablerHeart, tablerHeartBroken } from '@ng-icons/tabler-icons';

@NgModule({
  declarations: [
    DisconnectModalComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      tablerHeart,
      tablerHeartBroken
    }),
  ],
  exports: [
    DisconnectModalComponent
  ]
})
export class DisconnectModalModule { }
