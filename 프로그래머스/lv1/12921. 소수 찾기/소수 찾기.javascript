function solution(n) {
    let result = [...new Array(n)].filter((_,i)=>{
        let num = i+1;
        
        if( num === 1) {
            return false;
        }
        
        for(let l = 2; l <= Math.sqrt(num) ; l++){
            if(num % l === 0){
                return false;
            }
        }

        return true;
    })
    
    return result.length;
}