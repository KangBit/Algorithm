function solution(food) {
    return food.slice(1,food.length).map((cnt) => {
        return cnt - cnt % 2
    }).reverse().reduce((acc, curr, i)=>{
        let arr = new Array(curr/2).fill(food.length - i - 1);
        return [...arr, ...acc, ...arr];
    }, [0]).join("");
}