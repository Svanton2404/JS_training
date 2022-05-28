'use strict'

class Options {
    constructor(height = 60, width = 200, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        div.innerHTML = prompt('Введите любой текст');
        div.style.cssText = 'background-color: this.bg; font-size: this.fontSize; text-align: this.textAlign;';
        document.body.append(div);
        
    } 
}

let block = new Options(40, 100,'yellow','30px','center');

console.log(block.createDiv());