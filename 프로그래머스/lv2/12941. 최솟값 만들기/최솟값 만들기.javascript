function solution(A,B){
    let sortedA = A.sort((a,b)=> a-b);
    let sortedB = B.sort((a,b)=> b-a);
    
    return sortedA.reduce((prev,curr,i)=>{
       prev = prev + curr * sortedB[i];
        return prev
    },0)
}