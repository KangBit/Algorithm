class VideoPlayer {
    constructor(length, pos, openingStart, openingEnd) {
        this.length = length;
        this.pos = pos;
        this.openingStart = openingStart;
        this.openingEnd = openingEnd;
    }
    
    get sec () {
        return this.pos;
    }
    
    next() {
        this.skipOpening();
        this.pos = Math.min(this.pos + 10, this.length);
        this.skipOpening();
    }
    
    prev() {
        this.skipOpening();
        this.pos = Math.max(this.pos - 10, 0);
        this.skipOpening();
    }
    
    skipOpening () {
        if (this.#isOpeningArea()) {
            this.#goToOpeningEnd();
        }
    }
    
    #isOpeningArea() {
        return this.openingStart <= this.sec && this.sec < this.openingEnd;
    }
    
    #goToOpeningEnd() {
        this.pos = this.openingEnd;
    }
}

function solution(video_len, pos, op_start, op_end, commands) {
    const video_len_sec = stringToSecond(video_len);
    const pos_sec = stringToSecond(pos);
    const op_start_sec = stringToSecond(op_start);
    const op_end_sec = stringToSecond(op_end);
    
    const player = new VideoPlayer(video_len_sec, pos_sec, op_start_sec, op_end_sec);
    
    for (let command of commands) {
        if (command === 'prev') {
            player.prev();
        }
        if (command === 'next') {
            player.next();
        }
    }
    
    return secondToString(player.sec);
}

const stringToSecond = (time) => {
    const [mm, ss] = time.split(':').map(Number);
    return mm * 60 + ss;
}

const secondToString = (sec) => {
    const minute = ~~(sec / 60);
    const second = sec % 60;
    
    const mm = String(minute).padStart(2,0);
    const ss = String(second).padStart(2,0);
    
    return mm + ":" + ss;
}