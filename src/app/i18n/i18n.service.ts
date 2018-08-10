import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fa } from './messages.fa';
import { en } from './messages.en';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  lang = 'en';
  dir = 'ltr';

  constructor(private route: ActivatedRoute) {
    this.getLang();
  }

  getLang() {
    const lang = this.route.snapshot.queryParamMap.get('lang') || 'en';
    this.lang = lang;

    if (this.lang === 'fa' || this.lang === 'ar') {
      this.dir = 'rtl';
    }
    return lang;
  }

  trans(id: string): string {
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
