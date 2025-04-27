import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorMessagesObservable } from './shared/error-handling/error-messages.observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private subscriptions = new Subscription();

  constructor(
    private error$: ErrorMessagesObservable
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.error$.subscribe(message => console.error(message)));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
