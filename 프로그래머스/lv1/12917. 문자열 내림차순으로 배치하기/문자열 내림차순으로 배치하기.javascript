function solution(s) {
    let arr = s.split("");
    let sortedArr = arr.sort((a,b) => {
        if( a > b){
            return -1;
        }else {
            return 1;
        }
    });
    return sortedArr.join("");
}