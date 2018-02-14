/** Получение HTML-элемента по идентификатору. */
function byId(id) {
    return document.getElementById(id);
}

/**
 * Функция чтобы проверить отзывчивость интерфейса.
 */
function myFunc () {
    alert ('You clicked Submit button!')
}

byId('calculator').addEventListener('click', myFunc);