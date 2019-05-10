/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (39.68%)
 * Total Accepted:    263.3K
 * Total Submissions: 663.5K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 * 
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n where 1 ≤ n ≤ 30, generate the n^th term of the
 * count-and-say sequence.
 * 
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "1"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 4
 * Output: "1211"
 * 
 */
/**
 * @param {number} n
 * @return {string}
 */

const compute = (str) => {
    let repeat = []
    let digits = []
    let i = 0
    while (i < str.length) {
        let count = 1
        let d = str[i]
        for (k = i + 1; k < str.length; k++) {
            if (d === str[k]) {
                count++
            } else {
                break
            }
        }
        i = i + count
        repeat.push(count.toString())
        digits.push(d)        
    }
    let computedstr=''
    for(i=0;i<repeat.length;i++){
        computedstr=computedstr+repeat[i]+digits[i]
    }
    return computedstr
}

var countAndSay = function (n) {
    if (n == 1) {
        return "1"
    } else if (n == 2) {
        return "11"
    }
    let str = "11"    
    for (let k = 3; k <= n; k++) {
        let result=compute(str)
        str=result
        // console.log(result)            
    }
    return str
};

