function solution(numbers) {
    numbers.sort((a,b) => {
        let compareA = parseInt("" + a + b);
        let compareB = parseInt("" + b + a);
        
        return  compareB - compareA;
    })
    
    return BigInt(numbers.join("")) + ""
}