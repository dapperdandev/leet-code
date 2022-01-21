import { merge } from './2-merged-sorted-array';

test('Find Max Consecutive Ones - Returns Correct Answer', () => {
    const result = merge([0,0,3,0,0,0,0,0,0],3,[-1,1,1,1,2,3],6);

    expect(result).toEqual([-1,0,0,1,1,1,2,3,3]);
})

