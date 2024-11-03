import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { NgIconsModule, provideNgIconsConfig } from "@ng-icons/core";
import { tablerHeart, tablerHeartBroken } from "@ng-icons/tabler-icons";
import { ChatingModule } from "./pages/chating/chating.module";
import { SearchingDarkroomModule } from "./pages/searching-darkroom/searching-darkroom.module";
import { SelectAttractedGenderModule } from "./pages/select-attracted-gender/select-attracted-gender.module";
import { SelectUserGenderModule } from "./pages/select-user-gender/select-user-gender.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      tablerHeart,
      tablerHeartBroken
    }),
    ChatingModule,
    SelectUserGenderModule,
    SearchingDarkroomModule,
    SelectAttractedGenderModule
  ],
  providers: [
    provideNgIconsConfig({
      size: '1rem'
    })
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
