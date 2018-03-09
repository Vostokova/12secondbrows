/**
 * Формулы и функции.
 */

/** Получение общей стоимости заказа. */
function getTotal() {
    var buildingType = selected('building');
    var material = selected('material');
    var length = getNumberValue('length') || 0;
    var width = getNumberValue('width') || 0;
    var setUp = (checked('setUp') === 'true') || (buildingType === 'pier');

    var params = getPilesParams();
    console.log(getPilesAmount(params) + ' + ' + getSetUpPrice(params));
    var bracing = setUp && needBracing(buildingType) ? getBracingAmount(length, width, parseFloat(selected('girderType'))) : 0;
    var piping = setUp && ((checked('needPiping') === 'true') && (buildingType !== 'pier') && (material !== 'brick')) ?
        getPipingAmount(length, width, parseFloat(selected('pipeType'))) : 0;

    var total = params && (getPilesAmount(params) + getSetUpPrice(params) + getTransportation() + bracing + piping);
    params && console.log(getPilesAmount(params) + getSetUpPrice(params) + ' + ' + getTransportation() + ' + ' + bracing + ' + ' + piping + ' = ' + total);
    return total;
}

/**
 * Расчёт количества свай, с учётом максимального шага между ними.
 * @param pitch Максимальное расстояние между сваями.
 */
function getPilesNumber(pitch) {
    var length = getNumberValue('length');
    var width = getNumberValue('width');

    if (length && width) {
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
}

/** Получаем параметры, необходимые для расчёта стоимости свай (и заполнения полей правого блока). */
function getPilesParams() {
    var buildingType = selected('building');
    var material = selected('material');
    var height = selected('height');
    var path, pitch;

    switch (buildingType) {
        case 'house':
        case 'building':
            path = height && material && buildingParamsMap[buildingType][height][material];
            break;
        case 'barn':
            var form = checked('barnForm');
            var barnHeight = selected('barnHeight');
            path = form && barnHeight && buildingParamsMap.barn[form][barnHeight];
            break;
        case 'pier':
            var current = checked('current');
            path = current && buildingParamsMap.pier[current];
            break;
        // case 'groundWorks': TODO: вариант для ремонта
        default:
            path = material && buildingParamsMap[buildingType][material];
            break;
    }
    if (!path) return;

    pitch = path.pitch || byId('defaultPitch').checked && 3 || getNumberValue('pitch');
    if (!pitch) return;

    return {
        pitch: pitch,                       // Шаг между сваями.
        pilesNumber: getPilesNumber(pitch), // Количество свай.
        pileType: path.pileType             // Диаметр свай.
    }
}

function getPilesAmount(params) {
    return params ? (params.pilesNumber * params.pileType.price) : 0;
}

function getSetUpPrice(params) {
    var setUp = (checked('setUp') === 'true') || (selected('building') === 'pier');
    return setUp ? (params.pileType.setUpPrice * params.pilesNumber) : 0;
}

function getTransportation() {
    return getNumberValue('mrr') * transportationTax;
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
