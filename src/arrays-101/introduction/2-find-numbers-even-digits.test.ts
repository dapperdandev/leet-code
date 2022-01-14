import { findNumbers } from './2-find-numbers-even-digits'

test('Find Numbers with Even Number of Digits - Returns Correct Answer', () => {
    const input = [12, 345, 2, 6, 7896];
    
    const result = findNumbers(input);

    expect(result).toEqual(2);
})

