/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (44.78%)
 * Total Accepted:    232.8K
 * Total Submissions: 519.5K
 * Testcase Example:  '5'
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's
 * triangle.
 * 
 * 
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 * 
 * Example:
 * 
 * 
 * Input: 5
 * Output:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows===0){
        return []
    }  
    if(numRows===1){
        return [[1]]
    }
    let mainarr=[]
    mainarr.push([1])    
    mainarr.push([1,1])   
    for(let i=2;i<numRows;i++){
        let arr=[]
        arr[0]=1
        arr[i]=1
        for(let j=1;j<i ;j++){
            arr[j]=mainarr[i-1][j]+mainarr[i-1][j-1]
        }
        mainarr.push(arr)
    }
    return mainarr
};

