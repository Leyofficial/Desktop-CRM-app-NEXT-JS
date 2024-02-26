// File: utility/getDate/__tests__/getDate.test.js

import { getDate } from "../../../utility/getDate/getDate";

describe('getDate', () => {
    let date;

    beforeEach(() => {
        date = getDate();
    });

    test('should return a string in the format "day : month : year"', () => {
        expect(date).not.toBeUndefined();
        expect(typeof date).toBe('string');
        expect(date).toMatch(/^\d{1,2} : \d{1,2} : \d{4}$/);
    });

    test('should have a valid month (between 1 and 12)', () => {
        const month = parseInt(date.split(' : ')[1], 10);
        expect(month).toBeGreaterThanOrEqual(1);
        expect(month).toBeLessThanOrEqual(12);
    });

    test('should have a valid day (between 1 and 31)', () => {
        const day = parseInt(date.split(' : ')[0], 10);
        expect(day).toBeGreaterThanOrEqual(1);
        expect(day).toBeLessThanOrEqual(31);
    });

    test('should have a valid year (four digits)', () => {
        const year = parseInt(date.split(' : ')[2], 10);
        expect(year.toString().length).toBe(4);
    });
});