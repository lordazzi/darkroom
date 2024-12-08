import { Pipe, PipeTransform } from '@angular/core';
import { ChatParticipant } from '../../domain/chat-participant.model';
import { Gender } from '../../domain/gender.enum';

@Pipe({
  name: 'messageAuthorName'
})
export class MessageAuthorNamePipe implements PipeTransform {

  transform(participant: ChatParticipant): string {
    if (participant.me) {
      return 'You';
    } else if (participant.gender === Gender.MALE) {
      return 'He';
    } else {
      return 'She';
    }
  }

}
