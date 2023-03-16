function solution(wallpaper) {
    return wallpaper.reduce(([lux, luy, rdx, rdy], row, i) => {
        row.split('').forEach((curr, j)=>{
            if(curr === "#"){
                lux = Math.min(lux, i)
                luy = Math.min(luy, j)
                rdx = Math.max(rdx, i+1)
                rdy = Math.max(rdy, j+1)
            }
        })
        return [lux, luy, rdx, rdy]
    }, [50,50,-1,-1] );
}