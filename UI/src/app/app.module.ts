import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './modules/shared/navbar/navbar.component';
import {AlertComponent} from './modules/shared/alert/alert.component';
import {environment} from '../environments/environment.prod';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {appReducer} from './modules/store/app.reducers';
import {EffectsModule} from "@ngrx/effects";
import {FlashcardGroupEffects} from "./modules/flashcards/flashcard-group/store/flashcard-group.effects";
import {GameEffects} from "./modules/game/store/game.effects";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
    EffectsModule.forRoot([FlashcardGroupEffects, GameEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
