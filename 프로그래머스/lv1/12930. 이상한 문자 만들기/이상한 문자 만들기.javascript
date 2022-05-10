function solution(s) {
    let isOddIndex = false;
    let charArr = s.split("");
    
    return charArr.reduce((prev,curr) => {
        if(curr === " "){
            isOddIndex = false;
            return prev + curr;
        }

        isOddIndex = !isOddIndex;
        if(isOddIndex){
            return prev + curr.toUpperCase();
        }else {
            return prev + curr.toLowerCase();
        }
    }, "")
}
