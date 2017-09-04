import { Observable } from 'rxjs';
import { SettingsService } from './../../services/settings.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  altBackground$: Observable<boolean>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.altBackground$ = this.settingsService.altBackground$;
  }

  onToggle(toggle: Toggle) {
    this.settingsService.setBackground(toggle.checked);
  }

}
