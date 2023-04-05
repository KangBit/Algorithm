function solution(s) {
    let str = s.replaceAll("{","[").replaceAll("}","]");
    let arr = JSON.parse(str).sort((a,b) => a.length - b.length);

    return arr.reduce((acc, curr) => {
        let el = curr.find((el) => !acc.includes(el));
        return [...acc, el];
    },[]);
}