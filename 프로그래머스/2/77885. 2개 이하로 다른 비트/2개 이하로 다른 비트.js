function solution(numbers) {
    return numbers.map((num)=>{     
        if(num % 2 === 0) {
            return num + 1;
        }
        
        let binary = String(toBinary(num));
        let exponent = binary.split('').reduce((acc, curr, i) => {
            if (curr === '0') {
                return binary.length - i - 2
            } else {
                return acc    
            }
        }, binary.length - 1)
        
        return num + 2 ** exponent
    });
}

const toBinary = (num) => {
    return num.toString(2);
}