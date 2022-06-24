function solution(k, dungeons) {
    let playCount = Math.min(...play(k, dungeons));
    return dungeons.length - playCount;
}

const play = (k, dungeons) => {
    if(dungeons.length === 0){
        return [0];
    }

    let results = [];
    for(let i = 0; i< dungeons.length; i++){
        let leftDungeons = [...dungeons];
        let now = leftDungeons.splice(i,1)[0];
        let t = k - now[0];

        if(t < 0){
            results.push(dungeons.length);
        }else {
            results.push(...play(k-now[1], leftDungeons));
        }
    }
    
    return results;
}