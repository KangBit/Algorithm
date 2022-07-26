function solution(files) {
    return files.sort((a,b)=>{
        let aHead = getFileHead(a);
        let bHead = getFileHead(b);
        
        if(aHead !== bHead) {
            return aHead > bHead ? 1 : -1;
        }
        
        let aNumber = getFileNumber(a.slice(aHead.length, a.length));
        let bNumber = getFileNumber(b.slice(bHead.length, b.length));
        
        return (aNumber - bNumber);
    })
}
               
const getFileHead = (str) => {
    let head = ""
    for(let i = 0; i < str.length ;i++){
        if(!isNaN(str[i]) && str[i] !== " "){
            break;
        }
        head += str[i];
    }
    return head.toUpperCase();
}

const getFileNumber = (str) => {    
    let num = "";
    
    for(let i = 0; i < str.length ;i++){
        if(isNaN(str[i])){
            break;
        }
        num += str[i];
    }
    return +num;
}