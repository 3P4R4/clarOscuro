const boton = document.querySelector('#boton');

const preferencia = window.matchMedia('(prefers-color-scheme: dark)');

// Accediendo al local storage
const storage = localStorage.getItem('tema');
if (storage === "dark") {
    document.body.classList.toggle('dark');
} else if (storage === "light") {
    document.body.classList.toggle('light');
}

boton.addEventListener('click', () => {
    //console.log('Clicked');
    let tema;
    //console.log(preferencia);
    if (preferencia.matches) {
        document.body.classList.toggle('light');
        tema = document.body.classList.contains('light') ? 'light' : 'dark';

    } else {
        document.body.classList.toggle('dark');
        tema = document.body.classList.contains('dark') ? 'dark' : 'light';
    }

    localStorage.setItem('tema', tema)

});