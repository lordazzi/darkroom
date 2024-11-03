import { RouterModule, Routes } from '@angular/router';
import { SelectUserGenderComponent } from './pages/select-user-gender/select-user-gender.component';
import { SelectAttractedGenderComponent } from './pages/select-attracted-gender/select-attracted-gender.component';
import { SearchingDarkroomComponent } from './pages/searching-darkroom/searching-darkroom.component';
import { ChatingComponent } from './pages/chating/chating.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'select-gender',
    component: SelectUserGenderComponent
  },

  {
    path: 'attracted',
    component: SelectAttractedGenderComponent
  },

  {
    path: 'searching',
    component: SearchingDarkroomComponent
  },

  {
    path: 'chating',
    component: ChatingComponent
  },

  {
    path: '',
    redirectTo: 'select-gender',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }