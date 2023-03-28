function solution(s) {
    let arr = [];
    
    return s.split("").reduce((acc, curr)=>{
        const lastIndex = arr.lastIndexOf(curr);
        
        if(lastIndex >= 0) {
            acc.push(arr.length - lastIndex);
        }else {
            acc.push(-1);
        }
        
        arr.push(curr);
        
        return acc;
    },[]);
}