'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц:", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц:", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
                b = prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                alert("Ошибка ввода данных! Введите заново");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                precent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * precent;
            alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let j = 0; j < 3; j++) {
            c = prompt("Статья необязательных расходов", "");
            if ((typeof (c)) === 'string' && (typeof (c)) != null && c != '' && c.length < 50) {
                appData.optionalExpenses[j + 1] = c;
            } else {
                alert("Ошибка ввода данных! Введите заново");
                j--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
        for (let i = 0; i < 1; i++) {
            if (items == null || items == "") {
                alert("Нужно ввести данные. Повторите!");
                items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
                i--;
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что-то еще?", ""));
                appData.income.sort();
                }
        }
            appData.income.forEach(function(elem, i){
                i = i + 1;
                alert("Способы доп. заработка: " + i + " " + elem);
            });
    }
};

for (let key in appData){
    console.log("Наша программа включает в себя данные: " + key + " " + appData[key]);
};

// //                      Первый вариант
// let c;

// function chooseOptExpenses() {
//     for (let j = 0; j < 3; j++) {
//         c = prompt("Статья необязательных расходов", "");
//         if ((typeof (c)) === 'string' && (typeof (c)) != null && c != '' && c.length < 50) {
//             appData.optionalExpenses[j+1] = c;
//         } else {
//             alert("Ошибка ввода данных! Введите заново");
//             j--;
//         }
//     }
// }

//                       Второй вариант

// let money = +prompt("Ваш бюджет на месяц:", ""),
//     time = prompt("Введите дату в формате YYYY-MM-DD", "");



// };
//                      ЗАДАНИЕ УРОК №1
/*let request = prompt("Введите обязательную статью расходов в этом месяце:", ""),
answer = +prompt("Во сколько обойдется?", "");

appData.expenses[request] = answer;

request = prompt("Введите обязательную статью расходов в этом месяце:", ""),
answer = +prompt("Во сколько обойдется?", "");

appData.expenses[request] = answer;
console.log(appData);
appData.moneyPerDay = appData.budget / 30;*/

//                      ЗАДАНИЕ УРОК №2

//Первый вариант цикла
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         alert("Ошибка ввода данных! Введите заново");
//         i--;           
//     }
// }


// Второй вариант цикла 

/* let i = 0;

while (i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
        b = prompt("Во сколько обойдется?", "");
    if((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        i++;
        } else {

        }   
};*/

// Третий вариант цикла

// let i = 0;

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
//         b = prompt("Во сколько обойдется?", "");
//          if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
//             && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;    
//     } else {

//     }
// }
// while (i < 2);       


// console.log(appData);

// appData.moneyPerDay = appData.budget / 30;



// if (appData.moneyPerDay < 100) {
//     console.log("Минимальный уровень достатка");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний уровень достатка");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Высокий уровень достатка");
// } else {
//     console.log("Произошла ошибка");
// };