const main = require('scripts/main');
const inc = require('scripts/inc');
const defaultValue = require('scripts/default-value');
const fetchUserData = require('scripts/fetch-data');

describe('test examples', () => {
    it('should return true', () => {
        const actual = main();
        const expected = true;

        expect(actual).toEqual(expected);
    });

    it('should be 6', () => {
        expect(inc(5)).toMatchSnapshot();
    });

    // eslint-disable-next-line no-undefined
    [null, undefined, 'x'].forEach(s => {
        it(`should return a default value with param ${s}`, () => {
            expect(defaultValue(s)).toBe(0);
        });
    });

    it('should return a number', () => {
        expect(defaultValue(1)).toMatchSnapshot();
    });

    it('fetchUserData success', () =>
        fetchUserData('http://localhost:4000/api/user/22/data')
        .then(data => {
            expect(data.name).toBe('John');
        }));

    it('fetchUserData error', () =>
        fetchUserData('http://localhost:4000/api/user/')
        .then(data => {
            expect(data).toBe('fail');
        }));

});
