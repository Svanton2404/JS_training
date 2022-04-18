'use strict'
// УРОК4: НАХОЖДЕНИЕ ДРУЖЕСТВЕННЫХ ЧИСЕЛ //

let firstNum,
    secondNum,
    finalArr = [];

// Проверка, что данные введены верно: только числа, start > end, не отрицательные, не дробные числа) //

function getNumber(a) {
    return parseInt(a);
}

do {
    firstNum = getNumber(prompt('Введите первое число в диапазоне', ''));
} while (isNaN(firstNum) || Math.abs(secondNum) < Math.abs(firstNum) || firstNum < 0 || firstNum == '');

do {
    secondNum = getNumber(prompt('Введите последнее число в диапазоне', ''));
} while (isNaN(secondNum) || Math.abs(secondNum) < Math.abs(firstNum) || secondNum < 0 || secondNum == '');


getFriendlyNumbers(firstNum, secondNum);

for (let key of finalArr) {
    console.log('Дружественные числа: ' + '[' + key + ']');
}

function getFriendlyNumbers(start, end) {
    // Перебор всех чисел в заданном диапазоне //
    let num,
        arr = [];
    for (let i = 0; i < end; i++) {
        num = start;
        if (num >= start && num <= end) {
            num = start++;
            arr[i] = num;
        }
    }

    arr.forEach(function (elem) {
        // Определение суммы делителей первого чилса = второму числу //
        let sum1 = 0;
        for (let j = 1; j < elem; j++) {
            if (elem % j == 0) {
                sum1 = sum1 + j;
            }
        }
        // Определение суммы делителей второго чилса //
        let sum2 = 0;
        for (let i = 1; i < sum1; i++) {
            if (sum1 % i == 0) {
                sum2 = sum2 + i;
            }
        }
        // Сравнение чисел (поиск дружественного числа) //
        if (sum2 == elem && sum1 !== sum2 && sum1 < sum2) {
            let newArr = [sum1, sum2];

            finalArr.push(newArr);
        }

    });

    if (finalArr.length == 0) {
        console.log('В данном диапазоне нет дружественных чисел')
    } else {
        return finalArr;
    }
};

