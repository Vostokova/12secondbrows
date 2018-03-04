/**
 * Идентификаторы смысловых блоков на странице
 *
 * @prop dataId CSS-селектор data-id для выбора целого блока.
 * @prop id Идентификатор конкретного элемента формы для получения значения.
 */
var ID = {
    building: {dataId: 'b3a8ece', id: 'building-type'},
    material: {dataId: '4a029a3', id: 'building-material'},
    height: {dataId: 'b288cb3', id: 'building-height'},
    barnForm: {dataId: '9cc2a25', name: 'barn-form'},
    barnHeight: {dataId: '335033b', id: 'barn-height'},
    barnPitchHeading: {dataId: 'c3e199a'},
    pitchInputs: {dataId: '70a7437', name: 'pitch'},
    pitch: {id: 'custom-pitch'},
    defaultPitch: {id: 'default-pitch'},
    sizeHeading: {dataId: 'e58ac5e'},
    sizeInputs: {dataId: '56cc477', name: 'size'},
    length: {id: 'building-length'},
    width: {id: 'building-width'},
    setUp: {dataId: '1c16c82', name: 'set-up'},
    mrrHeading: {dataId: 'a29203d', id: 'mrr-distance'},
    mrr: {dataId: '3965a8e', id: 'mrr-distance', name:'mrr'},
    reset: {dataId: '290ba0e', id: 'reset'},
    resume: {dataId: 'cc044f5', id: 'resume'},
    calculator: {dataId: 'd219f7a', id: 'calculator'}
};

/** Materials - Виды материалов для всех типов строений */
var MT = {
    bar150: {name: 'Брус 150', value: 'bar150'},
    bar200: {name: 'Брус 200', value: 'bar200'},
    woodLog: {name: 'Бревно', value: 'woodLog'},
    sip: {name: 'Sip-панели', value: 'panel'},
    framePanel: {name: 'Каркасно-щитовой', value: 'panel'},
    cinder200: {name: 'Газосиликатный блок 200 мм.', value: 'cinder200'},
    cinder300: {name: 'Газосиликатный блок 300 мм.', value: 'cinder300'},
    brick: {name: 'Кирпич', value: 'brick'},
    steel: {name: 'ЛСТК', value: 'panel'}
};

/** Pile Types - Виды (диаметры) свай, с ценами за штуку и установку. */
var PT = {
    svs108: {name: 'СВС-108', price: 1650, setUpPrice: 1200},
    svs133: {name: 'СВС-133', price: 2300, setUpPrice: 1400},
    svs89: {name: 'СВС-89', price: 1450, setUpPrice: 1100},
    svs76: {name: 'СВС-76', price: 1250, setUpPrice: 950},
    svs108m4: {name: 'СВС-76', price: 2500, setUpPrice: 1500},
    svs108m4l2: {name: 'СВС-76', price: 3500, setUpPrice: 2500},
    svs108m5l2: {name: 'СВС-76', price: 4200, setUpPrice: 2900}
};

/** Цена за транспортировку (руб/км). */
var transportationTax = 40;
