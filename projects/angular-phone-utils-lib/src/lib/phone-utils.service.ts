import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
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
   * International format without inner spaces (PNF.E164)
   * 
   * Instead of "+359 88 123" it will return "+35988123"
   * 
   * @param value 
   * @param country 
   */
  getPlain(value: string, country: string): string {
    return this.phoneUtil.format(this.getRawValue(value, country), this.PNF.E164)
  }

  /**
   * Is valid phone number?
   * 
   * The method will return true when arguments relates to a 
   * phone number from the selected country.
   * 
   * @param value 
   * @param country 
   */
  isValid(value: string, country: string): boolean {

    try {
      return this.phoneUtil.isValidNumberForRegion(
        this.getRawValue(value, country),
        country
      );
    } catch (e) {
      return false;
    }
  }

  /**
   * Reactive form validator
   * 
   * Will set *phoneInvalid* property in related form control error's object.
   * 
   * @param country 
   */
  isValidFormControl(country: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      if (!control.value) {
        return null;
      }

      try {
        return !this.isValid(control.value, country) ? { phoneInvalid: true } : null;
      } catch (e) {
        return { phoneInvalid: true }
      }
    }
  }

  private getRawValue(value: any, country: string) {
    return this.phoneUtil.parseAndKeepRawInput(value, country);
  }

}
