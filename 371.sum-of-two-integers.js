/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 *
 * https://leetcode.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Easy (51.15%)
 * Total Accepted:    128.4K
 * Total Submissions: 251.3K
 * Testcase Example:  '1\n2'
 *
 * Calculate the sum of two integers a and b, but you are not allowed to use
 * the operator + and -.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: a = 1, b = 2
 * Output: 3
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: a = -2, b = 3
 * Output: 1
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let counter=Math.abs(b)
    while(counter){
        if(b<0){
            a--
        }else{
            a++
        }
        counter--
    }
    return a    
};

