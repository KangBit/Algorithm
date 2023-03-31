function solution(today, terms, privacies) {
    let map = terms.reduce((acc, curr) => {
        let [key, val] = curr.split(" ");
        return {...acc, [key] : val};
    },{});
    
    return privacies.map((el) => {
        let [date, type] = el.split(" ");
        return addMonth(date, map[type]);
    }).reduce((acc, curr, i)=>{
        if(new Date(today) >= new Date(curr)) {
            return [...acc, i+1];
        }else {
            return acc;
        }
    }, []);
}

let addMonth = (originDate, month) => {
    let [yy, mm, dd] = originDate.split(".");
    mm = +mm + +month;
    
    if(mm > 12) {
        yy = +yy + ~~(mm / 12);
        mm = mm % 12;
    }
    if(mm === 0) {
        yy -= 1;
        mm = 12;
    }
    return `${yy}.${mm}.${dd}`;
}