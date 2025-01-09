console.log("\n");
console.log("Coding Challenge #4");

function calcTip(price) {
    if (price >= 50 && price <= 300) {
        return price * 0.15;
    } else {
        return price * 0.2;
    }
}

let prices = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let arrtips = [];
let arrtotals = [];

for (let i = 0; i < prices.length; i++) {
    let tip = calcTip(prices[i]);
    arrtips.push(tip); // Sửa thành 'tip'
    arrtotals.push(tip + prices[i]); // Sửa thành 'tip'
}

console.log("Bills:", prices);
console.log("Tips:", arrtips);
console.log("Totals:", arrtotals);

function totalAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

const averageTotal = totalAverage(arrtotals);
console.log(`Trung bình cộng của tổng tiền là: ${averageTotal.toFixed(2)}`);
