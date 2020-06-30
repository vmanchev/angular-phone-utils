import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import {
  parsePhoneNumberFromString,
  CountryCode,
  PhoneNumber,
} from "libphonenumber-js/max";

@Injectable({
  providedIn: "root",
})
export class PhoneUtilsService {
  /**
   * Transform a given phone number to international format
   *
   * @param value Phone numer
   * @param country Two-letters country code
   */
  getInternational(value: string, country: string): string {
    const phoneNumber: PhoneNumber = parsePhoneNumberFromString(
      value,
      country as CountryCode
    );

    if (phoneNumber) {
      return phoneNumber.formatInternational();
    }

    return value;
  }

  /**
   * Transform a given phone number to its national format
   *
   * @param value Phone numer
   * @param country Two-letters country code
   */
  getNational(value: string, country: string): string {
    const phoneNumber: PhoneNumber = parsePhoneNumberFromString(
      value,
      country as CountryCode
    );

    if (phoneNumber) {
      return phoneNumber.formatNational();
    }

    return value;
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
    const phoneNumber: PhoneNumber = parsePhoneNumberFromString(
      value,
      country as CountryCode
    );

    if (phoneNumber) {
      return phoneNumber.number.toString();
    }

    return value ? value.replace(/ /g, "") : value;
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
    const phoneNumber: PhoneNumber = parsePhoneNumberFromString(
      value,
      country as CountryCode
    );

    return phoneNumber.isValid();
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
        return !this.isValid(control.value, country)
          ? { phoneInvalid: true }
          : null;
      } catch (e) {
        return { phoneInvalid: true };
      }
    };
  }
}
