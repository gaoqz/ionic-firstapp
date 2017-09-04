import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  subject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  altBackground$: Observable<boolean> = this.subject.asObservable();
  setBackground(isAlt: boolean) {
    this.subject.next(isAlt);
  }

  isAltBackground(): Observable<boolean> {
    return this.altBackground$;
  }
}
