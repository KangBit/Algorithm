function solution(people, limit) {
    let answer = 0;
    let sortedList = people.sort((a,b)=>b-a);
    
    for(let l = 0, r = people.length -1; l <= r; l++, answer++){
        if(sortedList[l] + sortedList[r] <= limit){
            r--;
        }
    }
    
    return answer;
}