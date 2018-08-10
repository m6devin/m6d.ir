import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio = [];
  dir: '';
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    const ld = this.i18n.getLangAndDir();
    this.dir = ld.dir;
    this.portfolio = portfolio[ld.lang];
  }

}

const portfolio = {
  fa: [
    {
      title: 'اتوماسیون اورژانس فارس',
      short_description: 'سامانه هدایت و راهبری مرکز فوریت های پزشکی استان فارس',
      url: '',
      image: '/assets/img/portfolio/ems-thumbnail.jpg',
      technologies: ['Go', 'Laravel', 'Mysql', 'Postgresql', 'Realtime', 'Android', 'Angular']
    },
    {
      title: 'ارگ کلینیک',
      short_description: 'ارائه خدمات توانبخشی در منزل. شامل خدمات گفتار درمانی و کاردرمانی و ...',
      url: 'http://arg-clinic.com',
      image: '/assets/img/portfolio/03-thumbnail.jpg',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap']
    },
    {
      title: 'سازه بوک',
      short_description: ' ارایه دهنده امکانات استعلام قیمت به صورت آنلاین و بانک اطلاعات در حوزه ساخت و ساز',
      url: 'http://sazebook.com',
      image: '/assets/img/portfolio/sazebook-thumbnail.png',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap']
    },
    {
      title: 'عروس بوک',
      short_description: 'بانک جامع اطلاعاتی خدمات عروسی، باغ وتالار، گلفروشی و ...',
      url: 'http://aroosbook.com',
      image: '/assets/img/portfolio/aroosbook-thumbnail.png',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap']
    },
    {
      title: 'سامانه CRM رستوران باغ راز',
      short_description: 'رستوران آنلاین ، پیش سفارش غذا، رزرو میز، باشگاه مشتریان',
      url: 'http://bagheraaz.com',
      image: '/assets/img/portfolio/bagheraaz-thumbnail.png',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap', 'Android']
    },
    {
      title: 'بازارگستر',
      short_description: 'اتوماسیون فروش و بازاریابی محصولات پگاه در جنوب کشور',
      url: 'http://pegah3.ir',
      image: '/assets/img/portfolio/pegah-thumbnail.png',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap', 'Android']
    },

  ],
  en: [
    {
      title: 'Fars EMS application',
      short_description: 'Handle EMS missions',
      url: '',
      image: '/assets/img/portfolio/ems-thumbnail.jpg',
      technologies: ['Go', 'Laravel', 'Mysql', 'Postgresql', 'Realtime', 'Android', 'Angular']
    },
    {
      title: 'ARG Clinic',
      short_description: 'Rehabilitation services',
      url: 'http://arg-clinic.com',
      image: '/assets/img/portfolio/03-thumbnail.jpg',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap']
    },
    {
      title: 'Sazebook',
      short_description: 'Directory of building service providers',
      url: 'http://sazebook.com',
      image: '/assets/img/portfolio/sazebook-thumbnail.png',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap']
    },
    {
      title: 'Aroosbook',
      short_description: 'Directory of wedding service providers',
      url: 'http://aroosbook.com',
      image: '/assets/img/portfolio/aroosbook-thumbnail.png',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap']
    },
    {
      title: 'Bagheraaz\'s CRM',
      short_description: 'A great restaurant in Shiraz, Order your food, reserve your table, etc',
      url: 'http://bagheraaz.com',
      image: '/assets/img/portfolio/bagheraaz-thumbnail.png',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap', 'Android']
    },
    {
      title: 'Bazar Gostar',
      short_description: 'HIS, Contract manager, Marketing, Navigation system information, etc',
      url: 'http://pegah3.ir',
      image: '/assets/img/portfolio/pegah-thumbnail.png',
      technologies: ['Symfony', 'PHP', 'Mysql', 'Bootstrap', 'Android']
    },

  ],
};
