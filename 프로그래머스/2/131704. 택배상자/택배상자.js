function solution(order) {
    let subBelt = []
    let answer = 0;
    let n = 0;
    
    const getBoxFromSubBelt = () => {
        while(subBelt[subBelt.length-1] === order[n] && n < order.length) {
            n++;
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