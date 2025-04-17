// 1. 재귀를 이용해 사전 만들기
// const chars = [" ", "A", "E", "I", "O", "U"];

// function solution(word) {
//   const dict = [...makeWords("")].sort();
//   return dict.indexOf(word);
// }

// const makeWords = (str) => {
//   const trimmedStr = str.trim();
//   if (str.length === 5 || trimmedStr.length !== str.length) {
//     return new Set([trimmedStr]);
//   }

//   return chars.reduce((acc, char) => {
//     return union(acc, makeWords(str + char));
//   }, new Set());
// };

// const union = (setA, setB) => new Set([...setA, ...setB]);

// 2. 가중치 이용하기
function solution(word) {
    const chars = ["A", "E", "I", "O", "U"];
    
    const weights = Array.from({length: 5}).map((_, i) => {
        return (5**(5-i)-1) / 4;
    })
    
    return word.split('').reduce((acc, char, i) => {
        return acc + 1 + chars.indexOf(char)* weights[i];
    }, 0)
}

// 3. dfs 이용하기
// function solution(word) {
// }