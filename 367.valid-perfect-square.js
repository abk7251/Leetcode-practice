/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (39.44%)
 * Total Accepted:    103.5K
 * Total Submissions: 261.9K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: 16
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 14
 * Output: false
 * 
 * 
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num === 1) {
        return true
    }
    let sum = 0
    for (let i = 1; i < num; i = i + 2) {
        sum = sum + i
        if (sum === num) {
            return true
        }
        if (sum > num) {
            return false
        }
    }
    return false
};

