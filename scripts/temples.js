const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navigation.classList.toggle('open');
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;