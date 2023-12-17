const extractNumbersFromString = (inputString) => {
  let res = [], str = '';

  for (let i = 0; i < inputString.length; i++) {
    if (isNaN(inputString[i])) continue;

    if (str === '' && inputString[i] === '0') {
      res.push(+inputString[i]);
      continue;
    }

    str += inputString[i];

    if (isNaN(inputString[i + 1])) {
      res.push(+str);
      str = '';
      i++;
    }        
  }

  return res;
};

// Пример использования
const inputString = '00asdf0123 d6 lkj006m90';
console.log(extractNumbersFromString(inputString));

