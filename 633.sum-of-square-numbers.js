/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 *
 * https://leetcode.com/problems/sum-of-square-numbers/description/
 *
 * algorithms
 * Easy (32.81%)
 * Total Accepted:    40.7K
 * Total Submissions: 124.2K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer c, your task is to decide whether there're two
 * integers a and b such that a^2 + b^2 = c.
 * 
 * Example 1:
 * 
 * 
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 * 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 3
 * Output: False
 * 
 * 
 * 
 * 
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let map=new Map()
    for(let i=0;i*i<=c;i++){
        map.set(i,i*i)       
    }    
    for(let i=0;i*i<=c;i++){
       let index=Math.sqrt(c-i*i)
       if(map.has(index)){
           return true
       }
    }
    return false
};

