import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fa } from './messages.fa';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  fa = fa;
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
    if (this[this.lang] === undefined || this[this.lang] == null) {
      return id;
    }
    const translated = this[this.lang][id] || id;

    return translated;
  }
}
