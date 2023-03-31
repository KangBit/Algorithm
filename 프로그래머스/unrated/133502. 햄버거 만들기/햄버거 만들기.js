function solution(ingredient) {
    let answer = 0;
    let patties = [...ingredient];
    let i = 0;
    
    while(i < patties.length - 3) {
        let tower = `${patties[i]}${patties[i+1]}${patties[i+2]}${patties[i+3]}`
        let isBugger = tower === "1231";
        if(isBugger) {
            answer += 1;
            patties.splice(i, 4);
            i -= 3;
        }else {
            i += 1;
        }
    }
    
    
    return answer;
}

