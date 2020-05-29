'use strict';

function play(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // para evitar que de error si no hay audio en la tecla

  audio.currentTime = 0; //para poder pulsar repetidamente tecla
  audio.play();

  key.classList.add('playing');
}

function removeTransition(e){ 
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', play);