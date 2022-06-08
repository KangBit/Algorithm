function solution(numbers, target) {
    let cases = dfs(numbers, 0, 0)

    return cases.filter((v) => v === target).length;
}

const dfs = (numbers, depth, sum) => {
    if(depth === numbers.length){
        return [sum];
    }
    
    let left = dfs(numbers, depth + 1, sum + numbers[depth]);
    let right = dfs(numbers, depth + 1, sum - numbers[depth]);
    return [...left, ...right];
}