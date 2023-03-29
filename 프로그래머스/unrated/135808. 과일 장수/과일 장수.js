function solution(k, m, score) {
    return score.sort((a,b) => b-a).chunk(m).reduce((acc, curr)=>{
        let price = m * Math.min(...curr, k);
        return acc + price;
    }, 0)
}

Array.prototype.chunk = function(length){
    let newArr = [];
    let to = this.length - this.length % length;
    
    for(let i = 0; i < to; i += length) {
        newArr.push(this.slice(i, i + length));
    }
    
    return newArr;
}