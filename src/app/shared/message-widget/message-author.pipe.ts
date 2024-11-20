import { Pipe, PipeTransform } from '@angular/core';
import { Stranger } from '../../domain/stranger.model';
import { Gender } from '../../domain/gender.enum';

@Pipe({
  name: 'messageAuthor'
})
export class MessageAuthorPipe implements PipeTransform {

  transform(author: string | null, stranger: Stranger): string {
    if (author === stranger.pubkey) {
      if (stranger.gender === Gender.MALE) {
        return 'He';
      } else {
        return 'She';
      }
    }

    return 'You';
  }

}
