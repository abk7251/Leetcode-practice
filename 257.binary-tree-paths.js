/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (45.16%)
 * Total Accepted:    215.8K
 * Total Submissions: 476K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */


let str = ""
const treePathHelper = (root, arr,str='') => {    
    if (root === null) {
        return null
    }
    if (root.left === null && root.right === null) {        
        str = str + root.val
        arr.push(str)
    }    
    treePathHelper(root.left, arr,str + root.val + "->")
    treePathHelper(root.right, arr,str + root.val + "->")
    return arr    
}
var binaryTreePaths = function (root) {
    if (root === null) {
        return []
    }
    return treePathHelper(root, new Array())
};

