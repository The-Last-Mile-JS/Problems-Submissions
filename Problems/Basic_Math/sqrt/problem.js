/*
Create a function that finds the square root of an integer. Return null if the
square root of the integer is not a real number.

Input: An integers
Output: The square root of the integer
*/

function squareRoot(num){
    // Your solution
    if (num < 0){
        return null;
    }
    else {
        return Math.sqrt(num);
    }
}

// Do not delete
// export the written function to be checked by code runner
module.exports = {
    mainFunc: squareRoot
}
