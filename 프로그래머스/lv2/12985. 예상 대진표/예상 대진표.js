function solution(n,a,b){
    let count = 0;

    while(a !== b) {
        count = count + 1;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }
    
    return count;
}