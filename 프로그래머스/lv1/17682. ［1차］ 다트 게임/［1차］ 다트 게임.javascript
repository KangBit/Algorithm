function solution(dartResult) {
    let answer = 0;
    
    let points = [];
    let tmpPoint = "";
    
    dartResult.split("").forEach((str,i)=>{
        let prev = dartResult[i-1];
        
        points = setNumber(points, +prev, +str);
        points = setBonus(points, str);
        points = setOption(points, str);
    })
    
    return points.reduce((prev,curr)=> prev + curr);
}


const setNumber = (points, prev, curr) => {
    let copy = [...points];
    if(!isNaN(prev) && !isNaN(curr)){
        copy.push(copy.pop() + curr + "")
    }else if(!isNaN(curr)){
        copy.push(curr + "");
    }
    
    return copy;
}

const setBonus = (points, bonus) => {
    let bonusList = ["","S","D","T"];
    let copy = [...points];
    let exponent = bonusList.indexOf(bonus);
    
    if(exponent > 0){
        copy.push(Math.pow(copy.pop(), exponent));
    }
    
    return copy;
}

const setOption = (points, option) => {
    let copy = [...points];
    
    if(option === "#"){
        copy.push(+copy.pop() * -1);
    }
    
    if(option === "*"){
        let last = +copy.pop()*2;
        let secondToLast = +copy.pop()*2;
        
        if(!isNaN(secondToLast)){
            copy.push(secondToLast);
        }
        copy.push(last);
    }
    
    return copy;
}