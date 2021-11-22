let banner1 = document.getElementById('banner_place'),
    closeBut = document.getElementById('close_but');
closeBut.onclick = function() {
    banner1.style.visibility = 'hidden';
};

//----- Login form --------

let formWrap = document.getElementById('formWrap'),
    logiN = document.getElementById('logiN'),
    passworD = document.getElementById('passworD'),
    preWrap = document.getElementById('preWrap');

formWrap.onmouseover = () =>{
    preWrap.style.display = 'flex';
};
