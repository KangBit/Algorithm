function solution(targets) {
    let missile = 0
    
    return targets.sort(([s, e], [s2, e2]) => {
        return e - e2
    }).reduce((acc, [s, e]) => {
        if (s >= missile) {
            missile = e
            acc += 1
        }
        return acc
    }, 0)
}