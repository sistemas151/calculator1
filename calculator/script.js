let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        updateDisplay();
    }
}

function appendDecimal(decimal) {
    if (currentInput === '') {
        currentInput = '0' + decimal;
    } else if (!currentInput.includes('.')) {
        currentInput += decimal;
    }
    updateDisplay();
}

function calculate() {
    if (currentInput !== '') {
        try {
            const result = eval(currentInput);
            currentInput = result.toString();
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            updateDisplay();
        }
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}