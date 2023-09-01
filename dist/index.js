"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const names_male_1 = require("./tools/names_male");
const names_female_1 = require("./tools/names_female");
const surnames_1 = require("./tools/surnames");
const crypto_1 = require("crypto");
class JSID {
    constructor(gender) {
        this._gender = gender;
    }
    /**
     * @returns {string} A random name depending on the genre provided. F for female and M for male. If none of them are provided, it will return a random name with random genre.
     * @example 'John'
     * @see https://documents-iota.vercel.app
     * @param {string} gender Genre of the name to be returned. F for female and M for male.
     */
    getFirstName(gender) {
        if ((gender === null || gender === void 0 ? void 0 : gender.toUpperCase()) === "M") {
            return names_male_1.names_male[Math.floor(Math.random() * names_male_1.names_male.length)];
        }
        else if ((gender === null || gender === void 0 ? void 0 : gender.toUpperCase()) === "F") {
            return names_female_1.names_female[Math.floor(Math.random() * names_female_1.names_female.length)];
        }
        else if (gender === undefined) {
            const rand_num = Math.floor(Math.random() * 2);
            if (rand_num === 0) {
                return names_female_1.names_female[Math.floor(Math.random() * names_female_1.names_female.length)];
            }
            else {
                return names_male_1.names_male[Math.floor(Math.random() * names_male_1.names_male.length)];
            }
        }
        throw new Error("Bad usage, provide F for female or M for male.");
    }
    getSurname() {
        return surnames_1.surnames[Math.floor(Math.random() * surnames_1.surnames.length)];
    }
    /**
     *
     * @param {string} gender Genre of the name to be returned. F for female and M for male. If none of them are provided, it will generate one with a random genre.
     * @return {string} Full name of the person.
     * @example 'John Doe'
     * @see https://documents-iota.vercel.app
     */
    getFullName(gender) {
        if (gender === undefined || gender === "") {
            const rand_num = Math.floor(Math.random() * 2);
            if (rand_num === 0) {
                return `${this.getFirstName("F")} ${this.getSurname()}`;
            }
            else {
                return `${this.getFirstName("M")} ${this.getSurname()}`;
            }
        }
        else if (gender.toUpperCase() === "M") {
            return `${this.getFirstName("M")} ${this.getSurname()}`;
        }
        else if (gender.toUpperCase() === "F") {
            return `${this.getFirstName("F")} ${this.getSurname()}`;
        }
        else {
            throw new Error("Bad usage, provide F for female or M for male.");
        }
    }
    /**
     * @returns {string} A random unique id.
     * @example 'cce4d930-f144-49f2-ae6d-3890c174b72f'
     */
    getUniqueID() {
        const uid = (0, crypto_1.randomUUID)();
        return uid;
    }
}
const jsid = new JSID();
exports.default = jsid;
