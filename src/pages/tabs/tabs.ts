import { FavoritesPage } from './../favorites/favorites';
import { LibraryPage } from './../library/library';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  libraryPage = LibraryPage;
  favoritesPage = FavoritesPage;

  constructor() {}

}
