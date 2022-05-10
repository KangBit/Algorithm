function solution(s, n) {
    return s.split("").map((char)=>{
        let charCode = char.charCodeAt(char);
        let afterCode = shiftCharCode(charCode, n);
        
        return String.fromCharCode(afterCode);
    }).join("");
}

const shiftCharCode = (charCode, shift) => {
    let after = charCode + shift;
    
    if(charCode === 32) {
        return charCode;
    }
    
    if(charCode >= 97){
        return ((after-97)%26) + 97;
    }else {
        return ((after-65)%26) + 65;
    }
}
