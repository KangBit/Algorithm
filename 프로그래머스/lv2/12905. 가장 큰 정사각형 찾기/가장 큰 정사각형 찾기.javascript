function solution(board){
    let dp = [];
    let max = 0;
    
    for(let i = 0; i< board.length; i++){
        for(let j = 0; j< board[0].length; j++){
            let item = board[i][j];
            
            if(j === 0){
                dp.push([item]);
            }else if(i === 0){
                dp[i].push(item);
            }else if(item === 0){
                dp[i].push(0);
            }else {
                item = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                dp[i].push(item);
            }
            
            max = Math.max(item, max);
        }
    }
    
    return max*max;
}