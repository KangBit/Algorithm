function solution(s) {
    let answer = s.length;
    
    for(let i = 1; i <= ~~(s.length/2); i++){
        let cnt = 1;
        let prev = '';
        let str = '';
        for(let l = 0; l<s.length; l+=i){
            let sub = s.substr(l, i)
            if(prev == sub){
                cnt++;
            }else {
                str += cnt > 1 ? (cnt + prev) : prev;
                cnt = 1;
            }
            prev = sub;
        }
        str += cnt > 1 ? (cnt + prev) : prev;
        answer = answer > str.length ? str.length : answer;
    }
    
    return answer;
}