const commands = {
    "E": [0, 1],
    "W": [0, -1],
    "S": [1, 0],
    "N": [-1, 0],
};

function solution(park, routes) {
    const [startX, startY] = findStartPoint(park);
    
    return routes.reduce(([x, y], route) => {
        const direction = route.split(" ")[0];
        const count = +route.split(" ")[1];
        const [addX, addY] = commands[direction];
        
        const cannotMove = new Array(count).fill().map((_, i)=>{
            return park[x + addX * (i+1)]?.[y + addY * (i+1)];
        }).findIndex((el)=>{
            return el === undefined || el === "X";
        }) + 1;
        
        if(cannotMove) {
            return [x, y];
        }else {
            return [x + addX * count, y + addY * count];
        }
    }, [startX, startY])
}

const findStartPoint = (park) => {
    const x = park.findIndex((el) => {
        return el.includes("S");
    })
    const y = park[x].indexOf("S");
    
    return [x, y];
}