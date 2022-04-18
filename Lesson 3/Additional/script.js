'use strict'

let str = 'урок-3-был слишком легким';
let newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr);

let updateStr = newStr.replace(/-/g, ' ');
// let removedStr = updateStr.slice(-2);
let removedStr = updateStr.replace("им", "о");

console.log(updateStr);
console.log(removedStr);

let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) !== "string"){
        sum = sum + Math.pow(arr[i],3);
        console.log(sum); 
    }
}
console.log(sum);

let text = prompt("Введите сообщение", ""  );

function getStr(x) {
    
    if (typeof(x) == "string") {
        x = x.trim();
        console.log(x);
        if(x.length > 50){
            let newStr = x.slice(0,50) + "...";
            console.log(newStr);
        }
        return false;
    } else {
        alert("Введите только текст");
        return true;
    }
}
let y = true;

while(y){
    y = getStr(prompt("Введите сообщение", ""));
}