const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

offScreenMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    });
});