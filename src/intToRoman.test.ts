import intToRoman from './intToRoman';

describe('integer to roman number converter', () => {
    test('returns correct roman number for 10', () => {
        const resultOne = intToRoman(10);
        expect(resultOne).toBe("X");
    });

    test('returns correct roman number for 1514', () => {
        const resultTwo = intToRoman(1514);
        expect(resultTwo).toBe("MDXIV");
    });

    test('returns correct roman number for 1514', () => {
        const resultThree = intToRoman(3753);
        expect(resultThree).toBe("MMMDCCLIII");
    });
});