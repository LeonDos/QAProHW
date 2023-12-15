const findFirstUniqueChar = (inputString) => {
    for (let char of inputString) {
        // Проверяем, сколько раз символ встречается в строке
        if (inputString.indexOf(char) === inputString.lastIndexOf(char)) {
            return char; // Возвращаем первый не повторяющийся символ
        }
    }
    
    return -1; // Возвращаем -1, если нет не повторяющихся символов
};