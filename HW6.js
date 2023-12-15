const extractNumbersFromString = (inputString) => {
    const numbersArray = [];
    let currentNumber = '';

    for (let char of inputString) {
        if (!isNaN(char) || char === '.' || (char === '-' && currentNumber === '')) {
            currentNumber += char;
        } else if (currentNumber !== '') {
            const parsedNumber = parseFloat(currentNumber);
            if (!isNaN(parsedNumber)) {
                numbersArray.push(parsedNumber);
            }
            currentNumber = '';
        }
    }

    if (currentNumber !== '') {
        const parsedNumber = parseFloat(currentNumber);
        if (!isNaN(parsedNumber)) {
            numbersArray.push(parsedNumber);
        }
    }

    return numbersArray;
};

// Пример использования
const inputString = "В этой строке есть числа: 123, 456 и 789, также -42 и 3.14";
const resultArray = extractNumbersFromString(inputString);

console.log(resultArray);

