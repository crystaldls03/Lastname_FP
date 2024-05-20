let expression = '';

function appendNumber(num) {
    expression += num;
    document.getElementById('display').value = expression;
}

function appendOperator(op) {
    expression += op;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
