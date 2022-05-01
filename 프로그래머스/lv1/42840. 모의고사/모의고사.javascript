function solution(answers) {
    let answer = [];
    
    let score = getScore(answers);
    let max = Math.max(...score);
    score.forEach((score,i)=>{
        if(score === max){
            answer.push(i+1);
        }
    })
    
    return answer;
}

const getScore = (answers) => {
    let markingList = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    let score = answers.reduce((prev,curr,i) => {
        markingList.map((marking, l)=>{ 
            let {length} = marking;
            if( marking[i%length] === curr){
                prev[l] += 1;
            }
        })
        return prev;
    },[0,0,0])
    
    return score;
}