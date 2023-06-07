function solution(x, y, n) {
    let answer = 0;
    let flag = true;
    let set = new Set([x]);

    while(flag) {
        if(set.size === 0) {
            return -1;
        }
        
        if(set.has(y)) {
            return answer
        }
        
        set = [...set].reduce((acc, curr)=>{
            if(curr + n <= y) {
                acc.add(curr + n);
            }
            if(curr * 2 <= y) {
                acc.add(curr * 2);
            }
            if(curr * 3 <= y) {
                acc.add(curr * 3);
            }

            return acc;
        },new Set());
        
        answer = answer + 1;
    }
}