const extractNumbersFromString = (inputString) => {
    // Создаем пустой массив для хранения чисел
    const numbersArray = [];
    
    // Создаем пустую строку для текущего числа
    let currentNumber = '';

    // Проходим по каждому символу в строке
    for (let char of inputString) {
        // Проверяем, является ли текущий символ цифрой и не является ли точкой или минусом
        if (!isNaN(char) && char !== '.' && char !== '-') {
            // Если символ - цифра и не точка и не минус, добавляем его к текущему числу
            currentNumber += char;
        } else if (currentNumber !== '') {
            // Если текущая последовательность закончилась, добавляем число в массив
            numbersArray.push(Number(currentNumber));
            currentNumber = ''; // Сбрасываем текущее число
        }
    }

    // Добавляем последнее число, если оно есть в конце строки
    if (currentNumber !== '') {
        numbersArray.push(Number(currentNumber));
    }

    // Возвращаем массив, содержащий все числа из строки
    return numbersArray;
};

// Пример использования
const inputString = "В этой строке есть числа: 123, 456 и 789, также -42 и 3.14";
const resultArray = extractNumbersFromString(inputString);

console.log(resultArray);
