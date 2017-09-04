import { Quote } from './../data/quotes.interface';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class QuotesService {
  private favoriteQuotes: Quote[] = [];

  subject: BehaviorSubject<Quote[]> = new BehaviorSubject([]);
  favoriteQuotes$: Observable<Quote[]> = this.subject.asObservable();

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);

    // 数组去重
    this.favoriteQuotes = Array.from(new Set(this.favoriteQuotes));

    this.subject.next(this.favoriteQuotes);
  }

  removeQuoteToFavorites(quote: Quote) {
    const p = this.favoriteQuotes.findIndex((quoteEl: Quote) => quote.id === quoteEl.id);
    this.favoriteQuotes.splice(p, 1);

    this.subject.next(this.favoriteQuotes);
  }

  isFavoriteQuotes(quote: Quote) {
    return this.favoriteQuotes.find((quoteEl: Quote) => quoteEl.id === quote.id);
  }

}
