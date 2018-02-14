/**
 * Константы для select-опций
 */

/** Виды (диаметры) свай, с ценами за штуку и установку. */
var pileTypes = [
    {
        name: "СВС-108",
        price: 1650,
        setUpPrice: 1200
    },

    {
        name: "СВС-133",
        price: 2300,
        setUpPrice: 1400
    }
];

/** Материалы для постройки типа "Дом", с вариантами расстояния между сваями и типа свай в зависимости от этажности. */
var houseMaterials = [
    {
        name: "Брус 150",
        pitch: [3, 3]
    },
    {
        name: "Брус 200",
        pitch: [3, 2.5]
    },
    {
        name: "Бревно",
        pitch: [3, 2]
    },
    {
        name: "Sip-панели",
        pitch: [3, 2.5]
    },
    {
        name: "Каркасно-щитовой",
        pitch: [3, 2.5]
    },
    {
        name: "Газосиликатный блок 200 мм.",
        pitch: [2, 2]
    },
    {
        name: "Газосиликатный блок 300 мм.",
        pitch: [2, 2]
    },
    {
        name: "Кирпич",
        pitch: [2, 2]
    },
    {
        name: "ЛСТК",
        pitch: [3, 2.5]
    }
];

/** Типы построек. */
var buildings = [
    "Дом",
    "Баня",
    "Веранда",
    "Беседка",
    "Терраса",
    "Гараж",
    "Хозблок / Сарай",
    "Здание",
    "Ангар",
    "Пирс / Причал",
    "Замена / Ремонт фундамента"
];

/** Этажность. */
var floors = [
    "1 - 1,5 эт.",
    "2 - 3 эт."
];

/** Материалы для обвязки свай по периметру, с ценами за штуку. */
var girderTypes = [
    {
        name: "Швеллер П16",
        price: 1200
    },
    {
        name: "Швеллер П18",
        price: 1350
    },
    {
        name: "Швеллер П20",
        price: 1500
    },
    {
        name: "Швеллер П22",
        price: 1600
    },
    {
        name: "Швеллер П26",
        price: 2100
    },
    {
        name: "Швеллер П28",
        price: 2300
    },
    {
        name: "Швеллер П30",
        price: 2700
    },
    {
        name: "Двутавр 16",
        price: 1650
    },
    {
        name: "Двутавр 18",
        price: 1900
    },
    {
        name: "Двутавр 20",
        price: 2300
    },
    {
        name: "Двутавр 22",
        price: 2550
    }
];

/** Материалы для обвязки цоколя профтрубой, с ценами за штуку. */
var pipeTypes = [
    {
        name: "Профтруба 20х30х2",
        price: 1200
    },
    {
        name: "Профтруба 20х30х3",
        price: 1350
    },
    {
        name: "Профтруба 30х60х2",
        price: 1500
    },
    {
        name: "Профтруба 30х60х3",
        price: 1600
    }
];

/** Материалы для обвязки свай кирпичного дома, с ценами за материал и установку. */
var bricksBuildingBracing = [
    {
        name: "Лента 40х40",
        size: 0.4*0.4,
        price: 20000,
        bracing: 25000
    },
    {
        name: "Лента 40х60",
        size: 0.4*0.6,
        price: 20000,
        bracing: 25000
    },
    {
        name: "Лента 40х80",
        size: 0.4*0.8,
        price: 20000,
        bracing: 25000
    },
    {
        name: "Лента 40х100",
        size: 0.4*1,
        price: 20000,
        bracing: 25000
    },
    {
        name: "Лента 50х50",
        size: 0.5*0.5,
        price: 20000,
        bracing: 25000
    },
    {
        name: "Лента 50х60",
        size: 0.5*0.6,
        price: 20000,
        bracing: 25000
    },
    {
        name: "Лента 50х80",
        size: 0.5*0.8,
        price: 20000,
        bracing: 25000
    },
    {
        name: "Лента 50х100",
        size: 0.5*1,
        price: 20000,
        bracing: 25000
    }
];


/**
 * Константы для формул.
 */

/** Цена доставки (за километр). */
var transportationTax = 40;

/** Цена за монтаж обвязки (за штуку). */
var bracing = 1000;
var piping = 1000;


/**
 * Формулы и функции.
 */

/** Заполнение select-списка опциями.
 * @param selectID Идентификатор списка.
 * @param array Массив с опциями для заполнения.
 */
