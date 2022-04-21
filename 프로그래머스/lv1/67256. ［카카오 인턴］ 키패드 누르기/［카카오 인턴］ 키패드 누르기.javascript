function solution(numbers, hand) {
    let answer = '';
    let leftPos = 10;
    let rightPos = 12;

    numbers.forEach((number)=>{
        if( number == 0 ){
            number = 11;
        }
        
        let numberPos = touchLR(number);
        
        if(numberPos == "C"){
            numberPos = touchCenter(number, hand, leftPos, rightPos);
        }
        
        if (numberPos == "L"){
            leftPos = number;
        }else if (numberPos == "R"){
            rightPos = number;
        }
        
        answer += numberPos;      
    })
  
  return answer;
}

const touchCenter = (number, hand, leftPos, rightPos) => {
    let l = Math.abs(leftPos - number);
    let r = Math.abs(rightPos - number);

    let leftDist = parseInt(l/3) + l%3;
    let rightDist = parseInt(r/3) + r%3;

    if(leftDist == rightDist) {
        return hand[0].toUpperCase();
    }else if (leftDist > rightDist){
        return "R";
    }else {
        return "L";
    }
}

const touchLR = (number) => {
    let remainder = number % 3;

    if( remainder == 1){
        return "L";
    }else if( remainder == 2){
        return "C";
    }else if( remainder == 0){
        return "R";
    }
}