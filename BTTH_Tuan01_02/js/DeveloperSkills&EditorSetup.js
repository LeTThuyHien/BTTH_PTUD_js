console.log("\n");
console.log("Developer Skills & Editor Setup");
console.log("Coding Challenge #1");
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        result += `...${arr[i]}°C trong ${i + 1} ngày...`;
    }
    console.log(result.trim());
};
printForecast(data1);
printForecast(data2);
