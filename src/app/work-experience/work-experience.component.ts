import { Component, OnInit } from '@angular/core';
import { I18nService } from '../i18n/i18n.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  experinces = [];
  dir: '';
  constructor(private i18n: I18nService) { }

  ngOnInit() {
    const ld = this.i18n.getLangAndDir();
    this.dir = ld.dir;
    this.experinces = experinces[ld.lang];
  }

}


const experinces = {
  fa: [

  ],
  en: [
    {
      title: 'PHP Developer at Behmanesh Novin',
      date: 'Jun 2014 → Mar 2015 (10 months)'
    },
    {
      title: 'PHP Developer at Self Employed - Freelancer',
      date: 'Mar 2015 → Jun 2015 (4 months)'
    },
    {
      title: 'PHP and Synfony2 web developer at Saniyeh Pardazan Fanavari Etelaat',
      date: 'Jun 2015 → May 2017 (2 years)'
    },
    {
      title: 'Golang and Laravel Developer at Andishe Raspina',
      date: 'May 2017 → Current (1 year, 4 months)'
    },
  ]
};
