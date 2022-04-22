function solution(lottos, win_nums) {
    let rank = [6,6,5,4,3,2,1];
    
    let filtered = lottos.filter(num => num != 0);
    let matched = filtered.filter(num => win_nums.includes(num) );

    let matchedCount = matched.length;
    let zeroCount = 6 - filtered.length;

    let highRank = rank[matchedCount + zeroCount];
    let lowRank = rank[matchedCount];
    
    return [highRank, lowRank];
}