function solution(m, n, startX, startY, balls) {
    return balls.map(([x, y]) => {
        let dist = getNearlist(m, n, startX, startY, x, y);
        
        return Math.min(dist);
    });
}

const getNearlist = (m, n, x1, y1, x2, y2) => {
    let [left, right, top, bottom] = [
        [-x1, y1],
        [m + m - x1, y1],
        [x1, n + n - y1],
        [x1, -y1]
    ];
    
    if (x1 === x2 && y1 > y2) {
        bottom = undefined;
    }
    if (x1 === x2 && y1 < y2) {
        top = undefined;
    }
    if (y1 === y2 && x1 > x2) {
        left = undefined;
    }
    if (y1 === y2 && x1 < x2) {
        right = undefined;
    }
    
    return [left, right, top, bottom].reduce((min, curr) => {
        if (curr === undefined) {
            return min;
        }
        
        const [x, y] = curr;
        return Math.min(min, (x-x2)**2 + (y-y2)**2);
    }, m**2 + n**2);
}