import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorLabel'
})
export class AuthorLabelPipe implements PipeTransform {

  transform(value: string): string {
    return value;
  }

}
