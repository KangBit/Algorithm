function solution(arr) {
    if(arr.length === 1){
        return [-1];
    }
    
    let answer = [...arr];
    let [minIndex, min] = answer.reduce((prev,curr,i)=>{
        if(prev[1] > curr){
            return [i, curr];
        }else {
            return prev;
        }
    },[0,answer[0]])
    
    return answer.filter((num)=>{
        return num > min;
    });
}