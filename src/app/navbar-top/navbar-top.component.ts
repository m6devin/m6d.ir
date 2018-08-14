import { Component, OnInit, HostListener } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {
  navIsFixed = false;
  lang = 'en';
  langs = [
    {
      alpha2code: 'fa',
      title: 'پارسی',
    },
    {
      alpha2code: 'en',
      title: 'EN',
    }
  ];
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    this.lang = this.i18n.getLang();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  changeLang() {
    const path = window.location.origin + '?lang=' + this.lang;
    window.location.href = path;
  }

}