function setOptions(selectID, array) {
    array.map(function(item) {
        var option = document.createElement("option");
        option.innerHTML = item.name ? item.name : item;
        byId(selectID).appendChild(option);
    })
}

/** Получение HTML-элемента по идентификатору. */
function byId(id) {
    return document.getElementById(id);
}

/** Получение индекса выбранной select-опции по идентификатору селекта. */
function selected(id) {
    return byId(id).selectedIndex;
}

/** Получение float-значения введенного числа по идентификатору инпута. */
function getNumberValue(id) {
    return parseFloat(byId(id).value);
}

/** Расчёт количества свай, с учётом максимального шага между ними.
 * @param pitch Максимальное расстояние между сваями.
 */
function calcPiles(pitch) {
    var length = getNumberValue("building-length");
    var width = getNumberValue("building-width");
    pitch = pitch ? pitch : 3;

    /** Расчёт количества свай по одной стороне.
     * @param value Размер стороны (длина или ширина строения).
     * Прибавляем 1, т.к. в "точке отсчёта" тоже должна быть свая, значит счёт идёт не от 0.
     */
    function calcAspect(value) {
        var pilesNumber = Math.ceil(value / pitch) + 1;
        console.log("calcAspect " + pilesNumber);
        return pilesNumber;
    }
    var totalPiles = calcAspect(length) * calcAspect(width);
    console.log("totalPiles " + totalPiles);

    return totalPiles;
}

/** Расчёт стоимости транспортировки. */
function calcTransportation() {
    var tax = getNumberValue("mrr-distance") * transportationTax;
    console.log("transportationTax " + tax);
    return tax;
}

/** Расчёт стоимости свай. */
function getPilesAmount() {
    var material = houseMaterials[selected("building-material")];
    var height = selected("building-height");
    var pitch = material.pitch[height];
    var pileType = pileTypes[height];

    var pilesAmount = calcPiles(pitch) * (pileType.price + pileType.setUpPrice);
    console.log("pilesAmount " + pilesAmount);

    return pilesAmount;
}

/** Расчёт стоимости дополнительных работ (обвязка свай / обвязка по периметру). */
function getAdditionalWorksAmount() {
    var length = getNumberValue("building-length");
    var width = getNumberValue("building-width");
    var perimeter = (length + width) * 2;
    var pieces = Math.ceil(perimeter / 3);
    var bracingAmount = 0, pipingAmount = 0;
    var girderType;


    if (byId("need-bracing").checked) {

        /** Для кирпичного строения предоставляется только обвязка лентой - другой способ расчёта. */
        if (houseMaterials[selected("building-material")].name === "Кирпич") {
           girderType = bricksBuildingBracing[selected("girder-type")];
           bracingAmount = (girderType.price + girderType.bracing) * perimeter * girderType.size;
           console.log("bricks bracing amount " + bracingAmount);

           return bracingAmount;

       } else {
           girderType =  girderTypes[selected("girder-type")];
           bracingAmount = (girderType.price + bracing) * pieces;
           console.log("bracingAmount " + bracingAmount);
       }
    }

    if (byId("need-piping").checked) {
        var pipeType =  pipeTypes[selected("pipe-type")];
        pipingAmount = (pipeType.price + piping) * pieces;
        console.log("pipingAmount " + pipingAmount);
    }

    var  additionalWorks = bracingAmount + pipingAmount;
    console.log("additionalWorks " + additionalWorks);

    return additionalWorks;
}

/** Получение общей стоимости заказа. */
function getTotal(event) {
    event.preventDefault();
    var h3 = document.createElement("h3");
    var total = getPilesAmount() + getAdditionalWorksAmount() + calcTransportation();
    console.log(total);
    h3.innerHTML = "Сумма: " + total;
    console.log(h3.innerHTML);

    byId("calculator").appendChild(h3);
}

function setInitial() {
    setOptions("building-type", buildings);
    setOptions("building-material", houseMaterials);
    setOptions("building-height", floors);
    setOptions("girder-type", girderTypes);
    setOptions("pipe-type", pipeTypes);
}

document.addEventListener("DOMContentLoaded", setInitial);
byId("calculator").addEventListener("submit", getTotal);

// function showNext(event, nextBlockId) {
//     event.target.hidden = true;
//     // нарисовать вместо этого другую кнопку
//     var nextBlock = byId(nextBlockId);
//     // в опции передать нужный массив
// }

