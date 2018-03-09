/**
 * Формулы и функции.
 */

/** Получение общей стоимости заказа. */
function getTotal() {
    var buildingType = selected('building');
    var material = selected('material');
    var height = selected('height');
    var length = getNumberValue('length');
    var width = getNumberValue('width');
    var setUp = (checked('setUp') === 'true') || (buildingType === 'pier');

    var pilesAmount = getPilesAmount(buildingType, material, height, setUp);
    var transportation = getNumberValue('mrr') * transportationTax;
    var bracing = setUp && needBracing(buildingType) ? getBracingAmount(length, width, parseFloat(selected('girderType'))) : 0;
    var piping = setUp && ((checked('needPiping') === 'true') && (buildingType !== 'pier') && (material !== 'brick')) ?
        getPipingAmount(length, width, parseFloat(selected('pipeType'))) : 0;

    var total = pilesAmount + transportation + bracing + piping;
    console.log(pilesAmount + ' + ' + transportation + ' + ' + bracing + ' + ' + piping + ' = ' + total);
    var text = 'Сумма: ' + total;
    alert(text);
}

/**
 * Расчёт стоимости свай.
 * @param buildingType Тип постройки.
 * @param material Материал.
 * @param height Этажность.
 */
function getPilesAmount(buildingType, material, height, setUp) {
    var path, pilesNumber, pileType, setUpPrice;

    switch (buildingType) {
        case 'house':
        case 'building':
            path = buildingParamsMap[buildingType][height][material];
            pilesNumber = getPilesNumber(path.pitch);
            pileType = path.pileType;
            break;
        case 'barn':
            var pitch = byId('defaultPitch').checked ? 3 : getNumberValue('pitch');
            pilesNumber = getPilesNumber(pitch);
            pileType = buildingParamsMap[buildingType][checked('barnForm')][selected('barnHeight')];
            break;
        case 'pier':
            path = buildingParamsMap.pier[checked('current')];
            pilesNumber = getPierPilesNumber(path.pitch);
            pileType = path.pileType;
            break;
        // case 'groundWorks': TODO: вариант для ремонта
        default:
            path = buildingParamsMap[buildingType][material];
            pilesNumber = getPilesNumber(path.pitch);
            pileType = path.pileType;
            break;
    }
    setUpPrice = setUp ? pileType.setUpPrice : 0;
    console.log(pilesNumber + ' piles * ' + pileType.price + ' + ' + setUpPrice);

    return (pilesNumber * (pileType.price + setUpPrice));
}

/**
 * Расчёт количества свай, с учётом максимального шага между ними.
 * @param pitch Максимальное расстояние между сваями.
 */
function getPilesNumber(pitch) {
    var length = getNumberValue('length');
    var width = getNumberValue('width');

    /**
     * Расчёт количества свай по одной стороне.
     * @param value Размер стороны (длина или ширина строения).
     * Прибавляем 1, т.к. в 'точке отсчёта' тоже должна быть свая, значит счёт идёт не от 0.
     */
    function calcAspect(value) {
        return Math.ceil(value / pitch) + 1;
    }
    console.log(calcAspect(length) + ' * ' + calcAspect(width) + ' piles total');

    return calcAspect(length) * calcAspect(width);
}

/**
 * Расчёт количества свай для пирса, с учётом максимального шага между ними.
 * @param pitch Максимальное расстояние между сваями.
 */
function getPierPilesNumber(pitch) {
    // Свая должна зайти в дно не меньше 1.5 м.
    var depth = getNumberValue('depth') + 1.5;
    // Кратность свай - 0,5 м.
    var pileHeight = Math.ceil(depth / 0.5);
    console.log(pileHeight + ' parts in one');

    return getPilesNumber(pitch) * pileHeight;
}

/**
 * Расчёт стоимости обвязки свай по периметру.
 * @param length Длина строения.
 * @param width Ширина строения.
 * @param value Значение выбранного типа обвязки: цена за штуку либо размер бетонной ленты.
 */
function getBracingAmount(length, width, value) {
    var perimeter = (length + width) * 2;
    var isBand = (selected('material') === 'brick') || (checked('pierBracing') === 'band');
    if (isBand) {
        console.log('обвязка лентой ' + value + ' ' + ((bricksBuildingBandPrice + bricksBuildingBracingPrice) * perimeter * value));
        return (bricksBuildingBandPrice + bricksBuildingBracingPrice) * perimeter * value;
    } else {
        // количество балок кратно трём
        var pieces = Math.ceil(perimeter / 3);
        console.log('обвязка балкой ' + pieces + ' шт ' + ((value + bracing) * pieces));
        return (value + bracing) * pieces;
    }
}

/**
 * Выясняем, нужна ли обвязка свай.
 * @param buildingType Тип строения (т.к. для разных строений разные радио-элементы).
 */
function needBracing(buildingType) {
    switch (buildingType) {
        case 'pier':
            return true;
        case 'barn':
            var barnBracing = checked('barnBracing');
            return barnBracing && (barnBracing !== 'false');
        default:
            return (checked('needBracing') === 'true');
    }
}

/**
 * Расчёт стоимости обвязки цоколя профтрубой.
 * @param length Длина цоколя.
 * @param width Ширина цоколя.
 * @param pipePrice Цена за профтрубу (за штуку).
 */
function getPipingAmount(length, width, pipePrice) {
    var perimeter = (length + width) * 2;
    // количество профилирующих труб кратно трём
    var pieces = Math.ceil(perimeter / 3);

    console.log('обвязка цоколя ' + pieces + ' шт ' + ((pipePrice + piping) * pieces));
    return (pipePrice + piping) * pieces;
}
