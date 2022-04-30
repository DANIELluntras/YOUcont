(function() {
    const paragra = document.querySelector('h1');
    paragra.style.color = 'black';
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