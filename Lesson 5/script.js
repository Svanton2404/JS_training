'use strict'

// Восстановить порядок в меню, добавить пятый пункт

let menuItems = document.querySelectorAll('.menu .menu-item'),
    menu = document.querySelector('.menu');
menu.insertBefore(menuItems[2], menuItems[1]);

let li = document.createElement('li');
li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';
console.log(li);

//Заменить картинку заднего фона на другую из папки img


//Поменять заголовок, добавить слово "подлинную"

let column = document.querySelectorAll('.column'),
    title = document.querySelectorAll('.column .title');
console.log(column);
let div = document.createElement('div');
div.classList.add('title');
console.log(div);
column.appendChild(div);
div.innerHTML = 'Мы продаем только подлиную технику Apple';