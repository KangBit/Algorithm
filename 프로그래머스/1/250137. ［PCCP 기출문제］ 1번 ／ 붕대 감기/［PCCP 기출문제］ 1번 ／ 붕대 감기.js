function solution(bandage, health, attacks) {
    let hp = health;
    
    for (let i = 0; i < attacks.length; i++) {
        const [prevTime, _] = attacks[i-1] ?? [0, 0]
        const [attackTime, damage] = attacks[i];
        
        const healingTimes = attackTime - prevTime - 1;
        const healingPoints = healing(healingTimes, ...bandage)
        
        hp = Math.min(health, hp + healingPoints)
        hp = hp - damage;
        
        if (hp < 0) {
            break;
        }
    }
    
    if (hp > 0) {
        return hp;
    } else {
        return -1;
    }
}

const healing = (times, time, tick, bonusTick) => {
    const bonusTime = ~~(times / time)
    
    const heal = times * tick
    const bonusHeal = bonusTime * bonusTick;
    
    return heal + bonusHeal;
}


