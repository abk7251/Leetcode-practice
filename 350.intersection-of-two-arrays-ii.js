/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (46.89%)
 * Total Accepted:    184.3K
 * Total Submissions: 392.3K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two arrays, write a function to compute their intersection.
 * 
 * Example 1:
 * 
 * 
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2,2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [4,9]
 * 
 * 
 * Note:
 * 
 * 
 * Each element in the result should appear as many times as it shows in both
 * arrays.
 * The result can be in any order.
 * 
 * 
 * Follow up:
 * 
 * 
 * What if the given array is already sorted? How would you optimize your
 * algorithm?
 * What if nums1's size is small compared to nums2's size? Which algorithm is
 * better?
 * What if elements of nums2 are stored on disk, and the memory is limited such
 * that you cannot load all elements into the memory at once?
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let smallarr = nums1
    let largearr = nums2
    if (nums1.length !== nums2.length) {
        smallarr = nums1.length < nums2.length ? nums1 : nums2
        largearr = nums1.length > nums2.length ? nums1 : nums2
    }
    let result = []
    for (let i = 0; i < smallarr.length; i++) {
        for (let j = 0; j < largearr.length; j++) {
            if (smallarr[i] === largearr[j]) {
                result.push(smallarr[i])
                smallarr.splice(i, 1)
                largearr.splice(j, 1)
                i--
                j--
            }
        }
    }
    return result
};

