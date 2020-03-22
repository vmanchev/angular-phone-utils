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

  /**
   * Is valid phone number?
   * 
   * If both value and country are provided, the method will return true
   * when arguments relates to a phone number from the selected country.
   * 
   * If country is omitted and only value is provided, it will be more vogue 
   * guessture is it a valid phone number or not.
   * 
   * @param value 
   * @param country 
   */
  isValid(value: string, country?: string): boolean {
    if (!country) {
      return this.phoneUtil.isValidNumber(
        this.phoneUtil.parseAndKeepRawInput(value)
      );
    }

    return this.phoneUtil.isValidNumberForRegion(
      this.getRawValue(value, country)
    );
  }

  private getRawValue(value: any, country: string) {
    return this.phoneUtil.parseAndKeepRawInput(value, country);
  }

}
