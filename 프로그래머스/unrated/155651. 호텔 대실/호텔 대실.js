function solution(book_time) {
    let times = book_time.map(([i, o])=>{
        let iTime = +i.split(':')[0] * 60 + +i.split(':')[1];
        let eTime = +o.split(':')[0] * 60 + +o.split(':')[1] + 10;
        return [iTime, eTime];
    }).sort((a, b) => a[0] - b[0]);

    return times.reduce((acc, [i, o], idx) => {
        let rooms = 1;
        for(let j = 0; j < idx; j++){
            if(times[j][1] > i) {
                rooms += 1;
            }
        }
        return Math.max(rooms, acc);
    }, 0)
}