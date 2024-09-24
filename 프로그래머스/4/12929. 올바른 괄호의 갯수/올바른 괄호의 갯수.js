function solution(n) {
    return foo(n,n)
}

const foo = (left, right) => {
    if (left < 0) { return 0 }
    if (left > right) { return 0 }
    if (right === 0) { return 1 }
    
    return foo(left, right-1) + foo(left-1,right)
}