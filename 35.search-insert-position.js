/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (40.51%)
 * Total Accepted:    368.6K
 * Total Submissions: 909.9K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 * 
 * You may assume no duplicates in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,3,5,6], 5
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,3,5,6], 2
 * Output: 1
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [1,3,5,6], 7
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: [1,3,5,6], 0
 * Output: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start=0
    let end=nums.length-1
    if(nums[0]>target){
        return 0
    }else if(nums[nums.length-1]<target){
        return nums.length
    }    
    while(start<=end){
        let mid=Math.floor((start+end)/2)
        if(nums[mid]===target){
            return mid
        }else{
            if(nums[mid]<target && nums[mid+1]>target){
                return mid+1
            }
            else{
                if(nums[mid]<target){
                    start=mid+1
                }else{
                    end=mid-1
                }
            }
        }
    }
};

