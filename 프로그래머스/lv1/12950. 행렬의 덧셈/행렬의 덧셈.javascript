function solution(arr1, arr2) {
    return arr1.map((arr,i)=>{
        return arr.map((num,j)=>{
            return num + arr2[i][j];
        })
    })
}