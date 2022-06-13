function solution(numbers) {
    let primeNumbers = step(numbers.split(""),"");
    
    return primeNumbers.length;
}

const step = (arr, result) => {
    return arr.reduce((prev,curr,i)=>{
        let newArr = [...arr];
        let char = newArr.splice(i,1);
        
        prev.push(...step(newArr, result + char), +(result + char));
        return [...new Set(prev)];
    },[]).filter(filterPrimeNum);
}

const filterPrimeNum = (num) => {
    if(num === 0 || num === 1){
        return false;
    };
    
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}