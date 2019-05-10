/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 *
 * https://leetcode.com/problems/valid-palindrome-ii/description/
 *
 * algorithms
 * Easy (33.85%)
 * Total Accepted:    64.7K
 * Total Submissions: 191.2K
 * Testcase Example:  '"aba"'
 *
 * 
 * Given a non-empty string s, you may delete at most one character.  Judge
 * whether you can make it a palindrome.
 * 
 * 
 * Example 1:
 * 
 * Input: "aba"
 * Output: True
 * 
 * 
 * 
 * Example 2:
 * 
 * Input: "abca"
 * Output: True
 * Explanation: You could delete the character 'c'.
 * 
 * 
 * 
 * Note:
 * 
 * The string will only contain lowercase characters a-z.
 * The maximum length of the string is 50000.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */

// const buildHashMap = (s) => {
//     let obj = {}
//     for (let ch of s.split('')) {
//         obj[ch]++ || (obj[ch] = 1)
//     }    
//     return obj
// }

var validPalindrome = function (s) {
    if (s == s.split('').reverse().join('')) {
        return true
    } else {
        let str = s
        let i = 0
        let j = str.length - 1
        while (i <= j) {
            if (str[i] === str[j]) {
                i++
                j--
            } else {
                break
            }
        }

        let str1 = str.slice(0, i) + str.slice(i + 1)
        let str2 = str.slice(0, j) + str.slice(j + 1)

        if (str1 == str1.split('').reverse().join('')) {
            return true
        } else if (str2 == str2.split('').reverse().join('')) {
            return true
        } else {
            return false
        }
    }
};

