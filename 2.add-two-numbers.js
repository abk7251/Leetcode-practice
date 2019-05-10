/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.70%)
 * Total Accepted:    791.6K
 * Total Submissions: 2.6M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example:
 * 
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let digit = 0
    let list = new ListNode()
    p = list
    while (l1 && l2) {
        digitsum = carry + l1.val + l2.val
        digit = digitsum % 10
        carry = digitsum >= 10 ? 1 : 0
        l1 = l1.next
        l2 = l2.next
        p.val = digit
        if (l1 && l2) {
            p.next = new ListNode()
            p = p.next
        }
    }  
    if (l1 || l2) {
        let i = l1 || l2
        while (i) {
            p.next = new ListNode()
            p = p.next
            digitsum = i.val + carry
            digit = digitsum % 10
            carry = digitsum >= 10 ? 1 : 0
            p.val=digit
            i=i.next
        }
    }
    if (carry === 1) {        
        p.next = new ListNode()
        p = p.next
        p.val = 1
    }
    return list
};

