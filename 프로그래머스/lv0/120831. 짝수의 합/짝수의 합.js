function solution(n) {
    return new Array(~~(n/2)).fill(0).reduce((acc, _, i)=>{
       return (i + 1) * 2 + acc
    },0)
}