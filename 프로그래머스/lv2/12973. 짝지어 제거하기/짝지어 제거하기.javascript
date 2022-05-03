function solution(s){
    let stack = [];
    
    for(let i = 0; i< s.length; i++){
        if(i>0 && stack[stack.length - 1] === s[i]){
            stack.pop();
        }else {
            stack.push(s[i]);
        }
    }
    
    if (stack.length > 0){
        return 0;
    }else {
        return 1;
    }
}

