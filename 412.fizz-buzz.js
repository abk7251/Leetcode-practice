/*
 * @lc app=leetcode id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (58.96%)
 * Total Accepted:    186.5K
 * Total Submissions: 316.3K
 * Testcase Example:  '1'
 *
 * Write a program that outputs the string representation of numbers from 1 to
 * n.
 * 
 * But for multiples of three it should output “Fizz” instead of the number and
 * for the multiples of five output “Buzz”. For numbers which are multiples of
 * both three and five output “FizzBuzz”.
 * 
 * Example:
 * 
 * n = 15,
 * 
 * Return:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr=[]
    for(let num=1;num<=n;num++){
        if(num%15===0){
            arr.push("FizzBuzz")
        }else{
            if(num%5===0){
                arr.push("Buzz")
            }else if(num%3===0){
                arr.push("Fizz")
            }else{
                arr.push(num.toString())
            }
        }
    }
    return arr
};

