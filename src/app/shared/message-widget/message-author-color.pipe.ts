import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../../domain/gender.enum';

@Pipe({
  name: 'messageAuthorColor'
})
export class MessageAuthorColorPipe implements PipeTransform {

  transform(gender: Gender): string {
    if (gender === Gender.MALE) {
      return 'bg-male';
    } else {
      return 'bg-female';
    }
  }
}
