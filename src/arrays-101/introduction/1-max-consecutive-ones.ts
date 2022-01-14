export function findMaxConsecutiveOnes(nums: number[]): number {
    let result = 0;
    let newResult = 0;

    nums.forEach((num: number, index: number) => {
        newResult += num;
        if (newResult > result) result = newResult;
        if (!num || nums.length - 1 === index) newResult = 0;
    })
    
    return result;
}


