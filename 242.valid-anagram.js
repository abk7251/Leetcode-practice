/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.13%)
 * Total Accepted:    309.1K
 * Total Submissions: 604.1K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const buildHashMap = (str) => {
    let obj = {}
    for (let char of str) {
        obj[char] = obj[char] + 1 || 1
    }
    return obj
}

var isAnagram = function (s, t) {
    let news = s.replace(/[^a-z0-9]/ig, '').toLocaleLowerCase()
    let newt = t.replace(/[^a-z0-9]/ig, '').toLocaleLowerCase()
    let sobj = buildHashMap(news)
    let tobj = buildHashMap(newt)
    if (Object.keys(sobj).length !== Object.keys(tobj).length) {
        return false
    }
    for (let key in sobj) {
        if (sobj[key] !== tobj[key]) {
            return false
        }
    }
    return true
};

