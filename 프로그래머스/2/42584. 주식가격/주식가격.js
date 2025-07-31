function solution(prices) {
    return prices.map((price, i) => {
        for(let j = i + 1; j < prices.length; j++) {
            if (prices[j] < price) {
                return j - i;
            }
        }
        
        return prices.length - i - 1;
    })
}