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

/** Варианты строения для постройки типа "Ангар". */
var BARNOPTIONS = [
    {name: 'Арочный', value: archBarnParams},
    {name: 'Односкатный', value: leanBarnParams}
];

/** Materials - Виды материалов для всех типов строений */
var MT = {
    bar150: {name: 'Брус 150', value: 'bar150'},
    bar200: {name: 'Брус 200', value: 'bar200'},
    woodLog: {name: 'Бревно', value: 'woodLog'},
    sip: {name: 'Sip-панели', value: 'sip'},
    framePanel: {name: 'Каркасно-щитовой', value: 'framePanel'},
    cinder200: {name: 'Газосиликатный блок 200 мм.', value: 'cinder200'},
    cinder300: {name: 'Газосиликатный блок 300 мм.', value: 'cinder300'},
    brick: {name: 'Кирпич', value: 'brick'},
    steel: {name: 'ЛСТК', value: 'steel'}
};