function solution(n) {
    let cnt = countOne(n);
    let next = n+1;
    
    while(true){
        if(cnt === countOne(next)){
            break;
        }
        next += 1;
    }
    
    return next;
}

const countOne = (num) => {
    let binaryStr = num.toString(2);
    return binaryStr.split("1").length - 1;
}