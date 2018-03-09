/** Инициализация формы калькулятора. Как он выглядит в самом начале. */
function setInitial() {
    var blocks = Object.keys(ID);
    hideAll(blocks);
    clearAll(blocks);
    document.querySelector('[data-id="6a2ccbf"]').classList.remove('wait-js');
    show('building');
    setOptions('building', BUILDINGS, 'Тип строения');
}

/**
 * Заполнение select-списка опциями.
 *
 * @param key Ключ спискового элемента в объекте ID.
 * @param array Массив с опциями для заполнения.
 * @param [placeholder] Строка для отображения первым элементом списка (неактивным).
 */
function setOptions(key, array, placeholder) {
    var select = byId(key);
    while (select && select.options.length > 0) {
        select.options[0] = null;
    }

    var defaultOption = new Option (placeholder || '', '', true, true);
    defaultOption.disabled = true;
    defaultOption.hidden = true;
    select.appendChild (defaultOption);

    array.map(function(item) {
        var option = new Option (item.name, item.value);
        select.appendChild(option);
    })
}

/**
 * Получение HTML-элемента по идентификатору.
 * @param key Ключ блока, который хотим найти, в объекте ID.
 */
function byId(key) {
    var id = ID[key].id;
    return id && document.getElementById(id);
}

/**
 * Получение HTML-элемента (смыслового блока) по идентификатору data-id.
 * @param key Ключ блока, который хотим найти, в объекте ID.
 */
function byDataId(key) {
    var dataId = ID[key].dataId;
    return dataId && document.querySelector('[data-id=' + '"' + dataId + '"]');
}

/**
 * Получение значения выбранной select-опции.
 * @param key Ключ искомого select-элемента в объекте ID.
 */
function selected(key) {
    var dropdown = byId(key);
    var option = dropdown && dropdown.selectedIndex;
    return (option >= 0) && dropdown.options[option].value;
}

/**
 * Получение выбранного значения переключателя.
 * @param key Ключ искомого radio-элемента в объекте ID.
 */
function checked(key) {
    var name = ID[key].name;
    var options = name && document.getElementsByName(name);
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) return options[i].value;
    }
}

/** Получение float-значения введенного числа по идентификатору инпута. */
function getNumberValue(key) {
    return parseFloat(byId(key).value.replace(/,/g, '.'));
}

/**
 * Функция, скрывающая смысловой блок разметки.
 * @param key Ключ блока, который хотим скрыть, в объекте ID.
 */
function hide(key) {
    var block = byDataId(key);
    if (block) block.hidden = true;
}

/**
 * Функция, скрывающая все блоки разметки, указанные в массиве.
 * @param blocks Массив, состоящий из ключей блоков, которые хотим скрыть.
 */
function hideAll(blocks) {
    blocks.map(function (key) {
        hide(key);
    });
}

/**
 * Функция, показывающая смысловой блок разметки.
 * @param key Ключ блока, который хотим показать, в объекте ID.
 */
function show(key) {
    ID[key].heading && show(ID[key].heading);
    var block = byDataId(key);
    if (block) block.hidden = false;
    (ID[key].id) && enable(key);
}

/**
 * Блокирует доступ и изменение поля формы.
 * @param key Ключ искомого поля в объекте ID.
 */
function disable(key) {
    var field = byId(key);
    if (field) field.disabled = true;
}

/**
 * Снимает блокировку поля формы.
 * @param key Ключ искомого поля в объекте ID.
 */
function enable(key) {
    var field = byId(key);
    if (field) field.disabled = false;
}

/**
 * Очищает элемент ввода/выбора до неопределённого значения.
 * @param key Ключ искомого поля в объекте ID.
 */
function clear(key) {
    var inputs = document.getElementsByName(ID[key].name);
    if (selected(key)) {
        byId(key).selectedIndex = -1;
        return
    }
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (input.checked) input.checked = false;
        if (input.type === 'number') input.value = '';
    }
}

/**
 * Очищает все элементы в переданном массиве.
 * @param elements Массив ключей элементов в объекте ID.
 */
function clearAll(elements) {
    elements.map(function (key) {
        if (ID[key].id || ID[key].name) clear(key);
    });
    fillAside();
}

/**
 * Проверяет, соответствует ли выбранное значение новому набору опций.
 * @param value Выбранное значение.
 * @param options Новый набор опций.
 */
function checkSelectedValue(value, options) {
    for (var i = 0; i < options.length; i++) {
        if (options[i].value === value) return true;
    }
}

/**
 * Показывает следующий селект элемент с выбранным ранее значением и переходит к следующему шагу.
 * Если значения нет в списке, выбор обнуляется и перехода не происходит.
 *
 * @param key Ключ элемента в объекте ID.
 * @param options Новый массив опций.
 * @param placeholder Подсказка для отображения первым элементом селекта.
 * @param callback Функция перехода к следующему шагу.
 */
function showNextSelect(key, options, placeholder, callback) {
    var remainSelected = checkSelectedValue(selected(key), options);
    show(key);
    remainSelected && callback();
    !remainSelected && setOptions(key, options, placeholder);
}

/**
 * Показывает следующий блок и обрабатывает его значение.
 * @param key Ключ блока в объекте ID.
 * @param callback Функция, обрабатывающая значение показанного блока.
 */
function showNext(key, callback) {
    show(key);
    callback();
}

/** Возвращает набор материалов для обвязки в зависимости от материала строения. */
function getGirderTypes() {
    var material = selected('material');
    switch (material) {
        case 'brick':
            return bricksBuildingBracing;
        case 'panel':
            return girderTypes14;
        case 'cinder300':
            return girderTypes30;
        case 'bar150':
            return girderTypes16;
        default:
            return girderTypes20;
    }
}

/** Заполняет указанный текстовый блок значением, полученным из функции. */
function fill(id, value) {
    document.getElementById(id).innerHTML = value;
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
