function solution(s) {
    let arr = s.slice(2,s.length -2).split("},{").sort((a, b) => a.split(",").length - b.split(",").length);
    
    return arr.reduce((acc, curr)=>{
        curr.split(",").forEach((el)=>{
            if(!acc.includes(+el)){
                acc.push(+el);
            }
        })
        return acc;
    },[]);
}