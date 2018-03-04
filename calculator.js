var BARNBRACING = [
    {name: 'обвязка металлом', value: 'metal'},
    {name: 'обвязка бетонной лентой', value: 'band'}
];

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

var girderTypes14 = [GT.U16, GT.U18, GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T14, GT.T16, GT.T18, GT.T20, GT.T22];
var girderTypes16 = [GT.U16, GT.U18, GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T16, GT.T18, GT.T20, GT.T22];
var girderTypes20 = [GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T20, GT.T22];
var girderTypes30 = [GT.U30];

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
