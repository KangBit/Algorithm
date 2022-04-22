function solution(a, b) {
    return a.reduce((prev, curr, i)=>{
        return prev + curr * b[i];
    },0)
}