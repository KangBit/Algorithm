function solution(num) {
    if (num === 1) {
        return 0;
    }
    
    let answer = collatz(num,1);
    
    if(answer >= 500){
        return -1;
    }else {
        return answer;
    }
}

const collatz = (num,count) => {
    let result = 1;
    if(num%2 === 0) {
        result = num/2;
    }else {
        result = num*3 + 1
    }
    if (result == 1 || count > 500){
        return count;
    }else {
        return collatz(result,count+1);
    }
}