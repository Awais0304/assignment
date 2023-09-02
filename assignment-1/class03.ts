
// claculate the area of rectangular

var lenght: number = 10;
var width: number = 20;
var area: number = lenght * width;
console.log(area);

// calculate the volume of cube
var lenght: number = 20;
var width: number = 10;
var height: number = 30;

var volume: number = lenght * width * height;
console.log(volume);

// check a number is positive or negtaive or zero

var num1: number = 30;
if (num1 > 0) {
    console.log("num is positive");
}
else if (num1 < 0) {
    console.log("num is negative");
}
else {
    console.log("num is zero");
}
// check a number is even or odd
var num1: number = 5;
if (num1 % 2 == 0) {
    console.log("number is even")
}
else {
    console.log("number is odd")
}

// check person is eligble for vote
var age: number = 15;
if (age > 18) {
    console.log("person is eligble")
}
else {
    console.log("person is not eligble for vote")
}

// calculate the result
var result:number=((10+5)*3-2)/((4%3)-7)
console.log(result)