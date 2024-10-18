function solution(friends, gifts) {
  const length = friends.length;
  
  const idxMap = friends.reduce((acc, cur, idx) => {
      return acc.set(cur, idx)
  }, new Map);
  const records = new Array(length).fill(0).map(() => new Array(length).fill(0));
  const score = new Array(length).fill(0);
  
  gifts.forEach((str) => {
      const [from, to] = str.split(' ').map((el) => idxMap.get(el));
      
      records[from][to] = records[from][to] + 1;
      score[from] = score[from] + 1;
      score[to] = score[to] - 1;
  });
  
  const nextMonthGifts = getNextMonthGifts(records, score);
  return Math.max(...nextMonthGifts);
}

function getNextMonthGifts(giftRecords, giftScore) {
  return giftRecords.map((record, from) => {
    return record.reduce((acc, give, to) => {
        if (from === to) return acc;
        
        const receive = giftRecords[to][from]
        
        if (receive > give) return acc;
        if (receive < give) return acc + 1;
        
        // if receive === give
        if (giftScore[from] > giftScore[to]) {
            return acc + 1;
        } else {
            return acc;
        }
    },0);
  });
}