// 'use strict';

function start() {
  console.log(this);
}

start();

const stop = () => console.log(this);

stop();

const btn = document.querySelector('button');
btn.addEventListener('click', ()=> {
  
})
