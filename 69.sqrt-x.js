/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (30.79%)
 * Total Accepted:    336.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '4'
 *
 * Implement int sqrt(int x).
 * 
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer.
 * 
 * Since the return type is an integer, the decimal digits are truncated and
 * only the integer part of the result is returned.
 * 
 * Example 1:
 * 
 * 
 * Input: 4
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since 
 * the decimal part is truncated, 2 is returned.
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // return(Math.floor(Math.sqrt(x)))

    if(x==0||x==1){
        return x
    }

    let start=0
    let end=x   
    let mid
    while(true){
        mid= Math.floor((start+end)/2)
        if(mid*mid <= x && (mid+1)*(mid+1)>x){
            break;
        }
        else if(mid*mid > x){
            end=mid
        }
        else if(mid*mid < x){
            start=mid
        }
    }    
    return mid
};
