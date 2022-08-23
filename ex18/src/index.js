// Only change code below this line
function myForLoop1() {
    for (var evenNumbers = 0; evenNumbers < 10; evenNumbers % 2 == 0) {
        console.log(evenNumbers); // 02468
}
}
console.log(myForLoop1());
function myForLoop2() {
    for (var evenInverseNumbers = 0; evenInverseNumbers < 9; evenInverseNumbers++) {
        console.log(evenInverseNumbers); // 86420
}
}
console.log(myForLoop2());
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
    };