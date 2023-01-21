const names_female = require("./names_female.js");
const names_male = require("./names_male.js");

const JSID = class {
  constructor(gender) {
    this._name = "JSID";
    gender = this.gender;
  }
  getName(gender) {
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
};

const jsid = new JSID();

module.exports = jsid;
