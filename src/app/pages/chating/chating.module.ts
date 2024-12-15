import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { inject, NgModule } from '@angular/core';
import { NgIconsModule, provideNgIconLoader, withCaching } from '@ng-icons/core';
import { tablerHeart, tablerHeartBroken } from '@ng-icons/tabler-icons';
import { MessageWidgetModule } from '../../shared/message-widget/message-widget.module';
import { ChatingComponent } from './chating.component';

@NgModule({
  imports: [
    CommonModule,
    MessageWidgetModule,
    NgIconsModule.withIcons({
      tablerHeart,
      tablerHeartBroken
    }),
  ],
  declarations: [
    ChatingComponent
  ],
  providers: [
    provideHttpClient(),
    provideNgIconLoader(name => {
      const http = inject(HttpClient);
      return http.get(`/public/icons/${name}.svg`, { responseType: 'text' });
    }, withCaching())
  ],
  exports: [
    ChatingComponent
  ]
})
export class ChatingModule { }
