function handleBuildingTypeSelect (buildingType) {
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

function handleBuildingMaterialSelect (material) {
    switch (material) {
        case 'bar150':
        case 'bar200':
        case 'woodLog':
        case 'sip':
        case 'framePanel':
        case 'cinder200':
        case 'cinder300':
        case 'brick':
        case 'steel':
            // показать поле для выбора формы ангара с вариантами BARNOPTIONS
            // break;
        case 'pier':
            // показать инпуты для ввода длины и ширины
            // break;
        case 'groundworks':
            // показать что-то для замены/ремонта
            // break;
        default:
            byId('calculator').disabled = true;
    }
}

// /** Материалы для постройки типа "Дом", с параметрами расстояния между сваями, типа свай и вариантов обвязки. */
// var HOUSEMATERIALS = [
//     {name: 'Брус 150', value: bar150Params},
//     {name: 'Брус 200', value: bar200Params},
//     {name: 'Бревно', value: logParams},
//     {name: 'Sip-панели', value: panelParams},
//     {name: 'Каркасно-щитовой', value: panelParams},
//     {name: 'Газосиликатный блок 200 мм.', value: cinder200Params},
//     {name: 'Газосиликатный блок 300 мм.', value: cinder300Params},
//     {name: 'Кирпич', value: brickParams},
//     {name: 'ЛСТК', value: panelParams}
// ];
//
// /** Материалы для постройки типа "Баня", с указанием расстояния между сваями, типа свай и вариантов обвязки свай. */
// var BATHMATERIALS = [
//   {name: 'Брус 150', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes16}},
//   {name: 'Брус 200', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes20}},
//   {name: 'Бревно', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes20}},
//   {name: 'Sip-панели', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes14}},
//   {name: 'Каркасно-щитовой', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes14}},
//   {name: 'Газосиликатный блок 200 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes20}},
//   {name: 'Газосиликатный блок 300 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes30}},
//   {name: 'Кирпич', value: {pitch: 2, pileType: PT.svs108, girderTypes: bricksBuildingBracing}},
//   {name: 'ЛСТК', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes14}}
// ];
//
// /** Материалы для постройки типа "Веранда", с указанием расстояния между сваями, типа свай и вариантов обвязки свай. */
// var PORCHMATERIALS = [
//   {name: 'Брус 150', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes16}},
//   {name: 'Брус 200', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes20}},
//   {name: 'Бревно', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes20}},
//   {name: 'Sip-панели', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}},
//   {name: 'Каркасно-щитовой', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}},
//   {name: 'Газосиликатный блок 200 мм.', value: {pitch: 2, pileType: PT.svs89, girderTypes: girderTypes20}},
//   {name: 'Газосиликатный блок 300 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes30}},
//   {name: 'Кирпич', value: {pitch: 2, pileType: PT.svs108, girderTypes: bricksBuildingBracing}},
//   {name: 'ЛСТК', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}}
// ];
//
// /** Материалы для постройки типа "Беседка", с указанием расстояния между сваями, типа свай и вариантов обвязки свай. */
// var ARBORMATERIALS = [
//   {name: 'Брус 150', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes16}},
//   {name: 'Брус 200', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes20}},
//   {name: 'Бревно', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes20}},
//   {name: 'Sip-панели', value: {pitch: 3, pileType: PT.svs76, girderTypes: girderTypes14}},
//   {name: 'Каркасно-щитовой', value: {pitch: 3, pileType: PT.svs76, girderTypes: girderTypes14}},
//   {name: 'Газосиликатный блок 200 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes20}},
//   {name: 'ЛСТК', value: {pitch: 3, pileType: PT.svs76, girderTypes: girderTypes14}}
// ];
//
// /** Материалы для постройки типа "Терраса", с указанием расстояния между сваями, типа свай и вариантов обвязки свай. */
// var DECKINGMATERIALS = [
//   {name: 'Брус 150', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes16}},
//   {name: 'Брус 200', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes20}},
//   {name: 'Бревно', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes20}},
//   {name: 'Sip-панели', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}},
//   {name: 'Каркасно-щитовой', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}},
//   {name: 'Газосиликатный блок 200 мм.', value: {pitch: 2, pileType: PT.svs89, girderTypes: girderTypes20}},
//   {name: 'Газосиликатный блок 300 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes30}},
//   {name: 'Кирпич', value: {pitch: 2, pileType: PT.svs108, girderTypes: bricksBuildingBracing}},
//   {name: 'ЛСТК', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}}
// ];
//
// /** Материалы для постройки типа "Гараж", с указанием расстояния между сваями, типа свай и вариантов обвязки свай. */
// var GARAGEMATERIALS = [
//   {name: 'Брус 150', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes16}},
//   {name: 'Брус 200', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes20}},
//   {name: 'Бревно', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes20}},
//   {name: 'Sip-панели', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes14}},
//   {name: 'Каркасно-щитовой', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes14}},
//   {name: 'Газосиликатный блок 200 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes20}},
//   {name: 'Газосиликатный блок 300 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes30}},
//   {name: 'Кирпич', value: {pitch: 2, pileType: PT.svs108, girderTypes: bricksBuildingBracing}},
//   {name: 'ЛСТК', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes14}}
// ];
//
/** Материалы для постройки типа "Хозблок/Сарай", с указанием расстояния между сваями, типа свай и вариантов обвязки свай. */
var SHEDMATERIALS = [
  {name: 'Брус 150', value: {pitch: 3, pileType: PT.svs76, girderTypes: girderTypes16}},
  {name: 'Брус 200', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes20}},
  {name: 'Бревно', value: {pitch: 3, pileType: PT.svs108, girderTypes: girderTypes20}},
  {name: 'Sip-панели', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}},
  {name: 'Каркасно-щитовой', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}},
  {name: 'Газосиликатный блок 200 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes20}},
  {name: 'Газосиликатный блок 300 мм.', value: {pitch: 2, pileType: PT.svs108, girderTypes: girderTypes30}},
  {name: 'Кирпич', value: {pitch: 2, pileType: PT.svs108, girderTypes: bricksBuildingBracing}},
  {name: 'ЛСТК', value: {pitch: 3, pileType: PT.svs89, girderTypes: girderTypes14}}
];

