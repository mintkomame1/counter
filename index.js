'use strict'

const change = document.getElementById('change');
const bgc = document.getElementById('bgc'); 
const warning1 = document.getElementById('warning1');
const warning2 = document.getElementById('warning2');
const maincontainer = document.getElementById('mainContainer');
const button = document.getElementById('button');
const btn = document.getElementById('btn');

let num = +prompt('好きな数字を入力してください。','')
change.innerHTML = `${num}`;

//localstorageから取得した数値
const getMax = localStorage.getItem('inputMax');
const getWarning = localStorage.getItem('inputWarning');


if(num > getMax){
    bgc.classList.add('bgc1');//htmlタグ
    maincontainer.classList.add('mainbgc1');//メインコンテイナー
    warning1.classList.remove('container1');
    button.addEventListener('click', () => {
        warning1.classList.add('container1');
        maincontainer.classList.remove('mainbgc1');
        bgc.classList.remove('bgc1');
    });
} else if(num > getWarning){
    bgc.classList.add('bgc2');
    maincontainer.classList.add('mainbgc2');
    warning2.classList.remove('container1');
    btn.addEventListener('click', () => {
        warning2.classList.add('container1');
        maincontainer.classList.remove('mainbgc2');
        bgc.classList.remove('bgc2');
    });
}