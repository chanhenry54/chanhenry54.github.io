function classToggle() {
    let menu = document.getElementById('js-menu');
    menu.classList.toggle('navbar-show');
}

document.getElementById('js-toggle').addEventListener('click', classToggle);