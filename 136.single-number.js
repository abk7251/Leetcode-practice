/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (59.18%)
 * Total Accepted:    424.7K
 * Total Submissions: 717.6K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 * 
 * Example 1:
 * 
 * 
 * Input: [2,2,1]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let uniquearr=[...new Set(nums)]
    let arrsum=0
    let uniquearrsum=0
    for(let el of uniquearr){
        uniquearrsum=uniquearrsum+parseInt(el)
    }
    for(let el of nums){
        arrsum=arrsum+parseInt(el)
    }       
    return (2*uniquearrsum-arrsum)
};

