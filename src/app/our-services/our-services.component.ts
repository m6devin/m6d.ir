import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  services = [];
  dir: '';
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    const ld = this.i18n.getLangAndDir();
    this.dir = ld.dir;
    this.services = services[ld.lang];
  }

}

const services: any = {
  fa: [
    {
      title: 'طراحی وب',
      icon: 'globe',
      short_description: 'طراحی و پیاده سازی سامانه های تحت وب',
    },
    {
      title: 'تجارت الکترونیک',
      icon: 'shopping-cart',
      short_description: 'طراحی و پیاده سازی سیستم های فروشگاهی',
    },
    {
      title: 'طراحی واکنشگرا',
      icon: 'laptop',
      short_description: 'طراحی مدرن',
    },
  ],
  en: [
    {
      title: 'Web Design',
      icon: 'globe',
      short_description: '',
    },
    {
      title: 'E-Commerce',
      icon: 'shopping-cart',
      short_description: '',
    },
    {
      title: 'Responsive Design',
      icon: 'laptop',
      short_description: '',
    },
  ],
};
