function solution(elements) {
    const size = elements.length;
    const arr = elements.reduce((acc, curr, i)=>{
        let sum = curr;
        for (let l = 1; l < size - 1; l++) {
            sum = sum + elements[(i + l) % size];
            acc.push(sum);
        }
        return acc;
    }, elements.slice());
    
    return new Set(arr).size + 1;
}