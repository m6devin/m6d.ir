import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from './i18n.service';

@Pipe({
  name: 'trans'
})
export class I18nPipe implements PipeTransform {
  constructor(private i18n: I18nService) { }
  transform(value: any, args?: any): any {
    return this.i18n.trans(value);
  }

}
