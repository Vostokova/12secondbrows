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

/**
 * Идентификаторы смысловых блоков на странице
 *
 * @prop dataId CSS-селектор data-id для выбора целого блока.
 * @prop id Идентификатор конкретного элемента формы для получения значения.
 */
var ID = {
    building: {dataId: 'b3a8ece', id: 'building-type'},
    material: {dataId: '4a029a3', id: 'building-material'},
    height: {dataId: 'b288cb3', id: 'building-height'},
    barnForm: {dataId: '9cc2a25', name: 'barn-form'},
    barnHeight: {dataId: '335033b', id: 'barn-height'},
    sizeHeading: {dataId: 'e58ac5e'},
    sizeInputs: {dataId: '56cc477', name: 'size'},
    length: {id: 'building-length'},
    width: {id: 'building-width'},
    setUp: {dataId: '1c16c82', name: 'set-up'},
    mrrHeading: {dataId: 'a29203d', id: 'mrr-distance'},
    mrr: {dataId: '3965a8e', id: 'mrr-distance', name:'mrr'},
    reset: {dataId: '290ba0e', id: 'reset'},
    resume: {dataId: 'cc044f5', id: 'resume'},
    calculator: {dataId: 'd219f7a', id: 'calculator'}
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
    {name: '1 - 1,5 этажа', value: 'under2'},
    {name: '2 - 3 этажа', value: 'under3'}
];

/** Этажность для постройки типа "Здание". */
var BUILDINGFLOORS = [
    {name: '1 - 1,5 этажа', value: 'under2'},
    {name: '2 - 3 этажа', value: 'under3'},
    {name: 'более 3 этажей', value: 'over3'}
];

/** Варианты высоты для ангара. */
var BARNHEIGHT = [
    {name: 'до 6 м.', value: 'under6'},
    {name: 'до 8 м.', value: 'under8'},
    {name: 'до 10 м.', value: 'under10'},
    {name: 'более 10 м.', value: 'over10'}
];


/**
 * Формулы и функции.
 */

/**
 * Заполнение select-списка опциями.
 *
 * @param key Ключ спискового элемента в объекте ID.
 * @param array Массив с опциями для заполнения.
 * @param [placeholder] Строка для отображения первым элементом списка (неактивным).
 */
function setOptions(key, array, placeholder) {
    var select = byId(key);
    while (select && select.options.length > 0) {
        select.options[0] = null;
    }

    var defaultOption = new Option (placeholder || '', '', true, true);
    defaultOption.disabled = true;
    defaultOption.hidden = true;
    select.appendChild (defaultOption);

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
    return (option >= 0) && dropdown.options[option].value;
}

/**
 * Получение выбранного значения переключателя.
 * @param key Ключ искомого radio-элемента в объекте ID.
 */
function checked(key) {
    var name = ID[key].name;
    var options = name && document.getElementsByName(name);
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) return options[i].value;
    }
}

/** Инициализация формы калькулятора. Как он выглядит в самом начале. */
function setInitial() {
    var blocks = Object.keys(ID);
    hideAll(blocks);
    clearAll(blocks);
    document.querySelector('[data-id="6a2ccbf"]').classList.remove('wait-js');
    show('building');
    setOptions('building', BUILDINGS, 'Тип строения');
}

/** Обработка выбора типа строения. */
// TODO: написать сценарий для ремонта
function handleBuildingTypeSelect() {
    hideAll(Object.keys(ID));
    show('building');
    var buildingType = selected('building');
    switch (buildingType) {
        case 'house':
        case 'bath':
        case 'porch':
        case 'decking':
        case 'garage':
        case 'shed':
        case 'building':
            showNextSelect('material', ALLMATERIALS, 'Материал', handleMaterialSelect);
            break;
        case 'arbor':
            showNextSelect('material', ARBORMATERIALS, 'Материал', handleMaterialSelect);
            break;
        case 'barn':
            show('barnForm');
            break;
        case 'pier':
            showSizeBlock();
            handleSizeChange();
            break;
        // case 'groundworks':
        // показать что-то для замены/ремонта
        // break;
        default:
            disable('calculator');
    }
}

/** Обработка выбора типа материала. */
// TODO: написать сценарий для ремонта
function handleMaterialSelect() {
    show('reset');
    var buildingType = selected('building');
    switch (buildingType) {
        case 'house':
            showNextSelect('height', FLOORS, 'Этажность', handleFloorsSelect);
            break;
        case 'building':
            showNextSelect('height', BUILDINGFLOORS, 'Этажность', handleFloorsSelect);
            break;
        case 'bath':
        case 'porch':
        case 'arbor':
        case 'decking':
        case 'garage':
        case 'shed':
            showSizeBlock();
            handleSizeChange();
            break;
        // case 'groundworks':
        // показать что-то для замены/ремонта
        // break;
        default:
            break;
    }
}

