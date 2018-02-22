/** Materials - Виды материалов для всех типов строений */
var MT = {
    bar150: {name: 'Брус 150', value: 'bar150'},
    bar200: {name: 'Брус 200', value: 'bar200'},
    woodLog: {name: 'Бревно', value: 'woodLog'},
    sip: {name: 'Sip-панели', value: 'sip'},
    framePanel: {name: 'Каркасно-щитовой', value: 'framePanel'},
    cinder200: {name: 'Газосиликатный блок 200 мм.', value: 'cinder200'},
    cinder300: {name: 'Газосиликатный блок 300 мм.', value: 'cinder300'},
    brick: {name: 'Кирпич', value: 'brick'},
    steel: {name: 'ЛСТК', value: 'steel'}
};

/** Data-id - Идентификаторы смысловых блоков на странице */
var ID = {
    building: 'b3aece',
    material: '4a029a3',
    height: 'b288cb3',
    sizeHeading: 'a29203d',
    sizeInputs: '56cc477',
    setUp: 'cbfde2f',
    calcButton: 'cc044f5'
};

/**
 * Константы для select-опций
 */

/** Типы построек. */
var BUILDINGS = [
    {name: 'Дом', value: 'house'},
    {name: 'Баня', value: 'bath'},
    {name: 'Веранда', value: 'porch'},
    {name: 'Беседка', value: 'arbor'},
    {name: 'Терраса', value: 'decking'},
    {name: 'Гараж', value: 'garage'},
    {name: 'Хозблок / Сарай', value: 'shed'},
    {name: 'Здание', value: 'building'},
    {name: 'Ангар', value: 'barn'},
    {name: 'Пирс / Причал', value: 'pier'},
    {name: 'Замена / Ремонт фундамента', value: 'groundWorks'}
];

/** Материалы для большинства видов построек. */
var ALLMATERIALS = [MT.bar150, MT.bar200, MT.woodLog, MT.sip, MT.framePanel, MT.cinder200, MT.cinder300, MT.brick, MT.steel];

/** Материалы для постройки типа "Беседка". */
var ARBORMATERIALS = [MT.bar150, MT.bar200, MT.woodLog, MT.sip, MT.framePanel, MT.cinder200, MT.steel];


/**
 * Формулы и функции.
 */

/** Заполнение select-списка опциями.
 * @param selectID Идентификатор списка.
 * @param array Массив с опциями для заполнения.
 * @param [placeholder] Строка для отображения первым элементом списка (неактивным).
 */
function setOptions(selectID, array, placeholder) {
    var select = byId(selectID);
    while (select.options.length > 0) {
        select.options[0] = null;
    }

    if (placeholder) {
        var defaultOption = new Option (placeholder, '', true, true);
        defaultOption.disabled = true;
        select.appendChild (defaultOption);
    }

    array.map(function(item) {
        var option = new Option (item.name, item.value);
        select.appendChild(option);
    })
}

/** Получение HTML-элемента по идентификатору. */
function byId(id) {
    return document.getElementById(id);
}

/**
 * Получение HTML-элемента (смыслового блока) по идентификатору data-id.
 * @param blockName Ключ блока, который хотим найти, в объекте ID.
 */
function byDataId(blockName) {
    var selector = 'data-id=' + '"' + ID[blockName] + '"';
    return document.querySelector(selector);
}

/** Получение значения выбранной select-опции по идентификатору селекта. */
function selected(id) {
    var dropdown = byId(id);
    var option = dropdown.selectedIndex;
    return dropdown.options[option].value;
}

/** Инициализация формы калькулятора. Как он выглядит в самом начале. */
// TODO: прятать все ненужные поля и кнопку 'рассчитать'
function setInitial() {
    setOptions('building-type', BUILDINGS, 'Тип строения');
}

/** Обработка выбора типа строения */
// TODO: написать сценарии для ангара, пирса, ремонта
function handleBuildingTypeSelect() {
    var buildingType = selected(this.id);
    switch (buildingType) {
        case 'house':
        case 'bath':
        case 'porch':
        case 'decking':
        case 'garage':
        case 'shed':
        case 'building':
            setOptions('building-material', ALLMATERIALS, 'Материал');
            break;
        case 'arbor':
            setOptions('building-material', ARBORMATERIALS, 'Материал');
            break;
        // case 'barn':
        // показать поле для выбора формы ангара с вариантами BARNOPTIONS
        // break;
        // case 'pier':
        // показать инпуты для ввода длины и ширины
        // break;
        // case 'groundworks':
        // показать что-то для замены/ремонта
        // break;
        default:
            byId('calculator').disabled = true;
    }
}

/**
 * Функция, скрывающая смысловой блок разметки.
 * @param blockName Ключ блока, который хотим скрыть, в объекте ID.
 */
function hideBlock(blockName) {
    byDataId(blockName).hidden = true;
}

/**
 * Функция, скрывающая все смысловые блоки разметки, кроме Типа строения.
 * @param blockName Ключ блока, который хотим скрыть, в объекте ID.
 */
function hideAll() {
    blocks = [ID.building,ID.building,ID.building,ID.building,ID.building,ID.building,ID.building, ]
    byDataId(blockName).hidden = true;
}

/**
 * Обработчики всех необходимых событий на странице
 **/

document.addEventListener('DOMContentLoaded', setInitial);
byId('building-type').addEventListener('ValueChange', handleBuildingTypeSelect);