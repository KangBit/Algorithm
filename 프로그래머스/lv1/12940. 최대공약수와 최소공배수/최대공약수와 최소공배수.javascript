function solution(n, m) {
    let gcd = getGcd(n,m);
    let lcm = n*m/gcd;
    
    return [gcd, lcm];
}


const getGcd = (n, m) => {
    let [min, max] = [Math.min(n,m),Math.max(n,m)];
    
    if(max%min == 0){
        return min;
    }else {
        return getGcd(min, max%min);
    }
}