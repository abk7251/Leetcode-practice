/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 *
 * https://leetcode.com/problems/largest-number/description/
 *
 * algorithms
 * Medium (25.33%)
 * Total Accepted:    122.2K
 * Total Submissions: 482.2K
 * Testcase Example:  '[10,2]'
 *
 * Given a list of non negative integers, arrange them such that they form the
 * largest number.
 * 
 * Example 1:
 * 
 * 
 * Input: [10,2]
 * Output: "210"
 * 
 * Example 2:
 * 
 * 
 * Input: [3,30,34,5,9]
 * Output: "9534330"
 * 
 * 
 * Note: The result may be very large, so you need to return a string instead
 * of an integer.
 * 
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(nums.every(x=>x===0)){
        return '0'
    }
    let numstr=''
    nums.sort((a,b)=>{
        let ab=a.toString()+b.toString()
        let ba=b.toString()+a.toString()       
        return parseInt(ba)-parseInt(ab)
    })
    for(let el of nums){
        numstr=numstr+el.toString()
    }
    return numstr
};

