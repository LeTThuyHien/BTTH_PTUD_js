console.log("Coding Challenge #3");
console.log("\n");

const data1Group1 = [96, 108, 89];
const data1Group2 = [89, 91, 110];

const data2Group1 = [97, 112, 101];
const data2Group2 = [109, 95, 123];

const data3Group1 = [97, 112, 101];
const data3Group2 = [109, 95, 106];


let sum1;
let sum2;
let avg1;
let avg2;


function checkGroup(scoreGroup1, scoreGroup2) {
    if(scoreGroup1 > scoreGroup2) {
        console.log("Đội cá heo dành chiến thắng")
        if(scoreGroup1 > 100) {
            console.log("Đội cá heo đạt phần thưởng 1") 
        } else {
            console.log("Đội cá chưa đạt phần thưởng 1") 
        }
    } else if (scoreGroup1 === scoreGroup2) {
        console.log("Hai đội hòa nhau");
    } else {
        console.log("Đội gấu túi dành chiến thắng") 
        if(scoreGroup2 > 100) {
            console.log("Đội gấu túi đạt phần thưởng 1") 
        } else {
            console.log("Đội gấu túi chưa đạt phần thưởng 1") 
        }
    }
}

if(true) {
    console.log("Data 1");
    sum1 = data1Group1.reduce((pre, currentValue) => pre + currentValue);
    avg1 = sum1 / data1Group1.length
    console.log("Điểm trung bình của đội cá heo: " + avg1);


    sum2 = data1Group2.reduce((pre, currentValue) => pre + currentValue);
    avg2 = sum2 / data1Group1.length
    console.log("Điểm trung bình của đội gấu túi: " + avg2);

    checkGroup(avg1, avg2)
}   

console.log("\n");
if(true) {
    console.log("Data 2");
    sum1 = data2Group1.reduce((pre, currentValue) => pre + currentValue);
    avg1 = sum1 / data2Group1.length
    console.log("Điểm trung bình của đội cá heo: " + avg1);

    sum2 = data2Group2.reduce((pre, currentValue) => pre + currentValue);
    avg2 = sum2 / data2Group1.length 
    console.log("Điểm trung bình của đội gấu túi: " + avg2);


    checkGroup(avg1, avg2)
}   

console.log("\n");
if(true) {
    console.log("Data 3");
    sum1 = data3Group1.reduce((pre, currentValue) => pre + currentValue);
    avg1 = sum1 / data3Group1.length
    console.log("Điểm trung bình của đội cá heo: " + avg1);

    sum2 = data3Group2.reduce((pre, currentValue) => pre + currentValue);
    avg2 = sum2 / data3Group1.length
    console.log("Điểm trung bình của đội gấu túi: " + avg2);
    
    checkGroup(avg1, avg2)
}