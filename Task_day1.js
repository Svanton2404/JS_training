'use strict';

let money = +prompt("Ваш бюджет на месяц:", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

//console.log(money);
//console.log(time);


/*let appData = {
    budget: 'money',
    timeData: 'time',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};*/

/*let request = prompt("Введите обязательную статью расходов в этом месяце:", ""),
answer = +prompt("Во сколько обойдется?", "");

appData.expenses[request] = answer;

request = prompt("Введите обязательную статью расходов в этом месяце:", ""),
answer = +prompt("Во сколько обойдется?", "");

appData.expenses[request] = answer;*/

alert("Ваш бюджет на 1 день:", money / 30);
console.log(appData);
//console.log(typeof(appData.expenses.request));