/**
 * Карта типов свай и максимального шага между ними в зависимости от типа строения и соответствующих характеристик.
 * @prop pitch Максимальное расстояние между сваями.
 * @prop pileType Тип свай.
 */
var buildingParamsMap = {
    house: {
        under2: {
            bar150: {pitch: 3, pileType: PT.svs108},
            bar200: {pitch: 3, pileType: PT.svs108},
            woodLog: {pitch: 3, pileType: PT.svs108},
            panel: {pitch: 3, pileType: PT.svs108},
            cinder200: {pitch: 2, pileType: PT.svs108},
            cinder300: {pitch: 2, pileType: PT.svs108},
            brick: {pitch: 2, pileType: PT.svs108}
        },
        under3: {
            bar150: {pitch: 3, pileType: PT.svs108},
            bar200: {pitch: 2.5, pileType: PT.svs108},
            woodLog: {pitch: 2, pileType: PT.svs108},
            panel: {pitch: 2.5, pileType: PT.svs108},
            cinder200: {pitch: 2, pileType: PT.svs108},
            cinder300: {pitch: 2, pileType: PT.svs133},
            brick: {pitch: 2, pileType: PT.svs133}
        }
    },
    bath: {
        bar150: {pitch: 3, pileType: PT.svs108},
        bar200: {pitch: 3, pileType: PT.svs108},
        woodLog: {pitch: 3, pileType: PT.svs108},
        panel: {pitch: 3, pileType: PT.svs108},
        cinder200: {pitch: 2, pileType: PT.svs108},
        cinder300: {pitch: 2, pileType: PT.svs108},
        brick: {pitch: 2, pileType: PT.svs108}
    },
    porch: {
        bar150: {pitch: 3, pileType: PT.svs89},
        bar200: {pitch: 3, pileType: PT.svs89},
        woodLog: {pitch: 3, pileType: PT.svs89},
        panel: {pitch: 3, pileType: PT.svs89},
        cinder200: {pitch: 2, pileType: PT.svs89},
        cinder300: {pitch: 2, pileType: PT.svs108},
        brick: {pitch: 2, pileType: PT.svs108}
    },
    arbor: {
        bar150: {pitch: 3, pileType: PT.svs89},
        bar200: {pitch: 3, pileType: PT.svs89},
        woodLog: {pitch: 3, pileType: PT.svs89},
        panel: {pitch: 3, pileType: PT.svs76},
        cinder200: {pitch: 2, pileType: PT.svs108}
    },
    decking: {
        bar150: {pitch: 3, pileType: PT.svs89},
        bar200: {pitch: 3, pileType: PT.svs89},
        woodLog: {pitch: 3, pileType: PT.svs89},
        panel: {pitch: 3, pileType: PT.svs89},
        cinder200: {pitch: 2, pileType: PT.svs89},
        cinder300: {pitch: 2, pileType: PT.svs108},
        brick: {pitch: 2, pileType: PT.svs108}
    },
    garage: {
        bar150: {pitch: 3, pileType: PT.svs108},
        bar200: {pitch: 3, pileType: PT.svs108},
        woodLog: {pitch: 3, pileType: PT.svs108},
        panel: {pitch: 3, pileType: PT.svs108},
        cinder200: {pitch: 2, pileType: PT.svs108},
        cinder300: {pitch: 2, pileType: PT.svs108},
        brick: {pitch: 2, pileType: PT.svs108}
    },
    shed: {
        bar150: {pitch: 3, pileType: PT.svs76},
        bar200: {pitch: 3, pileType: PT.svs108},
        woodLog: {pitch: 3, pileType: PT.svs108},
        panel: {pitch: 3, pileType: PT.svs89},
        cinder200: {pitch: 2, pileType: PT.svs108},
        cinder300: {pitch: 2, pileType: PT.svs108},
        brick: {pitch: 2, pileType: PT.svs108}
    },
    building: {
        // шаг и тип свай как у дома для 1 и 2 уровня. Выше 3 этажей иначе
        under2: {
            bar150: {pitch: 3, pileType: PT.svs108},
            bar200: {pitch: 3, pileType: PT.svs108},
            woodLog: {pitch: 3, pileType: PT.svs108},
            panel: {pitch: 3, pileType: PT.svs108},
            cinder200: {pitch: 2, pileType: PT.svs108},
            cinder300: {pitch: 2, pileType: PT.svs108},
            brick: {pitch: 2, pileType: PT.svs108}
        },
        under3: {
            bar150: {pitch: 3, pileType: PT.svs108},
            bar200: {pitch: 2.5, pileType: PT.svs108},
            woodLog: {pitch: 2, pileType: PT.svs108},
            panel: {pitch: 2.5, pileType: PT.svs108},
            cinder200: {pitch: 2, pileType: PT.svs108},
            cinder300: {pitch: 2, pileType: PT.svs133},
            brick: {pitch: 2, pileType: PT.svs133}
        },
        over3: {
            bar150: {pitch: 2, pileType: PT.svs108},
            bar200: {pitch: 2, pileType: PT.svs108},
            woodLog: {pitch: 1.5, pileType: PT.svs108},
            panel: {pitch: 2, pileType: PT.svs108},
            cinder200: {pitch: 1, pileType: PT.svs108},
            cinder300: {pitch: 1, pileType: PT.svs133},
            brick: {pitch: 1.5, pileType: PT.svs133}
        }
    },
    barn: {
        arch: {under6: PT.svs108m4, under8: PT.svs108m4l2, under10: PT.svs108m5l2, over10: PT.svs108m5l2},
        flat: {under6: PT.svs108m4l2, under8: PT.svs108m4l2, under10: PT.svs108m5l2, over10: PT.svs108m5l2}
        // в функции подставлять дефолтный шаг 3,
        // обвязка: металлом/бетонной лентой metal: girderTypes16, band: bricksBuildingBracing
    },
    pier: {
        still: {pitch: 3, pileType: PT.svs76},
        low: {pitch: 2, pileType: PT.svs89},
        swift: {pitch: 1.5, pileType: PT.svs108}
    },
    groundWorks: {}
};
