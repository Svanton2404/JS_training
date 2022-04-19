'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),

    expensesItem = document.querySelectorAll('.expenses-item'),
    optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    // btn = document.getElementsByTagName('button'),
    expensesBtn = document.querySelectorAll('.expenses-item-btn'),
    optionalExpensesBtn = document.querySelectorAll('.optionalexpenses-btn'),
    calcBtn = document.querySelectorAll('.count-budget-btn'),

    chooseIncome = document.querySelector('.choose-income'),
    precentValue = document.querySelector('.choose-percent'),
    sumValue = document.querySelector('.choose-sum'),
    savings = document.querySelector('#savings'),


    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

// console.log(budgetValue, dayBudgetValue, levelValue, expensesValue,
//     optionalExpensesValue, incomeValue, monthSavingsValue, yearSavingsValue,
//     chooseIncome, savings, choosePrecent, yearValue, monthValue, dayValue);
// console.log(expensesItem, btn, btnAcceptBase, btnAcceptOpt, btnCalc);

let money, time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц:", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц:", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.disabled = true;
console.log(expensesBtn);


expensesBtn[0].addEventListener('click', function () {
    let sum = 0;
    if (expensesItem != null) {
        expensesBtn.disabled = false;
    } else {
        expensesBtn.disabled = true;
    }
    console.log(expensesBtn);

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
            appData.expensesSum = sum;
        } else {
            // alert("Ошибка ввода данных! Введите заново");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn[0].addEventListener('click', function () {
    for (let j = 0; j < optExpensesItem.length; j++) {
        let c = optExpensesItem[j].value;
        appData.optionalExpenses[j] = c;
        optionalExpensesValue.textContent += appData.optionalExpenses[j] + ' ';
    }
});

calcBtn[0].addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - appData.expensesSum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    for (let i = 0; i < 1; i++) {
        if (items == null || items == "") {
            alert("Нужно ввести данные. Повторите!");
            items = prompt("Что принесет дополнительный доход? (Перечислить через запятую)", "");
            i--;
        } else {
            appData.income = items.split(', ');
            // appData.income.push(prompt("Может что-то еще?", ""));
            // appData.income.sort();
            incomeValue.textContent = appData.income;
        }
    }
    // appData.income.forEach(function (elem, i) {
    //     i = i + 1;
    //     alert("Способы доп. заработка: " + i + " " + elem);
});

savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    };
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            precent = +precentValue.value;

        appData.monthIncome = sum / 100 / 12 * precent;
        appData.yearIncome = sum / 100 * precent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

precentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            precent = +precentValue.value;

        appData.monthIncome = sum / 100 / 12 * precent;
        appData.yearIncome = sum / 100 * precent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

// p0106
// p0138