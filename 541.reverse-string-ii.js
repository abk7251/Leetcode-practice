/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 *
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (45.08%)
 * Total Accepted:    55.6K
 * Total Submissions: 123.3K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 
 * Given a string and an integer k, you need to reverse the first k characters
 * for every 2k characters counting from the start of the string. If there are
 * less than k characters left, reverse all of them. If there are less than 2k
 * but greater than or equal to k characters, then reverse the first k
 * characters and left the other as original.
 * 
 * 
 * Example:
 * 
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 * 
 * 
 * 
 * Restrictions: 
 * 
 * ⁠The string consists of lower English letters only.
 * ⁠Length of the given string and k will in the range [1, 10000]
 * 
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    if (k >= s.length) {
        return s.split('').reverse().join('')
    } else if (k === 1) {
        return s
    } else {
        let arr = []
        let revstr = ''
        for (i = 0; i < s.length; i = i + 2 * k) {
            arr.push(s.substr(i, 2 * k))
        }
        console.log(arr)
        for (let str of arr) {
            revstr = revstr + str.substr(0, k).split('').reverse().join('') + str.substr(k)
        }
        return revstr
    }
};

