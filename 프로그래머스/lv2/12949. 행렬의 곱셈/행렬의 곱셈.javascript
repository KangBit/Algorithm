function solution(arr1, arr2) {
    let answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        let row = [];
        
        for(let j = 0; j < arr2[0].length; j++){
            let sum = arr1[i].reduce((prev,curr,l)=>{
                return prev + curr*arr2[l][j];
            },0);
            row.push(sum);
        }
        
        answer.push(row);
    }
    return answer;
}