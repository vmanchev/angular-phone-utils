import { Injectable } from '@angular/core';
import * as glpn from 'google-libphonenumber/dist/libphonenumber.js'

@Injectable({
  providedIn: 'root'
})
export class PhoneUtilsService {

  private PNF = glpn.PhoneNumberFormat;
  private phoneUtil = glpn.PhoneNumberUtil.getInstance();

  /**
   * Transform a given phone number to international format
   * 
   * @param value Phone numer
   * @param country Two-letters country code
   */
  getInternational(value: string, country: string): string {
    return this.phoneUtil.format(this.getRawValue(value, country), this.PNF.INTERNATIONAL)
  }

  /**
   * Transform a given phone number to its national format
   * 
   * @param value Phone numer
   * @param country Two-letters country code
   */
  getNational(value: string, country: string): string {
    return this.phoneUtil.format(this.getRawValue(value, country), this.PNF.NATIONAL)
  }

  private getRawValue(value: any, country: string) {
    return this.phoneUtil.parseAndKeepRawInput(value, country);
  }

}
