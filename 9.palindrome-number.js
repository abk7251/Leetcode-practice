/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (42.23%)
 * Total Accepted:    525.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example 1:
 * 
 * 
 * Input: 121
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 * 
 * 
 * Follow up:
 * 
 * Coud you solve it without converting the integer to a string?
 * 
 */
/**
 
 **/
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    else if (x >= 0 && x <= 9) {
        return true
    }

    let num = x
    let revint = 0
    let remainder = 0

    while (num) {
        remainder = num % 10
        revint = revint * 10 + remainder
        num = Math.floor(num / 10)
    }
    if (x == revint) {
        return true
    } else {
        return false
    }
}

