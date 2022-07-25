function solution(m, musicinfos) {
    let answer = "(None)";
    let maxTime = 0;
    
    musicinfos.forEach((item)=>{
        let [start, end, title, melody] = item.split(",");
        let playTime = getPlayTime(start, end);
        let fullMelody = getFullMelody(playTime, melody);
        let c = checkMelodies(m, fullMelody);
        
        if(c === true){
            if(maxTime !== 0){
                answer = playTime > maxTime ? title: answer;                
                maxTime = playTime > maxTime ? playTime: maxTime;
            }else {
                answer = title;
                maxTime = playTime;
            }
        }
    });
    return answer;
}

const checkMelodies = (m,melody) => {
    if(melody.includes(m)){
        let i = 0;
        while(i < melody.length && i !== -1){
            i = melody.indexOf(m,i);

            if(i === -1) break;
            if(melody[i + m.length] !== "#"){
                return true;
            }
            i += 1;
        }
    }
    return false;
}

const getMelodyList = (m) => {
    return m.split("").reduce((prev,curr)=>{
        if(curr === "#"){
            prev[prev.length-1] = prev[prev.length-1] + "#";
            return prev;
        }else {
            return [...prev,curr];
        }
    },[]);
}

const getFullMelody = (playTime, melody) => {
    let fullMelody = "";
    let melodyList = getMelodyList(melody);
    
    let i = 0;
    while(playTime > 0){
        fullMelody += melodyList[i]
        playTime -= 1;
        
        if(i === melodyList.length - 1){
            i = 0;
        }else {
            i += 1;    
        }
    }
    
    return fullMelody;
}
                       
const getPlayTime = (start, end)=>{
    let [startH, startM] = start.split(":");
    let [endH, endM] = end.split(":");
    
    let h = +endH - +startH;
    let m = +endM - +startM;
    
    if(h < 0 && m < 0){
        return m + 60;
    } 
    
    return h*60 + m;
}