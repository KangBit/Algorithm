function solution(x) {
    let p = foo(x);
    
    if(x%p === 0){
        return true;
    }else {
        return false;
    }
}

const foo = (x) => {
    let number = x;
    let result = 0;

    while(true){
        result += number%10;
        number = ~~(number/10)
        if(number === 0){
            return result;
        }
    }
}