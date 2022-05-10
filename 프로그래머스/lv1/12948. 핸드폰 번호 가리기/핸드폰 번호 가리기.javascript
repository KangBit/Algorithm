function solution(phone_number) {
    let last = phone_number.substr(-4,phone_number.length)
    let answer = getStars(phone_number.length-4) + last;
    
    return answer;
}

const getStars = (length) => {
    return [...new Array(length)].reduce((prev,curr) => {
        return prev + "*"
    },"")
}