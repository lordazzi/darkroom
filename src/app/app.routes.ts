import { Routes } from '@angular/router';
import { SelectUserGenderComponent } from './pages/select-user-gender/select-user-gender.component';
import { SelectAttractedGenderComponent } from './pages/select-attracted-gender/select-attracted-gender.component';
import { ChatingComponent } from './pages/chating/chating.component';

export const routes: Routes = [
  {
    path: 'select-gender',
    component: SelectUserGenderComponent
  },

  {
    path: 'attracted',
    component: SelectAttractedGenderComponent
  },

  {
    path: 'chating',
    component: ChatingComponent
  }
];
