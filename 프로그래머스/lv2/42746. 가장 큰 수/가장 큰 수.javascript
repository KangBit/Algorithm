function solution(numbers) {
    numbers.sort((a,b) => {
        let compareA = parseInt("" + a + b);
        let compareB = parseInt("" + b + a);
        
        return  compareB - compareA;
    })
    
    if(numbers[0] === 0) return '0'
    
    return numbers.join("");
}