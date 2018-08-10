import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  public lang = 'en';
  public dir = 'ltr';

  constructor(private route: ActivatedRoute) {
    this.getLangAndDir();
  }

  getLangAndDir(): any {
    const url = window.location.href;
    const name = 'lang';
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) {
      return {
        lang: this.lang,
        dir: this.dir,
      };
    }
    if (!results[2]) {
      return {
        lang: this.lang,
        dir: this.dir,
      };
    }

    this.lang = decodeURIComponent(results[2].replace(/\+/g, ' '));
    if (this.lang === 'fa' || this.lang === 'ar') {
      this.dir = 'rtl';
    }

    return {
      lang: this.lang,
      dir: this.dir,
    };

  }

  trans(id: string) {

    let langFile: any;
    try {
      langFile = require('./messages.' + this.lang);
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
