import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '@belomonte/async-modal-ngx';
import { ErrorMessagesObservable } from './shared/error-handling/error-messages.observable';
import { DisconnectModalComponent } from './shared/disconnect-modal/disconnect-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private subscriptions = new Subscription();

  constructor(
    private modalService: ModalService,
    private error$: ErrorMessagesObservable
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.error$.subscribe(message => console.error(message)));
    this.modalService
      .createModal(DisconnectModalComponent)
      .build()
      .subscribe({
        next: response => {
          console.info('data received: ', response);
        },
        error: error => console.error(error),
        complete: () => console.info('modal was closed')
      });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
