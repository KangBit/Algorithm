function solution(name, yearning, photo) {
    let map = name.reduce((acc, curr, i) => {
        return {...acc, [curr]: yearning[i]};
    },{})
    
    return photo.reduce((acc, curr) => {
        let point = curr.reduce((acc2, curr2) => {
            return acc2 + (map[curr2] || 0);
        }, 0);
        
        return [...acc, point];
    },[]);
}