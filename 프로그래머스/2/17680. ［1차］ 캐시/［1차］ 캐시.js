function solution(cacheSize, cities) {
    const citySet = new Set();
    
    return cities.reduce((acc, curr) => {
        let city = curr.toLowerCase();
        
        if (citySet.has(city)) {
            acc = acc + 1;
            citySet.delete(city);
        } else {
            acc = acc + 5;
        }
        
        if (cacheSize === 0) {
            return acc;
        }
        
        if (citySet.size === cacheSize) {
            const [first] = citySet;
            citySet.delete(first);
        }
        
        citySet.add(city);
        
        return acc;
    }, 0)
}