function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        let row = arr2[0].map((_, j)=>{
            return arr1[i].reduce((prev,curr,l)=>{
                return prev + curr*arr2[l][j];
            },0);
        })
        
        answer.push(row);
    }
    return answer;
}