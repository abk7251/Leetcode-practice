/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (43.12%)
 * Total Accepted:    86.1K
 * Total Submissions: 199.6K
 * Testcase Example:  '"0"\n"0"'
 *
 * Given two non-negative integers num1 and num2 represented as string, return
 * the sum of num1 and num2.
 * 
 * Note:
 * 
 * The length of both num1 and num2 is < 5100.
 * Both num1 and num2 contains only digits 0-9.
 * Both num1 and num2 does not contain any leading zero.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let carry = 0
    let sum = ''
    let digit = 0
    let rev1 = num1.split('').reverse().join('')
    let rev2 = num2.split('').reverse().join('')
    let large = Math.max(rev1.length, rev2.length)
    for (let i = 0; i < large; i++) {
        let digitsum = parseInt(rev1[i] || 0) + parseInt(rev2[i] || 0) + carry
        digit = digitsum % 10
        carry = digitsum >= 10 ? 1 : 0
        sum = digit.toString() + sum
    }
    if (carry == 1) {
        return '1' + sum
    } else {
        return sum
    }
};

