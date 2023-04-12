function solution(elements) {
    let arr = [];
    
    for(let size = 1; size < elements.length ; size++) {
        elements.forEach((el, i) => {
            let sum = 0;
            for(let j = 0; j < size; j++) {
                sum = sum + elements[(i + j) % elements.length];
            }
            arr.push(sum);
        });
    }
    return new Set(arr).size + 1;
}

