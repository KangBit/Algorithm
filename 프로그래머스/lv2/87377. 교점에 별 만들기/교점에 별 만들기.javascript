function solution(line) {
    let [points, minX, maxX] = getIntersectionPoints(line);
    let answer = drawLines(points, minX, maxX);
    
    return answer;
}

const getIntersectionPoint = (line1, line2) => {
    let [a,b,e] = line1;
    let [c,d,f] = line2;
    
    let denominator = a*d - b*c;
    let numeratorX = b*f - e*d;
    let numeratorY = e*c - a*f;
    if(denominator !== 0 && numeratorX % denominator === 0 && numeratorY % denominator === 0){
        let x = numeratorX / denominator;
        let y = numeratorY / denominator;
        
        return [x,y];
    }else {
        return [];
    }
}

const getIntersectionPoints = (line) => {
    let points = [];
    let minX, maxX;
    
    for(let i = 0; i < line.length; i++){
        for(let j = i+1; j < line.length; j++){
            let [x,y] = getIntersectionPoint(line[i],line[j]);
            
            if(x !== undefined){
                if(minX == undefined) minX = x;
                if(maxX == undefined) maxX = x;
                
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
                
                points.push([x,y])
            }
        }    
    }
    
    points.sort((a,b) => {
        let [x1,y1] = a;
        let [x2,y2] = b;
        
        if(y1 > y2){
            return -1;
        }else if( y1 < y2 ){
            return 1;
        }else {
            if(x1 > x2){
                return 1;
            }else{
                return -1;
            }
        }
    });
    
    return [points, minX, maxX];
}

const drawEmptyLines = (num, length) => {
    if(num <= 0){
        return []
    }
    
    return [...new Array(num)].map(() => {
        return new Array(length).fill(".").join("");
    });
}

const drawStar = (str, index) => {
    return str.substring(0, index) + "*" + str.substring(index + 1);
}

const drawLines = (points, minX, maxX) => {
    let lines = [];
    let lineNum = 0;
    for(let i = 0; i < points.length; i++){
        if(i > 0){
            let emptyLineLength =  points[i-1][1] - points[i][1] - 1;
            lineNum += emptyLineLength + 1;
            lines.push(...drawEmptyLines(emptyLineLength, maxX - minX + 1));
        }
        
        let str = lines[lineNum] || new Array(maxX - minX + 1).fill(".").join("");
        
        lines[lineNum] = drawStar(str, points[i][0] - minX);
    }
    
    return lines;
}