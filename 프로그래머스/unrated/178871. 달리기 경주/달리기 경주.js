function solution(players, callings) {
    let ranks = {};
    for (let i = 0; i < players.length; i++) {
        ranks[players[i]] = i;
    }

    
    return callings.reduce((acc, curr) => {
        let rank = ranks[curr];
        let playerA = acc[rank-1];
        let playerB = acc[rank];
        
        [acc[rank-1], acc[rank]] = [acc[rank], acc[rank-1]];
        
        ranks[playerA] += 1;
        ranks[playerB] -= 1;
        
        return acc;
    }, [...players]);
}