function solution(n) {
    let [num1,num2] = [0,1];
    
    for(let i = 0; i < n-1; i++){
        num1 = foo(num1,num2);
        [num1,num2] = [num2,num1];
    }

    return num2 % 1234567;
}

const foo = (num1,num2) => {
    return num1% 1234567 + num2% 1234567;
}