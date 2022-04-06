'use strict'

let num;

getSimpleNum(1, 100);

function getSimpleNum(start, end) {
    for (let i = start; i <= end; i++) {
        let dividerCounter = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                dividerCounter = dividerCounter + 1;
            }
        }
        if (dividerCounter == 2) {
            num = i;
            console.log('Натуральное число: ' + num + ' и делители этого числа: ' + '1' + ' и ' + num);
        }
    }
};
