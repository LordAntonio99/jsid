import { names_male } from "./tools/names_male";
import { names_female } from "./tools/names_female";
import { surnames } from "./tools/surnames";
import { randomUUID } from "crypto";

class JSID {
  private _gender?: "M" | "F" | undefined;

  constructor(gender?: "M" | "F" | undefined) {
    this._gender = gender;
  }

  /**
   * @returns {string} A random name depending on the genre provided. F for female and M for male. If none of them are provided, it will return a random name with random genre.
   * @example 'John'
   * @see https://documents-iota.vercel.app
   * @param {string} gender Genre of the name to be returned. F for female and M for male.
   */
  getFirstName(gender?: string): string {
    if (gender?.toUpperCase() === "M") {
      return names_male[Math.floor(Math.random() * names_male.length)];
    } else if (gender?.toUpperCase() === "F") {
      return names_female[Math.floor(Math.random() * names_female.length)];
    } else if (gender === undefined) {
      const rand_num = Math.floor(Math.random() * 2);
      if (rand_num === 0) {
        return names_female[Math.floor(Math.random() * names_female.length)];
      } else {
        return names_male[Math.floor(Math.random() * names_male.length)];
      }
    }
    throw new Error("Bad usage, provide F for female or M for male.");
  }

  getSurname(): string {
    return surnames[Math.floor(Math.random() * surnames.length)];
  }

  /**
   *
   * @param {string} gender Genre of the name to be returned. F for female and M for male. If none of them are provided, it will generate one with a random genre.
   * @return {string} Full name of the person.
   * @example 'John Doe'
   * @see https://documents-iota.vercel.app
   */
  getFullName(gender?: string): string {
    if (gender === undefined || gender === "") {
      const rand_num = Math.floor(Math.random() * 2);
      if (rand_num === 0) {
        return `${this.getFirstName("F")} ${this.getSurname()}`;
      } else {
        return `${this.getFirstName("M")} ${this.getSurname()}`;
      }
    } else if (gender.toUpperCase() === "M") {
      return `${this.getFirstName("M")} ${this.getSurname()}`;
    } else if (gender.toUpperCase() === "F") {
      return `${this.getFirstName("F")} ${this.getSurname()}`;
    } else {
      throw new Error("Bad usage, provide F for female or M for male.");
    }
  }

  /**
   * @returns {string} A random unique id.
   * @example 'cce4d930-f144-49f2-ae6d-3890c174b72f'
   */
  getUniqueID(): string {
    const uid = randomUUID();
    return uid;
  }
}

const jsid = new JSID();

export default jsid;
