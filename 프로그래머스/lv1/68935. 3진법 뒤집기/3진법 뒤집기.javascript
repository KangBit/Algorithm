function solution(n) {
    let ternary = n.toString(3);
    let reversedTernary = ternary.split("").reduce((prev,curr,i)=>{
        return prev + ternary[ternary.length - i - 1];
    },"")
    let decimal = parseInt(reversedTernary,3).toString(10);
    
    return +decimal;
}