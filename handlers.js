/**
 * Обработчики действий с интерактивными элементами (кнопки, инпуты, селекты).
 */

/** Обработка выбора типа строения. */
// TODO: написать сценарий для ремонта
function handleBuildingTypeSelect() {
    var blocks = Object.keys(ID);
    hideAll(blocks);
    show('building');
    show('reset');
    var buildingType = selected('building');
    switch (buildingType) {
        case 'arbor':
            showNextSelect('material', ARBORMATERIALS, 'Материал', handleMaterialSelect);
            break;
        case 'barn':
            clearAll(blocks.slice(1));
            showNext('barnForm', handleBarnFormSelect);
            break;
        case 'pier':
            clearAll(blocks.slice(1));
            showNext('current', handleCurrentSelect);
            break;
        // case 'groundworks':
        // показать что-то для замены/ремонта
        // break;
        default:
            showNextSelect('material', ALLMATERIALS, 'Материал', handleMaterialSelect);
            break;
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
        // case 'groundworks':
        // показать что-то для замены/ремонта
        // break;
        default:
            showNext('sizeInputs', handleSizeChange);
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
    if (!selected('height')) return;
    showNext('sizeInputs', handleSizeChange);
}

/** Обработка выбора высоты ангара. */
function handleBarnHeightSelect() {
    if (!selected('barnHeight')) return;
    showNext('pitchInputs', handlePitchInput);
}

/** Обработка ввода известного расстояния между опорами или выбора шага по умолчанию. */
function handlePitchInput() {
    fillAside();
    if (byId('defaultPitch').checked) {
        disable('pitch');
        byId('pitch').value = '';
        showNext('sizeInputs', handleSizeChange);
    } else {
        enable('pitch');
        if (getNumberValue('pitch')) {
            showNext('sizeInputs', handleSizeChange);
        } else {
            hideAll(buildingKeysToHide);
        }
    }
}

/** Обработка выбора течения в водоёме. */
function handleCurrentSelect() {
    var current = checked('current');
    if (!current) return;
    showNext('sizeInputs', handleSizeChange);
}

/** Обработка ввода размеров строения. */
function handleSizeChange() {
    fillAside();
    var length = getNumberValue('length');
    var width = getNumberValue('width');
    if (length && width) {
        showNext('mrr', handleMrrChange);
    } else {
        hideAll(buildingKeysToHide);
        show('sizeInputs');
    }
    fillAside();
}

/** Обработка изменения расстояния от МКАД. */
function handleMrrChange() {
    fillAside();
    var distance = getNumberValue('mrr');
    var pier = (selected('building') === 'pier');

    if (distance) {
        pier ? showNext('pierBracing', handlePierBracingSelect) : showNext('setUp', handleSetUpChange);
    } else {
        var blocks = ['setUp', 'pierBracing', 'girderType', 'resume', 'calculator'];
        hideAll(blocks);
    }
}

/** Обработка выбора опции 'с монтажом'/'без монтажа'. */
function handleSetUpChange() {
    fillAside();
    var setUp = checked('setUp');
    if (setUp === undefined) return;
    hide(setUp === 'true' ? 'calculator' :'resume');
    show(setUp === 'true' ? 'resume' : 'calculator');
}

/** Обработка клика на кнопке 'Продолжить'. */
function handleResume() {
    fillAside();
    hideAll(Object.keys(ID));
    (selected('building') === 'barn') ?
        showNext('barnBracing', handleBarnBracingSelect) :
        showNext('needBracing', handleNeedBracingChange);
    show('back');
}

/** Обработка выбора, нужна ли обвязка свай по периметру. */
function handleNeedBracingChange() {
    fillAside();
    var needBracing = checked('needBracing');
    if (needBracing === undefined) return;
    if (needBracing === 'true') {
        showNextSelect('girderType', getGirderTypes(), '', handleGirderTypeSelect);
    } else {
        hide('girderType');
        showNext('needPiping', handleNeedPipingChange);
    }
}

/** Обработка выбора варианта обвязки ангара. */
function handleBarnBracingSelect() {
    fillAside();
    var bracing = checked('barnBracing');
    if (!bracing) return;
    if (bracing === 'false') {
        hide('girderType');
        showNext('needPiping', handleNeedPipingChange);
        return;
    }
    var girderTypes = (bracing === 'metal') ? girderTypes16 : bricksBuildingBracing;
    showNextSelect('girderType', girderTypes, '', handleGirderTypeSelect);
}

/** Обработка выбора варианта обвязки пирса. */
function handlePierBracingSelect() {
    fillAside();
    var bracing = checked('pierBracing');
    if (!bracing) return;
    showNextSelect('girderType', girderTypes16, '', handleGirderTypeSelect);
}

/** Обработка выбора материала для обвязки по периметру. */
function handleGirderTypeSelect() {
    fillAside();
    if (!selected('girderType')) return;
    (
        selected('building') === 'pier' ||
        selected('material') === 'brick' ||
        selected('building') === 'barn' && checked('barnBracing') === 'band'
    ) ?
        show('calculator') :
        showNext('needPiping', handleNeedPipingChange);
}

/** Обработка выбора, нужна ли обвязка свай по периметру. */
function handleNeedPipingChange() {
    fillAside();
    hideAll(['pipeType', 'calculator']);
    var needPiping = checked('needPiping');
    if (needPiping === undefined) return;
    (needPiping === 'true') ?
        showNextSelect('pipeType', PIPETYPES, '', handlePipeTypeSelect) :
        show('calculator');
}

/** Обработка выбора материала для обвязки цоколя. */
function handlePipeTypeSelect() {
    fillAside();
    if (!selected('pipeType')) return;
    if (selected('pipeType')) show('calculator');
}

/** Обработка нажатия кнопки "Назад". */
function getBack() {
    fillAside();
    hideAll(bracingKeys);
    showNext('building', handleBuildingTypeSelect);
}

/** Обновляет информацию внутри правого блока. */
function fillAside() {
    var params = getPilesParams();
    fill('piles-number', params && params.pilesNumber || 0);
    fill('piles-type', params && params.pileType.name || '');
    fill('pitch', params && params.pitch || '');
    fill('piles-amount', params && getPilesAmount(params) || 0);
    fill('setting-up', params && getSetUpPrice(params) || 0);
    fill('transportation', getTransportation() || 0);
    fill('total', getTotal() || 0);
}

function handleOrderClick() {
    var contactForm = byDataId('order');
    contactForm.hidden = !contactForm.hidden;
}

function getPdf() {
    var element = document.querySelector('[data-id="5804305"]');
    html2pdf(element);
}
