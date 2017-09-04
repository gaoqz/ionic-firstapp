import { QuotesService } from './../../services/quotes.service';
import { Quote } from './../../data/quotes.interface';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private quotesService: QuotesService) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [{
        text: 'Yes,go ahead',
        handler: () => {
          this.quotesService.addQuoteToFavorites(selectQuote);
        }
      },
      {
        text: 'No,I changed my mind!',
        role: 'cancle',
        handler: () => {
          console.log('cancle');
        }
      }]
    });

    alert.present();
  }

  onRemoveToFavorite(quote: Quote) {
    this.quotesService.removeQuoteToFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isFavoriteQuotes(quote);
  }

}