function handleBarnFormSelect() {
    var selectedForm = checked('barnForm');
    if (!selectedForm) return;
    show('barnHeight');
    checkSelectedValue(selected('barnHeight'), BARNHEIGHT) ?
        handleBarnHeightSelect() :
        setOptions('barnHeight', BARNHEIGHT, 'Высота');
}

/** Обработка выбора количества этажей. */
function handleFloorsSelect() {
    var buildingType = selected('building');
    switch (buildingType) {
        case 'house':
        case 'building':
            showSizeBlock();
            handleSizeChange();
            break;
        default:
            break;
    }
}

// TODO показать галочку с выбором известно или нет расстояние между несущими опорами
function handleBarnHeightSelect() {
    //показать галочку с выбором известно или нет расстояние между несущими опорами
}

/** Обработка ввода размеров строения. */
function handleSizeChange() {
    var length = getNumberValue('length');
    var width = getNumberValue('width');
    if (length && width) {
        show('setUp');
        handleSetUpChange();
    } else {
        var blocks = ['setUp', 'mrrHeading', 'mrr', 'resume', 'calculator'];
        hideAll(blocks);

    }
}

/**
 * Обработка выбора опции 'с монтажом'/'без монтажа'.
 */
function handleSetUpChange() {
    setUp = checked('setUp');
    if (setUp === undefined) return;
    show('mrrHeading');
    show('mrr');
    handleMrrChange();
}

/**
 * Обработка изменения расстояния от МКАД.
 */
function handleMrrChange() {
    var distance = getNumberValue('mrr');
    var setUp = checked('setUp');
    if (setUp === "false") {
        hide('resume');
        distance ? show('calculator') : hide('calculator');
    } else {
        hide('calculator');
        distance ? show('resume') : hide('resume');
    }
}

/** Получение float-значения введенного числа по идентификатору инпута. */
function getNumberValue(key) {
    return parseFloat(byId(key).value);
}

/**
 * Функция, показывающая блок для ввода размеров строения.
 */
function showSizeBlock() {
    show('sizeHeading');
    show('sizeInputs');
    enable('length');
    enable('width');
}

/**
 * Функция, скрывающая смысловой блок разметки.
 * @param key Ключ блока, который хотим скрыть, в объекте ID.
 */
function hide(key) {
    var block = byDataId(key);
    if (block) block.hidden = true;
}

/**
 * Функция, скрывающая все блоки разметки, указанные в массиве.
 * @param blocks Массив, состоящий из ключей блоков, которые хотим скрыть.
 */
function hideAll(blocks) {
    blocks.map(function (key) {
        hide(key);
    });
}

/**
 * Функция, показывающая смысловой блок разметки.
 * @param key Ключ блока, который хотим показать, в объекте ID.
 */
function show(key) {
    var block = byDataId(key);
    if (block) block.hidden = false;
    if (ID[key].id) enable(key);
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

function clear(key) {
    var inputs = document.getElementsByName(ID[key].name);
    if (selected(key)) {
        byId(key).selectedIndex = -1;
        return
    }
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.type === 'radio') input.checked = false;
        if (input.type === 'number') input.value = '';
    }
}

function clearAll(array) {
    array.map(function (key) {
        if (ID[key].id || ID[key].name) clear(key);
    })
}

function checkSelectedValue(value, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].value === value) return true;
    }
}

function showNextSelect(key, array, placeholder, callback) {
    var remainSelected = checkSelectedValue(selected(key), array);
    show(key);
    remainSelected && callback();
    !remainSelected && setOptions(key, array, placeholder);
}

/** Получение общей стоимости заказа. */
function getTotal(event) {
    event.preventDefault();
    var h3 = document.createElement('h3');
    var total = getPilesAmount() + calcTransportation();
    h3.innerHTML = 'Сумма: ' + total;

    document.querySelector('[data-id="6a2ccbf"]').appendChild(h3);
}

/** Расчёт стоимости свай. */
function getPilesAmount() {
    var buildingType = selected('building');
    var material = selected('material');
    var height = selected('building-height');
    var pitch = getPitch();
    var pileType = getPileType();

    return calcPiles(pitch) * (pileType.price + pileType.setUpPrice);
}

/** Расчёт стоимости транспортировки. */
function calcTransportation() {
    return getNumberValue('mrr-distance') * transportationTax;
}

/**
 * Обработчики всех необходимых событий на странице
 **/

document.addEventListener('DOMContentLoaded', setInitial);
byId('building').addEventListener('ValueChange', handleBuildingTypeSelect);
byId('material').addEventListener('ValueChange', handleMaterialSelect);
byDataId('barnForm').addEventListener('click', handleBarnFormSelect);
byId('height').addEventListener('ValueChange', handleFloorsSelect);
byId('length').addEventListener('input', handleSizeChange);
byId('width').addEventListener('input', handleSizeChange);
byDataId('setUp').addEventListener('input', handleSetUpChange);
byId('mrr').addEventListener('input', handleMrrChange);
byId('reset').addEventListener('click', setInitial);
byId('calculator').addEventListener('click', getTotal);
