console.log('\n');
console.log('Data Structures, Modern Operators & Strings');
console.log("Coding Challenge #1");
let players1 = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka',
    'Coman', 'Muller', 'Gnarby', 'Lewandowski'];
let players2 = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
    'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'];
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('Đội 1 và 3 cầu thủ dự bị ', players1Final);
const games = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
    players: [...players1, ...players2],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    }

}
console.log("Tất cả người chơi của cả hai đội", games.players);
const { team1, draw, team2 } = games.odds;
console.log(`Tỉ lệ cược team1, draw, team2 lần lượt là: ${team1}, ${draw}, ${team2} `);
function printGoals(...players) {
    players.forEach(function (player) {
        console.log(player);
    });
    console.log(`Tổng số bàn thắng : ${players.length}`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

const lowestOddsTeam = Object.entries(games.odds).reduce((min, current) =>
    min[1] < current[1] ? min : current
);

console.log(`Đội có tỉ lệ cược thấp nhất: ${lowestOddsTeam[0]} với giá trị: ${lowestOddsTeam[1]}`);

console.log("Coding Challenge #2");
var goal = games.scored.forEach(function (player, i) {
    console.log(`Bàn thắng ${i + 1}: ${player}`);
})

const odds = Object.values(games.odds);
const oddNumbers = [];
for (const odd of odds) {
    if (odd % 2 !== 0) {
        oddNumbers.push(odd); // Thêm số lẻ vào mảng oddNumbers
    }
}
console.log(oddNumbers);
let sum = 0;
let average = 0;
for (const odd of odds) {
    sum += odd;
}
average = sum / odds.length;
console.log("Trung bình các odds", average.toFixed(2));


// In các odds theo định dạng yêu cầu
console.log(`Tỉ lệ cược chiến thắng của ${games.team1}: ${games.odds.team1}`);
console.log(`Tỉ lệ hoà: ${games.odds.draw}`);
console.log(`Tỉ lệ cược chiến thắng của ${games.team2}: ${games.odds.team2}`);

const scorers = {};
for (const player of games.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

console.log("Coding challenge #3")
const gameEvents = new Map([
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
]);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);

const totalMinutes = 90;
const totalEvents = gameEvents.size;
const averageInterval = totalMinutes / totalEvents;
console.log(`Một sự kiên xảy ra, trung bình cứ ${averageInterval} phút một lần`);

for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${minute}: ${event}`);
}
 
