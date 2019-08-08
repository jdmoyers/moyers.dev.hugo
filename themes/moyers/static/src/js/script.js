'use strict';
const navButtons = document.querySelectorAll('.js-toggle-navigation');
const navDrawer = document.querySelector('.nav-panel');
const html = document.querySelector('html');

for(const button of navButtons) {
    button.addEventListener('click',
        function() {
            navDrawer.classList.toggle('open');
            html.classList.toggle('locked');
        }
    );
}