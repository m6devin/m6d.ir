import { Component, OnInit } from '@angular/core';
import { I18nService } from './i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dir = 'ltr';
  constructor(private i18n: I18nService) {}
  ngOnInit() {
    this.dir = this.i18n.getLangAndDir().dir;
  }
}
