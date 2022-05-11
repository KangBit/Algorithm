function solution(n, t, m, p) {
    let answer = '';
    let arr = [];
    let num = 0;
    let step = 0;
    
    while(step < t){
        arr.push(...foo(num,n))
        num += 1;
        
        let index = p + m*step -1;
        if(arr.length > index){
            answer += arr[index];
            step ++;
        }
    }

    return answer.toUpperCase();
}

const foo = (num,n) => {
    return num.toString(n).split("");
}