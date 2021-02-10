'use strict'



//ここでは、最大値と警告値についての変化。
const stateinfo = document.getElementById('$stateinfo');
const info = document.getElementById('info');

stateinfo.addEventListener('click', () => {
    if(info.classList.contains('info')){
        info.classList.remove('info');
        stateinfo.innerHTML = "❌"
    } else {
        info.classList.add('info');
        stateinfo.innerHTML = '❓'
    }
});


//ここからはボタンを押した時のいinputの情報を送るためのやつ。
const btn = document.querySelector('button');

const inputMax = document.getElementById('inputMax');
const inputWarning = document.getElementById('inputWarning');

btn.addEventListener('click', () => {
    const inputMaxValue = inputMax.value;
    const inputWarningValue = inputWarning.value;
    localStorage.setItem('inputMax',inputMaxValue);
    localStorage.setItem('inputWarning',inputWarningValue);


    alert('最大値は' + inputMaxValue + 'と設定しました。');
    alert('警告値は' + inputWarningValue + 'と設定しました。');
    alert('設定は完了しました。');
});