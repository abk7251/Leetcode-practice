/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (36.81%)
 * Total Accepted:    192.7K
 * Total Submissions: 521.9K
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "foo", t = "bar"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * Note:
 * You may assume both s and t have the same length.
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


const createCharMap = str => {
    let map = new Map()
    let num=1
    for (let char of [...str]) {
        map.set(char, map.has(char) ? map.get(char) : num++)
    }
    return map
}


var isIsomorphic = function (s, t) {
    let map1 = createCharMap(s)
    let map2 = createCharMap(t)
    let str1 = ''
    let str2 = ''
    for (let char of [...s]) {
        str1 = str1 + map1.get(char)
    }
    for (let char of [...t]) {
        str2 = str2 + map2.get(char)
    }  
    return str1 === str2
};

