console.log('\n');
console.log('Data Structures, Modern Operators & Strings');
let players1 = ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka',
    'Coman', 'Muller', 'Gnarby', 'Lewandowski'];
let players2 = ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi',
    'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze'];
let [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
let allPlayers = [...players1, ...players2];
console.log('Tất cả người chơi của cả hai đội', allPlayers);
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('Đội 1 và 3 cầu thủ dự bị ', players1Final);
const games = {
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    }

}
const { team1, draw, team2 } = games.odds;
console.log(`Tỉ lệ cược team1, draw, team2 lần lượt là: ${team1}, ${draw}, ${team2} `);
function printGoals(...players) {
    players.forEach(function (player) {
        console.log(player);
    });
    console.log(`Tổng số bàn thắng : ${players.length}`);
}
const lowestOddsTeam = Object.entries(games.odds).reduce((min, current) => 
    min[1] < current[1] ? min : current
);

console.log(`Đội có tỉ lệ cược thấp nhất: ${lowestOddsTeam[0]} với giá trị: ${lowestOddsTeam[1]}`);