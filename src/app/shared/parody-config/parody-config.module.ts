import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParodyConfigNPoolOpts } from './parody-config.npool-opts';
import { POOL_OPTIONS_TOKEN, TalkToStrangerModule } from '@belomonte/ngx-parody-api';

@NgModule({
  imports: [
    CommonModule,
    TalkToStrangerModule
  ],
  providers: [
    {
      provide: POOL_OPTIONS_TOKEN,
      useClass: ParodyConfigNPoolOpts
    }
  ],
  exports: [
    TalkToStrangerModule
  ]
})
export class ParodyConfigModule { }
