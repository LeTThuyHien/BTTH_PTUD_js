console.log("Coding Challenge #1");
let mass
let height
var BMIMarks1;
var BMIJohn1;
let markHigherBMI = false;

console.log(" Data 1 ")
if (true) {
    mass = 78;
    height = 1.69;

    BMIMarks1 = mass / (height * height);
    console.log("Marks weights 78 kg and is 1.69 m tall => BMI: " + BMIMarks1);
}

if (true) {
    mass = 92;
    height = 1.95;

    BMIJohn1 = mass / (height * height);
    console.log("John weights 92 kg and is 1.95m tall => BMI: " + BMIJohn1);
}

if (BMIMarks1 > BMIJohn1) {
    console.log("Mark has a higher BMI than John.");
} else {
    console.log("John has a higher BMI than Mark.");
}

console.log("Data 2")
var BMIMarks2;
var BMIJohn2;
if (true) {
    mass = 95;
    height = 1.88;

    BMIMarks2 = mass / (height * height);
    console.log("Marks weights 78 kg and is 1.69 m tall => BMI: " + BMIMarks2);
}

if (true) {
    mass = 85;
    height = 1.76;

    BMIJohn2 = mass / (height * height);
    console.log("John weights 92 kg and is 1.95m tall => BMI: " + BMIJohn2);
}

if (BMIMarks2 > BMIJohn2) {
    console.log("Mark has a higher BMI than John.");
} else {
    console.log("John has a higher BMI than Mark.");
}


console.log("\n");