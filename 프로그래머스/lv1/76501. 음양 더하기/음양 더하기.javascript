function solution(absolutes, signs) {
    return absolutes.reduce((prev,curr,index)=> {
        if(signs[index]){
            return prev += curr;
        }else {
            return prev -= curr;
        }
    }, 0)
}