

let div1 = window.document.getElementById('div');
div1.addEventListener('mouseover',changing);
div1.addEventListener('mouseleave',back);

var p1 = window.document.getElementById('p1')
var body = window.document.body


function changing(){
    p1.innerHTML= 'Foi mudado por JavaScript'
    p1.style.color = 'red'
}

function back(){
    p1.innerHTML= 'Eu sou P e, Quero ser mudado de cor, por JavaScript'
    p1.style.color = 'green'
}