# Angular Phone Utils

This an Angular library (and can be used with Angular projects only).

Since version 0.0.19, it is a wrapper arround [google-libphonenumber](https://www.npmjs.com/package/google-libphonenumber) for Angular. Because of the huge bundle size, from version 0.1.0 it was replaced by [libphonenumber-js](https://gitlab.com/catamphetamine/libphonenumber-js)

## Install

```
npm install --save angular-phone-utils-lib
```

## PhoneUtilsService

### Usage

```
import { PhoneUtilsService } from 'angular-phone-utils-lib';

// Inject in your component or service:
constructor(private phoneUtils: PhoneUtilsService) { }
```

### Methods

- **getInternational(value: string, country: string)** - Transform a given phone number to international format

  - @param value Phone numer
  - @param country Two-letters country code
  - @returns string

- **getNational(value: string, country: string)** - Transform a given phone number to its national format

  - @param value Phone numer
  - @param country Two-letters country code
  - @returns string

- **getPlain(value: string, country: string)** - International format without inner spaces (PNF.E164)

  - @param value Phone numer
  - @param country Two-letters country code
  - @returns string

- **isValid(value: string, country: string)** - General purpose validator. Use in conjunction with other services
  and components. The method will return true when arguments relates to a phone number from the selected country.

  - @param value Phone numer
  - @param country Two-letters country code
  - @returns boolean

- **isValidFormControl(country: string)** - Reactive form validator. It will set **phoneInvalid** property
  in related form control error's object.
  - @param country Two-letters country code. Usage:

```
// app.component.ts
constructor(public phoneValidatorService: PhoneValidatorService) { }

public getForm() {
  this.form = new FormGroup({
    phone: new FormControl('', [
      Validators.required,
      this.phoneValidatorService.isValidPhone('BG')
    ])
  });
}

// app.component.html
<span *ngIf="form.get('phone')?.errors?.phoneInvalid">{{ 'FORM.ERROR.PHONE_FORMAT.INVALID' | translate }}</span>
```

## InternationalFormatPipe

### Usage

Import **AngularPhoneUtilsLibModule** in the module where you want to use it:

```
import { AngularPhoneUtilsLibModule } from 'angular-phone-utils-lib';


@NgModule({
  imports: [
    ...,
    AngularPhoneUtilsLibModule
  ]
})
export class UserModule() { }
```

And then it can be used as:

```
{{ '02 1234567' | internationalFormat : 'BG' }}
```

which will produce:

```
+359 2 123 4567
```

## NationalFormatPipe

### Usage

Import **AngularPhoneUtilsLibModule** in the module where you want to use it:

```
import { AngularPhoneUtilsLibModule } from 'angular-phone-utils-lib';


@NgModule({
  imports: [
    ...,
    AngularPhoneUtilsLibModule
  ]
})
export class UserModule() { }
```

And then it can be used as:

```
{{ '02 1234567' | nationalFormat : 'BG' }}
```

which will produce:

```
02 123 4567
```

## Build and publish

```
npm run build:publish
```
