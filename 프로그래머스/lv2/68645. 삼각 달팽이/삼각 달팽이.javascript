function solution(n) {
    let snail = getZeroFillSnail(n);
    
    let [rowIncrease, colIncrease] = [-1,-1];
    let [row, col] = [-1,0]
    let moveCount = n;
    let num = 0;
    
    while(moveCount > 0){
        if(rowIncrease === -1){
            [rowIncrease, colIncrease] = [1,0];
        }else if(rowIncrease === 1){
            [rowIncrease, colIncrease] = [0,1];
        }else if(rowIncrease === 0){
            [rowIncrease, colIncrease] = [-1,-1];
        }
        
        for(let i = 0; i < moveCount; i++){
            row += rowIncrease;
            col += colIncrease;
            num += 1;
            
            snail[row][col] = num;
        }
        moveCount -= 1;
    }
    
    return snail.flat();
}

const getZeroFillSnail = (n) => {
    let snail = [];
    for(let i = 0; i < n; i++){
        let arr = new Array(i+1).fill(0);
        snail.push(arr)
    }
    
    return snail;
}