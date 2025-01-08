//Data1
//Marks
console.log('Coding Challenge #2');
var mark_mass = 78;
var mark_height = 1.69;
//John
var john_mass = 92;
var john_height = 1.95;


mark_BMI = mark_mass / mark_height ** 2;
john_BMI = john_mass / john_height ** 2;
mark_BMI = mark_BMI.toFixed(2);
john_BMI = john_BMI.toFixed(2);
console.log("Data 1");
console.log(`BMI Marker: ${mark_BMI} BMI Jobs: ${john_BMI} `);
if(mark_BMI > john_BMI){
    console.log(`BMI Mark's ${mark_BMI} cao hơn John's ${john_BMI}`);
}
else{
    console.log(`BMI Mark's ${mark_BMI} thấp hơn John's ${john_BMI}`);
}
//Data 2
//Marks2
var mark2_mass = 95;
var mark2_height = 1.88;
//John2
var john2_mass = 85;
var john2_height = 1.76;

mark2_BMI = mark2_mass / mark2_height ** 2;
john2_BMI = john2_mass / john2_height ** 2;
mark2_BMI = mark2_BMI.toFixed(2);
john2_BMI = john2_BMI.toFixed(2);
console.log("Data 2");
console.log(`BMI Marker2: ${mark2_BMI} BMI Jobs2: ${john2_BMI}`);

if(mark2_BMI > john_BMI){
    console.log(`BMI Mark's ${mark2_BMI} cao hơn John's ${john_BMI}`);
}
else{
    console.log(`BMI Mark's ${mark2_BMI} thấp hơn John's ${john_BMI}`);
}