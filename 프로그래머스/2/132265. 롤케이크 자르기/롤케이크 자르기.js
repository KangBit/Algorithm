// function solution(topping) {
//     let myTopping = new Set();
//     let toppingCounts = topping.reduce((acc, curr) => {
//         if (acc.get(curr)) {
//             acc.set(curr, acc.get(curr) + 1);
//         } else {
//             acc.set(curr, 1);
//         }
//         return acc;
//     }, new Map());

//     return topping.reduce((acc, curr) => {
//         myTopping.add(curr);
        
//         if (toppingCounts.get(curr) === 1) {
//             toppingCounts.delete(curr)
//         } else {
//             toppingCounts.set(curr, toppingCounts.get(curr) - 1);
//         }
        
//         if (myTopping.size === toppingCounts.size) {
//             return acc + 1;
//         } else {
//             return acc
//         }
//     }, 0)
// }

function solution(topping) {
    const toppingLength = topping.length;
    
    let myTopping = new Set();
    let myToppingCounts = [];
    
    let otherTopping = new Set();
    let otherToppingCounts = [];
    
    for(let i = 0; i < topping.length; i++) {
        myTopping.add(topping[i]);
        myToppingCounts.push(myTopping.size);
        
        otherTopping.add(topping[topping.length - i - 1]);
        otherToppingCounts.push(otherTopping.size);
    }
    
    return myToppingCounts.reduce((acc, curr, i) => {
        if (i === toppingLength - 1) {
            return acc;
        }
        
        if (curr !== otherToppingCounts[toppingLength - i - 2]) {
            return acc;
        }
        
        return acc + 1;
    }, 0)
}