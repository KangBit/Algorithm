function solution(w, h) {
    let gcd = w> h ? getGcd(w,h) : getGcd(h,w)
    let answer = w*h - ( w + h - gcd);    
    
    return answer;
}

const getGcd = (a, b) => {
    let remainder = a % b;
    return remainder == 0 ? b : getGcd(b, remainder)
}