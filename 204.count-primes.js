/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.38%)
 * Total Accepted:    221.8K
 * Total Submissions: 777.9K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let arr=new Array(n)
    arr.fill(true)
    arr[0]=false
    arr[1]=false

    for(let i=2;i*i<=n;i++){
        for(j=i*i;j<n;j=j+i){
            arr[j]=false
        }
    }
    return arr.filter(x=>x).length
};

