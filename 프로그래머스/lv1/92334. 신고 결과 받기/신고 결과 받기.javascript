function solution(id_list, report, k) {
    let answer = foo(id_list,report,k);
    return answer;
}

const foo = (id_list, report, k) => {
    let counts = id_list.map(() => 0);
    let result = id_list.map(() => 0);
    
    const arrUnique = [...new Set(report)]; // 중복 제거
    
    arrUnique.forEach(item => {
        let pieces = item.split(" ");
        let reported = id_list.indexOf(pieces[1]);
        
        counts[reported] = counts[reported] + 1;
    })
    
    arrUnique.forEach(item => {
        let pieces = item.split(" ");
        let reporter = id_list.indexOf(pieces[0]);
        let reported = id_list.indexOf(pieces[1]);
        
        if(counts[reported] >= k){
            result[reporter] = result[reporter] + 1;
        }
    })
    
    return result
}