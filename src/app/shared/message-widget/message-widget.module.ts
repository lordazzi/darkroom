import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageTimePipe } from './message-time.pipe';
import { AuthorLabelPipe } from './author-label.pipe';
import { MessageAuthorPipe } from './message-author.pipe';

@NgModule({
  declarations: [
    MessageTimePipe,
    AuthorLabelPipe,
    MessageAuthorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessageTimePipe,
    AuthorLabelPipe,
    MessageAuthorPipe
  ]
})
export class MessageWidgetModule { }
