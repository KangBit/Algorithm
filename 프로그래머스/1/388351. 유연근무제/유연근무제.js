function solution(schedules, timelogs, startday) {
    var result = schedules.length;
    
    for (let i = 0; i < schedules.length; i++) {
        const lateness = timelogs[i].find((timelog, j) => {
            const day = (startday + j) % 7;
            if (day === 0 || day === 6) { // 토요일, 일요일
                return false;
            }
            
            let targetTime = getDeadLine(schedules[i]);
            if (targetTime >= timelog) {
                return false
            }
            
            return true
        })
        
        if (lateness) {
            result--;
        }
    }
    
    return result;
}

const getDeadLine = (time) => {
    const min = time % 100
    if (min >= 50) {
        return time + 50
    } else {
        return time + 10
    }
}
