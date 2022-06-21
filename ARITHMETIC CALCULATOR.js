
const num1 = parseFloat(prompt("Enter the first number: "));
const operator = prompt("Enter an operator to perform the calculation(either +, -, * or /):");
const num2 = parseFloat(prompt("Enter the second number: "));
if(operator == '+') {
    result = num1 + num2;
}
else if(operator == '-') {
    result = num1 - num2;
}
else if(operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}
window.alert("Result is " + result);