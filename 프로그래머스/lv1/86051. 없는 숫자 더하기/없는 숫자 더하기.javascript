function solution(numbers) {
    let total = 45;
    let sum = numbers.reduce((prev,curr)=> prev + curr);
    
    return total - sum;
}