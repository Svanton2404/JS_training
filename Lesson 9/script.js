'use strict'

let age = document.getElementById('age');

function showUser(surname, name = 'Ivan') {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    console.log(`Пользователь ${surname} ${name}, его возраст ${this.value})`);
};

showUser.call(age, 'Shumilin', 'Anton');
showUser.apply(age, ['Shumilin', 'Anton']);

let user = showUser.bind(age);

user('Shumilin');

