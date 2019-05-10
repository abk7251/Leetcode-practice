/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.33%)
 * Total Accepted:    239.3K
 * Total Submissions: 484.6K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
const buildHashMap = (arr) => {
    let obj = {}
    for (let item of arr) {
        obj[item] ? obj[item] = obj[item] + 1 : obj[item] = 1
    }
    return obj
}

var firstUniqChar = function (s) {
    let hm = buildHashMap(s.split(''))    
    for (let i=0;i<s.length;i++) {
        if (hm[s[i]] === 1) {
            return i
        }    
    }
    return -1
};

