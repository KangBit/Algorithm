function solution(n, t, m, p) {
    let answer = '';
    let arr = [];
    let num = 0;
    let turn = 0;
    
    while(turn < t){
        arr.push(...num.toString(n).split(""))
        num += 1;
        
        let index = p + m*turn -1;
        if(arr.length > index){
            answer += arr[index];
            turn ++;
        }
    }

    return answer.toUpperCase();
}