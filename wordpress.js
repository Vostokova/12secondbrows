/**
 * Формулы и функции.
 */

/** Получение общей стоимости заказа. */
function getTotal() {
    var total = getPilesAmount() + calcTransportation();
    var text = 'Сумма: ' + total;
    alert(text);
}

/** Расчёт стоимости свай. */
function getPilesAmount() {
    var config = getPilesConfig();
    return getPilesNumber(config.pitch) * config.price;
}

/**
 * Получаем шаг и стоимость свай (цена за штуку + установку).
 */
function getPilesConfig() {
    var buildingType = selected('building');
    var material = selected('material');
    var height = selected('height');
    var path, pitch, pileType;

    switch (buildingType) {
        case 'house':
        case 'building':
            path = buildingParamsMap[buildingType][height][material];
            pitch = path.pitch;
            pileType = path.pileType;
            break;
        case 'barn':
            pitch = byId('defaultPitch').checked ? 3 : getNumberValue('pitch');
            pileType = buildingParamsMap[buildingType][checked('barnForm')][selected('barnHeight')];
            break;
        case 'pier':
            path = buildingParamsMap.pier[selected('stream')];
            pitch = path.pitch;
            pileType = path.pileType;
            break;
        // case 'groundWorks': TODO: вариант для ремонта
        default:
            path = buildingParamsMap[buildingType][material];
            pitch = path.pitch;
            pileType = path.pileType;
            break;
    }

    return {pitch: pitch, price: pileType.price + pileType.setUpPrice};
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

/** Расчёт стоимости транспортировки. */
function calcTransportation() {
    return getNumberValue('mrr') * transportationTax;
}
