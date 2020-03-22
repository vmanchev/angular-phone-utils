import { Pipe, PipeTransform } from '@angular/core';
import { PhoneUtilsService } from './phone-utils.service';

@Pipe({
  name: 'internationalFormat'
})
export class InternationalFormatPipe implements PipeTransform {

  constructor(
    private phoneUtilsService: PhoneUtilsService
  ) { }

  transform(value: string, ...args: string[]): unknown {
    return this.phoneUtilsService.getInternational(value, args[0]);
  }

}
