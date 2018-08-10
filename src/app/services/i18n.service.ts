import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fa } from '../i18n/messages.fa';

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
    let translated = null;
    if (this[this.lang] === undefined || this[this.lang] == null) {
      return translated;
    }
    translated = this[this.lang][id] || null;

    return translated;
  }
}
