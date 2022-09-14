function switchCaseSequential(num) {
    var answer = '';
    // Write code below this line
    switch (num) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
    }
    // Write code above this line
    return answer;
}
console.log(switchCaseSequential(1)); // Change this line
module.exports = switchCaseSequential;
