function solution(order) {
    let subBelt = []
    let answer = 0;
    
    const getBoxFromSubBelt = () => {
        for (let i = answer; i < order.length; i++) {
            const box = subBelt[subBelt.length - 1];
            
            if (box !== order[answer]) {
                return;
            }
            
            answer++;
            subBelt.pop();
        }
    }
    
    Array.from({length: order.length})
        .map((_, i) => i+ 1)
        .forEach((box) => {
            subBelt.push(box);
            getBoxFromSubBelt();
        })
    
    return answer;
}