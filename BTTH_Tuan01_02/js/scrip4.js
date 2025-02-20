console.log("\n");
console.log("Coding Challenge #4")
var bill = [275, 40, 430]
var total_bill = bill.forEach(function (bill) {
    var tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    console.log(`Hoá đơn ${bill}, tiền tip là ${tip}, và tổng giá trị ${bill + tip}`);
})
console.log(total_bill);