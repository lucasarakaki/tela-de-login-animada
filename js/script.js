const container = document.getElementById('container');
const registreBtn = document.getElementById('registre-se');
const acessarBtn = document.getElementById('login');

registreBtn.addEventListener('click', () => {
    container.classList.add("active");
});

acessarBtn.addEventListener('click', () => {
    container.classList.remove("active");
});