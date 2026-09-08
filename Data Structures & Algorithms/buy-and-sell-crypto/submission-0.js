class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0
        let cp = prices[0]
        for(let i = 1; i < prices.length;i++){
            profit = Math.max(profit,prices[i] - cp)
            if(cp > prices[i]) cp =  prices[i]
        }
        return profit
    }
}
