import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  lang = 'en';
  about = {
    // tslint:disable-next-line:max-line-length
    fa: ' برنامه نویس به زبانهای Golang و  PHP که به فریمورک های Symfony و Laravel نیز تسلط دارم. ' +
    'فارغ التحصیل رشته ی فناوری اطلاعات از دانشگاه پیام نور شیراز، ' +
    'برنامه نویسی رو از سال دوم دانشگاه شروع کردم و به شدت به شغلم علاقمند هستم. ' +
    'بسیار علاقه مند در یادگیری و استفاده از تکنولوژی های روز!',
    // tslint:disable-next-line:max-line-length
    en: 'Experienced Developer with a demonstrated history of working in the program development industry. Skilled in Golang, PHP, Laravel , Angular and Git. Strong engineering professional with a Engineer’s Degree focused in Information Technology from Shiraz Payame Noor University.'
  };
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    this.lang = this.i18n.getLang();
  }


}