/** Pile Types - Виды (диаметры) свай, с ценами за штуку и установку. */
var PT = {
    svs108: {name: 'СВС-108', price: 1650, setUpPrice: 1200},
    svs133: {name: 'СВС-133', price: 2300, setUpPrice: 1400},
    svs89: {name: 'СВС-89', price: 1450, setUpPrice: 1100},
    svs76: {name: 'СВС-76', price: 1250, setUpPrice: 950},
    svs108m4: {name: 'СВС-76', price: 2500, setUpPrice: 1500},
    svs108m4l2: {name: 'СВС-76', price: 3500, setUpPrice: 2500},
    svs108m5l2: {name: 'СВС-76', price: 4200, setUpPrice: 2900}
};

/** Варианты высоты для ангара. */
var BARNHEIGHT = [
    {name: 'до 6 м.', value: 'under6'},
    {name: 'до 8 м.', value: 'under8'},
    {name: 'до 10 м.', value: 'under10'},
    {name: 'более 10 м.', value: 'over10'}
];

var BARNBRACING = [
    {name: 'обвязка металлом', value: 'metal'},
    {name: 'обвязка бетонной лентой', value: 'band'}
];

/** Girder Types - Материалы для обвязки свай по периметру, с ценами за штуку. */
var GT = {
    U16: {name: 'Швеллер П16', value: 1200},
    U18: {name: 'Швеллер П18', value: 1350},
    U20: {name: 'Швеллер П20', value: 1500},
    U22: {name: 'Швеллер П22', value: 1600},
    U24: {name: 'Швеллер П24', value: 1800},
    U26: {name: 'Швеллер П26', value: 2100},
    U28: {name: 'Швеллер П28', value: 2300},
    U30: {name: 'Швеллер П30', value: 2700},
    T14: {name: 'Двутавр 14', value: 1450},
    T16: {name: 'Двутавр 16', value: 1650},
    T18: {name: 'Двутавр 18', value: 1900},
    T20: {name: 'Двутавр 20', value: 2300},
    T22: {name: 'Двутавр 22', value: 2550}
};

