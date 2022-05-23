function solution(bridge_length, weight, truck_weights) {
    let answer = 0;

    let trucks = [...truck_weights];
    let bridge = new Array(bridge_length).fill(0);
    let complete = [];
    
    while(complete.length < truck_weights.length){
        answer += 1;
        if(bridge.length > 0){
            let first = bridge.shift();
            if(first !== 0){
                complete.push(first);
            }
        }
        
        let sum = bridge.reduce((a,b) => a+b, 0);
        
        if(sum + trucks[0] <= weight){
            bridge.push(trucks.shift());
        }else {
            bridge.push(0);
        }
    }
    
    return answer;
}