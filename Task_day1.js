'use strict';

let money = +prompt("Ваш бюджет на месяц:", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: 'time',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};
//                      ЗАДАНИЕ УРОК №1
/*let request = prompt("Введите обязательную статью расходов в этом месяце:", ""),
answer = +prompt("Во сколько обойдется?", "");

appData.expenses[request] = answer;

request = prompt("Введите обязательную статью расходов в этом месяце:", ""),
answer = +prompt("Во сколько обойдется?", "");

appData.expenses[request] = answer;
console.log(appData);*/

//                      ЗАДАНИЕ УРОК №2

//Первый вариант цикла

/*for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
        b = prompt("Во сколько обойдется?", "");
    if((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        alert("Ошибка ввода данных! Введите заново"); 
        do {
            a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
            b = prompt("Во сколько обойдется?", "");
        }
        while ()       
        }
              
};*/

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

let i = 0;

do {
    let a = prompt("Введите обязательную статью расходов в этом месяце:", ""),
        b = prompt("Во сколько обойдется?", "");
         if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
        i++;    
    } else {

    }
}
while (i < 2);       


console.log(appData);

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

