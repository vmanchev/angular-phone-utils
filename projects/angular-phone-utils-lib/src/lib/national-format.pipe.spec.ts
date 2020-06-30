import { NationalFormatPipe } from "./national-format.pipe";
import { TestBed } from "@angular/core/testing";
import { PhoneUtilsService } from "./phone-utils.service";

describe("NationalFormatPipe", () => {
  const phoneUtilService = TestBed.inject(PhoneUtilsService);
  const pipe = new NationalFormatPipe(phoneUtilService);

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should format a raw phone number into national format", () => {
    expect(pipe.transform("+359876386851")).toEqual("087 63 86 851");
  });

  it("should format an international phone number into national format", () => {
    expect(pipe.transform("+359 87 63 86 851")).toEqual("087 63 86 851");
  });
});
