function solution(citations) {
    let h = 0;
    
    while(h <= citations.length){
        h += 1;
        
        let length = citations.filter(citation => citation >= h).length;
        if(length < h){
            break;
        }
    }
    
    return h-1;
}