/** Материалы для обвязки цоколя профтрубой, с ценами за штуку. */
var pipeTypes = [
    {
        name: 'Профтруба 20х30х2',
        value: 1200
    },
    {
        name: 'Профтруба 20х30х3',
        value: 1350
    },
    {
        name: 'Профтруба 30х60х2',
        value: 1500
    },
    {
        name: 'Профтруба 30х60х3',
        value: 1600
    }
];

/** Материалы для обвязки свай кирпичного дома, с ценами за материал и установку.
 * @value [0,4*04] Ширина и высота ленты.
 */
var bricksBuildingBracing = [
    {
        name: 'Лента 40х40',
        value: 0.4*0.4
    },
    {
        name: 'Лента 40х60',
        value: 0.4*0.6
    },
    {
        name: 'Лента 40х80',
        value: 0.4*0.8
    },
    {
        name: 'Лента 40х100',
        value: 0.4*1
    },
    {
        name: 'Лента 50х50',
        value: 0.5*0.5
    },
    {
        name: 'Лента 50х60',
        value: 0.5*0.6
    },
    {
        name: 'Лента 50х80',
        value: 0.5*0.8
    },
    {
        name: 'Лента 50х100',
        value: 0.5*1
    }
];

var bar150Params = {
    low: {pitch: 3, pileType: PT.svs108},
    high: {pitch: 2, pileType: PT.svs108},
    girderTypes: girderTypes16
}

var bar200Params = {
    low: {pitch: 3, pileType: PT.svs108},
    high: {pitch: 2.5, pileType: PT.svs108},
    girderTypes: girderTypes20
}

var logParams = {
    low: {pitch: 3, pileType: PT.svs108},
    high: {pitch: 2, pileType: PT.svs108},
    girderTypes: girderTypes20
}

var panelParams = {
    low: {pitch: 3, pileType: PT.svs108},
    high: {pitch: 2.5, pileType: PT.svs108},
    girderTypes: girderTypes14
}

var cinder200Params = {
    low: {pitch: 2, pileType: PT.svs108},
    high: {pitch: 2, pileType: PT.svs108},
    girderTypes: girderTypes20
}

var cinder300Params = {
    low: {pitch: 2, pileType: PT.svs108},
    high: {pitch: 2, pileType: PT.svs133},
    girderTypes: girderTypes30
}

var brickParams = {
    low: {pitch: 2, pileType: PT.svs108},
    high: {pitch: 2, pileType: PT.svs133},
    girderTypes: bricksBuildingBracing
}

var archBarnParams = {
  pileType: {under6: PT.svs108m4, under8: PT.svs108m4l2, under10: PT.svs108m5l2, over10: PT.svs108m5l2}
  girderTypes: girderTypes16,
  pitch: 3
}

var leanBarnParams = {
  pileType: {under6: PT.svs108m4l2, under8: PT.svs108m4l2, under10: PT.svs108m5l2, over10: PT.svs108m5l2}
  girderTypes: {metal: girderTypes16, band: bricksBuildingBracing},
  pitch: 3
}

var girderTypes14 = [GT.U16, GT.U18, GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T14, GT.T16, GT.T18, GT.T20, GT.T22];
var girderTypes16 = [GT.U16, GT.U18, GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T16, GT.T18, GT.T20, GT.T22];
var girderTypes20 = [GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T20, GT.T22];
var girderTypes30 = [GT.U30];


/**
 * Константы для формул.
 */

/** Цена доставки (за километр). */
var transportationTax = 40;

/** Цена за обвязку свай/цоколя (за штуку материала). */
var bracing = 1000;
var piping = 1000;

/** Цена ленты для обвязки кирпичного строения (за квадратный метр ленты). */
var bricksBuildingBinderPrice = 20000;
/** Цена обвязки кирпичного строения (за квадратный метр ленты). */
var bricksBuildingBracingPrice = 25000;


