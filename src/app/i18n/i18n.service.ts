import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private _lang = 'en';
  private _dir = 'ltr';

  constructor(private route: ActivatedRoute) {
    this.getLang();
  }

  getLang(): Observable<any> {
    return Observable.create((obs) => {
      this.route.queryParams.subscribe(params => {
        this._lang = params['lang'] || 'en';

        if (this._lang === 'fa' || this._lang === 'ar') {
          this._dir = 'rtl';
        }

        return obs.next({
          lang: this._lang,
          dir: this._dir,
        });

      }, err => {
        return obs.error(null);
      });
    });
  }

  trans(id: string): string {
    let langFile: any;
    try {
      langFile = require('./messages.' + this._lang);
    } catch (error) {
      return id;
    }

    if (langFile === undefined) {
      return id;
    }
    const translated = langFile['messages'][id] || id;

    return translated;
  }
}
