function solution(land) {
    let last = land.reduce((prev,row,i)=>{
        if(i == 0){
            return [...row]
        }else {
            return getMaxRow(prev,row);
        }
    },[]);

    return Math.max(...last);
}

const getMaxRow = (arr1,arr2) => {
    return arr2.reduce((prev,curr,i)=>{
        let max = 0;
        for(let j = 0;  j < 4; j++){
            let sum = arr1[j] + curr
            
            if( j !== i && sum > max){
                max = arr1[j] + curr
            }
        }    
        return [...prev,max];
    },[]);
}