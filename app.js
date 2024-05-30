document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.innerText;

            if (button.id === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.innerText = '0';
            } else if (button.id === 'backspace') {
                currentInput = currentInput.slice(0, -1);
                display.innerText = currentInput || '0';
            } else if (button.id === 'equals') {
                if (currentInput && previousInput && operator) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.innerText = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (button.id === 'add' || button.id === 'subtract' || button.id === 'multiply' || button.id === 'divide') {
                if (currentInput && previousInput && operator) {
                    currentInput = calculate(previousInput, currentInput, operator);
                    display.innerText = currentInput;
                }
                previousInput = currentInput;
                operator = value;
                currentInput = '';
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function calculate(a, b, op) {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (op === '+') return (num1 + num2).toString();
        if (op === '−') return (num1 - num2).toString();
        if (op === '×') return (num1 * num2).toString();
        if (op === '÷') return (num1 / num2).toString();
        return '';
    }
});
