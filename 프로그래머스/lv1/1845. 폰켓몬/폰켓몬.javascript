function solution(nums) {
    let answer = nums.length / 2;
    let filteredCount = [...new Set(nums)].length

    if(answer > filteredCount){
        return filteredCount;
    }else {
        return answer;    
    }
}