function solution(a, b) {
    let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let answer = days[new Date(`2016-${a}-${b}`).getDay()];
    
    return answer;
}