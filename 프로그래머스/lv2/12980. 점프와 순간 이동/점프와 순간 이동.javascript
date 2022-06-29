function solution(n){
    let d = n;
    let ans = 0;

    while(d > 0){
        if(d%2 == 0){
            d /= 2;
        }else {
            d -= 1;
            ans += 1;
        }
    }

    return ans;
}