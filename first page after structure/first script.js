(function() {
    const paragra = document.querySelector('h1');
    paragra.style.color = 'blue';
    document.querySelector('body').addEventListener('click', function() {
        paragra.style.color = 'green';

    })
})();

(function() {
    const buton = document.querySelector('button');
    document.querySelector('button').addEventListener('click', function() {
        buton.style.color = 'yellow'

    })
})();

(function() {
    const dnaiel = document.getElementById('haha');
    dnaiel.style.color = 'red'
    document.getElementById('haha').addEventListener('click', function() {
        dnaiel.style.color = 'blue'
    })
})();

(function() {
    const paragraf = document.querySelector('p');
    paragraf.style.color = 'red';
    paragraf.style.fontWeight = '400';
    paragraf.style.textAlign = 'center';
    paragraf.style.fontSize = '40px';


    document.getElementById('haha').addEventListener('click', function() {
        paragraf.style.color = 'blue'
    })
})();

(function() {
    const nav = document.querySelector('main');

    nav.style.fontWeight = '400';
    nav.style.textAlign = 'center';
    nav.style.fontSize = '40px';


    document.getElementById('haha').addEventListener('click', function() {
        nav.style.color = 'blue'
    })
})();