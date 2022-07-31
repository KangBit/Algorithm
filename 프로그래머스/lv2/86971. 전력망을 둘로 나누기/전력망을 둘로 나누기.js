function solution(n, wires) {
    let answer = 100;
    wires.forEach((wire,i)=>{
        let newArr = [...wires];
        newArr.splice(i,1);
        
        let left = foo(newArr, wire[0]);
        let right = foo(newArr, wire[1]);
        
        let x = Math.abs(left - right);
        if( x < answer){
            answer = x;
        }
    })
    return answer;
}

const foo = (arr, node) => {
    if(arr.length === 0){
        return 0;
    }
    
    return arr.reduce((prev,curr,i)=>{
        let newArr = [...arr];
        newArr.splice(i,1);
        if(curr[0] === node){
            return prev + foo(newArr, curr[1]) + 1;
        }else if(curr[1] === node){
            return prev + foo(newArr, curr[0]) + 1;
        }
        return prev;
    },0)
}