'use strict'
// УРОК4: НАХОЖДЕНИЕ ДРУЖЕСТВЕННЫХ ЧИСЕЛ //

let firstNum,
    secondNum,
    finalArr = [];

// Проверка, что данные введены верно: только числа, start > end, не отрицательные, не дробные числа) //

do {
    firstNum = prompt('Введите первое число в диапазоне', '');
    firstNum = parseInt(firstNum);
} while (isNaN(firstNum) || Math.abs(secondNum) < Math.abs(firstNum) || firstNum < 0 || firstNum == ''); 
        
    // if (isNaN(firstNum) || Math.abs(secondNum) < Math.abs(firstNum) || firstNum < 0 || firstNum == '') {
    //     firstNum = prompt('ОШИБКА!!! Введите заново первое число в диапазоне', '');
    // }

do {
    secondNum = prompt('Введите последнее число в диапазоне', '');
    secondNum = parseInt(secondNum);
} while (isNaN(secondNum) || Math.abs(secondNum) < Math.abs(firstNum) || secondNum < 0 || secondNum == '');
    
    // if (isNaN(secondNum) || Math.abs(secondNum) < Math.abs(firstNum) || secondNum < 0 || secondNum == '') {
    //     secondNum = prompt('ОШИБКА!!! Введите заново последнее число в диапазоне', '');
    // }
    
console.log(getFriendlyNumbers(firstNum, secondNum));

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

            // console.log(finalArr);
            // console.log('Дружественные числа: ' + '[' + finalArr + ']');
        }
        // else {
        //         let newArr = [];
        //         console.log(newArr);
        //         console.log('В выбраном диапазоне нет дружественных чисел:');
        // }
    });
    if (finalArr.length == 0) {
        console.log('В данном диапазоне нет дружественных чисел')
    } else {
        return finalArr;
    }
    
    // if(newArr == true) {
    //     finalArr = newArr.push(newArr);
    // }

    //         console.log('В выбраном диапазоне нет дружественных чисел:');
};
for (let key of finalArr) {
    console.log('Дружественные числа: ' + '[' + key + ']');
}
    console.log('Дружественные числа: ' + '[' + finalArr + ']');
