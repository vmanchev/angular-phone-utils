import { InternationalFormatPipe } from "./international-format.pipe";
import { TestBed } from "@angular/core/testing";
import { PhoneUtilsService } from "./phone-utils.service";

describe("InternationalFormatPipe", () => {
  const phoneUtilService = TestBed.inject(PhoneUtilsService);
  const pipe = new InternationalFormatPipe(phoneUtilService);

  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });
});
