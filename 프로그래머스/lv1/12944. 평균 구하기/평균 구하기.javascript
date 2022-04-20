function solution(arr) {
    let sum = arr.reduce((prev, current)=>{
        return prev + current
    })
    
    return sum / arr.length;
}
