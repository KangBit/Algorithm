function solution(n, arr1, arr2) {
    return arr1.map((e, i) => {
        let binary = (e | arr2[i]).toString(2);
        let str = fillZero(binary, n);
        str = str.replace(/1/gi,"#");
        str = str.replace(/0/gi," ");
        
        return str;
    });
}

const fillZero = (str, length) => {
    if(str.length == length) {
        return str;
    }
    
    let tmp = str;
    
    for(let i = 0; i< length - str.length; i++){
        tmp = "0" + tmp;
    }
    return tmp;
}