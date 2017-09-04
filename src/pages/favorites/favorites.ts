import { SettingsService } from './../../services/settings.service';
import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes.service';
import { Quote } from './../../data/quotes.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes$: Observable<Quote[]>;
  backGround$: Observable<boolean>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private quotesService: QuotesService,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes$ = this.quotesService.favoriteQuotes$;
    this.backGround$ = this.settingsService.altBackground$;
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);

    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
    // modal.overlay['willLeave'].subscribe((remove: boolean) => console.log(remove));
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteToFavorites(quote);
  }

}
