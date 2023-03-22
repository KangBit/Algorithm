function solution(t, p) {
    const count = t.length - p.length + 1;
    
    return new Array(count).fill('').map((_, i)=>{
        return t.slice(i, i + p.length);
    }).filter((word) => {
        return +word <= +p;
    }).length
}