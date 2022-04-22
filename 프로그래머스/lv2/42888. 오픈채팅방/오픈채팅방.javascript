function solution(records) {
    let nicknames = records.reduce((prev, curr, i)=>{
        let [action, uid, nickname] = curr.split(" ");
        
        if(action !== "Leave"){
            prev[uid] = nickname;
        }
        return prev;
    }, {})

    return records.reduce((prev, curr, i)=>{
        let [action, uid, nickname] = curr.split(" ");
        
        if(action !== "Change"){
            prev.push(getMessage(nicknames[uid],action))
        }
        return prev;
    },[])
}

let getMessage = (nickname, action) =>{
    let actionMsgs = {"Enter" : "들어왔습니다.", "Leave": "나갔습니다."}
    
    return `${nickname}님이 ${actionMsgs[action]}`
}