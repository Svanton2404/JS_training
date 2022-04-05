'use strict'

let arr = [];
getSimpleNum(1, 100);

function getSimpleNum(start, end){
    for (let i = 0; i <= (end - start); i++) {
        arr[i] = i + 1;
    }
    
    arr.forEach(function(elem){
        let deviderCounter = 0;
        for (let j = 1; j < elem; j++){
            if (elem%j == 0) {
                deviderCounter = deviderCounter + 1;
            }
            if (deviderCounter == 2) {
                  console.log('Делители этого числа: ' + '1' + ' и ' + elem);  
            }
        }
        
    }) 
};