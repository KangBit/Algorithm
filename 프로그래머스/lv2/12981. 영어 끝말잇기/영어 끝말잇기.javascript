function solution(n, words) {
    let times = 1;
    let record = new Set().add(words[0]);
    
    while(times < words.length){
        let word = words[times];
        let prev = words[times-1];
        
        if(record.has(word)){
            break;
        }else if (word[0] !== prev[prev.length-1]){
            break;
        }
        
        record.add(word);
        times += 1;
    }

    if(words.length === times){
        return [0,0]
    }
    
    return [times % n + 1, Math.ceil((times+1) / n )];
}


