/**
 * Константы для select-опций
 */

/** Типы построек. */
var BUILDINGS = [
    {name: 'Дом', value: 'house'},
    {name: 'Баня', value: 'bath'},
    {name: 'Веранда', value: 'porch'},
    {name: 'Беседка', value: 'arbor'},
    {name: 'Терраса', value: 'decking'},
    {name: 'Гараж', value: 'garage'},
    {name: 'Хозблок / Сарай', value: 'shed'},
    {name: 'Здание', value: 'building'},
    {name: 'Ангар', value: 'barn'},
    {name: 'Пирс / Причал', value: 'pier'},
    {name: 'Замена / Ремонт фундамента', value: 'groundWorks'}
];

/** Материалы для большинства видов построек. */
var ALLMATERIALS = [MT.bar150, MT.bar200, MT.woodLog, MT.sip, MT.framePanel, MT.cinder200, MT.cinder300, MT.brick, MT.steel];

/** Материалы для постройки типа "Беседка". */
var ARBORMATERIALS = [MT.bar150, MT.bar200, MT.woodLog, MT.sip, MT.framePanel, MT.cinder200, MT.steel];

/** Этажность для постройки типа "Дом". */
var FLOORS = [
    {name: '1 - 1,5 этажа', value: 'under2'},
    {name: '2 - 3 этажа', value: 'under3'}
];

/** Этажность для постройки типа "Здание". */
var BUILDINGFLOORS = [
    {name: '1 - 1,5 этажа', value: 'under2'},
    {name: '2 - 3 этажа', value: 'under3'},
    {name: 'более 3 этажей', value: 'over3'}
];

/** Варианты высоты для ангара. */
var BARNHEIGHT = [
    {name: 'до 6 м.', value: 'under6'},
    {name: 'до 8 м.', value: 'under8'},
    {name: 'до 10 м.', value: 'under10'},
    {name: 'более 10 м.', value: 'over10'}
];

var girderTypes14 = [GT.U16, GT.U18, GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T14, GT.T16, GT.T18, GT.T20, GT.T22];
var girderTypes16 = [GT.U16, GT.U18, GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T16, GT.T18, GT.T20, GT.T22];
var girderTypes20 = [GT.U20, GT.U22, GT.U24, GT.U26, GT.U28, GT.U30, GT.T20, GT.T22];
var girderTypes30 = [GT.U30];

/** Материалы для обвязки цоколя профтрубой, с ценами за штуку. */
var PIPETYPES = [
    {name: 'Профтруба 20х30х2', value: '1200'},
    {name: 'Профтруба 20х30х3', value: '1350'},
    {name: 'Профтруба 30х60х2', value: '1500'},
    {name: 'Профтруба 30х60х3', value: '1600'}
];
