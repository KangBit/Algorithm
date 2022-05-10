function solution(n)
{
    let num = n;
    let answer = 0;
    
    while(num > 0){
        answer += num%10
        num = ~~(num/10)
    }

    return answer;
}