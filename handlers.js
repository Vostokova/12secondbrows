/**
 * Обработчики действий с интерактивными элементами (кнопки, инпуты, селекты).
 */

/** Обработка выбора типа строения. */
// TODO: написать сценарий для ремонта
function handleBuildingTypeSelect() {
    hideAll(Object.keys(ID));
    show('building');
    show('reset');
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
            show('current');
            handleCurrentSelect();
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

/** Обработка выбора формы ангара. */
function handleBarnFormSelect() {
    var selectedForm = checked('barnForm');
    if (!selectedForm) return;
    showNextSelect('barnHeight', BARNHEIGHT, 'Высота', handleBarnHeightSelect);
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

/** Обработка выбора высоты ангара. */
function handleBarnHeightSelect() {
    if (!selected('barnHeight')) return;
    show('barnPitchHeading');
    show('pitchInputs');
    handlePitchInput();
}

/** Обработка ввода известного расстояния между опорами или выбора шага по умолчанию. */
function handlePitchInput() {
    if (byId('defaultPitch').checked) {
        disable('pitch');
        byId('pitch').value = '';
        showSizeBlock();
        handleSizeChange();
    } else {
        enable('pitch');
        if (getNumberValue('pitch')) {
            showSizeBlock();
            handleSizeChange();
        } else {
            var blocks = ['sizeHeading', 'sizeInputs', 'mrrHeading', 'mrr', 'setUp', 'resume', 'calculator'];
            hideAll(blocks);
        }
    }
}

/** Обработка выбора течения в водоёме. */
function handleCurrentSelect() {
    var current = checked('current');
    if (!current) return;
    show('depthHeading');
    show('depth');
    handleDepthInput();
}

/** Обработка ввода глубины водоёма. */
function handleDepthInput() {
    var depth = getNumberValue('depth');
    if (depth) {
        showSizeBlock();
        handleSizeChange();
    } else {
        var blocks = ['sizeHeading', 'sizeInputs', 'mrrHeading', 'mrr', 'setUp', 'resume', 'calculator'];
        hideAll(blocks);
    }
}

/** Обработка ввода размеров строения. */
function handleSizeChange() {
    var length = getNumberValue('length');
    var width = getNumberValue('width');
    if (length && width) {
        show('mrrHeading');
        show('mrr');
        handleMrrChange();
    } else {
        var blocks = ['mrrHeading', 'mrr', 'setUp', 'resume', 'calculator'];
        hideAll(blocks);

    }
}

/** Обработка изменения расстояния от МКАД. */
function handleMrrChange() {
    var distance = getNumberValue('mrr');
    if (distance) {
        show('setUp');
        handleSetUpChange();
    } else {
        var blocks = ['setUp', 'resume', 'calculator'];
        hideAll(blocks);
    }
}

/** Обработка выбора опции 'с монтажом'/'без монтажа'. */
function handleSetUpChange() {
    var setUp = checked('setUp');
    if (setUp === undefined) return;
    hide(setUp === 'true' ? 'calculator' :'resume');
    show(setUp === 'true' ? 'resume' : 'calculator');
}
