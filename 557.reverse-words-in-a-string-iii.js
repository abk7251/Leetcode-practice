/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 *
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (63.26%)
 * Total Accepted:    115.1K
 * Total Submissions: 181.8K
 * Testcase Example:  '"Let\'s take LeetCode contest"'
 *
 * Given a string, you need to reverse the order of characters in each word
 * within a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * 
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * 
 * 
 * 
 * Note:
 * In the string, each word is separated by single space and there will not be
 * any extra space in the string.
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=s.split(' ')
    let str=''
    for(let word of arr){
        let rev=word.split('').reverse().join('')
        str=str+rev+' '
    }
    return str.trim()
};

