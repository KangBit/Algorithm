function solution(fees, records) {
    let parkingSpace = new Map();
    let cars = new Map();
    
    records.forEach((record,idx)=>{
        const [time, number, inout] = record.split(" ");
        let parkingTime = 0;
        
        if(parkingSpace.has(number)) {
            parkingTime = parkingTime + getParkingTime(parkingSpace.get(number), time);
            parkingSpace.delete(number);
        }else {
            parkingSpace.set(number, time);
        }
        
        if(cars.has(number)){
            cars.set(number, parkingTime + cars.get(number));
        }else {
            cars.set(number, parkingTime);    
        }
    });
    
    parkingSpace.forEach((time, number) => {
        let parkingTime = getParkingTime(time);
        cars.set(number, parkingTime + cars.get(number));
    })
    
    return Array.from(cars)
        .sort((a, b) => +a[0] - +b[0])
        .map(([carNumber, parkingTime]) => {
            return getParkingFee(fees, parkingTime);
        });
}

const getParkingTime = (inTime, outTime = "23:59") => {
    let [outH, outM] = outTime.split(":");
    let [inH, inM] = inTime.split(":");
    
    return (+outM - +inM) + (+outH - +inH) * 60;
}

const getParkingFee = (fees, time) => {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    let fee = basicFee;
    
    if(time > basicTime) {
        const overTime = time - basicTime;
        const overTimeFee = Math.ceil(overTime/unitTime) * unitFee;
        fee = fee + overTimeFee;
    }
    
    return fee;
}