import { sortedSquares } from './3-squares-of-sorted-array';

test('Squares of a Sorted Array - Returns Correct Answer', () => {
    const input = [-4, -1, 0, 3, 10];
    
    const result = sortedSquares(input);

    expect(result).toEqual([0, 1, 9, 16, 100]);
})

