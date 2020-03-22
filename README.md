# Angular Phone Utils

This an Angular library (and can be used with Angular projects only). It is wrapper arround [google-libphonenumber](https://www.npmjs.com/package/google-libphonenumber) for Angular.

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