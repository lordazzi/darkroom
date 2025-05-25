import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FindStrangerParody } from '@belomonte/ngx-parody-api';

@Component({
  selector: 'dark-searching-darkroom',
  templateUrl: './searching-darkroom.component.html',
  styleUrl: './searching-darkroom.component.scss'
})
export class SearchingDarkroomComponent implements OnInit {

  controller = new AbortController();

  constructor(
    private router: Router,
    private findStrangerParody: FindStrangerParody
  ) { }

  ngOnInit(): void {
    if (this.validateRouteData()) {
      this.findStranger();
    } else {
      this.router.navigate(['select-gender']);
    }
  }

  private validateRouteData(): boolean {
    const { user, search } = history.state;
    if (!user || !search) {
      return false;
    }

    return true;
  }

  private findStranger(): void {
    const { user, search } = history.state;
    this.controller.signal.onabort = () => console.info('ABORT WAS LAUNCHED!!');

    this.findStrangerParody
      .searchStranger({
        signal: this.controller.signal,
        searchTags: [ search ],
        userTags: [ user ]
      })
      .then(partner => {
        this.router.navigate(['/chating'], {
          state: {
            user,
            search,
            partner: { ...partner, gender: search }
          }
        });
      }).catch(e => {
        // FIXME: preciso incluir uma modal de erro aqui
        this.controller.abort();
        this.router.navigate(['select-gender']);
      });
  }

  quit(): void {
    this.controller.abort();
    this.router.navigate(['select-gender']);
  }
}
