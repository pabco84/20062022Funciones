var col1 = 'black';
var col2 = 'yellow';
var col3 = 'red';
var colordef = 'white';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        console.log(event.key);
        colordef = col1;
        console.log(colordef);
    } else if (event.key === 's') {
        console.log(event.key);
        colordef = col2;
        console.log(colordef);
    } else if (event.key === 'd') {
    console.log(event.key);
    colordef = col3;
    console.log(colordef);
}
    });

document.getElementById('col1').addEventListener("click", pintado) 

function pintado(){
    document.getElementById('col1').style.backgroundColor = colordef;
}

document.getElementById('col2').addEventListener("click", pintado2) 

function pintado2(){
    document.getElementById('col2').style.backgroundColor = colordef;
}

document.getElementById('col3').addEventListener("click", pintado3) 

function pintado3(){
    document.getElementById('col3').style.backgroundColor = colordef;
}

document.getElementById('col4').addEventListener("click", pintado4) 

function pintado4(){
    document.getElementById('col4').style.backgroundColor = colordef;
} 