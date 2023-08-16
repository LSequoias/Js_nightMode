
/**
 * @param {string} input - Les Selecteurs d'entrées, exemple div ou .div
 * @param {string} output - Les Selecteurs de sortie, ne pas placer de point au Selecteur.
 * */
export const getElement = (input, output) => {
    document.querySelectorAll(input).forEach(el => el.classList.toggle(output));
}

