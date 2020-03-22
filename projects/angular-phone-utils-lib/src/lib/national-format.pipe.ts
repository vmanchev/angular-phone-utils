import { Pipe, PipeTransform } from '@angular/core';
import { PhoneUtilsService } from './phone-utils.service';

@Pipe({
  name: 'nationalFormat'
})
export class NationalFormatPipe implements PipeTransform {

  constructor(
    private phoneUtilsService: PhoneUtilsService
  ) { }

  transform(value: string, ...args: string[]): unknown {
    return this.phoneUtilsService.getNational(value, args[0]);
  }

}
