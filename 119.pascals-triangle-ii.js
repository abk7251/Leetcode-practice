/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (42.28%)
 * Total Accepted:    188.6K
 * Total Submissions: 445.7K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 * 
 * Note that the row index starts from 0.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: [1,3,3,1]
 * 
 * 
 * Follow up:
 * 
 * Could you optimize your algorithm to use only O(k) extra space?
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex==0){
        return[1]
    }  
    let pascal=[1,1]        
    for(i=2;i<=rowIndex;i++){
        let rowarr=[]
        rowarr[0]=1
        rowarr[i]=1
        for(let j=1;j<i;j++){
            rowarr[j]=pascal[j]+pascal[j-1]
        }
        pascal=rowarr
    }
    return pascal
};

