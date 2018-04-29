/*
Write a function even_odd that takes one integer as an input and returns whether the
given integer is "Even" or "Odd".

Input: An integer
Output: "Even" / "Odd"

*/

function even_odd(num){
    // Your solution
    if (num % 2 === 0){
        return "Even";
    }
    else {
        return "Odd";
    }
}

module.exports = {
    mainFunc: even_odd
}
