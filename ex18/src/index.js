// Only change code below this line
function myForLoop1() {
    var evenNumbers = '';
    for (var i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            evenNumbers += i;
        }
    }
        console.log(evenNumbers); // 02468

}
myForLoop1()

function myForLoop2() {
    var evenInverseNumbers = '';
    for (var j = 9; j >= 0; j--) {
        if (j % 2 == 0) {
            evenInverseNumbers += j
        }
    }
        console.log(evenInverseNumbers); // 86420
}
myForLoop2()
// Only change code above this line
module.exports = {
    myForLoop1,
    myForLoop2
    };