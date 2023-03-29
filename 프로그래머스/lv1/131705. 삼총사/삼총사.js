function solution(number) {
    return foo(number, 0, 0).filter((el) => !el).length;
}

const foo = (arr, acc, depth) => {
    if(depth === 2) {
        return arr.map((el) => el + acc );
    }
    
    return arr.slice(0, arr.length - 2 + depth).map((el, i) => {
        return foo(arr.slice(i+1, arr.length), el + acc, depth +1);
    }).flat();
}

