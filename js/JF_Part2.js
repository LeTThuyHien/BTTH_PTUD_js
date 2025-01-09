console.log("\n");
console.log("JavaScript Fundamentals – Part 2");
console.log("Coding Challenge #1");

//Data 1
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}
//Data 1
const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
//Data 2
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins thắng (${avgDolphins} đấu với ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas thắng (${avgKoalas} đấu với ${avgDolphins})`);
    } else {
        console.log(`Không đội nào thắng`);
    }
}
checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);

console.log("\n");
console.log("Coding Challenge #2");
function calcTip(bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * 0.15;
    } else {
        return bills * 0.2;
    }
}
var bills = [125, 555, 44];
var tips = bills.map(function (bill) {
    return calcTip(bill);
});
var total = bills.map(function (bill, index) {
    return bill + tips[index];
});
console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);

console.log("\n");
console.log("Coding Challenge #3");
let Mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2).toFixed(1);
    }

}
let John = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = (this.mass / this.height ** 2).toFixed(1);
    }
}
// function calcBMI(person){
//     return person.mass / person.height ** 2;
// }
Mark.calcBMI();
John.calcBMI();
if (Mark.BMI > John.BMI) {
    console.log(`BMI của ${Mark.fullname} (${Mark.BMI}) cao hơn BMI của ${John.fullname} (${John.BMI})`);
}
else if (John.BMI > Mark.BMI) {
    console.log(`BMI của ${John.fullname} (${John.BMI}) cao hơn BMI của ${Mark.fullname} (${Mark.BMI})`);
}
else {
    console.log(`BMI của ${Mark.fullname} (${Mark.BMI}) và ${John.fullname} (${John.BMI}) bằng nhau`);
}



