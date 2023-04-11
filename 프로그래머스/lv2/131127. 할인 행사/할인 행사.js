function solution(want, number, discount) {
    return discount.reduce((acc, curr, i) => {
        if(i > discount.lentgh - 10) {
            return acc;
        }
        
        let p = i;
        let copy = number.slice();
        
        while( i - p  < 10) {
            if(!copy[want.indexOf(discount[i])]) {
                return acc;
            }
            copy[want.indexOf(discount[i])] -= 1;
            i += 1;
        }
        
        
        return acc + 1;
    }, 0)
}