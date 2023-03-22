function solution(n, m, section) {
    return section.reduce((acc, curr)=>{
        if (curr < acc[0] + m) {
            return acc
        }else {
            return [curr, acc[1] + 1]
        }
    },[-m, 0])[1]
}