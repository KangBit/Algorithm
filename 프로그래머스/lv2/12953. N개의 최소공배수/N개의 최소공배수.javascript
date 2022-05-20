function solution(arr) {
    return arr.reduce((prev,curr)=>{
        let max = prev*curr;
        for(let i = 1; i <= max; i++){
            if( i% prev === 0 && i% curr === 0){
                return i;
            }
        }
    },1);
}