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

/** Идентификаторы смысловых блоков на странице
 * @prop dataId CSS-селектор data-id для выбора целого блока.
 * @prop id Идентификатор конкретного элемента формы для получения значения.
 */
var ID = {
    building: {dataId: 'b3a8ece', id: 'building-type'},
    material: {dataId: '4a029a3', id: 'building-material'},
    height: {dataId: 'b288cb3', id: 'building-height'},
    sizeHeading: {dataId: 'a29203d'},
    sizeInputs: {dataId: '56cc477'},
    length: {id: 'building-length'},
    width: {id: 'building-width'},
    setUp: {dataId: 'cbfde2f', id: 'setting-up'},
    reset: {dataId: '290ba0e', id: 'reset'},
    calculator: {dataId: 'cc044f5', id: 'calculator'}
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

/** Этажность для постройки типа "Дом". */
var FLOORS = [
    {name: '1 - 1,5 эт.', value: 'low'},
    {name: '2 - 3 эт.', value: 'high'}
];

/** Этажность для постройки типа "Здание". */
var BUILDINGFLOORS = [
    {name: '1 - 1,5 этажа', value: 'under2'},
    {name: '2 - 3 этажа', value: 'under3'},
    {name: 'более 3 этажей', value: 'over3'}
];


/**
 * Формулы и функции.
 */

/**
 * Заполнение select-списка опциями.
 * @param key Ключ спискового элемента в объекте ID.
 * @param array Массив с опциями для заполнения.
 * @param [placeholder] Строка для отображения первым элементом списка (неактивным).
 */
function setOptions(key, array, placeholder) {
    var select = byId(key);
    while (select && select.options.length > 0) {
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

/**
 * Получение HTML-элемента по идентификатору.
 * @param key Ключ блока, который хотим найти, в объекте ID.
 */
function byId(key) {
    var id = ID[key].id;
    return id && document.getElementById(id);
}

/**
 * Получение HTML-элемента (смыслового блока) по идентификатору data-id.
 * @param key Ключ блока, который хотим найти, в объекте ID.
 */
function byDataId(key) {
    var dataId = ID[key].dataId;
    return dataId && document.querySelector('[data-id=' + '"' + dataId + '"]');
}

/**
 * Получение значения выбранной select-опции.
 * @param key Ключ искомого select-элемента в объекте ID.
 */
function selected(key) {
    var dropdown = byId(key);
    var option = dropdown && dropdown.selectedIndex;
    return dropdown && dropdown.options[option].value;
}

/** Инициализация формы калькулятора. Как он выглядит в самом начале. */
function setInitial() {
    var blocks = Object.keys(ID);
    hideAll(blocks);
    show('building');
    setOptions('building', BUILDINGS, 'Тип строения');
}

/** Обработка выбора типа строения */
// TODO: написать сценарии для ангара, пирса, ремонта
function handleBuildingTypeSelect() {
    disable('building');
    show('reset');
    var buildingType = selected('building');
    switch (buildingType) {
        case 'house':
        case 'bath':
        case 'porch':
        case 'decking':
        case 'garage':
        case 'shed':
        case 'building':
            show('material');
            setOptions('material', ALLMATERIALS, 'Материал');
            break;
        case 'arbor':
            show('material');
            setOptions('material', ARBORMATERIALS, 'Материал');
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
            disable('calculator');
    }
}

function handleMaterialSelect() {
    disable('material');
    var buildingType = selected('building');
    switch (buildingType) {
        case 'house':
            show('height');
            setOptions('height', FLOORS);
            break;
        case 'building':
            show('height');
            setOptions('height', BUILDINGFLOORS);
            break;
        default:
            break;
    }
}

/**
 * Функция, скрывающая смысловой блок разметки.
 * @param key Ключ блока, который хотим скрыть, в объекте ID.
 */
function hideBlock(key) {
    var block = byDataId(key);
    if (block) block.hidden = true;
}

/**
 * Функция, скрывающая все блоки разметки, указанные в массиве.
 * @param blocks Массив, состоящий из ключей блоков, которые хотим скрыть.
 */
function hideAll(blocks) {
    blocks.map(function (key) {
        hideBlock(key);
    });
}

/**
 * Функция, показывающая смысловой блок разметки.
 * @param key Ключ блока, который хотим показать, в объекте ID.
 */
function show(key) {
    var block = byDataId(key);
    if (block) {
        block.hidden = false;
        enable(key);
    }
}

/**
 * Блокирует доступ и изменение поля формы.
 * @param key Ключ искомого поля в объекте ID.
 */
function disable(key) {
    var field = byId(key);
    if (field) field.disabled = true;
}

/**
 * Снимает блокировку поля формы.
 * @param key Ключ искомого поля в объекте ID.
 */
function enable(key) {
    var field = byId(key);
    if (field) field.disabled = false;
}

/**
 * Обработчики всех необходимых событий на странице
 **/

document.addEventListener('DOMContentLoaded', setInitial);
byId('building').addEventListener('ValueChange', handleBuildingTypeSelect);
byId('material').addEventListener('ValueChange', handleMaterialSelect);
byId('reset').addEventListener('click', setInitial);
