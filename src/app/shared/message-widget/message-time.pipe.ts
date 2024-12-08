import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'messageTime'
})
export class MessageTimePipe implements PipeTransform {

  transform(time: number): string {
    const now = this.getCurrentUnixTimestamp();
    const difference = time - now;

    if (difference < 60) {
      return 'now';
    } else {
      const minutes = Math.floor(difference / 60);
      return `${minutes}min`;
    }
  }

  getCurrentUnixTimestamp(): number {
    return Math.floor(new Date().getTime() / 1000);
  }
}
