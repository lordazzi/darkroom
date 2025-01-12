import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TalkToStrangerParody } from '@belomonte/ngx-parody-api';
import { NostrEvent } from '@nostrify/nostrify';
import { Subscription } from 'rxjs';
import { ChatParticipant } from '../../domain/chat-participant.model';
import { Gender } from '../../domain/gender.enum';
import { Message } from '../../domain/message.model';
import { GlobalErrorHandler } from '../../shared/error-handling/global.error-handler';
import { HeaderTitleFactory } from './header-title.factory';

@Component({
  selector: 'dark-chating',
  templateUrl: './chating.component.html',
  styleUrl: './chating.component.scss',
  providers: [
    HeaderTitleFactory
  ]
})
export class ChatingComponent implements OnInit, OnDestroy {

  @ViewChild('history')
  historyElement!: ElementRef;

  title = '';
  messages = new Array<Message>();

  genderMale = Gender.MALE;
  genderFemale = Gender.FEMALE;

  youDisconnected = false;
  partnerDisconnected = false;

  userIsTyping = false;
  partnerIsTyping = false;

  userGender!: Gender;
  searchGender!: Gender;

  partner!: ChatParticipant;
  user!: ChatParticipant;
  typingTimeoutId = 0;

  private subscriptions = new Subscription();

  constructor(
    private globalErrorHandler: GlobalErrorHandler,
    private headerTitleFactory: HeaderTitleFactory,
    private talkToStrangerParody: TalkToStrangerParody
  ) { }

  ngOnInit(): void {
    this.fetchRouteData();
    this.loadTitle();
    this.scrollBottom();
    this.startConversation();
    this.listenCurrentUser();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private fetchRouteData(): void {
    const { user, search, partner } = history.state;

    this.userGender = user;
    this.searchGender = search;
    this.partner = partner;
  }

  private scrollBottom(): void {
    setTimeout(() => {
      const el = this.historyElement.nativeElement;
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  private loadTitle(): void {
    this.title = this.headerTitleFactory.getTitle(this.searchGender);
  }

  private startConversation(): void {
    console.info('partner:', this.partner);
    this.subscriptions.add(this.talkToStrangerParody
      .listenMessages(this.partner)
      .subscribe({
        next: event => this.addMessageFromPartner(event)
      }));

    this.subscriptions.add(this.talkToStrangerParody
      .listenStrangerStatus(this.partner)
      .subscribe({
        next: event => this.partnerIsTyping = event.content === 'typing'
      }));
  }

  private listenCurrentUser(): void {
    this.subscriptions.add(this.talkToStrangerParody.listenCurrentUser().subscribe(
      user => {
        this.user = {
          ...user,
          gender: this.userGender,
          me: true
        };
        console.info('user:', this.user);
      }
    ));
  }

  private addMessageFromPartner(event: NostrEvent): void {
    this.talkToStrangerParody
      .openEncryptedDirectMessage(this.partner, event)
      .then(text => {
        const paragraphs = text
          .replace(/\r/g, '')
          .split('\n')
          .map(p => p.trim());

        this.messages.push({
          paragraphs,
          author: this.partner,
          time: event.created_at
        });

        this.scrollConversationToTheEnd();
      });
  }

  scrollConversationToTheEnd(): void {
    setTimeout(() => {
      const el = this.historyElement.nativeElement;
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  async sendMessage(el: { value: string }): Promise<void> {
    const text = el.value;
    const partner = this.partner;
    setTimeout(() => {
      el.value = '';
      this.userIsTyping = false;
    });

    if (partner && text.length) {
      const message: Message = {
        author: this.user,
        paragraphs: text.split('\n'),
        time: Math.floor(new Date().getTime() / 1000)
      };

      this.messages.push(message);
      this.scrollConversationToTheEnd();

      try {
        const typingPromise = this.talkToStrangerParody.stopTyping();
        const messagePromise = this.talkToStrangerParody.sendMessage(partner, text);
        await Promise.all([typingPromise, messagePromise]);
      } catch (e) {
        message.error = this.globalErrorHandler.getErrorMessage(e as Error).join('; ');
      }
    }
  }

  onTyping(): void {
    const typingTimeoutAmount = 2_000;
    this.userIsTyping = true;
    if (!this.typingTimeoutId) {
      this.talkToStrangerParody.isTyping();
    }

    clearTimeout(this.typingTimeoutId);
    this.typingTimeoutId = Number(setTimeout(() => {
      this.talkToStrangerParody.stopTyping();
      this.typingTimeoutId = 0;
      this.userIsTyping = false;
    }, typingTimeoutAmount));
  }
}
