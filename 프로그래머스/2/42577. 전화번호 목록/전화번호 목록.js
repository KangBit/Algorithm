function solution(phone_book) {
    return !phone_book.sort().some((phone, i) => {
        if (!phone_book[i+1]) {
            return false;
        }
        
        return phone_book[i+1].startsWith(phone);
    })
    
}
