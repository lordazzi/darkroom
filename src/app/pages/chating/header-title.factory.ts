import { Injectable } from '@angular/core';
import { Gender } from '../../domain/gender.enum';

@Injectable()
export class HeaderTitleFactory {

  private [Gender.MALE] = ['guy','dude','man','pal','male','mister','lord', 'potential husband'];
  private [Gender.FEMALE] = ['maiden','woman','lady','female','miss','dame','madam','missy','potential wife'];
  private both = ['partner','person','human','person'];
  private advice = ['kind','nice','fine','pretty','cool','tender','lovely','good','friendly','awesome','great','gentle','positive','gracious','cordial'];

  constructor() { }

  getTitle(genderFound: Gender) {
    const whos = new Array<string>().concat(this[genderFound]).concat(this.both);
    const who = whos[Math.floor(Math.random() * whos.length)];
    const adjective = this.advice[Math.floor(Math.random() * this.advice.length)];

    return `new ${who} found, be ${adjective}`;
  }
}
