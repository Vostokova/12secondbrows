/**
 * Константы для select-опций
 */

/** Виды (диаметры) свай, с ценами за штуку и установку. */
var pileTypes = {
    svs108: {
        name: "СВС-108",
        price: 1650,
        setUpPrice: 1200
    },

    svs133: {
        name: "СВС-133",
        price: 2300,
        setUpPrice: 1400
    }
};

/** Материалы для постройки типа "Дом", с вариантами расстояния между сваями и типа свай в зависимости от этажности. */
var houseMaterials = [
    {
        name: 'Брус 150',
        value: {
            low: {
                pitch: 3,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 3,
                pileType: pileTypes.svs108
            }
        }
    },
    {
        name: 'Брус 200',
        value: {
            low: {
                pitch: 3,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 2.5,
                pileType: pileTypes.svs108
            }
        }
    },
    {
        name: 'Бревно',
        value: {
            low: {
                pitch: 3,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 2,
                pileType: pileTypes.svs108
            }
        }
    },
    {
        name: 'Sip-панели',
        value: {
            low: {
                pitch: 3,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 2.5,
                pileType: pileTypes.svs108
            }
        }
    },
    {
        name: 'Каркасно-щитовой',
        value: {
            low: {
                pitch: 3,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 2.5,
                pileType: pileTypes.svs108
            }
        }
    },
    {
        name: 'Газосиликатный блок 200 мм.',
        value: {
            low: {
                pitch: 2,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 2,
                pileType: pileTypes.svs108
            }
        }
    },
    {
        name: 'Газосиликатный блок 300 мм.',
        value: {
            low: {
                pitch: 2,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 2,
                pileType: pileTypes.svs133
            }
        }
    },
    {
        name: 'Кирпич',
        value: {
            low: {
                pitch: 2,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 2,
                pileType: pileTypes.svs133
            }
        }
    },
    {
        name: 'ЛСТК',
        value: {
            low: {
                pitch: 3,
                pileType: pileTypes.svs108
            },
            high: {
                pitch: 2.5,
                pileType: pileTypes.svs108
            }
        }
    }
];

/** Типы построек. */
var buildings = [
    {
        name: 'Дом',
        value: 'house'
    },
    {
        name: 'Баня',
        value: 'baths'
    },
    {
        name: 'Веранда',
        value: 'porch'
    },
    {
        name: 'Беседка',
        value: 'arbor'
    },
    {
        name: 'Терраса',
        value: 'deck'
    },
    {
        name: 'Гараж',
        value: 'garage'
    },
    {
        name: 'Хозблок / Сарай',
        value: 'shed'
    },
    {
        name: 'Здание',
        value: 'building'
    },
    {
        name: 'Ангар',
        value: 'hangar'
    },
    {
        name: 'Пирс / Причал',
        value: 'pier'
    },
    {
        name: 'Замена / Ремонт фундамента',
        value: 'groundWorks'
    }
];

/** Этажность. */
var floors = [
    {
        name: '1 - 1,5 эт.',
        value: 'low'
    },
    {
        name: '2 - 3 эт.',
        value: 'high'
    }
];

/** Материалы для обвязки свай по периметру, с ценами за штуку. */
var girderTypes = [
    {
        name: 'Швеллер П16',
        value: 1200
    },
    {
        name: 'Швеллер П18',
        value: 1350
    },
    {
        name: 'Швеллер П20',
        value: 1500
    },
    {
        name: 'Швеллер П22',
        value: 1600
    },
    {
        name: 'Швеллер П26',
        value: 2100
    },
    {
        name: 'Швеллер П28',
        value: 2300
    },
    {
        name: 'Швеллер П30',
        value: 2700
    },
    {
        name: 'Двутавр 16',
        value: 1650
    },
    {
        name: 'Двутавр 18',
        value: 1900
    },
    {
        name: 'Двутавр 20',
        value: 2300
    },
    {
        name: 'Двутавр 22',
        value: 2550
    }
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
 */
function setOptions(selectID, array) {
    array.map(function(item) {
        var option = document.createElement('option');
        option.innerHTML = item.name;
        option.value = item.value;
        byId(selectID).appendChild(option);
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
    setOptions('building-type', buildings);
    setOptions('building-material', houseMaterials);
    setOptions('building-height', floors);
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

