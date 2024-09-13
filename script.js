const add = (numA, numB) => numA + numB;

const subtract = (numA, numB) => numA - numB;

const multiply = (numA, numB) => numA * numB;

const divide = (numA, numB) => numA / numB;

function operate(numA, operator, numB) {
	switch (operator) {
		case "+":
			return add(numA, numB);
		case "-":
			return subtract(numA, numB);
		case "*":
			return multiply(numA, numB);
		case "/":
			return divide(numA, numB);
	}
}

let firstNum = "";
let operator = "";
let secondNum = "";
const operators = ["+", "-", "*", "/"];

// button eventlistener
const calculatorButtonContainer = document.querySelector(
	"#calc-button-container"
);

calculatorButtonContainer.addEventListener("click", (e) => {
	let buttonPressed = e.target.innerHTML;

	if (!isNaN(buttonPressed)) {
		numDisplay(buttonPressed);
	} else if (operators.includes(buttonPressed)) {
		if (operator) {
			firstNum = operate(firstNum, operator, secondNum);
			operator = buttonPressed;
			secondNum = "";
		} else {
			operator = buttonPressed;
		}
	} else if (buttonPressed === "=") {
		firstNum = operate(firstNum, operator, secondNum);
		operator = "";
		secondNum = "";
	} else if (buttonPressed === "C") {
		firstNum = "";
		secondNum = "";
		operator = "";
	}

	document.querySelector(
		"#calc-display"
	).innerText = `${firstNum} ${operator} ${secondNum}`;
});

function numDisplay(num) {
	if (operator) {
		secondNum += num;
	} else {
		firstNum += num;
	}
}

// if is number add to display of calculation (concat numbers as strings)
// if is not number switch case
// if it is an operator check save and display the operator and start listening for second number
// if it is "C" clear the display and values
// if it is "=" try to do the calculation
