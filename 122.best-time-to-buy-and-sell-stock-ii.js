/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Easy (51.06%)
 * Total Accepted:    298.3K
 * Total Submissions: 584.1K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (i.e., buy one and sell one share of the stock
 * multiple times).
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e.,
 * you must sell the stock before you buy again).
 * 
 * Example 1:
 * 
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit
 * = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 =
 * 3.
 * 
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
 *  {100, 180, 260, 310, 40, 535, 695}
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
//  */


var maxProfit = function (prices) {
    var isDesc = prices.every((a, b) => {
        return b>=a
    })
    if (isDesc) {
        return 0
    } else {
        var transactions = []                
        let j
        for (let i = 0; i < prices.length; i = j) {
            let local_minima = 0
            j = i + 1
            if (prices[i] < prices[i + 1]) {                
                local_minima = prices[i]
                let local_maxima = 0
                while (j !== prices.length && prices[j] > local_maxima) {
                    local_maxima = prices[j]
                    j++
                }
                transactions.push({
                    buy_price: local_minima,
                    sell_price: local_maxima
                })
            } else {
                continue
            }            
        }
        console.log(transactions)
        let profit = 0
        for (let obj of transactions) {
            profit = profit + (obj.sell_price - obj.buy_price)
        }
        return profit
    }
};

