import { describe, it } from "node:test";
import jsid from "../src/index";
import { expect } from "chai";

describe("JSID", () => {
  it("Valid First Name (Male)", () => {
    const firstName = jsid.getFirstName("M");
    console.log("Generated first name: " + firstName);
    expect(firstName).to.be.a("string");
    expect(firstName).to.have.length.above(0);
  });
  it("Valid First Name (Female)", () => {
    const firstName = jsid.getFirstName("F");
    console.log("Generated first name: " + firstName);
    expect(firstName).to.be.a("string");
    expect(firstName).to.have.length.above(0);
  });
  it("Valid Full Name (Male)", () => {
    const fullName = jsid.getFullName("M");
    console.log("Generated full name: " + fullName);
    expect(fullName).to.be.a("string");
    expect(fullName).to.have.length.above(0);
    expect(fullName.split(" ")).to.have.lengthOf(2);
  });
  it("Valid Full Name (Female)", () => {
    const fullName = jsid.getFullName("F");
    console.log("Generated full name: " + fullName);
    expect(fullName).to.be.a("string");
    expect(fullName).to.have.length.above(0);
    expect(fullName.split(" ")).to.have.lengthOf(2);
  });
  it("Valid Unique ID", () => {
    const uniqueID = jsid.getUniqueID();
    console.log("Generated unique ID: " + uniqueID);
    expect(uniqueID).to.be.a("string");
    expect(uniqueID).to.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    );
  });
});
