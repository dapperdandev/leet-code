export function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
    let count = m + n;
    while (count > 0 && nums2.length) {
        if (nums1[m - 1] >= nums2[n - 1]) {
            nums1.splice(count - 1, 0, nums1.splice(m - 1, 1)[0]);
            m--;
        } else {
            nums1.splice(count - 1, 1, nums2.splice(n - 1, 1)[0]);
            n--;
        }

        count--;
    }

    return nums1;
}
