function solution(land) {
    let last = land.reduce((prev,row,i)=>{
        return [
            row[0] + Math.max(prev[1],prev[2],prev[3]),
            row[1] + Math.max(prev[0],prev[2],prev[3]),
            row[2] + Math.max(prev[0],prev[1],prev[3]),
            row[3] + Math.max(prev[0],prev[1],prev[2]),
        ]
    },[0,0,0,0]);

    return Math.max(...last);
}