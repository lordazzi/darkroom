import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatingModule } from './pages/chating/chating.module';
import { SelectAttractedGenderModule } from './pages/select-attracted-gender/select-attracted-gender.module';
import { SelectUserGenderModule } from './pages/select-user-gender/select-user-gender.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChatingModule,
    SelectUserGenderModule,
    SelectAttractedGenderModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'darkroom';
}
