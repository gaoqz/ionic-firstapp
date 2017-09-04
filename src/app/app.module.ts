import { QuotesService } from './../services/quotes.service';
import { SettingsService } from './../services/settings.service';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { SettingsPageModule } from './../pages/settings/settings.module';
import { QuotesPageModule } from './../pages/quotes/quotes.module';
import { QuotePageModule } from './../pages/quote/quote.module';
import { LibraryPageModule } from './../pages/library/library.module';
import { FavoritesPageModule } from './../pages/favorites/favorites.module';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    FavoritesPageModule,
    LibraryPageModule,
    QuotePageModule,
    QuotesPageModule,
    SettingsPageModule,
    TabsPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsService,
    QuotesService
  ]
})
export class AppModule {}
