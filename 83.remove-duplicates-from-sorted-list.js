/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (42.00%)
 * Total Accepted:    306.1K
 * Total Submissions: 728.8K
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted linked list, delete all duplicates such that each element
 * appear only once.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->1->2
 * Output: 1->2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let i=head
    let j=i
    if (i === null || i.next === null) {
        return i
    }
    while (true) {           
       while(j!==null && i.val===j.val){
           j=j.next
       }
       if(j===null){
           i.next=null
           break
       }else{
           i.next=j           
       }
       i=i.next
       j=i
       if(i===null){
           break
       }

    }
    return head
};

