function solution(s) {
    let answer = '';
    let str = s;
    
    str = str.toLowerCase();

    return str.split(' ').map((c)=>{
        let first = c.slice(0,1).toUpperCase();
        
        return first + c.slice(1);
    }).join(' ');
}