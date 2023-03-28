const canBabblingList = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
    return babbling.reduce((acc, babble)=>{
        return acc + isPronounceable(babble);
    }, 0);
}

const isPronounceable = (babble) => {
    let lastBabble = "";
    let lastIdx = babble.split("").reduce((acc, _, i, origin)=> {
        let curr = origin.slice(acc, i+1).join("");

        if(lastBabble !== curr && canBabblingList.includes(curr)) {
            lastBabble = curr;
            acc = i+1;
        }
        
        return acc;
    }, 0);
    
    return lastIdx === babble.length;
}