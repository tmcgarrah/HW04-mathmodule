//
//
//     Create a new node project with an index file as the entry point and a math module file.
//
// The math module should include functions for:
//
//     addition
//     subtraction
//     multiplication
//     division
//     modulo
//     exponents
//
// Your module should do some basic error checking (for example: not allowing divide by 0). Please make sure all your code is ES6 compliant. Your index file should include an example use of all of your module functions at least once.
//
// Please note, this is assignment only covers module creation and not creating an HTTP server.
//
// Please push all your homework code to GitHub and send us the link when you're done.


const mathModule = {
  add : add,
  sub : sub,
  multi : multi,
  divi : divi,
  modulo : modulo,
  expon : expon
};

function add (num1, num2) {
  return num1 + num2;
}

function sub (num1, num2) {
  return num1 - num2;
}

function multi (num1, num2) {
  return num1 * num2;
}

function divi (num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return 'Division by zero is not allowed';
  }
}

function modulo (num1, num2) {
  if (num2 !== 0) {
    return num1 % num2;
  } else {
    return 'Division by zero is not allowed';
  }
}

function expon (num1, num2) {
  return Math.pow(num1, num2);
}

module.exports = mathModule;
