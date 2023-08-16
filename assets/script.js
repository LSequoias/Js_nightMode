import { getElement } from "./_mod/mod.js";

const toggle = () => {
    const wrap = document.querySelector('.btn');
    wrap.addEventListener('click', () => {
        getElement('.hide', 'show');
        getElement('body', 'dark');
        getElement('.btn', 'dark');
    });
};

toggle();