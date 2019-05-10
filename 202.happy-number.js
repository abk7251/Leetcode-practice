/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (44.41%)
 * Total Accepted:    220.1K
 * Total Submissions: 493.8K
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 
 * 
 * 
 * Input: 19
 * Output: true
 * Explanation: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */

const getSum = (num) => {
    let sum = 0
    while (num) {
        let digit = num % 10
        sum = sum + digit * digit
        num = Math.floor(num / 10)
    }
    return sum
}

var isHappy = function (n) {
    let set = new Set()
    let num = n
    while (true) {
       if(set.has(1)){
           return true           
       }
       let sum=getSum(num)      
       if(set.has(sum)){
           return false
       }else{
           set.add(sum)
           num=sum
       }
    }
};

