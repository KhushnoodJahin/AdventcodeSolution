const races = [
    { time: 7, distance: 9 },
    { time: 15, distance: 40 },
    { time: 30, distance: 200 }
];


function waysToBeatRecord(race) {
    const { time, distance } = race;
    let ways = 0;
    for (let holdTime = 0; holdTime <= time; holdTime++) {
        let speed = holdTime;
        let remainingTime = time - holdTime;
        let distanceCovered = 0;
        while (remainingTime > 0) {
            distanceCovered += speed;
            speed++;
            remainingTime--;
            if (distanceCovered > distance) {
                ways++;
            }
        }
    }
    return ways;
}


const waysForEachRace = races.map(race => waysToBeatRecord(race));


const totalWays = waysForEachRace.reduce((total, ways) => total * ways, 1);

console.log("Number of ways to beat the record in each race:", waysForEachRace);
console.log("Total number of ways:", totalWays);
