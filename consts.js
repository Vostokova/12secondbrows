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
    current: {dataId: 'ca39e00', name: 'current'},
    depthHeading: {dataId: 'c529950'},
    depth: {dataId: 'a278673', id: 'depth', name: 'depth'},
    sizeHeading: {dataId: 'e58ac5e'},
    sizeInputs: {dataId: '56cc477', name: 'size'},
    length: {id: 'building-length'},
    width: {id: 'building-width'},
    setUp: {dataId: '1c16c82', name: 'set-up'},
    mrrHeading: {dataId: 'a29203d', id: 'mrr-distance'},
    mrr: {dataId: '3965a8e', id: 'mrr-distance', name: 'mrr'},
    pierBracing: {dataId: '98ca3c6', name: 'pier-bracing'},
    girderType: {dataId: '167bc80', id: 'girder-type'},
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

/** Girder Types - Материалы для обвязки свай по периметру, с ценами за штуку. */
var GT = {
    U16: {name: 'Швеллер П16', value: 1200},
    U18: {name: 'Швеллер П18', value: 1350},
    U20: {name: 'Швеллер П20', value: 1500},
    U22: {name: 'Швеллер П22', value: 1600},
    U24: {name: 'Швеллер П24', value: 1800},
    U26: {name: 'Швеллер П26', value: 2100},
    U28: {name: 'Швеллер П28', value: 2300},
    U30: {name: 'Швеллер П30', value: 2700},
    T14: {name: 'Двутавр 14', value: 1450},
    T16: {name: 'Двутавр 16', value: 1650},
    T18: {name: 'Двутавр 18', value: 1900},
    T20: {name: 'Двутавр 20', value: 2300},
    T22: {name: 'Двутавр 22', value: 2550}
};

var girderTypes14 = [GT.U16, GT.U18, GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T14, GT.T16, GT.T18, GT.T20, GT.T22];
var girderTypes16 = [GT.U16, GT.U18, GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T16, GT.T18, GT.T20, GT.T22];
var girderTypes20 = [GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T20, GT.T22];
var girderTypes30 = [GT.U30];

/** Цена за транспортировку (руб/км). */
var transportationTax = 40;
