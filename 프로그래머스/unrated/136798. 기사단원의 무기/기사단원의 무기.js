function solution(number, limit, power) {
    return new Array(number).fill().map((_,i) => {
        let atk = getWeaponAtk(i + 1);
        return atk > limit ? power : atk;
    }).reduce((acc, curr) => {
        return acc + curr;
    },0)
}

const getWeaponAtk = (num) => {
    let count = 0;
    for(let i = 1; i <= Math.sqrt(num); i++) {
        if (num / i === i) {
            count = count + 1;
        }else if (num % i === 0) {
            count = count + 2;
        }
    }
    return count
}