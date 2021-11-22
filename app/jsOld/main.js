"use strict";

var banner1 = document.getElementById('banner_place'),
    closeBut = document.getElementById('close_but');

closeBut.onclick = function () {
  banner1.style.visibility = 'hidden';
}; //----- Login form --------


var formWrap = document.getElementById('formWrap'),
    logiN = document.getElementById('logiN'),
    passworD = document.getElementById('passworD'),
    preWrap = document.getElementById('preWrap');

formWrap.onmouseover = function () {
  preWrap.style.display = 'flex';
};