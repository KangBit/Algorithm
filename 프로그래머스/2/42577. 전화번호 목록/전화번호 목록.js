function solution(phone_book) {
    const set = new Set(phone_book);
    
    return !phone_book.find((phone) => {
        set.delete(phone)
        
        for (let i = 1; i <= phone.length; i++) {
            const piece = phone.slice(0, i);
            if (set.has(piece)) {
                set.add(phone);
                return true;
            }
        }
        
        set.add(phone);
        return false;
    })
}
