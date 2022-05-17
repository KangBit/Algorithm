function solution(arr1, arr2) {
    return arr1.map((_,i) => {
        let row = arr2[0].map((_, j)=>{
            return arr1[i].reduce((prev,curr,l)=>{
                return prev + curr*arr2[l][j];
            },0);
        })
        
        return row;
    })
}