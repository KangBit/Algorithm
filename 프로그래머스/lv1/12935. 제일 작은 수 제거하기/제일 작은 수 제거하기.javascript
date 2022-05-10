function solution(arr) {
    if(arr.length === 1){
        return [-1];
    }
    
    let answer = [...arr];
    let min = Math.min(...arr);
    
    return answer.filter((num)=>{
        return num > min;
    });
}