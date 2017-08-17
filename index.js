const operations = require('./module');

let num1 = 2;
let num2 = 0;

console.log(num1 + ' + ' + num2 + ' = ' + operations.add(num1, num2));
console.log(num1 + ' - ' + num2 + ' = ' + operations.sub(num1, num2));
console.log(num1 + ' * ' + num2 + ' = ' + operations.multi(num1, num2));
console.log(num1 + ' / ' + num2 + ' = ' + operations.divi(num1, num2));
console.log(num1 + ' % ' + num2 + ' = ' + operations.modulo(num1, num2));
console.log(num1 + ' ^ ' + num2 + ' = ' + operations.expon(num1, num2));
