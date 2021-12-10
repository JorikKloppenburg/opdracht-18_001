// A: convert the function to an arrow function
const IRockArrowFunctions = function () {
    console.log("Joe, I rock  arrow functions!");
};

IRockArrowFunctions()

// Solution A:
const IRockArrowFunctions = () => console.log("Joe, I rock  arrow functions!");


// B: With arrow functions, you can also omit the curly braces ("{" and "}") 
// when you can write the function body on one line. The arrow also has an implicit return 
//statement when you omit the curly braces.
const fivePlusSeven = function () {
    return 5 + 7
};

fivePlusSeven();

// Solution B:
const fivePlusSeven = () => 5 + 7;


// C: Write an arrow function, on 1 line (so with an implicit return statement), 
// which adds the params a and b together. Name the function myFunction.
const myFunction = (a, b) => a + b;

// D: add five
const addFive = (a) => a + 5;

// E: Write an arrow function named createObject with an implicit return statement 
// (so on 1 line) that contains a simple object returned: {greeting: "hi"}

const createObject = () => { "hi" };
