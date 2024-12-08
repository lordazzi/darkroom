import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageAuthorColorPipe } from './message-author-color.pipe';
import { MessageAuthorNamePipe } from './message-author-name.pipe';
import { MessageTimePipe } from './message-time.pipe';

@NgModule({
  declarations: [
    MessageTimePipe,
    MessageAuthorNamePipe,
    MessageAuthorColorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageTimePipe,
    MessageAuthorNamePipe,
    MessageAuthorColorPipe
  ]
})
export class MessageWidgetModule { }
