function solution(survey, choices) {
    let score = getScore(survey, choices);
    return getType(score);
}

const getScore = (survey, choices) => {
    let score = {
        RT: 0,
        CF: 0,
        JM: 0,
        AN: 0,
    }
    let types = Object.keys(score);
    
    survey.map((el,i)=>{
        if(types.includes(el)){
            score[el] += 4 - choices[i];
        }else {
            let reverse = el.split("").reverse().join("");
            score[reverse] += choices[i] - 4;
        }
    });
    
    return score;
}

const getType = (score) => {
    return Object.keys(score).reduce((prev,curr,i)=>{
        if(score[curr] === 0){
            return [...prev,curr.split('').sort()[0]];
        }else if(score[curr] > 0){
            return [...prev,curr[0]];
        }else {
            return [...prev,curr[1]];
        }
    },[]).join("")
}