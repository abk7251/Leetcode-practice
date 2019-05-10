/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (35.34%)
 * Total Accepted:    210.5K
 * Total Submissions: 595.1K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Remove all elements from a linked list of integers that have value val.
 * 
 * Example:
 * 
 * 
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) {
        return null
    }
    let pointer = head
    while (pointer) {
        if (pointer.val === val) {
            pointer = pointer.next
            head = pointer
        } else {
            break
        }
    }
    if (head == null) {
        return head
    }

    let prev = head
    let current = head.next
    while (current) {
        if (current.val === val) {
            while (current && current.val === val) {
                current = current.next
            }
            prev.next = current
        }       
        prev = prev.next
        if(prev==null){
            break
        }else{
            current = current.next
        }
        
    }
    return head
};

