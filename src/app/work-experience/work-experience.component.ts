import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  experiences = [];
  dir: '';
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    const ld = this.i18n.getLangAndDir();
    this.dir = ld.dir;
    this.experiences = experiences[ld.lang];
  }

}


const experiences = {
  fa: [
    {
      title: 'برنامه نویس PHP در شرکت بهمنش نوین',
      date: 'تیرماه  1393 ← بهمن 1393 (8 ماه)',
      description: 'شروع رسمی کار در بازار کار. به عنوان fullstack developer.',
    },
    {
      title: 'PHP Developer - آزادکار',
      date: 'اسفند 1393 ← خرداد 1394 (4 ماه)',
      description: 'مدت کوتاهی به عنوان بک آزادکار در بازارکار ۲ پروژه تحت وب فروشگاهی را به همراه یکی از دوستان پیاده سازی کردیم.',
    },
    {
      title: 'برنامه نویس PHP و Synfony2 در ثانیه پردازان فناوری اطلاعات',
      date: 'تیر 1394 ← خرداد 1396 (2 سال)',
      description: 'تجربه‌ی کار در یک محیط خلاق و استارتاپی.',
    },
    {
      title: 'برنامه نویس Golang و Laravel در ثانیه پرداز اندیشه رسپینا',
      date: 'تیر 1396 ← اکنون',
      description: 'تجربه کار در پروژه‌ی مرکز فوریت های پزشکی اورژانس فارس در یک تیم حرفه‌ای.',
    },
  ],
  en: [
    {
      title: 'PHP Developer at Behmanesh Novin',
      date: 'Jun 2014 → Mar 2015 (8 months)',
    },
    {
      title: 'PHP Developer at Self Employed - Freelancer',
      date: 'Mar 2015 → Jun 2015 (4 months)',
    },
    {
      title: 'PHP and Synfony2 web developer at Saniyeh Pardazan Fanavari Etelaat',
      date: 'Jun 2015 → May 2017 (2 years)',
    },
    {
      title: 'Golang and Laravel Developer at Andishe Raspina',
      date: 'May 2017 → Current (1 year, 4 months)'
    },
  ]
};
