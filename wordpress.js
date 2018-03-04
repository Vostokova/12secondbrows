/**
 * Формулы и функции.
 */

/** Получение общей стоимости заказа. */
function getTotal() {
    var buildingType = selected('building');
    var material = selected('material');
    var height = selected('height');
    var distance = getNumberValue('mrr');
    var total = getPilesAmount(buildingType, material, height) + calcTransportation(distance);
    var text = 'Сумма: ' + total;
    alert(text);
}

/**
 * Расчёт стоимости свай.
 * @param buildingType Тип постройки.
 * @param material Материал.
 * @param height Этажность.
 */
function getPilesAmount(buildingType, material, height) {
    var path, pilesNumber, pileType;

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

    return (pilesNumber * (pileType.price + pileType.setUpPrice));
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

    return getPilesNumber(pitch) * pileHeight;
}

/**
 * Расчёт стоимости транспортировки.
 * @param distance Расстояние от МКАД.
 */
function calcTransportation(distance) {
    return distance * transportationTax;
}
