function solution(X, Y) {
    const result = countNumber(X, Y).reduce((acc, curr, i)=>{
        return acc + new Array(curr).fill(i).join('');
    },'').split('').reverse().join('') || "-1";

    return +result === 0 ? "0" : result
}

const countNumber = (X, Y) => {
    let list1 = new Array(10).fill(0);
    let list2 = new Array(10).fill(0);
    
    X.split('').forEach((char) => {
        list1[+char] += 1;
    });
    Y.split('').forEach((char) => {
        list2[+char] += 1;
    });
    
    return new Array(10).fill(0).map((_, i) => {
        return Math.min(list1[i], list2[i]);
    })
}