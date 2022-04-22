function solution(array, commands) {
    return commands.map((command)=>{
        let slice = array.slice(command[0]-1,command[1]);
        let sorted = slice.sort((a,b) => a-b)
        return sorted[command[2]-1]
    })
}