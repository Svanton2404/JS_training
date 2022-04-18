'use strict'

                // ПЕРВОЕ ОБЯЗАТЕЛЬНОЕ ЗАДАНИЕ:

// 1. Восстановить порядок в меню, добавить пятый пункт

let menuItems = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu');
menu.insertBefore(menuItems[2], menuItems[1]);

let li = document.createElement('li');
li.classList.add('menu-item');
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';

// 2. Заменить картинку заднего фона на другую из папки img


// 3. Поменять заголовок, добавить слово "подлинную"

let div = document.getElementById('title');
div.textContent = 'Мы продаем только подлинную технику Apple';

// 4. Удалить рекламу со страницы

let div1 = document.getElementsByTagName('div');
div1[1].removeChild(div1[3]);

// 5. Спросить у пользователя отношение к технике apple

let question = prompt('Какое ваше отношение к технике Apple?', '');
div1[3].textContent = question;