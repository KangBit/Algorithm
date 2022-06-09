function solution(n) {
    let mod = 1_000_000_007n;
    let [prev, curr] = [1n, 1n];
    
    for(let i = 1; i < n ; i++){
        [prev, curr] = [curr, (prev + curr) % mod];
    }
    
    return curr;
}