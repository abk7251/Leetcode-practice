/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
 *
 * algorithms
 * Hard (33.05%)
 * Total Accepted:    140.5K
 * Total Submissions: 424.8K
 * Testcase Example:  '[3,3,5,0,0,3,1,4]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete at most two
 * transactions.
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e.,
 * you must sell the stock before you buy again).
 * 
 * Example 1:
 * 
 * 
 * Input: [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit
 * = 3-0 = 3.
 * Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 =
 * 3.
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit
 * = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you
 * are
 * engaging multiple transactions at the same time. You must sell before buying
 * again.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let isdesc = prices.every((e,i,a) => {
        return i>0? e<a[i-1]:true
    })
    let isasc = prices.every((e,i,a) => {
        return i>0 ? e>a[i-1]:true         
    })
    if (isdesc) {
        return 0
    }
    if (isasc) {        
        return prices[prices.length - 1] - prices[0]
    }
    let profit=[]
    for(let i=0;i<prices.length;i++){
        profit.push(0)
    }
    max_price=prices[prices.length-1]
    for(let i=prices.length-2;i>=0;i--){        
        if(prices[i]>max_price){
            max_price=prices[i]
        }
        profit[i]=Math.max(profit[i+1],max_price-prices[i])        
    }

    let min_price=prices[0]
    for(let i=1;i<prices.length;i++){        
        if(prices[i]<min_price){
            min_price=prices[i]
        }
        profit[i]=Math.max(profit[i-1],profit[i]+prices[i]-min_price)        
    }    
    return profit[profit.length-1]            
};

