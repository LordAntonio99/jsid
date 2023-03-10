const names_female = require("./names_female.js");
const names_male = require("./names_male.js");

const JSID = class {
  constructor(gender) {
    this._name = "JSID";
    gender = this.gender;
  }

  getFirstName(gender) {
    if (gender.toUpperCase() === "M") {
      return names_male[Math.floor(Math.random() * names_male.length)];
    } else if (gender.toUpperCase() === "F") {
      return names_female[Math.floor(Math.random() * names_female.length)];
    } else if (gender === undefined) {
      const rand_num = Math.floor(Math.random() * 2);
      if (rand_num === 0) {
        return names_female[Math.floor(Math.random() * names_female.length)];
      } else {
        return names_male[Math.floor(Math.random * names_male.length)];
      }
    }
    throw new Error("Bad usage, provide F for female or M for male.");
  }

  getSurname() {
    const surnames = require("./surnames.js");
    return surnames[Math.floor(Math.random() * surnames.length)];
  }

  /**
   *
   * @param {string} gender Genre of the name to be returned. F for female and M for male.
   * @return {string} Full name of the person.
   * @see https://documents-iota.vercel.app
   */
  getFullName(gender) {
    if (gender === undefined || gender === "") {
      throw new Error("Bad usage, provide F for female or M for male.");
    } else {
      return `${this.getFirstName(gender)} ${this.getSurname()}`;
    }
  }

  getAddress() {
    const addresses_us = require("./addresses_us.js");
    const address =
      addresses_us[Math.floor(Math.random() * addresses_us.length)];
    return {
      address: address.address1,
      city: address.city,
      state: address.state,
      zip: address.postalCode,
    };
  }

  getUniqueID() {
    const crypto = require("crypto");
    const uid = crypto.randomUUID();
    return uid;
  }
};

const jsid = new JSID();

module.exports = jsid;
