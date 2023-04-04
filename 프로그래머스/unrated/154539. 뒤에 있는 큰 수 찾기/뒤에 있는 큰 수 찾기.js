function solution(numbers) {
    let stack = [];
    
    return numbers.reduce((acc, number, i) => {
        while(stack.length && numbers[stack.at(-1)] < number){
            acc[stack.pop()] = number;
        }
        
        stack.push(i);
        return acc;
    }, new Array(numbers.length).fill(-1));
}