/**
 * Формулы и функции.
 */

 /** Заполнение select-списка опциями.
  * @param selectID Идентификатор списка.
  * @param array Массив с опциями для заполнения.
  * @param [placeholder] Необязательная подсказка/заголовок выпадающего списка.
  */
 function setOptions(selectID, array, placeholder) {
 	var select = byId(selectID);
 	while (select.options.length > 0) {
 		select.options[0] = null;
 	};

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

/** Получение значения выбранной select-опции по идентификатору селекта. */
function selected(id) {
    var dropdown = byId(id);
    var option = dropdown.selectedIndex;
    return dropdown.options[option].value;
}

/** Получение float-значения введенного числа по идентификатору инпута. */
function getNumberValue(id) {
    return parseFloat(byId(id).value);
}

/** Расчёт количества свай, с учётом максимального шага между ними.
 * @param pitch Максимальное расстояние между сваями.
 */
function calcPiles(pitch) {
    var length = getNumberValue('building-length');
    var width = getNumberValue('building-width');

    /** Расчёт количества свай по одной стороне.
     * @param value Размер стороны (длина или ширина строения).
     * Прибавляем 1, т.к. в 'точке отсчёта' тоже должна быть свая, значит счёт идёт не от 0.
     */
    function calcAspect(value) {
        var pilesNumber = Math.ceil(value / pitch) + 1;
        console.log('calcAspect ' + pilesNumber);
        return pilesNumber;
    }

    return calcAspect(length) * calcAspect(width);
}

/** Расчёт стоимости транспортировки. */
function calcTransportation() {
    return getNumberValue('mrr-distance') * transportationTax;
}

/** Расчёт стоимости свай. */
function getPilesAmount() {
    var buildingParams = selected('building-material');
    var height = selected('building-height');
    var pitch = buildingParams[height].pitch;
    var pileType = buildingParams[height].pileType;

    return calcPiles(pitch) * (pileType.price + pileType.setUpPrice);
}

/** Расчёт стоимости дополнительных работ (обвязка свай / обвязка по периметру). */
function getAdditionalWorksAmount() {
    var length = getNumberValue('building-length');
    var width = getNumberValue('building-width');
    var perimeter = (length + width) * 2;
    var pieces = Math.ceil(perimeter / 3);
    var bracingAmount = 0, pipingAmount = 0;


    if (byId('need-bracing').checked) {

        /** Для кирпичного строения предоставляется только обвязка лентой - другой способ расчёта. */
        if (houseMaterials[selected('building-material')].name === 'Кирпич') { //TODO: достать значение "кирпич" или что выбор из массива bricksBuildingBracing
           var binderSize = selected('girder-type');

           return (bricksBuildingBinderPrice + bricksBuildingBracingPrice) * perimeter * binderSize;

       } else {
           var girderPrice = selected('girder-type');
           bracingAmount = (girderPrice + bracing) * pieces;
       }
    }

    if (byId('need-piping').checked) {
        var pipePrice = selected('pipe-type');
        pipingAmount = (pipePrice + piping) * pieces;
    }

    return bracingAmount + pipingAmount;
}

/** Получение общей стоимости заказа. */
function getTotal(event) {
    event.preventDefault();
    var h3 = document.createElement('h3');
    var total = getPilesAmount() + getAdditionalWorksAmount() + calcTransportation();
    h3.innerHTML = 'Сумма: ' + total;

    byId('calculator').appendChild(h3);
}

function setInitial() {
    setOptions('building-type', buildings, 'Тип строения');
    setOptions('building-material', houseMaterials, 'Материал');
    setOptions('building-height', floors, 'Этажность');
    setOptions('girder-type', girderTypes);
    setOptions('pipe-type', pipeTypes);
}

document.addEventListener('DOMContentLoaded', setInitial);
byId('calculator').addEventListener('submit', getTotal);

// function showNext(event, nextBlockId) {
//     event.target.hidden = true;
//     // нарисовать вместо этого другую кнопку
//     var nextBlock = byId(nextBlockId);
//     // в опции передать нужный массив
// }


function checkSelectedValue(value, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].value = value) return true;
    }
}