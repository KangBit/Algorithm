function solution(k, ranges) {
    let arr = foo(k);
    let arr2 = bar(arr);
    return zar(ranges, arr2);
}

const foo = (k) => {
    let arr = [k];
    while(k > 1) {
        if(k % 2 === 0) {
            k = k / 2;
        }else {
            k = k * 3 + 1;
        }
        arr.push(k)
    }
    
    return arr;
}

const bar = (arr) => {    
    let arr2 = [];
    for(let i = 0; i < arr.length - 1; i++) {
        arr2.push((arr[i] + arr[i + 1])/2)
    }
    return arr2;
}

const zar = (ranges, arr) => {
    return ranges.map(([s,e]) => {
        let t = 0;
        let p1 = s;
        let p2 = arr.length + e;
        
        if( p1 > p2 ) {
            return -1;
        }
        
        for(let i = p1; i < p2; i++) {
            t = t + arr[i];
        }
        
        return t;
    })
}