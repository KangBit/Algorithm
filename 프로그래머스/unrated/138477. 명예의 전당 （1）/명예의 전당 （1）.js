function solution(k, score) {
    let hof = [];
    
    return score.reduce((acc, curr) => {
        hof = [...hof, curr].sort((a,b) => b - a).slice(0,k);
        return [...acc, hof.at(-1)];
    }, []);
}
