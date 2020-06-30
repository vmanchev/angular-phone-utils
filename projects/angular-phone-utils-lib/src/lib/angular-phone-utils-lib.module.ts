import { NgModule } from "@angular/core";
import { InternationalFormatPipe } from "./international-format.pipe";
import { NationalFormatPipe } from "./national-format.pipe";

@NgModule({
  declarations: [InternationalFormatPipe, NationalFormatPipe],
  exports: [InternationalFormatPipe, NationalFormatPipe],
})
export class AngularPhoneUtilsLibModule {}
