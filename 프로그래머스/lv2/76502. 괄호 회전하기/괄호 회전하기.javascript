function solution(s) {
    let answer = 0;
    let brackets = s;
    
    for(let i = 0; i < brackets.length; i++){
        if(isAllClosed(brackets)){
            answer += 1;
        }
        brackets = circulate(brackets);
    }
    
    return answer;
}

const circulate = (s) => {
    let arr = s.split("");
    arr.push(arr.shift());
    
    return arr.join("");
}

const isAllClosed = (str) => {
    let stack = [];
    let brackets = {
        "]": "[",
        "}": "{",
        ")": "(",
    };

    for (let i = 0; i < str.length; i++) {
        let top = stack[stack.length - 1];
        if (top !== undefined && top === brackets[str[i]]) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }

    return stack.length === 0;
};