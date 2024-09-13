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
