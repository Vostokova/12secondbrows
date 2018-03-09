/**
 * Формулы и функции.
 */

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

           return (bricksBuildingBandPrice + bricksBuildingBracingPrice) * perimeter * binderSize;

       } else {
           var girderPrice = selected('girder-type');
           bracingAmount = (girderPrice + bracing) * pieces;
       }
    }
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
