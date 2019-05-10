/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (42.94%)
 * Total Accepted:    477.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 * 
 * Example:
 * 
 * 
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * 
 * Follow up:
 * 
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max_so_far = 0
    let max_ending_here = 0

    let allNegative = nums.every(x => {
        return x < 0
    })

    if (!allNegative) {
        for (let el of nums) {
            max_ending_here = max_ending_here + el
            if (max_ending_here < 0) {
                max_ending_here = 0
            }
            if (max_so_far < max_ending_here) {
                max_so_far = max_ending_here
            }
        }
        return max_so_far
    } else {
        return nums.reduce((a,b)=>{
            return a>b ? a :b 
        })
    }
};

