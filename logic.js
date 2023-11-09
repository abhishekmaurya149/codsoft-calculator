
//Initialize the variable to store the input expression
let expression = '';


//     

updateDisplay = () => {
    document.getElementById('display').value = expression;
}
appendToDisplay = (n) => {
    expression += n;
    updateDisplay();
}
clearDisplay = () => {
    expression = '';
    updateDisplay();
}
calculate = () => {
    try{
        const result = eval(expression);
        expression = result.toString();
        updateDisplay();
    }catch(error){
        expression = 'error';
        updateDisplay();
    }
}