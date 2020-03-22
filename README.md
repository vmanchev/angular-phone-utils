# Angular Phone Utils

This an Angular library (and can be used with Angular projects only). It is wrapper arround [google-libphonenumber](https://www.npmjs.com/package/google-libphonenumber) for Angular.

## PhoneUtilsService

1. Usage

```
import { PhoneUtilsService } from 'angular-phone-utils-lib';

// Inject in your component or service:
constructor(private phoneUtils: PhoneUtilsService) { }
```

2. Methods

- **getInternational(value: string, country: string)** - Transform a given phone number to international format
  - @param value Phone numer
  - @param country Two-letters country code
  - @returns string

- **getNational(value: string, country: string)** - Transform a given phone number to its national format
  - @param value Phone numer
  - @param country Two-letters country code
  - @returns string