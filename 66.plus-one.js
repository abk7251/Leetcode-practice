/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.76%)
 * Total Accepted:    359.9K
 * Total Submissions: 883.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry=0
    let digit=0
    let arr=[]
    digits=digits.reverse()
    for(let i=0;i<digits.length;i++){
        if(i==0){
            digit=digits[i]+carry+1
        }else{
            digit=digits[i]+carry
        }
        if(digit==10){
            arr.unshift(0)
            if(i==digits.length-1){
                arr.unshift(1)
            }
            carry=1
        }else{
            arr.unshift(digit)
            carry=0
        }
    }

    return arr
};

