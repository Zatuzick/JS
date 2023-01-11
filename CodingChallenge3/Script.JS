const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    socre: '4:0',
    socred: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th,2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const gameEvents = new Map(
    [
        [17, 'GOAL'],
        [36, 'Substitution'],
        [47, 'GOAL'],
        [61, 'Substitution'],
        [64, 'Yellow card'],
        [69, 'Red card'],
        [70, 'Substitution'],
        [72, 'Substitution'],
        [76, 'GOAL'],
        [80, 'GOAL'],
        [92, 'Yellow card'],
    ]
);

//1
// console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);

//3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

//4
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}