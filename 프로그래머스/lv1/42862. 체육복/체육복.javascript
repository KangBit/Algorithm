function solution(n, lost, reserve) {
    let members = getClothesArr(n, lost, reserve)
    let afterLend = lend(members);
   
    let answer = afterLend.filter((clothes)=>clothes>0).length;
    return answer;
}

const getClothesArr = (memberCount, lost, reserve) => {
    return [...new Array(memberCount)].map((undefined, i) => {
        let clothes = 1;
        if(lost.includes(i+1)) clothes--;
        if(reserve.includes(i+1)) clothes++;
        return clothes;
    });
}

const lend = (clothes) => {
    let members = [...clothes]
    members.forEach((clothes, i)=>{
        if(clothes < 2 ) {
            return;
        }
        
        if(members[i-1] == 0){
            members[i-1] += 1
        }else if(members[i+1] == 0){
            members[i+1] += 1
        }
        
        members[i] = 1;
    });
    return members
}