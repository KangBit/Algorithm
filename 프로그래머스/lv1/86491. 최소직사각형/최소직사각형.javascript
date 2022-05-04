function solution(sizes) {
    let answer = 0;
    let max = [0,0];
    
    sizes.forEach(size => {
        let [long,short] = size.sort((a,b) => b-a);
        
        if(max[0] < long){
            max[0] = long;
        }
        if(max[1] < short){
            max[1] = short;
        }
    })
    
    return max[0]*max[1];
}