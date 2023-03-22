function solution(cards1, cards2, goal) {
    return goal.reduce((acc, curr)=>{
        const [card1, ...a] = acc[0];
        const [card2, ...b] = acc[1];
        
        if(curr === card1) {
            return [a, acc[1], acc[2]]
        }
        if(curr === card2) {
            return [acc[0], b, acc[2]]
        }
        
        return [[], [], "No"]
    },[cards1, cards2, "Yes"])[2]
}