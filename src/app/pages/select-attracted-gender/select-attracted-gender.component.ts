import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gender } from '../../domain/gender.enum';
import { firstValueFrom, timer } from 'rxjs';

@Component({
  selector: 'dark-select-attracted-gender',
  templateUrl: './select-attracted-gender.component.html',
  styleUrl: './select-attracted-gender.component.scss'
})
export class SelectAttractedGenderComponent {

  genderMale = Gender.MALE;
  genderFemale = Gender.FEMALE;

  attracted: Gender | null = null;
  animateOut = false;

  constructor(
    private router: Router
  ) { }

  async attractedChoose(gender: Gender | null): Promise<void> {
    this.attracted = gender;
    await firstValueFrom(timer(800));
    this.animateOut = true;
    await firstValueFrom(timer(700));
    await this.router.navigate(['/searching']);
  }
}
