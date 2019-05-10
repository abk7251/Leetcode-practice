/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 *
 * algorithms
 * Easy (46.40%)
 * Total Accepted:    449.2K
 * Total Submissions: 967.7K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 * 
 * If you were only permitted to complete at most one transaction (i.e., buy
 * one and sell one share of the stock), design an algorithm to find the
 * maximum profit.
 * 
 * Note that you cannot sell a stock before you buy one.
 * 
 * Example 1:
 * 
 * 
 * Input: [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit
 * = 6-1 = 5.
 * Not 7-1 = 6, as selling price needs to be larger than buying price.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 * 
 *  {100, 180, 260, 310, 40, 535, 695}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let desc = prices.every((a, b) => {
        return b >= a
    })
    if (desc) {
        return 0
    } else {
        let max_profit = 0
        let buy_price = 0
        let sell_price = 0
        let change_buy_price = true
        for (let i = 0; i < prices.length - 1; i++) {
            sell_price = prices[i + 1]
            if (change_buy_price) {
                buy_price = prices[i]
            }            
            if (sell_price < buy_price) {
                change_buy_price = true
                continue
            } else {
                let profit = sell_price - buy_price
                if (profit > max_profit) {
                    max_profit = profit
                }
                change_buy_price = false
            }
        }
        return max_profit
    }
};

