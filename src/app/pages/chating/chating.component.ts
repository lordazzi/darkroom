import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderTitleFactory } from './header-title.factory';
import { Gender } from '../../domain/gender.enum';

@Component({
  selector: 'dark-chating',
  templateUrl: './chating.component.html',
  styleUrl: './chating.component.scss',
  providers: [
    HeaderTitleFactory
  ]
})
export class ChatingComponent implements OnInit {
  @ViewChild('history')
  historyElement!: ElementRef;

  title = '';

  constructor(
    private headerTitleFactory: HeaderTitleFactory
  ) { }

  ngOnInit(): void {
    this.scrollBottom();
    this.loadTitle();
  }

  private scrollBottom(): void {
    setTimeout(() => {
      const el = this.historyElement.nativeElement;
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    });
  }

  private loadTitle(): void {
    //  FIXME: give from url
    this.title = this.headerTitleFactory.getTitle(Gender.FEMALE);
  }
}
