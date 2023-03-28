function solution(s) {
    return s.split("").reduce((acc, curr, i, originArr)=>{
        const lastIndex = originArr.slice(0,i).lastIndexOf(curr);
        
        if(lastIndex >= 0) {
            acc.push(i - lastIndex);
        }else {
            acc.push(-1);
        }
        
        return acc;
    },[]);
}