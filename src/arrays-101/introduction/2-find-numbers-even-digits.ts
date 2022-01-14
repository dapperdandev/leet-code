export function findNumbers(nums: number[]): number {
    const result: string[] = nums
        .map((x: number) => x.toString())
        .filter(x => x.length % 2 === 0)

    return result.length;
}
