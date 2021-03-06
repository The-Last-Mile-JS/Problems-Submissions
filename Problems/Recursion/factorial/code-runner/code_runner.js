// assign the tape library to the variable "test"
var testCode = require('tape');
var unitTest = require("./unit_test");  // Unit tests
var code = require("../problem");             // Written function


testCode(unitTest.testCodeString, { timeout: 10000 }, function (t) {
    var index;
    for (index = 0; index < unitTest.testCases.length; index += 1){
        console.log(`Test Case #${index}`, "\nInput(s):", unitTest.testCases[index]);
        t.equal(unitTest.answers[index], code.mainFunc(unitTest.testCases[index]));
    }
    t.end();
});
