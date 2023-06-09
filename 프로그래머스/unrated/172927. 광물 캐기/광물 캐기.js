const table = {
    diamond: {
        diamond: 1,
        iron: 1,
        stone: 1,
    },
    iron: {
        diamond: 5,
        iron: 1,
        stone: 1,
    },
    stone: {
        diamond: 25,
        iron: 5,
        stone: 1,
    },
}

function solution(picks, minerals, tired = 0, times = 0) {
    const material = ["diamond", "iron", "stone"];
    const [diamond, iron, stone] = picks;
    
    if(diamond + iron + stone === 0){
        return tired;
    }
    if(times * 5 > minerals.length){
        return tired;
    }
    
    const quota = minerals.slice(times * 5, (times+1) * 5);
    
    return material.reduce((acc, curr, i)=>{
        if(picks[i] < 1) {
            return acc;
        }
        
        let nextPicks = picks.map((el, l) => {
            if(i === l) {
                return el - 1;
            }else {
                return el;
            }
        });
        let nextTired = tired + dig(material[i], quota);
        let next = solution(nextPicks, minerals, nextTired, times + 1);
        
        return Math.min(acc, next);
    }, Infinity);
}

const dig = (pick, minerals) => {
    
    return minerals.reduce((acc, curr) => {
        return acc + table[pick][curr];
    }, 0);
}