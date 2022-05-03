function solution(N, stages) {
    let stayCounts = getStayCounts(N, stages);
    let failureRatio = getRatioList(stages, stayCounts);
    let sortedList = sortRatioList(failureRatio);
    
    return sortedList.map((obj)=> obj.i)
}

const getStayCounts = (N,stages) => {
    let counts = [...new Array(N)].map(()=>0);
    
    stages.forEach((stage)=>{
        if(stage <= N){
            counts[stage-1] += 1;    
        }
    })
    
    return counts;
}

const getRatioList = (stages, stayCounts) => {
    let reachCount = stages.length;
    let failureRatio = stayCounts.map((count,i)=>{
        let c = reachCount;
        reachCount -= count;
        
        return {i: i+1, ratio: count/c || 0};
    });
    
    return failureRatio;
}

const sortRatioList = (arr) => {
    return arr.sort((a,b)=>{
        if(a.ratio > b.ratio){
            return -1;
        }else if(a.ratio < b.ratio){
            return 1;
        }else {
            if(a.i > b.i ){
                return 1;
            }else {
                return -1;
            }
        }
    })
}
