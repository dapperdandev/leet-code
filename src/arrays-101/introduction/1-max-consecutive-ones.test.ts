import { findMaxConsecutiveOnes } from './1-max-consecutive-ones';

test('Find Max Consecutive Ones - Returns Correct Answer', () => {
    const input = [1,1,0,1,1,1];
    
    const result = findMaxConsecutiveOnes(input);

    expect(result).toEqual(3);
})

