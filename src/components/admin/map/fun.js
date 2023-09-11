const fs = require("fs");

let data = {
  "00365bab-de23-4f8f-973e-31c0bb51d80b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 1в",
      "id": "00365bab-de23-4f8f-973e-31c0bb51d80b",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00365bab-de23-4f8f-973e-31c0bb51d80b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1098497385,
      "longitude": 26.1055125943
    }
  },
  "00593961-5491-4dda-bac9-72709050a948": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "00593961-5491-4dda-bac9-72709050a948",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00593961-5491-4dda-bac9-72709050a948",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1339438017,
      "longitude": 23.9467132499
    }
  },
  "0074e582-2b07-444d-afbe-6a44f753c9c2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 5",
      "id": "0074e582-2b07-444d-afbe-6a44f753c9c2",
      "kilometrage": 529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0074e582-2b07-444d-afbe-6a44f753c9c2",
    "image": "perev_right",
    "point": {
      "latitude": 52.116822822,
      "longitude": 26.133981713
    }
  },
  "00a23b81-d86e-4e19-9277-c44eac81e783": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "00a23b81-d86e-4e19-9277-c44eac81e783",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00a23b81-d86e-4e19-9277-c44eac81e783",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1239533973,
      "longitude": 23.9373248245
    }
  },
  "00e8e03b-6346-4a0f-a4a4-13287bdb7411": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "00e8e03b-6346-4a0f-a4a4-13287bdb7411",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00e8e03b-6346-4a0f-a4a4-13287bdb7411",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1652801975,
      "longitude": 24.0023457458
    }
  },
  "017e7fde-4e9d-4c12-852b-9ccd9076c611": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 136",
      "id": "017e7fde-4e9d-4c12-852b-9ccd9076c611",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "017e7fde-4e9d-4c12-852b-9ccd9076c611",
    "image": "perev_right",
    "point": {
      "latitude": 52.2166246054,
      "longitude": 24.3552573614
    }
  },
  "01fc5df3-63a4-414b-bfd1-acec2886283e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "01fc5df3-63a4-414b-bfd1-acec2886283e",
      "kilometrage": 436,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01fc5df3-63a4-414b-bfd1-acec2886283e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1453709656,
      "longitude": 27.1573848574
    }
  },
  "02005667-f4b5-479b-924c-0a432413da76": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "02005667-f4b5-479b-924c-0a432413da76",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02005667-f4b5-479b-924c-0a432413da76",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2078967285,
      "longitude": 24.4194573949
    }
  },
  "021f6874-f98b-4981-a8e6-91e4cbad2b17": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй  ",
      "id": "021f6874-f98b-4981-a8e6-91e4cbad2b17",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "021f6874-f98b-4981-a8e6-91e4cbad2b17",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1099765,
      "longitude": 26.424618583
    }
  },
  "02345709-168e-41a0-8a42-121d2254b56a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 201",
      "id": "02345709-168e-41a0-8a42-121d2254b56a",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02345709-168e-41a0-8a42-121d2254b56a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1330787913,
      "longitude": 23.9470558337
    }
  },
  "02598c37-9bb3-4070-9966-a3ead6fb8d4e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 83",
      "id": "02598c37-9bb3-4070-9966-a3ead6fb8d4e",
      "kilometrage": 60,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02598c37-9bb3-4070-9966-a3ead6fb8d4e",
    "image": "perev_left",
    "point": {
      "latitude": 52.0214776554,
      "longitude": 25.3504814922
    }
  },
  "0291fd42-1e1a-4e8c-ae03-de8287a794fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0291fd42-1e1a-4e8c-ae03-de8287a794fd",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0291fd42-1e1a-4e8c-ae03-de8287a794fd",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0269248938,
      "longitude": 25.5871871619
    }
  },
  "02f82e23-653e-43d1-9e9c-bee4f1757cd0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "02f82e23-653e-43d1-9e9c-bee4f1757cd0",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02f82e23-653e-43d1-9e9c-bee4f1757cd0",
    "image": "speed_limit",
    "point": {
      "latitude": 52.2163141131,
      "longitude": 24.3500194873
    }
  },
  "032a3f69-3562-4a55-9763-879f40d52fe0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 70",
      "id": "032a3f69-3562-4a55-9763-879f40d52fe0",
      "kilometrage": 498,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "032a3f69-3562-4a55-9763-879f40d52fe0",
    "image": "perev_right",
    "point": {
      "latitude": 52.1128567541,
      "longitude": 26.5293627978
    }
  },
  "0339f831-1650-4ba1-8e3e-7a5ad8feaef9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0339f831-1650-4ba1-8e3e-7a5ad8feaef9",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0339f831-1650-4ba1-8e3e-7a5ad8feaef9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0820885367,
      "longitude": 23.6852710198
    }
  },
  "0360c749-52c7-4e99-9079-ca2ae33d8529": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0360c749-52c7-4e99-9079-ca2ae33d8529",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0360c749-52c7-4e99-9079-ca2ae33d8529",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1706796414,
      "longitude": 24.6368303071
    }
  },
  "037a98ce-4f0c-4177-a155-877a9f72643f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "037a98ce-4f0c-4177-a155-877a9f72643f",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "037a98ce-4f0c-4177-a155-877a9f72643f",
    "image": "stop",
    "point": {
      "latitude": 52.0231884133,
      "longitude": 25.4693524367
    }
  },
  "038ebb3f-3f44-4727-874a-072d2cae7191": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 232",
      "id": "038ebb3f-3f44-4727-874a-072d2cae7191",
      "kilometrage": 429,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "038ebb3f-3f44-4727-874a-072d2cae7191",
    "image": "perev_left",
    "point": {
      "latitude": 52.1658577554,
      "longitude": 27.2171834726
    }
  },
  "03bae47b-eb5a-4921-916d-65a726e9b7ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 196",
      "id": "03bae47b-eb5a-4921-916d-65a726e9b7ff",
      "kilometrage": 443,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03bae47b-eb5a-4921-916d-65a726e9b7ff",
    "image": "perev_left",
    "point": {
      "latitude": 52.1423341205,
      "longitude": 27.0975418357
    }
  },
  "04619496-5444-45e6-80ed-797b2de580ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 231",
      "id": "04619496-5444-45e6-80ed-797b2de580ec",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "04619496-5444-45e6-80ed-797b2de580ec",
    "image": "perev_left",
    "point": {
      "latitude": 52.0894742118,
      "longitude": 23.7944696159
    }
  },
  "04ccc6cf-f836-48af-bc93-c8d8b8241432": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "04ccc6cf-f836-48af-bc93-c8d8b8241432",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "04ccc6cf-f836-48af-bc93-c8d8b8241432",
    "image": "name_of",
    "point": {
      "latitude": 52.2145270537,
      "longitude": 24.3608836298
    }
  },
  "04f0304a-061b-4829-9cc3-79097504a0b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 39",
      "id": "04f0304a-061b-4829-9cc3-79097504a0b2",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "04f0304a-061b-4829-9cc3-79097504a0b2",
    "image": "perev_left",
    "point": {
      "latitude": 52.0888380883,
      "longitude": 27.2388976595
    }
  },
  "05773af1-5332-49e2-bfe9-7186681718be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 91",
      "id": "05773af1-5332-49e2-bfe9-7186681718be",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "05773af1-5332-49e2-bfe9-7186681718be",
    "image": "perev_left",
    "point": {
      "latitude": 52.1257755278,
      "longitude": 26.6209629392
    }
  },
  "062aeb9e-bdec-4b87-b487-ccb1d7d9afca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 11",
      "id": "062aeb9e-bdec-4b87-b487-ccb1d7d9afca",
      "kilometrage": 535,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "062aeb9e-bdec-4b87-b487-ccb1d7d9afca",
    "image": "perev_left",
    "point": {
      "latitude": 52.076106609,
      "longitude": 26.1484116101
    }
  },
  "0634f1bb-2bd6-4b3b-9350-d823d23c65c6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 100",
      "id": "0634f1bb-2bd6-4b3b-9350-d823d23c65c6",
      "kilometrage": 485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0634f1bb-2bd6-4b3b-9350-d823d23c65c6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1199436369,
      "longitude": 26.6834145741
    }
  },
  "066ca82b-931d-405f-9d87-26d6d094b18e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний  515",
      "id": "066ca82b-931d-405f-9d87-26d6d094b18e",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "066ca82b-931d-405f-9d87-26d6d094b18e",
    "image": "kilometrage",
    "point": {
      "latitude": 52.111436487,
      "longitude": 26.3207339384
    }
  },
  "06e488ab-9dfe-4c1e-995d-63e8ef4a8662": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 178",
      "id": "06e488ab-9dfe-4c1e-995d-63e8ef4a8662",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06e488ab-9dfe-4c1e-995d-63e8ef4a8662",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1982112574,
      "longitude": 24.0641600223
    }
  },
  "0705db53-d1df-4f5e-a731-5c8a641fe3cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 186",
      "id": "0705db53-d1df-4f5e-a731-5c8a641fe3cb",
      "kilometrage": 446,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0705db53-d1df-4f5e-a731-5c8a641fe3cb",
    "image": "perev_left",
    "point": {
      "latitude": 52.1475137039,
      "longitude": 27.073504326
    }
  },
  "070956da-3b67-4140-8e4a-5e100b6fc49b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 214",
      "id": "070956da-3b67-4140-8e4a-5e100b6fc49b",
      "kilometrage": 176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "070956da-3b67-4140-8e4a-5e100b6fc49b",
    "image": "perev_right",
    "point": {
      "latitude": 52.0949277465,
      "longitude": 23.9011197578
    }
  },
  "0788bdac-eb59-4ec0-9471-a6ba2df0684b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "0788bdac-eb59-4ec0-9471-a6ba2df0684b",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0788bdac-eb59-4ec0-9471-a6ba2df0684b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0892351485,
      "longitude": 23.7679413612
    }
  },
  "07f56844-24c6-4945-bfec-aec1a0424139": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "07f56844-24c6-4945-bfec-aec1a0424139",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "07f56844-24c6-4945-bfec-aec1a0424139",
    "image": "main_way",
    "point": {
      "latitude": 52.1094121583,
      "longitude": 26.1058329993
    }
  },
  "0808bab9-bd40-4636-b195-6a4ebd31d7a6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 138",
      "id": "0808bab9-bd40-4636-b195-6a4ebd31d7a6",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0808bab9-bd40-4636-b195-6a4ebd31d7a6",
    "image": "perev_right",
    "point": {
      "latitude": 52.2154478042,
      "longitude": 24.3383650697
    }
  },
  "080fbcde-0cff-404f-aacf-7599e01b2aff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "080fbcde-0cff-404f-aacf-7599e01b2aff",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "080fbcde-0cff-404f-aacf-7599e01b2aff",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.054542395,
      "longitude": 25.1118206215
    }
  },
  "0812e992-0ce2-4f5e-8277-020311234b96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "0812e992-0ce2-4f5e-8277-020311234b96",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0812e992-0ce2-4f5e-8277-020311234b96",
    "image": "bridge_low",
    "point": {
      "latitude": 52.1830320956,
      "longitude": 24.0346177779
    }
  },
  "08236a77-984b-4ae5-8fe3-a314711f69ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 123д",
      "id": "08236a77-984b-4ae5-8fe3-a314711f69ea",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08236a77-984b-4ae5-8fe3-a314711f69ea",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1454973456,
      "longitude": 26.8183726965
    }
  },
  "083d293d-222c-4658-a0c5-6b1ef3b161fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 185",
      "id": "083d293d-222c-4658-a0c5-6b1ef3b161fd",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "083d293d-222c-4658-a0c5-6b1ef3b161fd",
    "image": "perev_right",
    "point": {
      "latitude": 52.1849259738,
      "longitude": 24.0246183163
    }
  },
  "08598cd1-19e8-4edb-9cf4-37b9770df82b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 8",
      "id": "08598cd1-19e8-4edb-9cf4-37b9770df82b",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08598cd1-19e8-4edb-9cf4-37b9770df82b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1333786132,
      "longitude": 27.2741188297
    }
  },
  "085cc099-91c4-4961-97d1-3996ef25e366": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "085cc099-91c4-4961-97d1-3996ef25e366",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "085cc099-91c4-4961-97d1-3996ef25e366",
    "image": "attention",
    "point": {
      "latitude": 52.0414224108,
      "longitude": 25.6252347607
    }
  },
  "08ec570f-6200-485a-ad76-5affd09d3798": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 97",
      "id": "08ec570f-6200-485a-ad76-5affd09d3798",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "08ec570f-6200-485a-ad76-5affd09d3798",
    "image": "perev_left",
    "point": {
      "latitude": 52.0552229298,
      "longitude": 25.1225616889
    }
  },
  "09450935-ff35-43a0-a1fc-d711cc2f5b0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "09450935-ff35-43a0-a1fc-d711cc2f5b0a",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "09450935-ff35-43a0-a1fc-d711cc2f5b0a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1108607489,
      "longitude": 26.286393666
    }
  },
  "0982824b-df65-4239-a488-eef16179021f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 67",
      "id": "0982824b-df65-4239-a488-eef16179021f",
      "kilometrage": 39,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0982824b-df65-4239-a488-eef16179021f",
    "image": "perev_left",
    "point": {
      "latitude": 52.0449431951,
      "longitude": 25.6291127875
    }
  },
  "0a5eccb7-30cb-49a7-97ff-4416e92cf02a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 6",
      "id": "0a5eccb7-30cb-49a7-97ff-4416e92cf02a",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a5eccb7-30cb-49a7-97ff-4416e92cf02a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1356447947,
      "longitude": 27.2770979509
    }
  },
  "0a65601e-e213-4585-b46b-491556d5fdcb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 5",
      "id": "0a65601e-e213-4585-b46b-491556d5fdcb",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a65601e-e213-4585-b46b-491556d5fdcb",
    "image": "kilometrage",
    "point": {
      "latitude": 52.117369585,
      "longitude": 27.2707144423
    }
  },
  "0a6783ad-340e-4ce2-bcba-05e2d374a299": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "0a6783ad-340e-4ce2-bcba-05e2d374a299",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a6783ad-340e-4ce2-bcba-05e2d374a299",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1212944631,
      "longitude": 26.4368314848
    }
  },
  "0b3c9afc-1dba-4843-b712-f55f08e6b4fa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 149",
      "id": "0b3c9afc-1dba-4843-b712-f55f08e6b4fa",
      "kilometrage": 141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b3c9afc-1dba-4843-b712-f55f08e6b4fa",
    "image": "buyo_right",
    "point": {
      "latitude": 52.204462294,
      "longitude": 24.2715382087
    }
  },
  "0b8356a9-9e2b-441b-afc4-878952c7ad40": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0b8356a9-9e2b-441b-afc4-878952c7ad40",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b8356a9-9e2b-441b-afc4-878952c7ad40",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0550297505,
      "longitude": 25.1246540495
    }
  },
  "0bad996f-a268-4274-900c-071c4be1c511": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0bad996f-a268-4274-900c-071c4be1c511",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bad996f-a268-4274-900c-071c4be1c511",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1386797352,
      "longitude": 23.9476502363
    }
  },
  "0be2f919-d836-4c0b-b2d8-3f3a6512e256": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 94",
      "id": "0be2f919-d836-4c0b-b2d8-3f3a6512e256",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0be2f919-d836-4c0b-b2d8-3f3a6512e256",
    "image": "perev_right",
    "point": {
      "latitude": 52.039760861,
      "longitude": 25.1452011497
    }
  },
  "0c125803-b64d-4ac4-8e51-37c6635df26d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "0c125803-b64d-4ac4-8e51-37c6635df26d",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c125803-b64d-4ac4-8e51-37c6635df26d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0367113636,
      "longitude": 25.1682329024
    }
  },
  "0c18aa52-5755-4b74-8751-21d3730e4da3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 233",
      "id": "0c18aa52-5755-4b74-8751-21d3730e4da3",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c18aa52-5755-4b74-8751-21d3730e4da3",
    "image": "perev_left",
    "point": {
      "latitude": 52.0906059435,
      "longitude": 23.781587718
    }
  },
  "0c3fffc4-86f7-4e40-ae5a-19a6cdab1650": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 250",
      "id": "0c3fffc4-86f7-4e40-ae5a-19a6cdab1650",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c3fffc4-86f7-4e40-ae5a-19a6cdab1650",
    "image": "buyo_right",
    "point": {
      "latitude": 52.080749639,
      "longitude": 23.70365675
    }
  },
  "0c443062-38d2-44c4-8e87-33c384f331af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 77",
      "id": "0c443062-38d2-44c4-8e87-33c384f331af",
      "kilometrage": 49,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c443062-38d2-44c4-8e87-33c384f331af",
    "image": "perev_left",
    "point": {
      "latitude": 52.033553126,
      "longitude": 25.5099777525
    }
  },
  "0c626d4c-dfb4-4ab2-9283-52761a12f5fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "0c626d4c-dfb4-4ab2-9283-52761a12f5fc",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c626d4c-dfb4-4ab2-9283-52761a12f5fc",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1465478741,
      "longitude": 26.8189113296
    }
  },
  "0c7f656e-1706-4287-907d-81d2006af463": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 13",
      "id": "0c7f656e-1706-4287-907d-81d2006af463",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c7f656e-1706-4287-907d-81d2006af463",
    "image": "perev_right",
    "point": {
      "latitude": 52.1280122314,
      "longitude": 27.2746781487
    }
  },
  "0cc05245-c9e6-4c51-a47d-d41c43bfa25c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "0cc05245-c9e6-4c51-a47d-d41c43bfa25c",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0cc05245-c9e6-4c51-a47d-d41c43bfa25c",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0540077829,
      "longitude": 25.110029824
    }
  },
  "0cc6d5bd-8e09-423f-ba20-34a2f731193d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 187",
      "id": "0cc6d5bd-8e09-423f-ba20-34a2f731193d",
      "kilometrage": 446,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0cc6d5bd-8e09-423f-ba20-34a2f731193d",
    "image": "perev_right",
    "point": {
      "latitude": 52.1442572708,
      "longitude": 27.0730128997
    }
  },
  "0cebc42c-1bfe-4684-8024-9ca2d86a2ae7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "0cebc42c-1bfe-4684-8024-9ca2d86a2ae7",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0cebc42c-1bfe-4684-8024-9ca2d86a2ae7",
    "image": "name_of",
    "point": {
      "latitude": 52.1930621312,
      "longitude": 24.1138408671
    }
  },
  "0d3e5639-183c-425f-9bc8-b52fd0af5c4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "0d3e5639-183c-425f-9bc8-b52fd0af5c4b",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d3e5639-183c-425f-9bc8-b52fd0af5c4b",
    "image": "attention",
    "point": {
      "latitude": 52.1464817838,
      "longitude": 26.8203763142
    }
  },
  "0d857b1b-92dd-4576-b945-6bc4c45b5570": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0d857b1b-92dd-4576-b945-6bc4c45b5570",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d857b1b-92dd-4576-b945-6bc4c45b5570",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1499271878,
      "longitude": 24.7121297055
    }
  },
  "0d958c08-b800-465d-882a-a01560fc60de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0d958c08-b800-465d-882a-a01560fc60de",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d958c08-b800-465d-882a-a01560fc60de",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0827488588,
      "longitude": 23.6879512736
    }
  },
  "0d9b3e8b-170b-4ef3-a5c4-032ef595eb87": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 241",
      "id": "0d9b3e8b-170b-4ef3-a5c4-032ef595eb87",
      "kilometrage": 425,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d9b3e8b-170b-4ef3-a5c4-032ef595eb87",
    "image": "perev_left",
    "point": {
      "latitude": 52.1537296832,
      "longitude": 27.251929652
    }
  },
  "0e41e5eb-60f5-427e-9159-1df6e0a8addc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0e41e5eb-60f5-427e-9159-1df6e0a8addc",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0e41e5eb-60f5-427e-9159-1df6e0a8addc",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1718926674,
      "longitude": 24.6300127294
    }
  },
  "0ead4a05-5c2d-4ce1-8b48-85804c814b25": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0ead4a05-5c2d-4ce1-8b48-85804c814b25",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ead4a05-5c2d-4ce1-8b48-85804c814b25",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0877131608,
      "longitude": 23.7353157271
    }
  },
  "0ef6206e-ac69-45bb-b3e7-f815b08dc036": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 201",
      "id": "0ef6206e-ac69-45bb-b3e7-f815b08dc036",
      "kilometrage": 441,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ef6206e-ac69-45bb-b3e7-f815b08dc036",
    "image": "perev_right",
    "point": {
      "latitude": 52.1498383149,
      "longitude": 27.1133702959
    }
  },
  "0f1f20ed-52d5-4883-bfa1-0d280733c264": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 141",
      "id": "0f1f20ed-52d5-4883-bfa1-0d280733c264",
      "kilometrage": 464,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f1f20ed-52d5-4883-bfa1-0d280733c264",
    "image": "perev_left",
    "point": {
      "latitude": 52.134634417,
      "longitude": 26.8998670046
    }
  },
  "0f6c4ce9-0dfe-4e66-9fa7-18cf3205e8d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 60",
      "id": "0f6c4ce9-0dfe-4e66-9fa7-18cf3205e8d9",
      "kilometrage": 36,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f6c4ce9-0dfe-4e66-9fa7-18cf3205e8d9",
    "image": "perev_right",
    "point": {
      "latitude": 52.0624901177,
      "longitude": 25.6624492142
    }
  },
  "0f8f6571-86a4-4010-aae1-1e566bd1c55c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 268",
      "id": "0f8f6571-86a4-4010-aae1-1e566bd1c55c",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f8f6571-86a4-4010-aae1-1e566bd1c55c",
    "image": "perev_left",
    "point": {
      "latitude": 52.1610729185,
      "longitude": 27.3454540102
    }
  },
  "0fbd9683-47a9-4f4f-885c-ca865e92bd9f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 69",
      "id": "0fbd9683-47a9-4f4f-885c-ca865e92bd9f",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0fbd9683-47a9-4f4f-885c-ca865e92bd9f",
    "image": "perev_left",
    "point": {
      "latitude": 52.0379080936,
      "longitude": 25.6195116371
    }
  },
  "10015118-a227-4ca4-a7f0-889da5a3268d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 109",
      "id": "10015118-a227-4ca4-a7f0-889da5a3268d",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10015118-a227-4ca4-a7f0-889da5a3268d",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0960670121,
      "longitude": 24.9060762416
    }
  },
  "10b5a1c7-98e3-4aeb-b3dd-5b31035bb151": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "10b5a1c7-98e3-4aeb-b3dd-5b31035bb151",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10b5a1c7-98e3-4aeb-b3dd-5b31035bb151",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0889003662,
      "longitude": 23.7682101998
    }
  },
  "10b8bc55-a0ec-4048-a3ce-fcada7a2ee02": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "10b8bc55-a0ec-4048-a3ce-fcada7a2ee02",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10b8bc55-a0ec-4048-a3ce-fcada7a2ee02",
    "image": "attention",
    "point": {
      "latitude": 52.0791790726,
      "longitude": 25.7878035096
    }
  },
  "10d6e792-97a8-4d89-a0f2-fab8a2182715": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 170",
      "id": "10d6e792-97a8-4d89-a0f2-fab8a2182715",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10d6e792-97a8-4d89-a0f2-fab8a2182715",
    "image": "perev_right",
    "point": {
      "latitude": 52.1934050151,
      "longitude": 24.1212851846
    }
  },
  "110bee1d-5f64-4272-9d76-e030bf64fcfc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 485",
      "id": "110bee1d-5f64-4272-9d76-e030bf64fcfc",
      "kilometrage": 485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "110bee1d-5f64-4272-9d76-e030bf64fcfc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1205451295,
      "longitude": 26.677170208
    }
  },
  "110d28c8-1ebd-4711-abad-a35c315c0d70": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 11",
      "id": "110d28c8-1ebd-4711-abad-a35c315c0d70",
      "kilometrage": 526,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "110d28c8-1ebd-4711-abad-a35c315c0d70",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1174740308,
      "longitude": 26.1704644905
    }
  },
  "1112bf5b-fd1c-47dc-8c8b-0efa0ed3cbf9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "1112bf5b-fd1c-47dc-8c8b-0efa0ed3cbf9",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1112bf5b-fd1c-47dc-8c8b-0efa0ed3cbf9",
    "image": "attention",
    "point": {
      "latitude": 52.1420586374,
      "longitude": 23.9552422444
    }
  },
  "1117171f-cc17-43e8-8429-18b88503eb51": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 151",
      "id": "1117171f-cc17-43e8-8429-18b88503eb51",
      "kilometrage": 460,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1117171f-cc17-43e8-8429-18b88503eb51",
    "image": "perev_left",
    "point": {
      "latitude": 52.1499674717,
      "longitude": 26.9422671724
    }
  },
  "116ee464-1c08-4471-9740-8c842ebe909c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 3",
      "id": "116ee464-1c08-4471-9740-8c842ebe909c",
      "kilometrage": 529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "116ee464-1c08-4471-9740-8c842ebe909c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1188326795,
      "longitude": 26.1260096327
    }
  },
  "11c52556-ed74-4c52-a6c9-d08812db0632": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 2",
      "id": "11c52556-ed74-4c52-a6c9-d08812db0632",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11c52556-ed74-4c52-a6c9-d08812db0632",
    "image": "perev_right",
    "point": {
      "latitude": 52.1388006058,
      "longitude": 27.2807778588
    }
  },
  "11ece974-a478-477d-8915-1616f1c2f257": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "11ece974-a478-477d-8915-1616f1c2f257",
      "kilometrage": 471,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11ece974-a478-477d-8915-1616f1c2f257",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1403491139,
      "longitude": 26.8347905468
    }
  },
  "120b1a22-0437-48e5-8632-d9176d2952eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "120b1a22-0437-48e5-8632-d9176d2952eb",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "120b1a22-0437-48e5-8632-d9176d2952eb",
    "image": "attention",
    "point": {
      "latitude": 52.0227408178,
      "longitude": 25.3154996398
    }
  },
  "124ce78e-8a11-4082-ad68-2dfb3f9f1dc9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 65",
      "id": "124ce78e-8a11-4082-ad68-2dfb3f9f1dc9",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "124ce78e-8a11-4082-ad68-2dfb3f9f1dc9",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1447482345,
      "longitude": 24.7596210747
    }
  },
  "125a3cf8-e1fb-4a73-a41d-8c617293fff2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 231",
      "id": "125a3cf8-e1fb-4a73-a41d-8c617293fff2",
      "kilometrage": 429,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "125a3cf8-e1fb-4a73-a41d-8c617293fff2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1648754317,
      "longitude": 27.2119669755
    }
  },
  "12763b5e-7690-4b15-99d0-1157ed49b3ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "12763b5e-7690-4b15-99d0-1157ed49b3ae",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12763b5e-7690-4b15-99d0-1157ed49b3ae",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0443119031,
      "longitude": 25.1408137017
    }
  },
  "12f07fbb-3efb-4913-8b7f-ccb74375541b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "12f07fbb-3efb-4913-8b7f-ccb74375541b",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12f07fbb-3efb-4913-8b7f-ccb74375541b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0880290398,
      "longitude": 25.9661370475
    }
  },
  "12f780ee-b9ab-470a-9768-f7c59222b575": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "12f780ee-b9ab-470a-9768-f7c59222b575",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12f780ee-b9ab-470a-9768-f7c59222b575",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0224089552,
      "longitude": 25.3277473823
    }
  },
  "1301bb82-f92d-44fc-b165-08eff5b0315d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "1301bb82-f92d-44fc-b165-08eff5b0315d",
      "kilometrage": 491,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1301bb82-f92d-44fc-b165-08eff5b0315d",
    "image": "attention",
    "point": {
      "latitude": 52.1153455308,
      "longitude": 26.6019485953
    }
  },
  "1310ef23-4c0b-4587-8ceb-7ad82f0b875a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 133",
      "id": "1310ef23-4c0b-4587-8ceb-7ad82f0b875a",
      "kilometrage": 467,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1310ef23-4c0b-4587-8ceb-7ad82f0b875a",
    "image": "perev_right",
    "point": {
      "latitude": 52.137051974,
      "longitude": 26.8689430858
    }
  },
  "134c86c2-b29f-4cff-96df-6d8ed5316aa6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 157",
      "id": "134c86c2-b29f-4cff-96df-6d8ed5316aa6",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "134c86c2-b29f-4cff-96df-6d8ed5316aa6",
    "image": "perev_right",
    "point": {
      "latitude": 52.1989303401,
      "longitude": 24.217377919
    }
  },
  "135c09bd-cb3a-4cea-9deb-b3714ea0eb7f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "135c09bd-cb3a-4cea-9deb-b3714ea0eb7f",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "135c09bd-cb3a-4cea-9deb-b3714ea0eb7f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1345906917,
      "longitude": 23.946631622
    }
  },
  "13993ffd-fd24-44c9-8c19-c7555da46103": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 94",
      "id": "13993ffd-fd24-44c9-8c19-c7555da46103",
      "kilometrage": 489,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "13993ffd-fd24-44c9-8c19-c7555da46103",
    "image": "perev_left",
    "point": {
      "latitude": 52.1250775096,
      "longitude": 26.6343439683
    }
  },
  "144c4347-a022-4c42-8872-378446298e22": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 64",
      "id": "144c4347-a022-4c42-8872-378446298e22",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "144c4347-a022-4c42-8872-378446298e22",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1167881578,
      "longitude": 26.503353204
    }
  },
  "1473ae29-40f8-4462-8700-6f6ecd19d7a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 97",
      "id": "1473ae29-40f8-4462-8700-6f6ecd19d7a1",
      "kilometrage": 487,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1473ae29-40f8-4462-8700-6f6ecd19d7a1",
    "image": "perev_left",
    "point": {
      "latitude": 52.1267873143,
      "longitude": 26.653266598
    }
  },
  "147f42bc-db35-4ccc-858c-5867330a0464": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "147f42bc-db35-4ccc-858c-5867330a0464",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "147f42bc-db35-4ccc-858c-5867330a0464",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1943557391,
      "longitude": 24.1063518597
    }
  },
  "14889092-8da8-4cf3-9dcd-9ba16593c3f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "14889092-8da8-4cf3-9dcd-9ba16593c3f0",
      "kilometrage": 481,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14889092-8da8-4cf3-9dcd-9ba16593c3f0",
    "image": "attention",
    "point": {
      "latitude": 52.1124968881,
      "longitude": 26.7344896956
    }
  },
  "14e81cf0-40c1-4fe9-8fc7-5af0301f10e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "14e81cf0-40c1-4fe9-8fc7-5af0301f10e6",
      "kilometrage": 533,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14e81cf0-40c1-4fe9-8fc7-5af0301f10e6",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0916602776,
      "longitude": 26.1275201846
    }
  },
  "14ff38c0-b96e-47aa-857a-b292895741de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 106",
      "id": "14ff38c0-b96e-47aa-857a-b292895741de",
      "kilometrage": 482,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14ff38c0-b96e-47aa-857a-b292895741de",
    "image": "perev_right",
    "point": {
      "latitude": 52.1071933946,
      "longitude": 26.7190828423
    }
  },
  "150d10a3-a81d-4df7-b0b2-d3f832b0e468": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 19",
      "id": "150d10a3-a81d-4df7-b0b2-d3f832b0e468",
      "kilometrage": 12,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "150d10a3-a81d-4df7-b0b2-d3f832b0e468",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0893413173,
      "longitude": 25.9746585179
    }
  },
  "1559c999-5167-403e-9811-c07e8147688f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "1559c999-5167-403e-9811-c07e8147688f",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1559c999-5167-403e-9811-c07e8147688f",
    "image": "name_of",
    "point": {
      "latitude": 52.1498651904,
      "longitude": 24.7108914809
    }
  },
  "15b4550e-1a15-4ba3-9d44-fee25d7e0deb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 50",
      "id": "15b4550e-1a15-4ba3-9d44-fee25d7e0deb",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15b4550e-1a15-4ba3-9d44-fee25d7e0deb",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2017034188,
      "longitude": 24.2246456934
    }
  },
  "15e23cde-6022-4035-a4ca-9d025f9fe39a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 171",
      "id": "15e23cde-6022-4035-a4ca-9d025f9fe39a",
      "kilometrage": 453,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15e23cde-6022-4035-a4ca-9d025f9fe39a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1536567617,
      "longitude": 27.0137929741
    }
  },
  "16031fc1-3376-4184-98f3-ed3802946da0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 226",
      "id": "16031fc1-3376-4184-98f3-ed3802946da0",
      "kilometrage": 432,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16031fc1-3376-4184-98f3-ed3802946da0",
    "image": "perev_left",
    "point": {
      "latitude": 52.1586339954,
      "longitude": 27.1921071664
    }
  },
  "162bea60-8b85-426d-8620-e4ac4429dab4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "162bea60-8b85-426d-8620-e4ac4429dab4",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "162bea60-8b85-426d-8620-e4ac4429dab4",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2074134972,
      "longitude": 24.4222289917
    }
  },
  "16352f80-9ed1-4d48-8e34-7fd07770486b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "16352f80-9ed1-4d48-8e34-7fd07770486b",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16352f80-9ed1-4d48-8e34-7fd07770486b",
    "image": "name_of",
    "point": {
      "latitude": 52.0912873158,
      "longitude": 23.9093514974
    }
  },
  "1676c1dc-1638-49df-a177-b48865ada4fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 234а",
      "id": "1676c1dc-1638-49df-a177-b48865ada4fe",
      "kilometrage": 428,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1676c1dc-1638-49df-a177-b48865ada4fe",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1596536767,
      "longitude": 27.2323127157
    }
  },
  "1695b77e-a856-4948-908f-17c6b2ffd261": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 42",
      "id": "1695b77e-a856-4948-908f-17c6b2ffd261",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1695b77e-a856-4948-908f-17c6b2ffd261",
    "image": "perev_left",
    "point": {
      "latitude": 52.0768823589,
      "longitude": 25.805437374
    }
  },
  "16dc6493-26ab-442c-88f9-72beda5c1440": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 243",
      "id": "16dc6493-26ab-442c-88f9-72beda5c1440",
      "kilometrage": 424,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16dc6493-26ab-442c-88f9-72beda5c1440",
    "image": "perev_left",
    "point": {
      "latitude": 52.1492519183,
      "longitude": 27.2588464362
    }
  },
  "16e93b25-fbee-4412-a345-ac7eaf6d7023": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 93",
      "id": "16e93b25-fbee-4412-a345-ac7eaf6d7023",
      "kilometrage": 489,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16e93b25-fbee-4412-a345-ac7eaf6d7023",
    "image": "perev_left",
    "point": {
      "latitude": 52.1265758423,
      "longitude": 26.6305203583
    }
  },
  "171b64d6-a86f-4fa1-aa65-de915a2f17f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 460",
      "id": "171b64d6-a86f-4fa1-aa65-de915a2f17f0",
      "kilometrage": 460,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "171b64d6-a86f-4fa1-aa65-de915a2f17f0",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1508382084,
      "longitude": 26.9472540587
    }
  },
  "173efa86-79d2-42c7-b531-ecd3d54f2f46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 20",
      "id": "173efa86-79d2-42c7-b531-ecd3d54f2f46",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "173efa86-79d2-42c7-b531-ecd3d54f2f46",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0982649822,
      "longitude": 23.9162896796
    }
  },
  "1741d879-d939-45e5-a41f-03a8ab50c3e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "1741d879-d939-45e5-a41f-03a8ab50c3e3",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1741d879-d939-45e5-a41f-03a8ab50c3e3",
    "image": "attention",
    "point": {
      "latitude": 52.1114122965,
      "longitude": 26.2958655666
    }
  },
  "1745856f-8938-4e17-9af7-b1beedfd4604": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 32",
      "id": "1745856f-8938-4e17-9af7-b1beedfd4604",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1745856f-8938-4e17-9af7-b1beedfd4604",
    "image": "perev_left",
    "point": {
      "latitude": 52.1132995344,
      "longitude": 26.3199309406
    }
  },
  "17b977e7-e23b-4924-8c7e-addc0e0d2d82": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 105",
      "id": "17b977e7-e23b-4924-8c7e-addc0e0d2d82",
      "kilometrage": 482,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "17b977e7-e23b-4924-8c7e-addc0e0d2d82",
    "image": "perev_left",
    "point": {
      "latitude": 52.1098451952,
      "longitude": 26.7124369229
    }
  },
  "18495bac-e5c9-4f87-b9d2-e4a08a1dcb14": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 34",
      "id": "18495bac-e5c9-4f87-b9d2-e4a08a1dcb14",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18495bac-e5c9-4f87-b9d2-e4a08a1dcb14",
    "image": "perev_left",
    "point": {
      "latitude": 52.0747310721,
      "longitude": 25.8633733163
    }
  },
  "187e11db-c0bc-4088-b68f-e82eb5b331dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 38",
      "id": "187e11db-c0bc-4088-b68f-e82eb5b331dd",
      "kilometrage": 512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "187e11db-c0bc-4088-b68f-e82eb5b331dd",
    "image": "perev_right",
    "point": {
      "latitude": 52.0941000786,
      "longitude": 26.3618819286
    }
  },
  "188c8f89-d3ca-4852-a31f-60efd5f78aba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 88",
      "id": "188c8f89-d3ca-4852-a31f-60efd5f78aba",
      "kilometrage": 491,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "188c8f89-d3ca-4852-a31f-60efd5f78aba",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1205127124,
      "longitude": 26.6069777959
    }
  },
  "18b90335-9768-47cb-9acf-9b05e9cad33b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 101",
      "id": "18b90335-9768-47cb-9acf-9b05e9cad33b",
      "kilometrage": 82,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18b90335-9768-47cb-9acf-9b05e9cad33b",
    "image": "perev_right",
    "point": {
      "latitude": 52.0534009202,
      "longitude": 25.0516833745
    }
  },
  "1929676d-fe41-479d-8ead-09ee2133978d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "1929676d-fe41-479d-8ead-09ee2133978d",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1929676d-fe41-479d-8ead-09ee2133978d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0908613819,
      "longitude": 23.7998867909
    }
  },
  "1951bb8b-ca44-4562-9e40-988123677dfc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 32",
      "id": "1951bb8b-ca44-4562-9e40-988123677dfc",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1951bb8b-ca44-4562-9e40-988123677dfc",
    "image": "perev_right",
    "point": {
      "latitude": 52.1034267987,
      "longitude": 27.2630234427
    }
  },
  "1975ca8b-4418-4078-b61e-5ee2df22e5a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 237",
      "id": "1975ca8b-4418-4078-b61e-5ee2df22e5a2",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1975ca8b-4418-4078-b61e-5ee2df22e5a2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0872228034,
      "longitude": 23.7367850818
    }
  },
  "198765dc-0bdd-4c4a-9dd7-2a9be3ca39b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "198765dc-0bdd-4c4a-9dd7-2a9be3ca39b6",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "198765dc-0bdd-4c4a-9dd7-2a9be3ca39b6",
    "image": "attention",
    "point": {
      "latitude": 52.1085823517,
      "longitude": 26.4229753079
    }
  },
  "19b3d96b-e5d9-401a-8727-e319328db355": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 5",
      "id": "19b3d96b-e5d9-401a-8727-e319328db355",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19b3d96b-e5d9-401a-8727-e319328db355",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0825525117,
      "longitude": 23.7214079618
    }
  },
  "19b85731-3803-4423-8926-6035b9ff9714": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 101",
      "id": "19b85731-3803-4423-8926-6035b9ff9714",
      "kilometrage": 485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19b85731-3803-4423-8926-6035b9ff9714",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1178510184,
      "longitude": 26.6874832733
    }
  },
  "1a659823-3b42-48f5-84a3-b5cab269050e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 133",
      "id": "1a659823-3b42-48f5-84a3-b5cab269050e",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1a659823-3b42-48f5-84a3-b5cab269050e",
    "image": "perev_right",
    "point": {
      "latitude": 52.214890475,
      "longitude": 24.3790560994
    }
  },
  "1aabd33f-6c9a-4e37-ba5d-3ac0530c678e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "1aabd33f-6c9a-4e37-ba5d-3ac0530c678e",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1aabd33f-6c9a-4e37-ba5d-3ac0530c678e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2132165984,
      "longitude": 24.3948331556
    }
  },
  "1b0e9e2e-1710-471d-b2e5-91cc6099ded6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 33",
      "id": "1b0e9e2e-1710-471d-b2e5-91cc6099ded6",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b0e9e2e-1710-471d-b2e5-91cc6099ded6",
    "image": "perev_right",
    "point": {
      "latitude": 52.1083039067,
      "longitude": 26.32166174
    }
  },
  "1b103393-1593-4653-aa8f-c26c5eb5a86a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1b103393-1593-4653-aa8f-c26c5eb5a86a",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b103393-1593-4653-aa8f-c26c5eb5a86a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1444758685,
      "longitude": 24.7212003825
    }
  },
  "1b35f69b-7f25-4412-bccc-f3e11f4677a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 50",
      "id": "1b35f69b-7f25-4412-bccc-f3e11f4677a1",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b35f69b-7f25-4412-bccc-f3e11f4677a1",
    "image": "perev_left",
    "point": {
      "latitude": 52.1212836623,
      "longitude": 26.4332236866
    }
  },
  "1ba4370a-48f8-45d9-af1c-1abaed1e0ebf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 212а",
      "id": "1ba4370a-48f8-45d9-af1c-1abaed1e0ebf",
      "kilometrage": 437,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ba4370a-48f8-45d9-af1c-1abaed1e0ebf",
    "image": "perev_left",
    "point": {
      "latitude": 52.145535418,
      "longitude": 27.1531830535
    }
  },
  "1ba52f94-8c80-40a7-b0f6-ef718c8d49e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "1ba52f94-8c80-40a7-b0f6-ef718c8d49e4",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ba52f94-8c80-40a7-b0f6-ef718c8d49e4",
    "image": "crossing_way",
    "point": {
      "latitude": 52.120943127,
      "longitude": 24.8110321219
    }
  },
  "1bd5fe5f-9954-4ca8-a45e-56f090a8352a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 475",
      "id": "1bd5fe5f-9954-4ca8-a45e-56f090a8352a",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1bd5fe5f-9954-4ca8-a45e-56f090a8352a",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1413702151,
      "longitude": 26.7832340027
    }
  },
  "1c4218c7-1599-497f-a855-3d406fb1b0c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 229",
      "id": "1c4218c7-1599-497f-a855-3d406fb1b0c3",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c4218c7-1599-497f-a855-3d406fb1b0c3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0902405809,
      "longitude": 23.8078984279
    }
  },
  "1c75825e-d5d9-4548-87ae-f1dca89efc43": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "1c75825e-d5d9-4548-87ae-f1dca89efc43",
      "kilometrage": 14,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c75825e-d5d9-4548-87ae-f1dca89efc43",
    "image": "perev_right",
    "point": {
      "latitude": 52.0843536203,
      "longitude": 25.9552343011
    }
  },
  "1ca9c2a3-3248-462f-81bc-f7f7a4dfb1e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 246",
      "id": "1ca9c2a3-3248-462f-81bc-f7f7a4dfb1e6",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ca9c2a3-3248-462f-81bc-f7f7a4dfb1e6",
    "image": "buyo_left",
    "point": {
      "latitude": 52.080330944,
      "longitude": 23.709866667
    }
  },
  "1d12d606-00e0-4bfa-958e-fd2efbfc6d85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "1d12d606-00e0-4bfa-958e-fd2efbfc6d85",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d12d606-00e0-4bfa-958e-fd2efbfc6d85",
    "image": "perev_left",
    "point": {
      "latitude": 52.1406389351,
      "longitude": 27.2785941148
    }
  },
  "1d6be56a-de11-4739-bb28-a850dafcc48d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 171",
      "id": "1d6be56a-de11-4739-bb28-a850dafcc48d",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d6be56a-de11-4739-bb28-a850dafcc48d",
    "image": "perev_right",
    "point": {
      "latitude": 52.1938814324,
      "longitude": 24.1119014901
    }
  },
  "1d7347aa-d36a-4081-9c4a-f51198caaf68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 5",
      "id": "1d7347aa-d36a-4081-9c4a-f51198caaf68",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1d7347aa-d36a-4081-9c4a-f51198caaf68",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0961773527,
      "longitude": 26.0704829658
    }
  },
  "1dfdd7d7-e025-4580-b355-124689c75ddf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "1dfdd7d7-e025-4580-b355-124689c75ddf",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1dfdd7d7-e025-4580-b355-124689c75ddf",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1011986066,
      "longitude": 23.9209954082
    }
  },
  "1e2c3e7c-fdf6-415c-9519-364fd747b41c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "1e2c3e7c-fdf6-415c-9519-364fd747b41c",
      "kilometrage": 37,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e2c3e7c-fdf6-415c-9519-364fd747b41c",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0574304931,
      "longitude": 25.6525344955
    }
  },
  "1e4778b8-b803-48f9-a6e2-81e6d6b1192d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 78",
      "id": "1e4778b8-b803-48f9-a6e2-81e6d6b1192d",
      "kilometrage": 495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e4778b8-b803-48f9-a6e2-81e6d6b1192d",
    "image": "perev_left",
    "point": {
      "latitude": 52.117112388,
      "longitude": 26.5574979573
    }
  },
  "1e6e3632-80b5-4521-aba6-8396d501c0ed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 65",
      "id": "1e6e3632-80b5-4521-aba6-8396d501c0ed",
      "kilometrage": 499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e6e3632-80b5-4521-aba6-8396d501c0ed",
    "image": "perev_left",
    "point": {
      "latitude": 52.1165015374,
      "longitude": 26.5052601301
    }
  },
  "1ecc63b0-1c1e-4f7b-821f-9bd6ba7aa911": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "1ecc63b0-1c1e-4f7b-821f-9bd6ba7aa911",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ecc63b0-1c1e-4f7b-821f-9bd6ba7aa911",
    "image": "stop",
    "point": {
      "latitude": 52.1186488595,
      "longitude": 26.4309082861
    }
  },
  "1eddfacf-f239-4850-91ce-e1c0c403a122": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 168",
      "id": "1eddfacf-f239-4850-91ce-e1c0c403a122",
      "kilometrage": 454,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1eddfacf-f239-4850-91ce-e1c0c403a122",
    "image": "perev_left",
    "point": {
      "latitude": 52.1515372064,
      "longitude": 27.0051719806
    }
  },
  "1f17324f-9469-437d-9416-6b60c5c2d93c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "1f17324f-9469-437d-9416-6b60c5c2d93c",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f17324f-9469-437d-9416-6b60c5c2d93c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1116954277,
      "longitude": 26.2871875301
    }
  },
  "1f781db3-6500-462f-97cb-def24681b88f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "1f781db3-6500-462f-97cb-def24681b88f",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f781db3-6500-462f-97cb-def24681b88f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1915431909,
      "longitude": 24.130994179
    }
  },
  "1fa05034-24af-4a98-a45d-601f1242715e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "1fa05034-24af-4a98-a45d-601f1242715e",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fa05034-24af-4a98-a45d-601f1242715e",
    "image": "axis_romb",
    "point": {
      "latitude": 52.1830248674,
      "longitude": 24.0352760813
    }
  },
  "1fc44832-95c2-4fba-ac55-83214611469f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 82",
      "id": "1fc44832-95c2-4fba-ac55-83214611469f",
      "kilometrage": 493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fc44832-95c2-4fba-ac55-83214611469f",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1083557779,
      "longitude": 26.5761793818
    }
  },
  "20b07a0d-1f44-4480-bbb5-e0c2f7d0878c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 7",
      "id": "20b07a0d-1f44-4480-bbb5-e0c2f7d0878c",
      "kilometrage": 534,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20b07a0d-1f44-4480-bbb5-e0c2f7d0878c",
    "image": "perev_left",
    "point": {
      "latitude": 52.0868478477,
      "longitude": 26.1342581553
    }
  },
  "21550c43-7b97-43c5-b6f0-312d96a4b6fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 40",
      "id": "21550c43-7b97-43c5-b6f0-312d96a4b6fc",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21550c43-7b97-43c5-b6f0-312d96a4b6fc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.040342023,
      "longitude": 25.6240169404
    }
  },
  "217d9ffb-3356-447e-903e-bd5892a7b154": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 200",
      "id": "217d9ffb-3356-447e-903e-bd5892a7b154",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "217d9ffb-3356-447e-903e-bd5892a7b154",
    "image": "perev_right",
    "point": {
      "latitude": 52.1356675912,
      "longitude": 23.9462377412
    }
  },
  "2195e2a6-9cd6-449c-97c2-2fd34a39cca4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 242",
      "id": "2195e2a6-9cd6-449c-97c2-2fd34a39cca4",
      "kilometrage": 425,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2195e2a6-9cd6-449c-97c2-2fd34a39cca4",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1534756007,
      "longitude": 27.2563874206
    }
  },
  "2210cc17-6ab2-4c97-bae2-f01fe2bf1ee9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 12",
      "id": "2210cc17-6ab2-4c97-bae2-f01fe2bf1ee9",
      "kilometrage": 536,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2210cc17-6ab2-4c97-bae2-f01fe2bf1ee9",
    "image": "perev_right",
    "point": {
      "latitude": 52.0760518891,
      "longitude": 26.1555436835
    }
  },
  "2225d5a1-c1cd-4929-90be-e3691849d6ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "2225d5a1-c1cd-4929-90be-e3691849d6ab",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2225d5a1-c1cd-4929-90be-e3691849d6ab",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1947183462,
      "longitude": 24.14146726
    }
  },
  "225016f2-eeb2-477c-802a-001d8bf6cdbb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 45",
      "id": "225016f2-eeb2-477c-802a-001d8bf6cdbb",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "225016f2-eeb2-477c-802a-001d8bf6cdbb",
    "image": "perev_right",
    "point": {
      "latitude": 52.077633439,
      "longitude": 25.7893093115
    }
  },
  "22de44af-547d-4e4b-a240-57688207cf03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 204",
      "id": "22de44af-547d-4e4b-a240-57688207cf03",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "22de44af-547d-4e4b-a240-57688207cf03",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1226248765,
      "longitude": 23.9359254688
    }
  },
  "239d9b1a-51d1-4c0f-8ff9-92188c30a448": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "239d9b1a-51d1-4c0f-8ff9-92188c30a448",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "239d9b1a-51d1-4c0f-8ff9-92188c30a448",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0940770539,
      "longitude": 23.8874104372
    }
  },
  "23c6c512-b928-4387-97c5-c06b339e630e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "23c6c512-b928-4387-97c5-c06b339e630e",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23c6c512-b928-4387-97c5-c06b339e630e",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1211908929,
      "longitude": 26.4340707837
    }
  },
  "23f70adf-1af1-4b34-9054-26bfe2d5954a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "23f70adf-1af1-4b34-9054-26bfe2d5954a",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23f70adf-1af1-4b34-9054-26bfe2d5954a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0995331726,
      "longitude": 24.8961540434
    }
  },
  "2447950c-406c-4ca4-93c8-4251bfb9a451": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 150",
      "id": "2447950c-406c-4ca4-93c8-4251bfb9a451",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2447950c-406c-4ca4-93c8-4251bfb9a451",
    "image": "perev_left",
    "point": {
      "latitude": 52.2027586664,
      "longitude": 24.2620203119
    }
  },
  "244b26ea-3add-40d1-aa0e-b875420c6460": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 3",
      "id": "244b26ea-3add-40d1-aa0e-b875420c6460",
      "kilometrage": 533,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "244b26ea-3add-40d1-aa0e-b875420c6460",
    "image": "perev_left",
    "point": {
      "latitude": 52.0936901296,
      "longitude": 26.1252627498
    }
  },
  "2493b9e9-4502-4b62-939b-8f8a55b2caad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "2493b9e9-4502-4b62-939b-8f8a55b2caad",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2493b9e9-4502-4b62-939b-8f8a55b2caad",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0833675109,
      "longitude": 23.7231227448
    }
  },
  "24e9299a-aa3e-4592-9548-52cb9cca79a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 208",
      "id": "24e9299a-aa3e-4592-9548-52cb9cca79a0",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24e9299a-aa3e-4592-9548-52cb9cca79a0",
    "image": "perev_left",
    "point": {
      "latitude": 52.1078479528,
      "longitude": 23.9313118063
    }
  },
  "25572a1b-4bf9-4cde-9a1b-d3272eb42c10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "25572a1b-4bf9-4cde-9a1b-d3272eb42c10",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25572a1b-4bf9-4cde-9a1b-d3272eb42c10",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0942294835,
      "longitude": 23.8891845609
    }
  },
  "2563d4e7-a740-4a73-8caf-ebb670a665b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2563d4e7-a740-4a73-8caf-ebb670a665b9",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2563d4e7-a740-4a73-8caf-ebb670a665b9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.216266058,
      "longitude": 24.3409469267
    }
  },
  "25a942a5-09c5-4b7e-9c2e-f3aa3f406a38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 102",
      "id": "25a942a5-09c5-4b7e-9c2e-f3aa3f406a38",
      "kilometrage": 83,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25a942a5-09c5-4b7e-9c2e-f3aa3f406a38",
    "image": "perev_left",
    "point": {
      "latitude": 52.0555951635,
      "longitude": 25.0415556539
    }
  },
  "25b1a8d1-2637-4b09-ac4e-c49d39e12bdd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "25b1a8d1-2637-4b09-ac4e-c49d39e12bdd",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25b1a8d1-2637-4b09-ac4e-c49d39e12bdd",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0911708754,
      "longitude": 23.7870429984
    }
  },
  "25d8ed07-f3b5-42ce-9307-07e7785b3232": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "25d8ed07-f3b5-42ce-9307-07e7785b3232",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25d8ed07-f3b5-42ce-9307-07e7785b3232",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0894671445,
      "longitude": 23.7676087731
    }
  },
  "2612f69f-2665-48ab-8cd9-c92a9b8475f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2612f69f-2665-48ab-8cd9-c92a9b8475f2",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2612f69f-2665-48ab-8cd9-c92a9b8475f2",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1641301695,
      "longitude": 24.0001521206
    }
  },
  "261b3047-c743-4703-9ea8-205e81c7715f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 131",
      "id": "261b3047-c743-4703-9ea8-205e81c7715f",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "261b3047-c743-4703-9ea8-205e81c7715f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1606777568,
      "longitude": 24.6927819434
    }
  },
  "265f38f8-d93a-45cd-bb7c-8774910ffa48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "265f38f8-d93a-45cd-bb7c-8774910ffa48",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "265f38f8-d93a-45cd-bb7c-8774910ffa48",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1296801021,
      "longitude": 23.9449239668
    }
  },
  "271cbbaa-30b8-4ad3-a68b-b537372aa096": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 199",
      "id": "271cbbaa-30b8-4ad3-a68b-b537372aa096",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "271cbbaa-30b8-4ad3-a68b-b537372aa096",
    "image": "perev_right",
    "point": {
      "latitude": 52.1383260472,
      "longitude": 23.9471604409
    }
  },
  "271f1e6e-8592-472d-8808-5ca9bbb33977": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "271f1e6e-8592-472d-8808-5ca9bbb33977",
      "kilometrage": 51,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "271f1e6e-8592-472d-8808-5ca9bbb33977",
    "image": "attention",
    "point": {
      "latitude": 52.0236743948,
      "longitude": 25.4743997894
    }
  },
  "2784d6e5-12c2-4a92-9b13-88f9a479aac8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "2784d6e5-12c2-4a92-9b13-88f9a479aac8",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2784d6e5-12c2-4a92-9b13-88f9a479aac8",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1832400204,
      "longitude": 24.0360933046
    }
  },
  "280627e9-1f4b-4d9f-8851-9a9b4e0a1872": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 24",
      "id": "280627e9-1f4b-4d9f-8851-9a9b4e0a1872",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "280627e9-1f4b-4d9f-8851-9a9b4e0a1872",
    "image": "perev_left",
    "point": {
      "latitude": 52.117208439,
      "longitude": 27.2646810644
    }
  },
  "2816a81a-b443-4f43-b288-484c76f868f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "2816a81a-b443-4f43-b288-484c76f868f7",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2816a81a-b443-4f43-b288-484c76f868f7",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1605814704,
      "longitude": 27.342536224
    }
  },
  "287fd86a-d60e-43e1-bad2-313b10f5a091": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "287fd86a-d60e-43e1-bad2-313b10f5a091",
      "kilometrage": 3,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "287fd86a-d60e-43e1-bad2-313b10f5a091",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1033116737,
      "longitude": 26.0805440194
    }
  },
  "28b103d5-626b-4032-af4a-b9a46956b3ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 135",
      "id": "28b103d5-626b-4032-af4a-b9a46956b3ee",
      "kilometrage": 466,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28b103d5-626b-4032-af4a-b9a46956b3ee",
    "image": "perev_right",
    "point": {
      "latitude": 52.1337016813,
      "longitude": 26.8778330452
    }
  },
  "28fa3f2f-ac56-40f8-bbd8-3a07730573ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "28fa3f2f-ac56-40f8-bbd8-3a07730573ca",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28fa3f2f-ac56-40f8-bbd8-3a07730573ca",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0802385979,
      "longitude": 25.7773251918
    }
  },
  "292f4903-611c-45a7-b2a7-5db20e38f95c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 35",
      "id": "292f4903-611c-45a7-b2a7-5db20e38f95c",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "292f4903-611c-45a7-b2a7-5db20e38f95c",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1833728449,
      "longitude": 24.0406134673
    }
  },
  "2a3b4e19-f14a-4025-b394-c91145c31b15": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 177",
      "id": "2a3b4e19-f14a-4025-b394-c91145c31b15",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a3b4e19-f14a-4025-b394-c91145c31b15",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1994020654,
      "longitude": 24.0702617838
    }
  },
  "2a47a2cb-1573-4be3-b383-9edbe2a8071c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "2a47a2cb-1573-4be3-b383-9edbe2a8071c",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a47a2cb-1573-4be3-b383-9edbe2a8071c",
    "image": "axis_romb",
    "point": {
      "latitude": 52.089895104,
      "longitude": 23.7708383819
    }
  },
  "2a7b60f6-2090-40f3-83ab-0b3f74239fea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "2a7b60f6-2090-40f3-83ab-0b3f74239fea",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a7b60f6-2090-40f3-83ab-0b3f74239fea",
    "image": "stop",
    "point": {
      "latitude": 52.1141500367,
      "longitude": 26.4281239984
    }
  },
  "2ae419ce-a908-483a-8e6d-9df2c5bae014": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 14",
      "id": "2ae419ce-a908-483a-8e6d-9df2c5bae014",
      "kilometrage": 536,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ae419ce-a908-483a-8e6d-9df2c5bae014",
    "image": "perev_left",
    "point": {
      "latitude": 52.0700201189,
      "longitude": 26.157588127
    }
  },
  "2b406de7-e729-425f-afd2-3a8595a7f55a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 155",
      "id": "2b406de7-e729-425f-afd2-3a8595a7f55a",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b406de7-e729-425f-afd2-3a8595a7f55a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2028407533,
      "longitude": 24.2263791631
    }
  },
  "2b966d9c-38b9-414f-abb8-1a59446a2937": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 425",
      "id": "2b966d9c-38b9-414f-abb8-1a59446a2937",
      "kilometrage": 425,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b966d9c-38b9-414f-abb8-1a59446a2937",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1524056823,
      "longitude": 27.2579627775
    }
  },
  "2c3f0414-f91e-4bb9-886d-50ebac08ab9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 145",
      "id": "2c3f0414-f91e-4bb9-886d-50ebac08ab9c",
      "kilometrage": 463,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c3f0414-f91e-4bb9-886d-50ebac08ab9c",
    "image": "perev_left",
    "point": {
      "latitude": 52.1434752824,
      "longitude": 26.9071026998
    }
  },
  "2c51cd7f-2b84-48e6-8027-fea8095a8cd3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 213",
      "id": "2c51cd7f-2b84-48e6-8027-fea8095a8cd3",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c51cd7f-2b84-48e6-8027-fea8095a8cd3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.091917222,
      "longitude": 23.909483639
    }
  },
  "2c73dae6-7bbd-4b25-8f59-53207f8e181b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "2c73dae6-7bbd-4b25-8f59-53207f8e181b",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c73dae6-7bbd-4b25-8f59-53207f8e181b",
    "image": "name_of",
    "point": {
      "latitude": 52.12097207,
      "longitude": 24.8263594541
    }
  },
  "2c9f15fd-edb3-41cf-be7b-15d647e53c03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2c9f15fd-edb3-41cf-be7b-15d647e53c03",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c9f15fd-edb3-41cf-be7b-15d647e53c03",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1264005879,
      "longitude": 24.8010939454
    }
  },
  "2cab7752-08f3-4b88-a313-0a81e5e55ac3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "2cab7752-08f3-4b88-a313-0a81e5e55ac3",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cab7752-08f3-4b88-a313-0a81e5e55ac3",
    "image": "attention",
    "point": {
      "latitude": 52.0368637227,
      "longitude": 25.1732837442
    }
  },
  "2cd11d45-2cbe-472e-99ce-b158c592bd1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 34",
      "id": "2cd11d45-2cbe-472e-99ce-b158c592bd1a",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cd11d45-2cbe-472e-99ce-b158c592bd1a",
    "image": "perev_right",
    "point": {
      "latitude": 52.0993082873,
      "longitude": 27.2594721509
    }
  },
  "2cdc2dbb-fa99-434e-a2c5-a8a20a5e8618": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 61",
      "id": "2cdc2dbb-fa99-434e-a2c5-a8a20a5e8618",
      "kilometrage": 37,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cdc2dbb-fa99-434e-a2c5-a8a20a5e8618",
    "image": "perev_left",
    "point": {
      "latitude": 52.0590265062,
      "longitude": 25.6524713864
    }
  },
  "2d24953e-7387-4f9f-9422-b7b334166994": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "2d24953e-7387-4f9f-9422-b7b334166994",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d24953e-7387-4f9f-9422-b7b334166994",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0795214741,
      "longitude": 25.7776748829
    }
  },
  "2d53cec6-4889-4367-94fb-6050b1d3e853": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2d53cec6-4889-4367-94fb-6050b1d3e853",
      "kilometrage": 77,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d53cec6-4889-4367-94fb-6050b1d3e853",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0543991032,
      "longitude": 25.1236998689
    }
  },
  "2d9b0e63-381f-4436-b1c4-7f72854bedca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 440",
      "id": "2d9b0e63-381f-4436-b1c4-7f72854bedca",
      "kilometrage": 440,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d9b0e63-381f-4436-b1c4-7f72854bedca",
    "image": "kilometrage",
    "point": {
      "latitude": 52.156245554,
      "longitude": 27.1291795303
    }
  },
  "2d9eba14-f316-4a4d-ae51-3f439c9df410": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2d9eba14-f316-4a4d-ae51-3f439c9df410",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2d9eba14-f316-4a4d-ae51-3f439c9df410",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2153442728,
      "longitude": 24.3397874957
    }
  },
  "2dd06e33-cb8b-4b9d-bd7b-6e7dfb733439": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 69",
      "id": "2dd06e33-cb8b-4b9d-bd7b-6e7dfb733439",
      "kilometrage": 498,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2dd06e33-cb8b-4b9d-bd7b-6e7dfb733439",
    "image": "perev_left",
    "point": {
      "latitude": 52.1133671336,
      "longitude": 26.5240117354
    }
  },
  "2df1fd0c-7ff7-4183-a947-6c81f1136466": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 47",
      "id": "2df1fd0c-7ff7-4183-a947-6c81f1136466",
      "kilometrage": 28,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2df1fd0c-7ff7-4183-a947-6c81f1136466",
    "image": "perev_right",
    "point": {
      "latitude": 52.0766487339,
      "longitude": 25.7596959968
    }
  },
  "2e338787-35f2-4c6d-86a4-4d8e325ff37f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 20",
      "id": "2e338787-35f2-4c6d-86a4-4d8e325ff37f",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e338787-35f2-4c6d-86a4-4d8e325ff37f",
    "image": "perev_left",
    "point": {
      "latitude": 52.0894298117,
      "longitude": 25.9676138162
    }
  },
  "2e41da70-2336-4dd3-8eb2-c45d7c955b40": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "2e41da70-2336-4dd3-8eb2-c45d7c955b40",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e41da70-2336-4dd3-8eb2-c45d7c955b40",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1827932765,
      "longitude": 24.0336455821
    }
  },
  "2e4938f0-b950-4ff9-b144-cc70339afd75": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 35",
      "id": "2e4938f0-b950-4ff9-b144-cc70339afd75",
      "kilometrage": 514,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e4938f0-b950-4ff9-b144-cc70339afd75",
    "image": "perev_left",
    "point": {
      "latitude": 52.1064492951,
      "longitude": 26.3348563122
    }
  },
  "2e75f949-57d7-4adf-8672-f5da1f0ab625": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 29",
      "id": "2e75f949-57d7-4adf-8672-f5da1f0ab625",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e75f949-57d7-4adf-8672-f5da1f0ab625",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1153154753,
      "longitude": 26.3039763134
    }
  },
  "2e791e88-a09f-4231-8728-d09751edf753": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 179",
      "id": "2e791e88-a09f-4231-8728-d09751edf753",
      "kilometrage": 157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e791e88-a09f-4231-8728-d09751edf753",
    "image": "perev_right",
    "point": {
      "latitude": 52.1969339642,
      "longitude": 24.0610383858
    }
  },
  "2eaf44fb-db79-4335-a955-ed3f955d0769": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 46",
      "id": "2eaf44fb-db79-4335-a955-ed3f955d0769",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2eaf44fb-db79-4335-a955-ed3f955d0769",
    "image": "perev_right",
    "point": {
      "latitude": 52.1049826741,
      "longitude": 26.4088007661
    }
  },
  "2f1e0125-6705-466f-b6f5-afe55d54a640": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "2f1e0125-6705-466f-b6f5-afe55d54a640",
      "kilometrage": 535,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f1e0125-6705-466f-b6f5-afe55d54a640",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0773603181,
      "longitude": 26.1481807055
    }
  },
  "2f4a6c9d-fa91-4c55-811e-896933ac94e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 87",
      "id": "2f4a6c9d-fa91-4c55-811e-896933ac94e4",
      "kilometrage": 491,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f4a6c9d-fa91-4c55-811e-896933ac94e4",
    "image": "perev_left",
    "point": {
      "latitude": 52.1186070521,
      "longitude": 26.6039287458
    }
  },
  "2f549227-2489-43f6-a277-f8f87ea60ed8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 45",
      "id": "2f549227-2489-43f6-a277-f8f87ea60ed8",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f549227-2489-43f6-a277-f8f87ea60ed8",
    "image": "kilometrage",
    "point": {
      "latitude": 52.192622983,
      "longitude": 24.1668677603
    }
  },
  "305beae2-dd25-484e-b060-1f0e83fd22ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 83",
      "id": "305beae2-dd25-484e-b060-1f0e83fd22ce",
      "kilometrage": 493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "305beae2-dd25-484e-b060-1f0e83fd22ce",
    "image": "perev_right",
    "point": {
      "latitude": 52.107530624,
      "longitude": 26.5821037067
    }
  },
  "3091f4f8-dd2b-4d7c-b45b-8704b5ab6db9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 164",
      "id": "3091f4f8-dd2b-4d7c-b45b-8704b5ab6db9",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3091f4f8-dd2b-4d7c-b45b-8704b5ab6db9",
    "image": "perev_left",
    "point": {
      "latitude": 52.1887600758,
      "longitude": 24.1746403944
    }
  },
  "30a394fa-55ee-4708-bb81-3d0661e04408": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 80",
      "id": "30a394fa-55ee-4708-bb81-3d0661e04408",
      "kilometrage": 494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30a394fa-55ee-4708-bb81-3d0661e04408",
    "image": "perev_left",
    "point": {
      "latitude": 52.1134304225,
      "longitude": 26.5668501654
    }
  },
  "30b26d10-c5ba-4ceb-9ad2-db733b985ed0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "30b26d10-c5ba-4ceb-9ad2-db733b985ed0",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30b26d10-c5ba-4ceb-9ad2-db733b985ed0",
    "image": "stop",
    "point": {
      "latitude": 52.0340269625,
      "longitude": 25.6171445574
    }
  },
  "30b713c8-7730-499b-82db-200fcae46798": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 128",
      "id": "30b713c8-7730-499b-82db-200fcae46798",
      "kilometrage": 469,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30b713c8-7730-499b-82db-200fcae46798",
    "image": "perev_right",
    "point": {
      "latitude": 52.1378342901,
      "longitude": 26.8596209071
    }
  },
  "30ee134a-5bd9-4be9-a276-1548754e2ce5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "30ee134a-5bd9-4be9-a276-1548754e2ce5",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30ee134a-5bd9-4be9-a276-1548754e2ce5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0736595211,
      "longitude": 25.8720720974
    }
  },
  "310e42db-1de3-40a5-8e4b-3a44e3a270d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "310e42db-1de3-40a5-8e4b-3a44e3a270d8",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "310e42db-1de3-40a5-8e4b-3a44e3a270d8",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1663526436,
      "longitude": 24.0031476997
    }
  },
  "31402e7f-6d80-4b22-a056-181da6c5bfc7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 21",
      "id": "31402e7f-6d80-4b22-a056-181da6c5bfc7",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31402e7f-6d80-4b22-a056-181da6c5bfc7",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0860595518,
      "longitude": 25.9634589709
    }
  },
  "31683197-b1ed-4cd4-9f49-f8e33d38d3c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "31683197-b1ed-4cd4-9f49-f8e33d38d3c8",
      "kilometrage": 166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "31683197-b1ed-4cd4-9f49-f8e33d38d3c8",
    "image": "name_of",
    "point": {
      "latitude": 52.1495232849,
      "longitude": 23.9938855571
    }
  },
  "320f1595-1236-40d9-a1e8-18c7fc1ab33d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 105",
      "id": "320f1595-1236-40d9-a1e8-18c7fc1ab33d",
      "kilometrage": 88,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "320f1595-1236-40d9-a1e8-18c7fc1ab33d",
    "image": "perev_right",
    "point": {
      "latitude": 52.0807358082,
      "longitude": 24.9800343725
    }
  },
  "321d603d-e91c-49fa-9c54-177be914c80c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "321d603d-e91c-49fa-9c54-177be914c80c",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "321d603d-e91c-49fa-9c54-177be914c80c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0837538617,
      "longitude": 23.7234739572
    }
  },
  "3252b00b-73d2-4754-80da-6c543b7a2f5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 9",
      "id": "3252b00b-73d2-4754-80da-6c543b7a2f5f",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3252b00b-73d2-4754-80da-6c543b7a2f5f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1168821014,
      "longitude": 26.16057273
    }
  },
  "327d66bc-18ef-45e8-afca-e45a652ad91a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "327d66bc-18ef-45e8-afca-e45a652ad91a",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "327d66bc-18ef-45e8-afca-e45a652ad91a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2156761702,
      "longitude": 24.3600959575
    }
  },
  "32ac6539-c534-4bac-90e8-e15e2aaa9027": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 183",
      "id": "32ac6539-c534-4bac-90e8-e15e2aaa9027",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32ac6539-c534-4bac-90e8-e15e2aaa9027",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1840360284,
      "longitude": 24.0412135256
    }
  },
  "32b60c93-4262-4734-902c-97589ef4f5f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 1",
      "id": "32b60c93-4262-4734-902c-97589ef4f5f2",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32b60c93-4262-4734-902c-97589ef4f5f2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1143174158,
      "longitude": 26.1162107503
    }
  },
  "32f384ce-a9c3-4b2c-9a1c-1799f3fbca28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "32f384ce-a9c3-4b2c-9a1c-1799f3fbca28",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32f384ce-a9c3-4b2c-9a1c-1799f3fbca28",
    "image": "buyo_right",
    "point": {
      "latitude": 52.112928611,
      "longitude": 26.428148556
    }
  },
  "3326ea09-09f6-4870-bdab-19be7e529f97": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 213",
      "id": "3326ea09-09f6-4870-bdab-19be7e529f97",
      "kilometrage": 436,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3326ea09-09f6-4870-bdab-19be7e529f97",
    "image": "perev_right",
    "point": {
      "latitude": 52.1459680361,
      "longitude": 27.1618571418
    }
  },
  "33540e1d-d5ad-4f25-aedf-6a3b0558f2bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 141",
      "id": "33540e1d-d5ad-4f25-aedf-6a3b0558f2bb",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33540e1d-d5ad-4f25-aedf-6a3b0558f2bb",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2142646486,
      "longitude": 24.3300440144
    }
  },
  "3357b1fc-3dd8-40c2-a3b8-bfba92b83f3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 16",
      "id": "3357b1fc-3dd8-40c2-a3b8-bfba92b83f3c",
      "kilometrage": 524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3357b1fc-3dd8-40c2-a3b8-bfba92b83f3c",
    "image": "perev_right",
    "point": {
      "latitude": 52.1128575149,
      "longitude": 26.2057751065
    }
  },
  "339a1189-f4fb-490f-a38c-7e012eb85816": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "339a1189-f4fb-490f-a38c-7e012eb85816",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "339a1189-f4fb-490f-a38c-7e012eb85816",
    "image": "bridge_low",
    "point": {
      "latitude": 52.1105527082,
      "longitude": 26.1062363375
    }
  },
  "33b1d48e-fe5b-4604-a604-0f85189e7881": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 160",
      "id": "33b1d48e-fe5b-4604-a604-0f85189e7881",
      "kilometrage": 457,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33b1d48e-fe5b-4604-a604-0f85189e7881",
    "image": "perev_right",
    "point": {
      "latitude": 52.1507142259,
      "longitude": 26.9818385425
    }
  },
  "33c3613f-4d44-45c8-b869-1e38c4d2a6bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 76",
      "id": "33c3613f-4d44-45c8-b869-1e38c4d2a6bf",
      "kilometrage": 496,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33c3613f-4d44-45c8-b869-1e38c4d2a6bf",
    "image": "perev_right",
    "point": {
      "latitude": 52.1158237109,
      "longitude": 26.5483886573
    }
  },
  "33c5051c-939e-4c9b-bad0-3f3b73ff8c59": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 107",
      "id": "33c5051c-939e-4c9b-bad0-3f3b73ff8c59",
      "kilometrage": 482,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33c5051c-939e-4c9b-bad0-3f3b73ff8c59",
    "image": "perev_left",
    "point": {
      "latitude": 52.1098117307,
      "longitude": 26.723734659
    }
  },
  "33e52232-ce1f-464d-b8cd-31f2531a4c7e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 39",
      "id": "33e52232-ce1f-464d-b8cd-31f2531a4c7e",
      "kilometrage": 23,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "33e52232-ce1f-464d-b8cd-31f2531a4c7e",
    "image": "perev_right",
    "point": {
      "latitude": 52.0730499996,
      "longitude": 25.8246783333
    }
  },
  "3416142b-e29e-4b20-a453-427289f44509": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "3416142b-e29e-4b20-a453-427289f44509",
      "kilometrage": 427,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3416142b-e29e-4b20-a453-427289f44509",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1568688674,
      "longitude": 27.2345878849
    }
  },
  "344db368-5206-48cb-9078-7e018af2438b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 20",
      "id": "344db368-5206-48cb-9078-7e018af2438b",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "344db368-5206-48cb-9078-7e018af2438b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1234144183,
      "longitude": 27.2715850529
    }
  },
  "34990d9f-dd71-4edf-ad76-99c9f6b8b2db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 82",
      "id": "34990d9f-dd71-4edf-ad76-99c9f6b8b2db",
      "kilometrage": 58,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34990d9f-dd71-4edf-ad76-99c9f6b8b2db",
    "image": "perev_right",
    "point": {
      "latitude": 52.016821914,
      "longitude": 25.3752729115
    }
  },
  "34ea8a93-6478-46ce-a78a-0780c1db93fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 145",
      "id": "34ea8a93-6478-46ce-a78a-0780c1db93fb",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34ea8a93-6478-46ce-a78a-0780c1db93fb",
    "image": "buyo_right",
    "point": {
      "latitude": 52.21335257,
      "longitude": 24.2909696253
    }
  },
  "3533ea5d-a3cc-458c-aef9-9f5fa651166e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "3533ea5d-a3cc-458c-aef9-9f5fa651166e",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3533ea5d-a3cc-458c-aef9-9f5fa651166e",
    "image": "main_way",
    "point": {
      "latitude": 52.1160042335,
      "longitude": 26.1237774523
    }
  },
  "3580701b-286e-47b7-8396-574dd71fd1e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "3580701b-286e-47b7-8396-574dd71fd1e4",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3580701b-286e-47b7-8396-574dd71fd1e4",
    "image": "name_of",
    "point": {
      "latitude": 52.0802629395,
      "longitude": 25.7748873228
    }
  },
  "3613da0a-298c-4cc9-af42-0a6922610d29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 37",
      "id": "3613da0a-298c-4cc9-af42-0a6922610d29",
      "kilometrage": 512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3613da0a-298c-4cc9-af42-0a6922610d29",
    "image": "perev_left",
    "point": {
      "latitude": 52.0991171551,
      "longitude": 26.3526818464
    }
  },
  "36265f01-82c1-4fb9-b1aa-80aa1b02acb1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 58",
      "id": "36265f01-82c1-4fb9-b1aa-80aa1b02acb1",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "36265f01-82c1-4fb9-b1aa-80aa1b02acb1",
    "image": "perev_right",
    "point": {
      "latitude": 52.0672698318,
      "longitude": 25.6714304522
    }
  },
  "366b6eeb-26d9-483c-8c75-d2269fa27b97": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "366b6eeb-26d9-483c-8c75-d2269fa27b97",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "366b6eeb-26d9-483c-8c75-d2269fa27b97",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1646142107,
      "longitude": 24.6714989408
    }
  },
  "36fcafb6-b06e-4928-97d5-7c9376dcdc2a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "36fcafb6-b06e-4928-97d5-7c9376dcdc2a",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "36fcafb6-b06e-4928-97d5-7c9376dcdc2a",
    "image": "stop",
    "point": {
      "latitude": 52.2116740224,
      "longitude": 24.4037889966
    }
  },
  "372eaab1-241e-42cb-8916-218fa58c2282": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "372eaab1-241e-42cb-8916-218fa58c2282",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "372eaab1-241e-42cb-8916-218fa58c2282",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1110385228,
      "longitude": 26.1066246807
    }
  },
  "3760fd16-a35a-4dca-aa3c-54f1ac257863": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "3760fd16-a35a-4dca-aa3c-54f1ac257863",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3760fd16-a35a-4dca-aa3c-54f1ac257863",
    "image": "axis_romb",
    "point": {
      "latitude": 52.026564494,
      "longitude": 25.5814780155
    }
  },
  "37cfa380-3ae6-4db6-9ca4-43cd937846b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 44",
      "id": "37cfa380-3ae6-4db6-9ca4-43cd937846b2",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37cfa380-3ae6-4db6-9ca4-43cd937846b2",
    "image": "perev_left",
    "point": {
      "latitude": 52.0783183078,
      "longitude": 25.7944539071
    }
  },
  "37d5bfdf-99f5-43c3-b191-ea78bf035053": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "37d5bfdf-99f5-43c3-b191-ea78bf035053",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37d5bfdf-99f5-43c3-b191-ea78bf035053",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2123667858,
      "longitude": 24.3982346076
    }
  },
  "37d5ce17-023d-483a-8556-1c66c6d853e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 108",
      "id": "37d5ce17-023d-483a-8556-1c66c6d853e0",
      "kilometrage": 481,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "37d5ce17-023d-483a-8556-1c66c6d853e0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.111170333,
      "longitude": 26.730803278
    }
  },
  "3834bc67-4138-4b8f-a5fe-2d579c6992f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3834bc67-4138-4b8f-a5fe-2d579c6992f1",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3834bc67-4138-4b8f-a5fe-2d579c6992f1",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2141015443,
      "longitude": 24.3690997728
    }
  },
  "3838fafc-0e6e-40e0-a8c3-648d87ce9e64": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 2",
      "id": "3838fafc-0e6e-40e0-a8c3-648d87ce9e64",
      "kilometrage": 532,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3838fafc-0e6e-40e0-a8c3-648d87ce9e64",
    "image": "perev_right",
    "point": {
      "latitude": 52.0954061915,
      "longitude": 26.1253798769
    }
  },
  "386b3d03-87b5-4fff-9a8a-1a3e607d6cb9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 37",
      "id": "386b3d03-87b5-4fff-9a8a-1a3e607d6cb9",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "386b3d03-87b5-4fff-9a8a-1a3e607d6cb9",
    "image": "perev_right",
    "point": {
      "latitude": 52.0907545203,
      "longitude": 27.248126149
    }
  },
  "39058f41-5941-4318-9b5d-503bde2a6a71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "39058f41-5941-4318-9b5d-503bde2a6a71",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39058f41-5941-4318-9b5d-503bde2a6a71",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0845578065,
      "longitude": 25.9601539117
    }
  },
  "391caa52-5e00-44ed-8154-703019f0105d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 234",
      "id": "391caa52-5e00-44ed-8154-703019f0105d",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "391caa52-5e00-44ed-8154-703019f0105d",
    "image": "perev_right",
    "point": {
      "latitude": 52.0910244791,
      "longitude": 23.7745608226
    }
  },
  "39481290-3623-4378-8356-d4682eabd54d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "39481290-3623-4378-8356-d4682eabd54d",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39481290-3623-4378-8356-d4682eabd54d",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1207429183,
      "longitude": 26.4329606302
    }
  },
  "39b551c0-cf83-4ae1-80d3-59a344f6d039": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 111",
      "id": "39b551c0-cf83-4ae1-80d3-59a344f6d039",
      "kilometrage": 96,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39b551c0-cf83-4ae1-80d3-59a344f6d039",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1055018177,
      "longitude": 24.8736087442
    }
  },
  "39d695d5-480e-410d-a451-36decbeb4494": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 203",
      "id": "39d695d5-480e-410d-a451-36decbeb4494",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39d695d5-480e-410d-a451-36decbeb4494",
    "image": "perev_right",
    "point": {
      "latitude": 52.1262036421,
      "longitude": 23.9385550091
    }
  },
  "39d93f77-cceb-4787-952f-f17cc0552c12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 208",
      "id": "39d93f77-cceb-4787-952f-f17cc0552c12",
      "kilometrage": 438,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39d93f77-cceb-4787-952f-f17cc0552c12",
    "image": "perev_right",
    "point": {
      "latitude": 52.1501276665,
      "longitude": 27.1428031193
    }
  },
  "39fa2a43-9235-4746-91ac-756940d919d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "39fa2a43-9235-4746-91ac-756940d919d2",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39fa2a43-9235-4746-91ac-756940d919d2",
    "image": "attention",
    "point": {
      "latitude": 52.0370896046,
      "longitude": 25.6187926818
    }
  },
  "3a026d23-4974-4f9e-9a07-e83180bcf313": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 258а",
      "id": "3a026d23-4974-4f9e-9a07-e83180bcf313",
      "kilometrage": 415,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a026d23-4974-4f9e-9a07-e83180bcf313",
    "image": "buyo_right",
    "point": {
      "latitude": 52.139289278,
      "longitude": 27.328812806
    }
  },
  "3a475111-3f42-41fe-8b27-f06731686963": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 30",
      "id": "3a475111-3f42-41fe-8b27-f06731686963",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a475111-3f42-41fe-8b27-f06731686963",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1585863889,
      "longitude": 24.0014963604
    }
  },
  "3a77108c-87f6-4a7c-831b-15892d09499b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 188",
      "id": "3a77108c-87f6-4a7c-831b-15892d09499b",
      "kilometrage": 446,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a77108c-87f6-4a7c-831b-15892d09499b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1403961439,
      "longitude": 27.0763940243
    }
  },
  "3a7f3f36-ceed-46ed-8629-950cecbcbde9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 59",
      "id": "3a7f3f36-ceed-46ed-8629-950cecbcbde9",
      "kilometrage": 502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3a7f3f36-ceed-46ed-8629-950cecbcbde9",
    "image": "perev_left",
    "point": {
      "latitude": 52.1154946713,
      "longitude": 26.4775186451
    }
  },
  "3ac73500-2c74-4b6e-8baf-d653cd875125": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3ac73500-2c74-4b6e-8baf-d653cd875125",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ac73500-2c74-4b6e-8baf-d653cd875125",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0857008569,
      "longitude": 25.9606098413
    }
  },
  "3acd64e5-5384-4ba5-97bd-b0ccc14f6d09": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 510",
      "id": "3acd64e5-5384-4ba5-97bd-b0ccc14f6d09",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3acd64e5-5384-4ba5-97bd-b0ccc14f6d09",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0995237526,
      "longitude": 26.37789111
    }
  },
  "3ad5301e-a685-49d0-91ee-a7b4e33a985c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 16",
      "id": "3ad5301e-a685-49d0-91ee-a7b4e33a985c",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ad5301e-a685-49d0-91ee-a7b4e33a985c",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1284066078,
      "longitude": 27.2672503335
    }
  },
  "3b006140-f4cb-4466-86a4-519cbc7804bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "3b006140-f4cb-4466-86a4-519cbc7804bd",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b006140-f4cb-4466-86a4-519cbc7804bd",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0696161933,
      "longitude": 25.6732590625
    }
  },
  "3b46760c-4fec-479b-bb3c-14f91fcfb0a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3b46760c-4fec-479b-bb3c-14f91fcfb0a5",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b46760c-4fec-479b-bb3c-14f91fcfb0a5",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0816390791,
      "longitude": 23.7186591782
    }
  },
  "3bd86ebc-5369-49c8-93c6-0d573161d8df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 126",
      "id": "3bd86ebc-5369-49c8-93c6-0d573161d8df",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3bd86ebc-5369-49c8-93c6-0d573161d8df",
    "image": "perev_right",
    "point": {
      "latitude": 52.1445911961,
      "longitude": 24.7345523463
    }
  },
  "3c0d4f88-bb6d-4350-ab19-facfc5a59402": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 38",
      "id": "3c0d4f88-bb6d-4350-ab19-facfc5a59402",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c0d4f88-bb6d-4350-ab19-facfc5a59402",
    "image": "perev_right",
    "point": {
      "latitude": 52.089272375,
      "longitude": 27.2468497615
    }
  },
  "3c27aa04-de16-4195-818f-8ca6baee6495": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 11",
      "id": "3c27aa04-de16-4195-818f-8ca6baee6495",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c27aa04-de16-4195-818f-8ca6baee6495",
    "image": "perev_left",
    "point": {
      "latitude": 52.1317209948,
      "longitude": 27.2744994858
    }
  },
  "3c49ba7e-afbb-4a74-acb6-16c644037581": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "3c49ba7e-afbb-4a74-acb6-16c644037581",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c49ba7e-afbb-4a74-acb6-16c644037581",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0366735111,
      "longitude": 25.619534898
    }
  },
  "3c7c73bb-40c7-4a85-a2c9-c3a04a8db93b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 48",
      "id": "3c7c73bb-40c7-4a85-a2c9-c3a04a8db93b",
      "kilometrage": 29,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c7c73bb-40c7-4a85-a2c9-c3a04a8db93b",
    "image": "perev_left",
    "point": {
      "latitude": 52.0809064719,
      "longitude": 25.7488063896
    }
  },
  "3c8cc1d2-fa75-43f5-ba84-7e03368a1b68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 58",
      "id": "3c8cc1d2-fa75-43f5-ba84-7e03368a1b68",
      "kilometrage": 502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c8cc1d2-fa75-43f5-ba84-7e03368a1b68",
    "image": "perev_right",
    "point": {
      "latitude": 52.1149055687,
      "longitude": 26.4715297053
    }
  },
  "3ce3f9ae-a60a-474c-ad37-c79af91e1c6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 10",
      "id": "3ce3f9ae-a60a-474c-ad37-c79af91e1c6f",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ce3f9ae-a60a-474c-ad37-c79af91e1c6f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1307498182,
      "longitude": 27.2791589668
    }
  },
  "3ce8af14-1307-43bb-92dc-53bd7b410ba2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "3ce8af14-1307-43bb-92dc-53bd7b410ba2",
      "kilometrage": 477,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ce8af14-1307-43bb-92dc-53bd7b410ba2",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1329640376,
      "longitude": 26.7655284501
    }
  },
  "3cf0a9bd-4087-4ea9-8c74-66b6a0656239": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 192",
      "id": "3cf0a9bd-4087-4ea9-8c74-66b6a0656239",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3cf0a9bd-4087-4ea9-8c74-66b6a0656239",
    "image": "perev_left",
    "point": {
      "latitude": 52.157565545,
      "longitude": 24.0009359177
    }
  },
  "3d20e656-7b4c-46fb-b5d3-e1097bf49e1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3d20e656-7b4c-46fb-b5d3-e1097bf49e1f",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d20e656-7b4c-46fb-b5d3-e1097bf49e1f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.207052148,
      "longitude": 24.4241972317
    }
  },
  "3d342430-45dc-4145-a9f7-417a0fca48a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 9",
      "id": "3d342430-45dc-4145-a9f7-417a0fca48a5",
      "kilometrage": 534,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d342430-45dc-4145-a9f7-417a0fca48a5",
    "image": "perev_left",
    "point": {
      "latitude": 52.0824119175,
      "longitude": 26.1426773422
    }
  },
  "3d760a3c-fa24-44c1-8af9-4dcb22d6295d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "3d760a3c-fa24-44c1-8af9-4dcb22d6295d",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d760a3c-fa24-44c1-8af9-4dcb22d6295d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1426341512,
      "longitude": 27.2694776895
    }
  },
  "3d7b8005-fb2c-40d6-8438-764700879997": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 450",
      "id": "3d7b8005-fb2c-40d6-8438-764700879997",
      "kilometrage": 450,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d7b8005-fb2c-40d6-8438-764700879997",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1546507028,
      "longitude": 27.0372230202
    }
  },
  "3d8a91ec-d3d4-4326-ad2e-020b63cc5455": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3d8a91ec-d3d4-4326-ad2e-020b63cc5455",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d8a91ec-d3d4-4326-ad2e-020b63cc5455",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1508499549,
      "longitude": 24.7106389027
    }
  },
  "3dde24d2-a696-4395-90ca-be671730f162": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 257",
      "id": "3dde24d2-a696-4395-90ca-be671730f162",
      "kilometrage": 416,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dde24d2-a696-4395-90ca-be671730f162",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1483458708,
      "longitude": 27.3217567362
    }
  },
  "3dfbb30c-5183-475b-86c2-c418933bb4ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 142",
      "id": "3dfbb30c-5183-475b-86c2-c418933bb4ee",
      "kilometrage": 464,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dfbb30c-5183-475b-86c2-c418933bb4ee",
    "image": "perev_right",
    "point": {
      "latitude": 52.1341146297,
      "longitude": 26.9055388873
    }
  },
  "3dffb286-97c5-46ec-8e7b-865227fd9b28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "3dffb286-97c5-46ec-8e7b-865227fd9b28",
      "kilometrage": 111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dffb286-97c5-46ec-8e7b-865227fd9b28",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1612173112,
      "longitude": 24.6901919613
    }
  },
  "3e119b09-fd55-46ca-b70d-a6bd33bc3312": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 410",
      "id": "3e119b09-fd55-46ca-b70d-a6bd33bc3312",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e119b09-fd55-46ca-b70d-a6bd33bc3312",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1571306257,
      "longitude": 27.3477166894
    }
  },
  "3e2a286d-c7e5-4c53-a678-34bf5c28936e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 137",
      "id": "3e2a286d-c7e5-4c53-a678-34bf5c28936e",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e2a286d-c7e5-4c53-a678-34bf5c28936e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2168492808,
      "longitude": 24.3478323521
    }
  },
  "3e3a68af-f357-4ae5-ab85-a7dbf2dcae93": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "3e3a68af-f357-4ae5-ab85-a7dbf2dcae93",
      "kilometrage": 411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e3a68af-f357-4ae5-ab85-a7dbf2dcae93",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1561865891,
      "longitude": 27.3403733525
    }
  },
  "3e6a0b39-1aca-42f1-9cfb-dcbb374c8df0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "3e6a0b39-1aca-42f1-9cfb-dcbb374c8df0",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e6a0b39-1aca-42f1-9cfb-dcbb374c8df0",
    "image": "perev_right",
    "point": {
      "latitude": 52.1181765703,
      "longitude": 27.2708430738
    }
  },
  "3e72d4d0-64a2-4312-8004-d04c3409950f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "3e72d4d0-64a2-4312-8004-d04c3409950f",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e72d4d0-64a2-4312-8004-d04c3409950f",
    "image": "crossing_way",
    "point": {
      "latitude": 52.15047982,
      "longitude": 24.7098774598
    }
  },
  "3f104e60-b2cf-42e2-a0f1-b78779ff458b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 121",
      "id": "3f104e60-b2cf-42e2-a0f1-b78779ff458b",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f104e60-b2cf-42e2-a0f1-b78779ff458b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1424832165,
      "longitude": 26.7882507216
    }
  },
  "3f19683e-7562-4018-bdd4-86907d1f24eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 49",
      "id": "3f19683e-7562-4018-bdd4-86907d1f24eb",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f19683e-7562-4018-bdd4-86907d1f24eb",
    "image": "perev_right",
    "point": {
      "latitude": 52.1082731255,
      "longitude": 26.4219829463
    }
  },
  "3f215aa4-58db-4f01-81e7-a4e4f2411d73": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 158",
      "id": "3f215aa4-58db-4f01-81e7-a4e4f2411d73",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f215aa4-58db-4f01-81e7-a4e4f2411d73",
    "image": "perev_left",
    "point": {
      "latitude": 52.1963434733,
      "longitude": 24.209635571
    }
  },
  "3f23a060-2af5-4212-b8e4-183f8cd89033": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3f23a060-2af5-4212-b8e4-183f8cd89033",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f23a060-2af5-4212-b8e4-183f8cd89033",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1112678138,
      "longitude": 26.2930310062
    }
  },
  "3f6f5d15-8e66-4945-81db-a99f5f76a1ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "3f6f5d15-8e66-4945-81db-a99f5f76a1ab",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f6f5d15-8e66-4945-81db-a99f5f76a1ab",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1833424042,
      "longitude": 24.0371667276
    }
  },
  "3fe5c196-0900-4c7f-9ac8-bff4e321ecd2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "3fe5c196-0900-4c7f-9ac8-bff4e321ecd2",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3fe5c196-0900-4c7f-9ac8-bff4e321ecd2",
    "image": "attention",
    "point": {
      "latitude": 52.1073845826,
      "longitude": 23.9283304914
    }
  },
  "4008aa21-3dd7-4eda-97fe-35e4c117f386": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 200",
      "id": "4008aa21-3dd7-4eda-97fe-35e4c117f386",
      "kilometrage": 441,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4008aa21-3dd7-4eda-97fe-35e4c117f386",
    "image": "perev_left",
    "point": {
      "latitude": 52.1513168871,
      "longitude": 27.1102322354
    }
  },
  "4022bf39-3ae5-42be-9dee-98b12199a4bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 205",
      "id": "4022bf39-3ae5-42be-9dee-98b12199a4bb",
      "kilometrage": 439,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4022bf39-3ae5-42be-9dee-98b12199a4bb",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1571244748,
      "longitude": 27.132787723
    }
  },
  "40c1bae3-3628-413b-b7a8-99ea38b85e4f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 20",
      "id": "40c1bae3-3628-413b-b7a8-99ea38b85e4f",
      "kilometrage": 522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40c1bae3-3628-413b-b7a8-99ea38b85e4f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1152860054,
      "longitude": 26.2325290081
    }
  },
  "41892d2d-0d6d-43b7-a341-af1b7f9cec74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "41892d2d-0d6d-43b7-a341-af1b7f9cec74",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "41892d2d-0d6d-43b7-a341-af1b7f9cec74",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1359056564,
      "longitude": 23.9472286417
    }
  },
  "4198de0d-4d86-4eab-8e4f-5b759c72bd35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "4198de0d-4d86-4eab-8e4f-5b759c72bd35",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4198de0d-4d86-4eab-8e4f-5b759c72bd35",
    "image": "bridge_low",
    "point": {
      "latitude": 52.026571453,
      "longitude": 25.5820560499
    }
  },
  "42265925-ca7b-450c-8620-8e470768b144": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 110",
      "id": "42265925-ca7b-450c-8620-8e470768b144",
      "kilometrage": 479,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42265925-ca7b-450c-8620-8e470768b144",
    "image": "perev_right",
    "point": {
      "latitude": 52.121830046,
      "longitude": 26.7448813389
    }
  },
  "427a27c6-2241-4f8c-b4d0-6fb7bf903af8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "427a27c6-2241-4f8c-b4d0-6fb7bf903af8",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "427a27c6-2241-4f8c-b4d0-6fb7bf903af8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0896614825,
      "longitude": 23.7717280181
    }
  },
  "427fc5d3-436e-4abc-b36d-95a39bd478e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "427fc5d3-436e-4abc-b36d-95a39bd478e8",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "427fc5d3-436e-4abc-b36d-95a39bd478e8",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0820583461,
      "longitude": 23.6863080757
    }
  },
  "42a469d7-8921-415d-b476-fab5e26a3990": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "42a469d7-8921-415d-b476-fab5e26a3990",
      "kilometrage": 437,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42a469d7-8921-415d-b476-fab5e26a3990",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1459287006,
      "longitude": 27.1479943588
    }
  },
  "42c4aeb6-1c6b-45b3-b55b-54db1858d0b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 70",
      "id": "42c4aeb6-1c6b-45b3-b55b-54db1858d0b1",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42c4aeb6-1c6b-45b3-b55b-54db1858d0b1",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1593759318,
      "longitude": 24.6968689896
    }
  },
  "4314af0c-f177-4735-bdf5-a7294d85e7f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "4314af0c-f177-4735-bdf5-a7294d85e7f2",
      "kilometrage": 529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4314af0c-f177-4735-bdf5-a7294d85e7f2",
    "image": "speed_limit",
    "point": {
      "latitude": 52.1198297425,
      "longitude": 26.1256619115
    }
  },
  "435fceac-8a9d-4c81-bb9b-259e61f4993b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 160",
      "id": "435fceac-8a9d-4c81-bb9b-259e61f4993b",
      "kilometrage": 147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "435fceac-8a9d-4c81-bb9b-259e61f4993b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1957212271,
      "longitude": 24.1916272793
    }
  },
  "43c6bfcf-ac12-44ed-8998-e4da58ed7541": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "43c6bfcf-ac12-44ed-8998-e4da58ed7541",
      "kilometrage": 474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43c6bfcf-ac12-44ed-8998-e4da58ed7541",
    "image": "axis_romb",
    "point": {
      "latitude": 52.1417466464,
      "longitude": 26.7942658564
    }
  },
  "43c8c6c3-7333-4c06-b71f-ed21d11ae8f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "43c8c6c3-7333-4c06-b71f-ed21d11ae8f3",
      "kilometrage": 529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43c8c6c3-7333-4c06-b71f-ed21d11ae8f3",
    "image": "name_of",
    "point": {
      "latitude": 52.1201284447,
      "longitude": 26.1281503706
    }
  },
  "43ea2b13-9614-46a5-9fbe-180258df3bf2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "43ea2b13-9614-46a5-9fbe-180258df3bf2",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43ea2b13-9614-46a5-9fbe-180258df3bf2",
    "image": "name_of",
    "point": {
      "latitude": 52.2137791716,
      "longitude": 24.386060748
    }
  },
  "443391ce-e40c-4918-91b8-0beb681dc303": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 15",
      "id": "443391ce-e40c-4918-91b8-0beb681dc303",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "443391ce-e40c-4918-91b8-0beb681dc303",
    "image": "perev_left",
    "point": {
      "latitude": 52.1290503772,
      "longitude": 27.269297703
    }
  },
  "44445d52-8e30-4873-8db9-8abb0a96e034": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 183",
      "id": "44445d52-8e30-4873-8db9-8abb0a96e034",
      "kilometrage": 448,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44445d52-8e30-4873-8db9-8abb0a96e034",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1573120856,
      "longitude": 27.0569572741
    }
  },
  "45155d98-b9e4-49df-8fdc-3ef540b9df67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "45155d98-b9e4-49df-8fdc-3ef540b9df67",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45155d98-b9e4-49df-8fdc-3ef540b9df67",
    "image": "attention",
    "point": {
      "latitude": 52.1325764701,
      "longitude": 23.9466783112
    }
  },
  "451a1b0c-baed-42a9-bb96-37777b70376f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 17",
      "id": "451a1b0c-baed-42a9-bb96-37777b70376f",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "451a1b0c-baed-42a9-bb96-37777b70376f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1269637276,
      "longitude": 27.2673219179
    }
  },
  "4532b232-0e38-4bdc-891f-3caa901d6a9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "4532b232-0e38-4bdc-891f-3caa901d6a9a",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4532b232-0e38-4bdc-891f-3caa901d6a9a",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 52.1131381467,
      "longitude": 26.1149777744
    }
  },
  "45f83ac7-9df0-4e9b-bece-d46c283aaf2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 167",
      "id": "45f83ac7-9df0-4e9b-bece-d46c283aaf2b",
      "kilometrage": 454,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45f83ac7-9df0-4e9b-bece-d46c283aaf2b",
    "image": "perev_right",
    "point": {
      "latitude": 52.150537961,
      "longitude": 26.9989860565
    }
  },
  "46644f4c-a41a-410f-84f2-b5baac48a981": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 126",
      "id": "46644f4c-a41a-410f-84f2-b5baac48a981",
      "kilometrage": 470,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "46644f4c-a41a-410f-84f2-b5baac48a981",
    "image": "perev_left",
    "point": {
      "latitude": 52.1401083747,
      "longitude": 26.8465959552
    }
  },
  "46a2ccde-da25-4a36-a75a-f9e565961128": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "46a2ccde-da25-4a36-a75a-f9e565961128",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "46a2ccde-da25-4a36-a75a-f9e565961128",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.08837587,
      "longitude": 25.9651780557
    }
  },
  "46ba781b-9523-447d-9d0d-8768cf016747": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "46ba781b-9523-447d-9d0d-8768cf016747",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "46ba781b-9523-447d-9d0d-8768cf016747",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1412157154,
      "longitude": 26.7939007001
    }
  },
  "4712c1cc-7307-4624-9e19-05c477c55be1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 50",
      "id": "4712c1cc-7307-4624-9e19-05c477c55be1",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4712c1cc-7307-4624-9e19-05c477c55be1",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0874437006,
      "longitude": 24.9488010165
    }
  },
  "473e4225-f684-4975-836d-1713ccff82be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "473e4225-f684-4975-836d-1713ccff82be",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "473e4225-f684-4975-836d-1713ccff82be",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0536403118,
      "longitude": 25.1089767285
    }
  },
  "479945ee-4fe6-4390-a2ce-7ff9a92937b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "479945ee-4fe6-4390-a2ce-7ff9a92937b0",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "479945ee-4fe6-4390-a2ce-7ff9a92937b0",
    "image": "bridge_low",
    "point": {
      "latitude": 52.2127548436,
      "longitude": 24.3976991038
    }
  },
  "47b0c59b-d12c-4904-adaf-0dea62db156f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 3",
      "id": "47b0c59b-d12c-4904-adaf-0dea62db156f",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47b0c59b-d12c-4904-adaf-0dea62db156f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1375137939,
      "longitude": 27.2782274481
    }
  },
  "47bce07b-b8ed-46cc-9b29-f0bbccaa5e94": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 103",
      "id": "47bce07b-b8ed-46cc-9b29-f0bbccaa5e94",
      "kilometrage": 483,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47bce07b-b8ed-46cc-9b29-f0bbccaa5e94",
    "image": "buyo_left",
    "point": {
      "latitude": 52.114674722,
      "longitude": 26.700338444
    }
  },
  "47e7854b-f863-4816-8ab3-47c2c6235346": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "47e7854b-f863-4816-8ab3-47c2c6235346",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47e7854b-f863-4816-8ab3-47c2c6235346",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.215806234,
      "longitude": 24.35597064
    }
  },
  "4844274a-c906-4acd-be22-9d0aa0a320f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 186",
      "id": "4844274a-c906-4acd-be22-9d0aa0a320f2",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4844274a-c906-4acd-be22-9d0aa0a320f2",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1844339785,
      "longitude": 24.0208941984
    }
  },
  "485a1563-3b23-4569-bbb2-b9b22a151adb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 60",
      "id": "485a1563-3b23-4569-bbb2-b9b22a151adb",
      "kilometrage": 501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "485a1563-3b23-4569-bbb2-b9b22a151adb",
    "image": "perev_right",
    "point": {
      "latitude": 52.1112383995,
      "longitude": 26.4817301835
    }
  },
  "486a3912-e38a-4b59-ae15-2eed89a1b9de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 140",
      "id": "486a3912-e38a-4b59-ae15-2eed89a1b9de",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "486a3912-e38a-4b59-ae15-2eed89a1b9de",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2141966724,
      "longitude": 24.3323081794
    }
  },
  "4875fd70-d6fa-4f18-b72d-73a8c0d86d5d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 65",
      "id": "4875fd70-d6fa-4f18-b72d-73a8c0d86d5d",
      "kilometrage": 38,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4875fd70-d6fa-4f18-b72d-73a8c0d86d5d",
    "image": "perev_left",
    "point": {
      "latitude": 52.0516256002,
      "longitude": 25.636807802
    }
  },
  "48b2bd2f-6973-4f31-92c2-99a51e0e7577": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 134",
      "id": "48b2bd2f-6973-4f31-92c2-99a51e0e7577",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48b2bd2f-6973-4f31-92c2-99a51e0e7577",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2134190405,
      "longitude": 24.3683881596
    }
  },
  "48ce620b-1e61-45ce-b30a-d142a88c57ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 2",
      "id": "48ce620b-1e61-45ce-b30a-d142a88c57ec",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48ce620b-1e61-45ce-b30a-d142a88c57ec",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1732774424,
      "longitude": 27.3631252471
    }
  },
  "491c074b-17d7-4b6d-b6c1-46a7b2ab0ba4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 188",
      "id": "491c074b-17d7-4b6d-b6c1-46a7b2ab0ba4",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "491c074b-17d7-4b6d-b6c1-46a7b2ab0ba4",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1697921358,
      "longitude": 24.0118631074
    }
  },
  "4980920e-bc36-4fcc-b093-3d8eb3b6c2e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 176",
      "id": "4980920e-bc36-4fcc-b093-3d8eb3b6c2e7",
      "kilometrage": 451,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4980920e-bc36-4fcc-b093-3d8eb3b6c2e7",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1613716238,
      "longitude": 27.0347928955
    }
  },
  "49cdffc8-8cad-462e-a5f5-60986201d9c2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 247",
      "id": "49cdffc8-8cad-462e-a5f5-60986201d9c2",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49cdffc8-8cad-462e-a5f5-60986201d9c2",
    "image": "perev_left",
    "point": {
      "latitude": 52.143803617,
      "longitude": 27.272820912
    }
  },
  "49e5d4e1-e73c-4779-a838-983a477795bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "49e5d4e1-e73c-4779-a838-983a477795bf",
      "kilometrage": 474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49e5d4e1-e73c-4779-a838-983a477795bf",
    "image": "bridge_low",
    "point": {
      "latitude": 52.1417238782,
      "longitude": 26.7948456641
    }
  },
  "49f94e67-6c86-4a58-b77c-439380e03dff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 153",
      "id": "49f94e67-6c86-4a58-b77c-439380e03dff",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49f94e67-6c86-4a58-b77c-439380e03dff",
    "image": "perev_right",
    "point": {
      "latitude": 52.2043721879,
      "longitude": 24.2343551782
    }
  },
  "4a06e01c-c694-470d-9101-71cd6bc2259a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4a06e01c-c694-470d-9101-71cd6bc2259a",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a06e01c-c694-470d-9101-71cd6bc2259a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1448998559,
      "longitude": 24.7221837743
    }
  },
  "4a7fe4e1-673b-425d-94c7-95b30d01a958": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4a7fe4e1-673b-425d-94c7-95b30d01a958",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a7fe4e1-673b-425d-94c7-95b30d01a958",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1169607128,
      "longitude": 23.9361080987
    }
  },
  "4aa5a01a-8b69-480c-ad8b-3533c5afe295": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 18",
      "id": "4aa5a01a-8b69-480c-ad8b-3533c5afe295",
      "kilometrage": 523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4aa5a01a-8b69-480c-ad8b-3533c5afe295",
    "image": "perev_right",
    "point": {
      "latitude": 52.1123971732,
      "longitude": 26.2155296249
    }
  },
  "4aab3441-e008-48d5-bf61-d2d991d685b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 198",
      "id": "4aab3441-e008-48d5-bf61-d2d991d685b4",
      "kilometrage": 442,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4aab3441-e008-48d5-bf61-d2d991d685b4",
    "image": "perev_right",
    "point": {
      "latitude": 52.1427308385,
      "longitude": 27.1038639851
    }
  },
  "4aae815e-ce9f-4ba7-8212-57ca70e704b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 87",
      "id": "4aae815e-ce9f-4ba7-8212-57ca70e704b0",
      "kilometrage": 65,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4aae815e-ce9f-4ba7-8212-57ca70e704b0",
    "image": "perev_right",
    "point": {
      "latitude": 52.0228950056,
      "longitude": 25.2719357252
    }
  },
  "4adac80c-ac52-4bb8-bf52-1cac0cf89e3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 178",
      "id": "4adac80c-ac52-4bb8-bf52-1cac0cf89e3d",
      "kilometrage": 450,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4adac80c-ac52-4bb8-bf52-1cac0cf89e3d",
    "image": "perev_right",
    "point": {
      "latitude": 52.1555322908,
      "longitude": 27.0344105142
    }
  },
  "4ae6505d-b318-498c-bf0f-0b6f0041ddb1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 106",
      "id": "4ae6505d-b318-498c-bf0f-0b6f0041ddb1",
      "kilometrage": 90,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ae6505d-b318-498c-bf0f-0b6f0041ddb1",
    "image": "perev_left",
    "point": {
      "latitude": 52.0861300532,
      "longitude": 24.952065122
    }
  },
  "4b4069a5-a25f-4811-a5a3-79f5770749d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4b4069a5-a25f-4811-a5a3-79f5770749d6",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b4069a5-a25f-4811-a5a3-79f5770749d6",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2067802102,
      "longitude": 24.4295442042
    }
  },
  "4b6030a7-aee0-4fe8-8fe8-78cef667f792": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "4b6030a7-aee0-4fe8-8fe8-78cef667f792",
      "kilometrage": 478,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b6030a7-aee0-4fe8-8fe8-78cef667f792",
    "image": "buyo_left",
    "point": {
      "latitude": 52.12690843,
      "longitude": 26.7590328266
    }
  },
  "4ba1d49c-05bd-4371-8a45-78feef7e8b06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 12",
      "id": "4ba1d49c-05bd-4371-8a45-78feef7e8b06",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ba1d49c-05bd-4371-8a45-78feef7e8b06",
    "image": "perev_left",
    "point": {
      "latitude": 52.1304123095,
      "longitude": 27.2734465886
    }
  },
  "4c5aa9d3-074b-454b-b567-288e7ad582f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 181",
      "id": "4c5aa9d3-074b-454b-b567-288e7ad582f2",
      "kilometrage": 449,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c5aa9d3-074b-454b-b567-288e7ad582f2",
    "image": "perev_right",
    "point": {
      "latitude": 52.1545192773,
      "longitude": 27.0474929571
    }
  },
  "4c7b790f-90bc-42db-b17e-5e61e4cb0b49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4c7b790f-90bc-42db-b17e-5e61e4cb0b49",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c7b790f-90bc-42db-b17e-5e61e4cb0b49",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2133622329,
      "longitude": 24.3686629583
    }
  },
  "4cab7eb2-63b9-4ff1-9535-a77e526f35d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 217",
      "id": "4cab7eb2-63b9-4ff1-9535-a77e526f35d6",
      "kilometrage": 435,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4cab7eb2-63b9-4ff1-9535-a77e526f35d6",
    "image": "perev_right",
    "point": {
      "latitude": 52.1466648919,
      "longitude": 27.1750676472
    }
  },
  "4d08c68a-f138-4543-992a-618083fa17e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4d08c68a-f138-4543-992a-618083fa17e4",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d08c68a-f138-4543-992a-618083fa17e4",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0818766012,
      "longitude": 23.6899043009
    }
  },
  "4d1c709b-050d-4854-9c63-0448c1ea1dcd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4d1c709b-050d-4854-9c63-0448c1ea1dcd",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d1c709b-050d-4854-9c63-0448c1ea1dcd",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0540509487,
      "longitude": 25.0862001853
    }
  },
  "4dd788ac-9436-44e6-8f0e-2dbfc242d330": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 11",
      "id": "4dd788ac-9436-44e6-8f0e-2dbfc242d330",
      "kilometrage": 8,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4dd788ac-9436-44e6-8f0e-2dbfc242d330",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1020272828,
      "longitude": 26.0307395712
    }
  },
  "4de5e471-9479-4a8f-b94a-b59ae62a9da6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 55",
      "id": "4de5e471-9479-4a8f-b94a-b59ae62a9da6",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4de5e471-9479-4a8f-b94a-b59ae62a9da6",
    "image": "perev_right",
    "point": {
      "latitude": 52.0739909321,
      "longitude": 25.7020895582
    }
  },
  "4e19e2b3-927f-4824-810f-09b31b7b108b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 147",
      "id": "4e19e2b3-927f-4824-810f-09b31b7b108b",
      "kilometrage": 462,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e19e2b3-927f-4824-810f-09b31b7b108b",
    "image": "perev_left",
    "point": {
      "latitude": 52.145636739,
      "longitude": 26.919087824
    }
  },
  "4e81fade-a3c6-45e9-8aac-aed5a95b6893": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 236",
      "id": "4e81fade-a3c6-45e9-8aac-aed5a95b6893",
      "kilometrage": 427,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e81fade-a3c6-45e9-8aac-aed5a95b6893",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1553036926,
      "longitude": 27.2345754654
    }
  },
  "4fc945d5-80b9-4514-a7e1-82c6d844526f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "4fc945d5-80b9-4514-a7e1-82c6d844526f",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4fc945d5-80b9-4514-a7e1-82c6d844526f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0984202379,
      "longitude": 26.072789986
    }
  },
  "4fe4d77c-5319-424b-9b77-43569a1b2fc1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 69а",
      "id": "4fe4d77c-5319-424b-9b77-43569a1b2fc1",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4fe4d77c-5319-424b-9b77-43569a1b2fc1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0329115212,
      "longitude": 25.6172105505
    }
  },
  "5039d191-beb9-4383-bd0b-569d9aa9bcbd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение стоянки судов на якоре или на швартовых у берега  ",
      "id": "5039d191-beb9-4383-bd0b-569d9aa9bcbd",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5039d191-beb9-4383-bd0b-569d9aa9bcbd",
    "image": "parking_forbidden",
    "point": {
      "latitude": 52.1065707873,
      "longitude": 26.0979164952
    }
  },
  "503c5c4f-06c8-4dc0-98d6-eb331af65a7e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 6",
      "id": "503c5c4f-06c8-4dc0-98d6-eb331af65a7e",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "503c5c4f-06c8-4dc0-98d6-eb331af65a7e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0954504549,
      "longitude": 26.0638290758
    }
  },
  "5069b9f2-d757-4df8-bced-3695eb3a0456": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 258",
      "id": "5069b9f2-d757-4df8-bced-3695eb3a0456",
      "kilometrage": 415,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5069b9f2-d757-4df8-bced-3695eb3a0456",
    "image": "perev_left",
    "point": {
      "latitude": 52.1427351663,
      "longitude": 27.3303276851
    }
  },
  "50ca8908-49e2-4a10-b287-e0050f478681": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 249",
      "id": "50ca8908-49e2-4a10-b287-e0050f478681",
      "kilometrage": 191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50ca8908-49e2-4a10-b287-e0050f478681",
    "image": "buyo_left",
    "point": {
      "latitude": 52.080306,
      "longitude": 23.703483556
    }
  },
  "50d721e9-2840-4484-8f49-f3c24041e7f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "50d721e9-2840-4484-8f49-f3c24041e7f8",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50d721e9-2840-4484-8f49-f3c24041e7f8",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0268890852,
      "longitude": 25.5838095153
    }
  },
  "50eea4c1-2576-40fd-9407-b9b3d0d471a6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "50eea4c1-2576-40fd-9407-b9b3d0d471a6",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50eea4c1-2576-40fd-9407-b9b3d0d471a6",
    "image": "stop",
    "point": {
      "latitude": 52.0372969626,
      "longitude": 25.1611832308
    }
  },
  "512d0677-458d-49fa-a69f-323c14cfc52d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 61",
      "id": "512d0677-458d-49fa-a69f-323c14cfc52d",
      "kilometrage": 501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "512d0677-458d-49fa-a69f-323c14cfc52d",
    "image": "perev_right",
    "point": {
      "latitude": 52.111749446,
      "longitude": 26.4887688739
    }
  },
  "5188e877-3812-4886-a154-8dee2418bcf9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Имеются ограничения судоходства  ",
      "id": "5188e877-3812-4886-a154-8dee2418bcf9",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5188e877-3812-4886-a154-8dee2418bcf9",
    "image": "limitations",
    "point": {
      "latitude": 52.068252161,
      "longitude": 27.2100079549
    }
  },
  "519a5963-8790-41a1-a868-d46f37ad0f2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "519a5963-8790-41a1-a868-d46f37ad0f2d",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "519a5963-8790-41a1-a868-d46f37ad0f2d",
    "image": "attention",
    "point": {
      "latitude": 52.2117360415,
      "longitude": 24.4016253998
    }
  },
  "519d6594-7d1a-474e-b368-e5b4b32f6266": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "519d6594-7d1a-474e-b368-e5b4b32f6266",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "519d6594-7d1a-474e-b368-e5b4b32f6266",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1403618788,
      "longitude": 23.9505505607
    }
  },
  "51c60a87-dd2a-45cd-bf7e-ed86c36f63aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "51c60a87-dd2a-45cd-bf7e-ed86c36f63aa",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51c60a87-dd2a-45cd-bf7e-ed86c36f63aa",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1110494545,
      "longitude": 26.2857856444
    }
  },
  "52221613-fb75-437a-8abb-9478ebfd7744": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "52221613-fb75-437a-8abb-9478ebfd7744",
      "kilometrage": 476,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "52221613-fb75-437a-8abb-9478ebfd7744",
    "image": "name_of",
    "point": {
      "latitude": 52.1374144504,
      "longitude": 26.7693511367
    }
  },
  "52281dd3-08ab-486b-8f9a-44df0043d862": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 25",
      "id": "52281dd3-08ab-486b-8f9a-44df0043d862",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "52281dd3-08ab-486b-8f9a-44df0043d862",
    "image": "perev_left",
    "point": {
      "latitude": 52.1157756129,
      "longitude": 27.2642755793
    }
  },
  "528c6a7a-0280-46cd-9645-c24cf993f4e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 67",
      "id": "528c6a7a-0280-46cd-9645-c24cf993f4e8",
      "kilometrage": 499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "528c6a7a-0280-46cd-9645-c24cf993f4e8",
    "image": "perev_left",
    "point": {
      "latitude": 52.1137371949,
      "longitude": 26.5159997308
    }
  },
  "529089e7-836d-4d21-9790-dfe02eff830b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "529089e7-836d-4d21-9790-dfe02eff830b",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "529089e7-836d-4d21-9790-dfe02eff830b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0550087964,
      "longitude": 25.0854425082
    }
  },
  "52baa68a-70ec-4981-b498-1a094f4d0c25": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 8",
      "id": "52baa68a-70ec-4981-b498-1a094f4d0c25",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "52baa68a-70ec-4981-b498-1a094f4d0c25",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1168039485,
      "longitude": 26.1563205013
    }
  },
  "52db15fb-9c3e-4b60-a603-ae1efca99bfe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 23",
      "id": "52db15fb-9c3e-4b60-a603-ae1efca99bfe",
      "kilometrage": 520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "52db15fb-9c3e-4b60-a603-ae1efca99bfe",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1143752261,
      "longitude": 26.25296974
    }
  },
  "52f1bc04-91a0-45c3-b9de-4fe99b2ab563": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 243",
      "id": "52f1bc04-91a0-45c3-b9de-4fe99b2ab563",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "52f1bc04-91a0-45c3-b9de-4fe99b2ab563",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0833025848,
      "longitude": 23.722214674
    }
  },
  "5301425e-d10c-4763-999e-404ec1e00ff5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "5301425e-d10c-4763-999e-404ec1e00ff5",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5301425e-d10c-4763-999e-404ec1e00ff5",
    "image": "attention",
    "point": {
      "latitude": 52.039048086,
      "longitude": 25.1551445653
    }
  },
  "530ca46d-7299-4f99-af23-2af5e4c41855": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 68",
      "id": "530ca46d-7299-4f99-af23-2af5e4c41855",
      "kilometrage": 498,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "530ca46d-7299-4f99-af23-2af5e4c41855",
    "image": "perev_right",
    "point": {
      "latitude": 52.1121589403,
      "longitude": 26.5202762503
    }
  },
  "53154d60-4243-4587-b4c6-8a27779f1f4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 102",
      "id": "53154d60-4243-4587-b4c6-8a27779f1f4a",
      "kilometrage": 484,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53154d60-4243-4587-b4c6-8a27779f1f4a",
    "image": "perev_right",
    "point": {
      "latitude": 52.1148703033,
      "longitude": 26.6916759938
    }
  },
  "533a9d3e-6df2-453d-8d81-4b2338e1e69f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 52",
      "id": "533a9d3e-6df2-453d-8d81-4b2338e1e69f",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "533a9d3e-6df2-453d-8d81-4b2338e1e69f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1203512534,
      "longitude": 26.4414794855
    }
  },
  "53482c25-7cf7-4191-9081-474f1570b641": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 89",
      "id": "53482c25-7cf7-4191-9081-474f1570b641",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53482c25-7cf7-4191-9081-474f1570b641",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1217414691,
      "longitude": 26.6101232805
    }
  },
  "535a8a48-fd01-4c0b-b9f7-8d4127f48c48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 44",
      "id": "535a8a48-fd01-4c0b-b9f7-8d4127f48c48",
      "kilometrage": 435,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "535a8a48-fd01-4c0b-b9f7-8d4127f48c48",
    "image": "perev_right",
    "point": {
      "latitude": 52.0652718591,
      "longitude": 27.2018305045
    }
  },
  "53a3d9d5-890e-4392-b44f-f5f3a94f4d50": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 62",
      "id": "53a3d9d5-890e-4392-b44f-f5f3a94f4d50",
      "kilometrage": 37,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53a3d9d5-890e-4392-b44f-f5f3a94f4d50",
    "image": "perev_right",
    "point": {
      "latitude": 52.0551916404,
      "longitude": 25.6515148027
    }
  },
  "53a47741-7b18-437c-8d3e-b8bae536c3b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 193",
      "id": "53a47741-7b18-437c-8d3e-b8bae536c3b1",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53a47741-7b18-437c-8d3e-b8bae536c3b1",
    "image": "perev_right",
    "point": {
      "latitude": 52.1569061909,
      "longitude": 23.9983346211
    }
  },
  "540295d6-a882-445f-bc3d-518b5b870cbe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "540295d6-a882-445f-bc3d-518b5b870cbe",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "540295d6-a882-445f-bc3d-518b5b870cbe",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1429702323,
      "longitude": 27.2749108044
    }
  },
  "54114229-d1c4-4622-bc9c-aec17dc59358": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 35",
      "id": "54114229-d1c4-4622-bc9c-aec17dc59358",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54114229-d1c4-4622-bc9c-aec17dc59358",
    "image": "perev_right",
    "point": {
      "latitude": 52.0731140245,
      "longitude": 25.8595479427
    }
  },
  "5447d4e6-d1e8-4ff1-a5ac-1088cea448f9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 500",
      "id": "5447d4e6-d1e8-4ff1-a5ac-1088cea448f9",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5447d4e6-d1e8-4ff1-a5ac-1088cea448f9",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1153606928,
      "longitude": 26.4931168255
    }
  },
  "54d32eed-1c7b-41aa-baa2-2da5bf9adc24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 90",
      "id": "54d32eed-1c7b-41aa-baa2-2da5bf9adc24",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54d32eed-1c7b-41aa-baa2-2da5bf9adc24",
    "image": "perev_left",
    "point": {
      "latitude": 52.0382584116,
      "longitude": 25.2176858411
    }
  },
  "552ee673-d772-4b92-be98-5508f73e3220": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "552ee673-d772-4b92-be98-5508f73e3220",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "552ee673-d772-4b92-be98-5508f73e3220",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0798450609,
      "longitude": 25.7776812528
    }
  },
  "554251d0-d1fb-444e-86ec-0a1cc653a4e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 90",
      "id": "554251d0-d1fb-444e-86ec-0a1cc653a4e2",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "554251d0-d1fb-444e-86ec-0a1cc653a4e2",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2090020212,
      "longitude": 24.4167803624
    }
  },
  "55be2718-2226-47e9-9a2a-ee44deade59b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 266",
      "id": "55be2718-2226-47e9-9a2a-ee44deade59b",
      "kilometrage": 411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "55be2718-2226-47e9-9a2a-ee44deade59b",
    "image": "perev_right",
    "point": {
      "latitude": 52.1543579875,
      "longitude": 27.3411895569
    }
  },
  "5600abc0-06ac-45a1-a600-55bd3750f065": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 214",
      "id": "5600abc0-06ac-45a1-a600-55bd3750f065",
      "kilometrage": 436,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5600abc0-06ac-45a1-a600-55bd3750f065",
    "image": "perev_left",
    "point": {
      "latitude": 52.1485551502,
      "longitude": 27.1658600935
    }
  },
  "564a6ee5-1adf-45b9-970e-c8c4a83dfcb1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "564a6ee5-1adf-45b9-970e-c8c4a83dfcb1",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "564a6ee5-1adf-45b9-970e-c8c4a83dfcb1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0800193226,
      "longitude": 23.7065579415
    }
  },
  "564d3742-7b78-4a5a-8513-55f81be90ac4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 10",
      "id": "564d3742-7b78-4a5a-8513-55f81be90ac4",
      "kilometrage": 535,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "564d3742-7b78-4a5a-8513-55f81be90ac4",
    "image": "perev_right",
    "point": {
      "latitude": 52.0789462323,
      "longitude": 26.1460596375
    }
  },
  "56510ce5-c94c-4ffa-b15f-21a552b79598": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 241",
      "id": "56510ce5-c94c-4ffa-b15f-21a552b79598",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56510ce5-c94c-4ffa-b15f-21a552b79598",
    "image": "perev_left",
    "point": {
      "latitude": 52.0843504991,
      "longitude": 23.7272174176
    }
  },
  "5675ecd9-895d-4055-a138-ac523031618a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5675ecd9-895d-4055-a138-ac523031618a",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5675ecd9-895d-4055-a138-ac523031618a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1452871276,
      "longitude": 26.8196945155
    }
  },
  "567972e4-8ba7-45a5-9ada-ef4d1f326095": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 163",
      "id": "567972e4-8ba7-45a5-9ada-ef4d1f326095",
      "kilometrage": 455,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "567972e4-8ba7-45a5-9ada-ef4d1f326095",
    "image": "perev_right",
    "point": {
      "latitude": 52.1584075851,
      "longitude": 26.9896617418
    }
  },
  "56e9db0e-afb8-4837-8384-a3c339e488bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "56e9db0e-afb8-4837-8384-a3c339e488bc",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56e9db0e-afb8-4837-8384-a3c339e488bc",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1944032611,
      "longitude": 24.1001017519
    }
  },
  "56febe70-7b3c-42d6-b048-0101c8fd17dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 104",
      "id": "56febe70-7b3c-42d6-b048-0101c8fd17dd",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56febe70-7b3c-42d6-b048-0101c8fd17dd",
    "image": "perev_left",
    "point": {
      "latitude": 52.0665524133,
      "longitude": 24.9993391814
    }
  },
  "575b13a4-44aa-4b39-b0ca-74bb769a90bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "575b13a4-44aa-4b39-b0ca-74bb769a90bc",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "575b13a4-44aa-4b39-b0ca-74bb769a90bc",
    "image": "attention",
    "point": {
      "latitude": 52.117602048,
      "longitude": 26.4312056083
    }
  },
  "576e8dbe-2d51-4074-a361-6ecbfdc3cb79": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "576e8dbe-2d51-4074-a361-6ecbfdc3cb79",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "576e8dbe-2d51-4074-a361-6ecbfdc3cb79",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1833411413,
      "longitude": 24.0341897374
    }
  },
  "579f43c5-7937-4369-a9c6-46bf90afb52d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 116",
      "id": "579f43c5-7937-4369-a9c6-46bf90afb52d",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "579f43c5-7937-4369-a9c6-46bf90afb52d",
    "image": "perev_right",
    "point": {
      "latitude": 52.1267417845,
      "longitude": 24.803825602
    }
  },
  "57ac4f40-1808-4472-a3a2-2a6d804b0848": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 165",
      "id": "57ac4f40-1808-4472-a3a2-2a6d804b0848",
      "kilometrage": 455,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57ac4f40-1808-4472-a3a2-2a6d804b0848",
    "image": "perev_left",
    "point": {
      "latitude": 52.1575825589,
      "longitude": 26.9960612569
    }
  },
  "57e50508-bd1c-4a5f-b04b-1c43b68b76f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 231а",
      "id": "57e50508-bd1c-4a5f-b04b-1c43b68b76f4",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57e50508-bd1c-4a5f-b04b-1c43b68b76f4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0907936897,
      "longitude": 23.7906993253
    }
  },
  "57f8b6a1-9c23-4d17-8f46-017fe0fe3599": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 245",
      "id": "57f8b6a1-9c23-4d17-8f46-017fe0fe3599",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57f8b6a1-9c23-4d17-8f46-017fe0fe3599",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1415314251,
      "longitude": 27.2566703204
    }
  },
  "582a9fae-50e3-47f4-8d39-62d5b6838312": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 115",
      "id": "582a9fae-50e3-47f4-8d39-62d5b6838312",
      "kilometrage": 101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "582a9fae-50e3-47f4-8d39-62d5b6838312",
    "image": "perev_left",
    "point": {
      "latitude": 52.1205877256,
      "longitude": 24.8123200888
    }
  },
  "583b06a0-418f-4437-ad55-3d14d78f8a8a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 88",
      "id": "583b06a0-418f-4437-ad55-3d14d78f8a8a",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "583b06a0-418f-4437-ad55-3d14d78f8a8a",
    "image": "perev_left",
    "point": {
      "latitude": 52.0285203778,
      "longitude": 25.2553725994
    }
  },
  "5848fcbc-93cd-47a5-973b-75875f7e7796": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "5848fcbc-93cd-47a5-973b-75875f7e7796",
      "kilometrage": 411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5848fcbc-93cd-47a5-973b-75875f7e7796",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1547782041,
      "longitude": 27.340075331
    }
  },
  "58bcf9f1-f8ea-4097-9d1a-1e2fbfec0183": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 53",
      "id": "58bcf9f1-f8ea-4097-9d1a-1e2fbfec0183",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "58bcf9f1-f8ea-4097-9d1a-1e2fbfec0183",
    "image": "perev_right",
    "point": {
      "latitude": 52.1169725213,
      "longitude": 26.4446353395
    }
  },
  "58d1fbf7-0515-46c6-8c99-1627eade7f9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 119",
      "id": "58d1fbf7-0515-46c6-8c99-1627eade7f9a",
      "kilometrage": 476,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "58d1fbf7-0515-46c6-8c99-1627eade7f9a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1398930793,
      "longitude": 26.7767935978
    }
  },
  "58f2aa22-993d-4dbb-a757-a7241429c33e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй 2",
      "id": "58f2aa22-993d-4dbb-a757-a7241429c33e",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "58f2aa22-993d-4dbb-a757-a7241429c33e",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.1168772383,
      "longitude": 26.1226863021
    }
  },
  "599e3cd4-2a60-4ff1-8720-6c6bae8fb77d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "599e3cd4-2a60-4ff1-8720-6c6bae8fb77d",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "599e3cd4-2a60-4ff1-8720-6c6bae8fb77d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0301212978,
      "longitude": 25.2473669116
    }
  },
  "59d64ae0-dbf6-475a-b423-b1d106aeab22": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 80",
      "id": "59d64ae0-dbf6-475a-b423-b1d106aeab22",
      "kilometrage": 54,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59d64ae0-dbf6-475a-b423-b1d106aeab22",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.018220744,
      "longitude": 25.433349482
    }
  },
  "59e18cbc-1325-42af-b439-7bc8d56dc970": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 92",
      "id": "59e18cbc-1325-42af-b439-7bc8d56dc970",
      "kilometrage": 489,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59e18cbc-1325-42af-b439-7bc8d56dc970",
    "image": "perev_right",
    "point": {
      "latitude": 52.1252402888,
      "longitude": 26.627232855
    }
  },
  "5a1617b2-6d57-43bf-a85c-c1d0d8c4e68c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 13",
      "id": "5a1617b2-6d57-43bf-a85c-c1d0d8c4e68c",
      "kilometrage": 8,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a1617b2-6d57-43bf-a85c-c1d0d8c4e68c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1038759913,
      "longitude": 26.0192386999
    }
  },
  "5a1c057e-77a0-4ddc-986a-82796fc84057": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 173",
      "id": "5a1c057e-77a0-4ddc-986a-82796fc84057",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a1c057e-77a0-4ddc-986a-82796fc84057",
    "image": "perev_right",
    "point": {
      "latitude": 52.1944069288,
      "longitude": 24.1052878705
    }
  },
  "5aa1267a-8e3b-4a9f-9b63-a58c0f2ba221": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "5aa1267a-8e3b-4a9f-9b63-a58c0f2ba221",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5aa1267a-8e3b-4a9f-9b63-a58c0f2ba221",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1248584911,
      "longitude": 23.9381557155
    }
  },
  "5ad3d165-edea-4d26-9365-a454c76c1b06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 180",
      "id": "5ad3d165-edea-4d26-9365-a454c76c1b06",
      "kilometrage": 158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ad3d165-edea-4d26-9365-a454c76c1b06",
    "image": "perev_left",
    "point": {
      "latitude": 52.1941991386,
      "longitude": 24.0586521611
    }
  },
  "5b2df258-3e87-401e-85e1-a0b9e1f84d3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5b2df258-3e87-401e-85e1-a0b9e1f84d3d",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b2df258-3e87-401e-85e1-a0b9e1f84d3d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1827110254,
      "longitude": 24.0358136167
    }
  },
  "5b31d494-7499-423b-a4e1-9e3946b09a06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 233",
      "id": "5b31d494-7499-423b-a4e1-9e3946b09a06",
      "kilometrage": 429,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b31d494-7499-423b-a4e1-9e3946b09a06",
    "image": "perev_right",
    "point": {
      "latitude": 52.163192633,
      "longitude": 27.2222948806
    }
  },
  "5b51a0f3-926f-4f50-88e5-35e5204b6dc9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "5b51a0f3-926f-4f50-88e5-35e5204b6dc9",
      "kilometrage": 19,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b51a0f3-926f-4f50-88e5-35e5204b6dc9",
    "image": "crossing_way",
    "point": {
      "latitude": 52.076384426,
      "longitude": 25.8826102651
    }
  },
  "5bb9d214-b45c-41b6-b7e5-df8454d35502": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "5bb9d214-b45c-41b6-b7e5-df8454d35502",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5bb9d214-b45c-41b6-b7e5-df8454d35502",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1423466231,
      "longitude": 26.7895201575
    }
  },
  "5c1c0511-6c1a-4e99-90ab-5ea1ba8978a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "5c1c0511-6c1a-4e99-90ab-5ea1ba8978a5",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c1c0511-6c1a-4e99-90ab-5ea1ba8978a5",
    "image": "name_of",
    "point": {
      "latitude": 52.1603881293,
      "longitude": 27.3467241416
    }
  },
  "5c22d08f-d9bd-40c4-87c6-ddbf8e1871d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Запрещение стоянки судов на якоре или на швартовых у берега  ",
      "id": "5c22d08f-d9bd-40c4-87c6-ddbf8e1871d2",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c22d08f-d9bd-40c4-87c6-ddbf8e1871d2",
    "image": "parking_forbidden",
    "point": {
      "latitude": 52.1063174741,
      "longitude": 26.0958401362
    }
  },
  "5c606ee8-527d-498b-84bb-7fe9bb55a2dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 45",
      "id": "5c606ee8-527d-498b-84bb-7fe9bb55a2dc",
      "kilometrage": 86,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c606ee8-527d-498b-84bb-7fe9bb55a2dc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0633350618,
      "longitude": 25.0072231757
    }
  },
  "5cd84ab6-83bd-494f-b8cf-95c5875e9d74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "5cd84ab6-83bd-494f-b8cf-95c5875e9d74",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5cd84ab6-83bd-494f-b8cf-95c5875e9d74",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0914149208,
      "longitude": 23.7876566093
    }
  },
  "5d05e1a5-6cc8-4ae8-b792-003333844bf6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 6",
      "id": "5d05e1a5-6cc8-4ae8-b792-003333844bf6",
      "kilometrage": 533,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5d05e1a5-6cc8-4ae8-b792-003333844bf6",
    "image": "perev_right",
    "point": {
      "latitude": 52.0889841873,
      "longitude": 26.1350833671
    }
  },
  "5d0bcb95-a7b9-4e89-85cc-df0089dfdc60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 93",
      "id": "5d0bcb95-a7b9-4e89-85cc-df0089dfdc60",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5d0bcb95-a7b9-4e89-85cc-df0089dfdc60",
    "image": "perev_left",
    "point": {
      "latitude": 52.039296447,
      "longitude": 25.1538967258
    }
  },
  "5de57c18-81ec-48a2-9c9f-bd44a21b45e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 41",
      "id": "5de57c18-81ec-48a2-9c9f-bd44a21b45e5",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5de57c18-81ec-48a2-9c9f-bd44a21b45e5",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0751403805,
      "longitude": 27.22412584
    }
  },
  "5e6897c2-692b-417b-a015-f0405112d04e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 24",
      "id": "5e6897c2-692b-417b-a015-f0405112d04e",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5e6897c2-692b-417b-a015-f0405112d04e",
    "image": "perev_left",
    "point": {
      "latitude": 52.0842953541,
      "longitude": 25.9360410559
    }
  },
  "5f16674f-eea9-451a-b098-41af56927101": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 530",
      "id": "5f16674f-eea9-451a-b098-41af56927101",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f16674f-eea9-451a-b098-41af56927101",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1127088954,
      "longitude": 26.1212077483
    }
  },
  "5f16cf2c-4b2f-4c54-ab67-9b0c90e0c000": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "5f16cf2c-4b2f-4c54-ab67-9b0c90e0c000",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f16cf2c-4b2f-4c54-ab67-9b0c90e0c000",
    "image": "name_of",
    "point": {
      "latitude": 52.1170838066,
      "longitude": 26.1241732977
    }
  },
  "5f24c204-8ce9-46fa-838b-536dc27cf72b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5f24c204-8ce9-46fa-838b-536dc27cf72b",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f24c204-8ce9-46fa-838b-536dc27cf72b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0819733742,
      "longitude": 23.6872042037
    }
  },
  "5f612f73-f3a0-46b6-977c-5497aff55338": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "5f612f73-f3a0-46b6-977c-5497aff55338",
      "kilometrage": 521,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f612f73-f3a0-46b6-977c-5497aff55338",
    "image": "perev_right",
    "point": {
      "latitude": 52.1135968343,
      "longitude": 26.248406003
    }
  },
  "5f65f650-a6e8-4bbc-93a4-78b0114db925": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 42",
      "id": "5f65f650-a6e8-4bbc-93a4-78b0114db925",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f65f650-a6e8-4bbc-93a4-78b0114db925",
    "image": "perev_left",
    "point": {
      "latitude": 52.0742438376,
      "longitude": 27.2188075182
    }
  },
  "5fb61fc0-877b-4050-a129-0aa25ca4cedf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 31",
      "id": "5fb61fc0-877b-4050-a129-0aa25ca4cedf",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5fb61fc0-877b-4050-a129-0aa25ca4cedf",
    "image": "perev_right",
    "point": {
      "latitude": 52.1067130827,
      "longitude": 27.2634335576
    }
  },
  "5fe3a0b6-ec28-43c0-9f98-d8d99336c358": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "5fe3a0b6-ec28-43c0-9f98-d8d99336c358",
      "kilometrage": 421,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5fe3a0b6-ec28-43c0-9f98-d8d99336c358",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1440017988,
      "longitude": 27.2845100414
    }
  },
  "601a6028-1b43-4c64-84a5-d60c76735488": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 435",
      "id": "601a6028-1b43-4c64-84a5-d60c76735488",
      "kilometrage": 435,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "601a6028-1b43-4c64-84a5-d60c76735488",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1471306877,
      "longitude": 27.1757282098
    }
  },
  "606448d0-60f7-489e-8592-e9a029b5c075": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 56",
      "id": "606448d0-60f7-489e-8592-e9a029b5c075",
      "kilometrage": 33,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "606448d0-60f7-489e-8592-e9a029b5c075",
    "image": "perev_left",
    "point": {
      "latitude": 52.0753322817,
      "longitude": 25.6935551455
    }
  },
  "60b7b2ab-715a-4473-923d-5821d6667357": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "60b7b2ab-715a-4473-923d-5821d6667357",
      "kilometrage": 57,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60b7b2ab-715a-4473-923d-5821d6667357",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0173812698,
      "longitude": 25.3995388953
    }
  },
  "60f43251-47c3-49a4-b238-449a15da12b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "60f43251-47c3-49a4-b238-449a15da12b6",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60f43251-47c3-49a4-b238-449a15da12b6",
    "image": "attention",
    "point": {
      "latitude": 52.0316083564,
      "longitude": 25.6128743881
    }
  },
  "617e2c7d-5f34-41af-87f5-a391e3e60a41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 254",
      "id": "617e2c7d-5f34-41af-87f5-a391e3e60a41",
      "kilometrage": 417,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "617e2c7d-5f34-41af-87f5-a391e3e60a41",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1405628077,
      "longitude": 27.311567407
    }
  },
  "618e7e1c-f31c-46c3-b671-c06198264a48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "618e7e1c-f31c-46c3-b671-c06198264a48",
      "kilometrage": 112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "618e7e1c-f31c-46c3-b671-c06198264a48",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1640458589,
      "longitude": 24.6704418375
    }
  },
  "61a0e698-b042-4496-b829-d64d1b2cf975": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 126а",
      "id": "61a0e698-b042-4496-b829-d64d1b2cf975",
      "kilometrage": 470,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61a0e698-b042-4496-b829-d64d1b2cf975",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1393614414,
      "longitude": 26.847972044
    }
  },
  "61e25008-4b9d-4e17-b0ec-f45d348c4e9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "61e25008-4b9d-4e17-b0ec-f45d348c4e9a",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61e25008-4b9d-4e17-b0ec-f45d348c4e9a",
    "image": "attention",
    "point": {
      "latitude": 52.0217735959,
      "longitude": 25.3309998673
    }
  },
  "61f89391-2d91-4a06-95bd-01b07b5d7879": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 77",
      "id": "61f89391-2d91-4a06-95bd-01b07b5d7879",
      "kilometrage": 495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61f89391-2d91-4a06-95bd-01b07b5d7879",
    "image": "perev_left",
    "point": {
      "latitude": 52.1175806701,
      "longitude": 26.5523036666
    }
  },
  "61ffef84-29a7-492a-b6e3-1b440d3ce141": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 28",
      "id": "61ffef84-29a7-492a-b6e3-1b440d3ce141",
      "kilometrage": 517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61ffef84-29a7-492a-b6e3-1b440d3ce141",
    "image": "perev_right",
    "point": {
      "latitude": 52.1124897578,
      "longitude": 26.3025791022
    }
  },
  "6243f5b7-e6fc-469d-a138-c84274e11192": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 124",
      "id": "6243f5b7-e6fc-469d-a138-c84274e11192",
      "kilometrage": 106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6243f5b7-e6fc-469d-a138-c84274e11192",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1453523689,
      "longitude": 24.7559696458
    }
  },
  "62921fdd-b5c3-4577-a526-11c40278ba3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "62921fdd-b5c3-4577-a526-11c40278ba3e",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62921fdd-b5c3-4577-a526-11c40278ba3e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2057092423,
      "longitude": 24.4358424972
    }
  },
  "62d5f3e3-558e-46a5-a713-405b379664da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 6",
      "id": "62d5f3e3-558e-46a5-a713-405b379664da",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62d5f3e3-558e-46a5-a713-405b379664da",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.20000793,
      "longitude": 27.3879748809
    }
  },
  "631a278a-52bc-4870-b2d7-39231971c95a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "631a278a-52bc-4870-b2d7-39231971c95a",
      "kilometrage": 51,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "631a278a-52bc-4870-b2d7-39231971c95a",
    "image": "stop",
    "point": {
      "latitude": 52.024966072,
      "longitude": 25.4788914063
    }
  },
  "633743c0-5c84-4382-9f46-fc3e27cc678e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "633743c0-5c84-4382-9f46-fc3e27cc678e",
      "kilometrage": 113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "633743c0-5c84-4382-9f46-fc3e27cc678e",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1656924431,
      "longitude": 24.6608887314
    }
  },
  "63498799-e25b-46c6-ae73-0f0db6006385": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 85",
      "id": "63498799-e25b-46c6-ae73-0f0db6006385",
      "kilometrage": 63,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63498799-e25b-46c6-ae73-0f0db6006385",
    "image": "perev_right",
    "point": {
      "latitude": 52.0211455452,
      "longitude": 25.3086830029
    }
  },
  "6381dcc8-1848-48a8-86cd-432da453ff1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 40",
      "id": "6381dcc8-1848-48a8-86cd-432da453ff1a",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6381dcc8-1848-48a8-86cd-432da453ff1a",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0572093397,
      "longitude": 25.0752890755
    }
  },
  "6384290b-3857-4112-bd1e-cc7e17a6211d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Предписание подать звуковой сигнал  ",
      "id": "6384290b-3857-4112-bd1e-cc7e17a6211d",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6384290b-3857-4112-bd1e-cc7e17a6211d",
    "image": "sound_signal",
    "point": {
      "latitude": 52.1113811123,
      "longitude": 26.2948999445
    }
  },
  "63862588-2cda-4db3-8ab4-366913d86901": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 166",
      "id": "63862588-2cda-4db3-8ab4-366913d86901",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63862588-2cda-4db3-8ab4-366913d86901",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1952057123,
      "longitude": 24.1605775842
    }
  },
  "63b82b45-9433-419f-8637-5df99edebfc7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "63b82b45-9433-419f-8637-5df99edebfc7",
      "kilometrage": 63,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63b82b45-9433-419f-8637-5df99edebfc7",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0210104783,
      "longitude": 25.3005703972
    }
  },
  "63fda098-e632-4dba-9aa8-78a7bfa31b85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "63fda098-e632-4dba-9aa8-78a7bfa31b85",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63fda098-e632-4dba-9aa8-78a7bfa31b85",
    "image": "attention",
    "point": {
      "latitude": 52.0219809108,
      "longitude": 25.3274121762
    }
  },
  "64178519-a986-44bc-a167-01fb226406d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 18",
      "id": "64178519-a986-44bc-a167-01fb226406d3",
      "kilometrage": 12,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64178519-a986-44bc-a167-01fb226406d3",
    "image": "perev_left",
    "point": {
      "latitude": 52.0924119454,
      "longitude": 25.9779296688
    }
  },
  "642dabf0-c0e5-4298-a8d9-2d181bd513bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй  ",
      "id": "642dabf0-c0e5-4298-a8d9-2d181bd513bd",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "642dabf0-c0e5-4298-a8d9-2d181bd513bd",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.1577855859,
      "longitude": 27.3493440779
    }
  },
  "651450ff-dbf7-46bf-a6bb-3a5590532216": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 96",
      "id": "651450ff-dbf7-46bf-a6bb-3a5590532216",
      "kilometrage": 488,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "651450ff-dbf7-46bf-a6bb-3a5590532216",
    "image": "perev_left",
    "point": {
      "latitude": 52.1264436977,
      "longitude": 26.6457147234
    }
  },
  "65343d61-fd87-4fc3-9dce-4e0e505455fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 74",
      "id": "65343d61-fd87-4fc3-9dce-4e0e505455fe",
      "kilometrage": 45,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65343d61-fd87-4fc3-9dce-4e0e505455fe",
    "image": "perev_right",
    "point": {
      "latitude": 52.0235097545,
      "longitude": 25.5617494698
    }
  },
  "65437d59-c8e2-4e19-b717-2c2d4e6bf99e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 41",
      "id": "65437d59-c8e2-4e19-b717-2c2d4e6bf99e",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65437d59-c8e2-4e19-b717-2c2d4e6bf99e",
    "image": "perev_left",
    "point": {
      "latitude": 52.1012322907,
      "longitude": 26.3825020474
    }
  },
  "6574eaf9-331b-4424-a9a4-9e04a1d04a3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 23",
      "id": "6574eaf9-331b-4424-a9a4-9e04a1d04a3c",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6574eaf9-331b-4424-a9a4-9e04a1d04a3c",
    "image": "perev_right",
    "point": {
      "latitude": 52.1168750188,
      "longitude": 27.269475756
    }
  },
  "65dd1766-d3b6-4362-bfaf-67ea9daec297": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 184",
      "id": "65dd1766-d3b6-4362-bfaf-67ea9daec297",
      "kilometrage": 448,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65dd1766-d3b6-4362-bfaf-67ea9daec297",
    "image": "perev_left",
    "point": {
      "latitude": 52.1534154403,
      "longitude": 27.0629525
    }
  },
  "65ecd2cf-e07b-44fc-802e-45fbdec18e68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "65ecd2cf-e07b-44fc-802e-45fbdec18e68",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65ecd2cf-e07b-44fc-802e-45fbdec18e68",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.119471237,
      "longitude": 26.7398421239
    }
  },
  "6605c131-b813-45c1-80e3-3f81cc059a71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 59",
      "id": "6605c131-b813-45c1-80e3-3f81cc059a71",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6605c131-b813-45c1-80e3-3f81cc059a71",
    "image": "perev_left",
    "point": {
      "latitude": 52.0658992426,
      "longitude": 25.666363167
    }
  },
  "660fca98-8510-423d-af97-fb1595b5ffa0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 190",
      "id": "660fca98-8510-423d-af97-fb1595b5ffa0",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "660fca98-8510-423d-af97-fb1595b5ffa0",
    "image": "perev_right",
    "point": {
      "latitude": 52.167455289,
      "longitude": 24.0028876696
    }
  },
  "66545614-6c15-4722-b8de-af5e01ee0ee9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 113",
      "id": "66545614-6c15-4722-b8de-af5e01ee0ee9",
      "kilometrage": 478,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66545614-6c15-4722-b8de-af5e01ee0ee9",
    "image": "perev_right",
    "point": {
      "latitude": 52.1276109762,
      "longitude": 26.7606005479
    }
  },
  "665bbcec-8715-4708-949c-9b83b36d003c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 45",
      "id": "665bbcec-8715-4708-949c-9b83b36d003c",
      "kilometrage": 508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "665bbcec-8715-4708-949c-9b83b36d003c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.104986779,
      "longitude": 26.4025649685
    }
  },
  "666eb428-3dd3-401d-a8cd-c93b16832b03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 123",
      "id": "666eb428-3dd3-401d-a8cd-c93b16832b03",
      "kilometrage": 473,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "666eb428-3dd3-401d-a8cd-c93b16832b03",
    "image": "perev_right",
    "point": {
      "latitude": 52.1417000947,
      "longitude": 26.8051161705
    }
  },
  "668d3685-9d1a-4dda-aa88-7c3261aca54d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 152",
      "id": "668d3685-9d1a-4dda-aa88-7c3261aca54d",
      "kilometrage": 460,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "668d3685-9d1a-4dda-aa88-7c3261aca54d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1507124169,
      "longitude": 26.9482612988
    }
  },
  "669700b0-e67c-4aa0-b89a-9e1f0523ea2a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "669700b0-e67c-4aa0-b89a-9e1f0523ea2a",
      "kilometrage": 477,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "669700b0-e67c-4aa0-b89a-9e1f0523ea2a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1317692816,
      "longitude": 26.7593967947
    }
  },
  "66a07870-5d2c-468c-99bb-d7cee1715e93": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "66a07870-5d2c-468c-99bb-d7cee1715e93",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66a07870-5d2c-468c-99bb-d7cee1715e93",
    "image": "attention",
    "point": {
      "latitude": 52.1120060537,
      "longitude": 26.2841516035
    }
  },
  "673f7031-7470-4be4-a0f9-db44dad40b24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 35",
      "id": "673f7031-7470-4be4-a0f9-db44dad40b24",
      "kilometrage": 35,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "673f7031-7470-4be4-a0f9-db44dad40b24",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0703361024,
      "longitude": 25.674237253
    }
  },
  "677356fd-ea6e-4dbb-84f5-61f4ed63685d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 128",
      "id": "677356fd-ea6e-4dbb-84f5-61f4ed63685d",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "677356fd-ea6e-4dbb-84f5-61f4ed63685d",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1437336015,
      "longitude": 24.7233628211
    }
  },
  "679a330e-65ec-4326-b68c-e8f7f05c7d8e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 212",
      "id": "679a330e-65ec-4326-b68c-e8f7f05c7d8e",
      "kilometrage": 437,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "679a330e-65ec-4326-b68c-e8f7f05c7d8e",
    "image": "perev_right",
    "point": {
      "latitude": 52.1443732152,
      "longitude": 27.1494944929
    }
  },
  "67c90a24-ac32-4ddc-b2d4-48864910f0c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "67c90a24-ac32-4ddc-b2d4-48864910f0c1",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "67c90a24-ac32-4ddc-b2d4-48864910f0c1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.091558968,
      "longitude": 23.7866173757
    }
  },
  "680454fd-3aed-472c-8f20-852abd51e4f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 189",
      "id": "680454fd-3aed-472c-8f20-852abd51e4f2",
      "kilometrage": 163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "680454fd-3aed-472c-8f20-852abd51e4f2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1687690725,
      "longitude": 24.0098686568
    }
  },
  "68539777-56ff-4418-85ef-7b0e2f0e02aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "68539777-56ff-4418-85ef-7b0e2f0e02aa",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "68539777-56ff-4418-85ef-7b0e2f0e02aa",
    "image": "attention",
    "point": {
      "latitude": 52.120854587,
      "longitude": 26.7416963759
    }
  },
  "6894d33c-1c42-42ae-ae60-51705ec48f37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "6894d33c-1c42-42ae-ae60-51705ec48f37",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6894d33c-1c42-42ae-ae60-51705ec48f37",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0216819148,
      "longitude": 25.3317830585
    }
  },
  "68ce686e-792a-46ce-b0f6-5914acc501fa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 19",
      "id": "68ce686e-792a-46ce-b0f6-5914acc501fa",
      "kilometrage": 523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "68ce686e-792a-46ce-b0f6-5914acc501fa",
    "image": "perev_right",
    "point": {
      "latitude": 52.112910148,
      "longitude": 26.2232165374
    }
  },
  "68f9bc0c-0363-416b-b2db-531530529162": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "68f9bc0c-0363-416b-b2db-531530529162",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "68f9bc0c-0363-416b-b2db-531530529162",
    "image": "name_of",
    "point": {
      "latitude": 52.0565848075,
      "longitude": 25.0186557216
    }
  },
  "690a2c8e-fa12-4c5f-9108-287caa77f247": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 240",
      "id": "690a2c8e-fa12-4c5f-9108-287caa77f247",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "690a2c8e-fa12-4c5f-9108-287caa77f247",
    "image": "buyo_right",
    "point": {
      "latitude": 52.085688972,
      "longitude": 23.729115306
    }
  },
  "6923c9c5-3f96-4196-8e9b-8cf9e3e65d13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "6923c9c5-3f96-4196-8e9b-8cf9e3e65d13",
      "kilometrage": 421,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6923c9c5-3f96-4196-8e9b-8cf9e3e65d13",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1457593903,
      "longitude": 27.2875452193
    }
  },
  "6939dbd9-d890-496f-80ba-b394cecfea6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 73",
      "id": "6939dbd9-d890-496f-80ba-b394cecfea6f",
      "kilometrage": 497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6939dbd9-d890-496f-80ba-b394cecfea6f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1177508277,
      "longitude": 26.5348329284
    }
  },
  "696fdcac-f06e-4fba-b201-9dc9921bbd6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 215",
      "id": "696fdcac-f06e-4fba-b201-9dc9921bbd6c",
      "kilometrage": 176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "696fdcac-f06e-4fba-b201-9dc9921bbd6c",
    "image": "perev_left",
    "point": {
      "latitude": 52.0923329322,
      "longitude": 23.8928878977
    }
  },
  "698b669d-7c5f-4e15-9750-608d74312e60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 174",
      "id": "698b669d-7c5f-4e15-9750-608d74312e60",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "698b669d-7c5f-4e15-9750-608d74312e60",
    "image": "perev_left",
    "point": {
      "latitude": 52.1943226743,
      "longitude": 24.0975195751
    }
  },
  "69a07e07-606e-4dd0-9481-88f5f2ae9f6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 194",
      "id": "69a07e07-606e-4dd0-9481-88f5f2ae9f6c",
      "kilometrage": 444,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69a07e07-606e-4dd0-9481-88f5f2ae9f6c",
    "image": "perev_left",
    "point": {
      "latitude": 52.1454361107,
      "longitude": 27.0894613309
    }
  },
  "6a613fd5-dd0d-40e4-9b2f-31ec36d2cecd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 139",
      "id": "6a613fd5-dd0d-40e4-9b2f-31ec36d2cecd",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a613fd5-dd0d-40e4-9b2f-31ec36d2cecd",
    "image": "perev_left",
    "point": {
      "latitude": 52.2138634944,
      "longitude": 24.3359614358
    }
  },
  "6a65d4e9-3d6b-433f-ad0f-505aeebdffcb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 210",
      "id": "6a65d4e9-3d6b-433f-ad0f-505aeebdffcb",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a65d4e9-3d6b-433f-ad0f-505aeebdffcb",
    "image": "perev_left",
    "point": {
      "latitude": 52.1016674396,
      "longitude": 23.9217477953
    }
  },
  "6a6e51ea-aca5-4f37-bcb4-47eb2c08d788": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "6a6e51ea-aca5-4f37-bcb4-47eb2c08d788",
      "kilometrage": 28,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a6e51ea-aca5-4f37-bcb4-47eb2c08d788",
    "image": "attention",
    "point": {
      "latitude": 52.0773142786,
      "longitude": 25.7671047327
    }
  },
  "6a8e9730-5db5-41cf-b489-b5ee22583d84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 8",
      "id": "6a8e9730-5db5-41cf-b489-b5ee22583d84",
      "kilometrage": 7,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a8e9730-5db5-41cf-b489-b5ee22583d84",
    "image": "perev_left",
    "point": {
      "latitude": 52.1034655278,
      "longitude": 26.0415665933
    }
  },
  "6a905e3a-3ec5-4319-8462-6b2a029b9b0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6a905e3a-3ec5-4319-8462-6b2a029b9b0b",
      "kilometrage": 36,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a905e3a-3ec5-4319-8462-6b2a029b9b0b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0625198114,
      "longitude": 25.6609644723
    }
  },
  "6ab713c0-aeea-4913-8f99-322bd190f9ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "6ab713c0-aeea-4913-8f99-322bd190f9ec",
      "kilometrage": 476,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ab713c0-aeea-4913-8f99-322bd190f9ec",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1383714153,
      "longitude": 26.7748224184
    }
  },
  "6b60ffe4-172e-4344-b0ee-5d139f048232": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 137",
      "id": "6b60ffe4-172e-4344-b0ee-5d139f048232",
      "kilometrage": 466,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b60ffe4-172e-4344-b0ee-5d139f048232",
    "image": "perev_left",
    "point": {
      "latitude": 52.1350777562,
      "longitude": 26.8845894489
    }
  },
  "6b73eb5e-0d45-4820-8aa5-34ea78bc073d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 139",
      "id": "6b73eb5e-0d45-4820-8aa5-34ea78bc073d",
      "kilometrage": 465,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b73eb5e-0d45-4820-8aa5-34ea78bc073d",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1294270946,
      "longitude": 26.8920901123
    }
  },
  "6bb231fb-e9cd-4e24-ad7d-69bd42f425c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 4",
      "id": "6bb231fb-e9cd-4e24-ad7d-69bd42f425c7",
      "kilometrage": 533,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6bb231fb-e9cd-4e24-ad7d-69bd42f425c7",
    "image": "perev_right",
    "point": {
      "latitude": 52.0930271929,
      "longitude": 26.1268508503
    }
  },
  "6bbcb583-3e11-4df7-8098-1503d2ca2505": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 23",
      "id": "6bbcb583-3e11-4df7-8098-1503d2ca2505",
      "kilometrage": 14,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6bbcb583-3e11-4df7-8098-1503d2ca2505",
    "image": "perev_left",
    "point": {
      "latitude": 52.085473126,
      "longitude": 25.9471792831
    }
  },
  "6c18f4fd-f900-4313-89b1-811d7fe7b826": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6c18f4fd-f900-4313-89b1-811d7fe7b826",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c18f4fd-f900-4313-89b1-811d7fe7b826",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1254588678,
      "longitude": 23.9387451106
    }
  },
  "6c35dbc2-b068-4216-9f80-d781ef4237fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "6c35dbc2-b068-4216-9f80-d781ef4237fe",
      "kilometrage": 493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c35dbc2-b068-4216-9f80-d781ef4237fe",
    "image": "name_of",
    "point": {
      "latitude": 52.1106065349,
      "longitude": 26.5861003498
    }
  },
  "6c4bfb3a-b713-40a6-8bc6-d86664d61cda": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 205а",
      "id": "6c4bfb3a-b713-40a6-8bc6-d86664d61cda",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c4bfb3a-b713-40a6-8bc6-d86664d61cda",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1166488372,
      "longitude": 23.934767311
    }
  },
  "6cbbc64e-dd60-46d9-8aff-dce16bf99b35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 54",
      "id": "6cbbc64e-dd60-46d9-8aff-dce16bf99b35",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6cbbc64e-dd60-46d9-8aff-dce16bf99b35",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1159967446,
      "longitude": 26.4471120468
    }
  },
  "6ce7b167-91d3-46f6-866d-82309856a0e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "6ce7b167-91d3-46f6-866d-82309856a0e2",
      "kilometrage": 474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ce7b167-91d3-46f6-866d-82309856a0e2",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1409761447,
      "longitude": 26.7968298579
    }
  },
  "6d2c756f-2646-4d9f-90c4-4b6529fb5d0e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 242",
      "id": "6d2c756f-2646-4d9f-90c4-4b6529fb5d0e",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d2c756f-2646-4d9f-90c4-4b6529fb5d0e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0829763244,
      "longitude": 23.7226580525
    }
  },
  "6d350ac5-cf49-43cc-97c5-e48c3f601257": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 12",
      "id": "6d350ac5-cf49-43cc-97c5-e48c3f601257",
      "kilometrage": 8,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d350ac5-cf49-43cc-97c5-e48c3f601257",
    "image": "perev_left",
    "point": {
      "latitude": 52.1041289189,
      "longitude": 26.0254510348
    }
  },
  "6d9b5034-8cd8-45a4-ac91-0157a26a9946": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 125",
      "id": "6d9b5034-8cd8-45a4-ac91-0157a26a9946",
      "kilometrage": 471,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d9b5034-8cd8-45a4-ac91-0157a26a9946",
    "image": "perev_right",
    "point": {
      "latitude": 52.1385889265,
      "longitude": 26.8383203913
    }
  },
  "6dd2a300-f98a-439b-849f-633f998394a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 465",
      "id": "6dd2a300-f98a-439b-849f-633f998394a2",
      "kilometrage": 465,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6dd2a300-f98a-439b-849f-633f998394a2",
    "image": "kilometrage",
    "point": {
      "latitude": 52.131079378,
      "longitude": 26.8950896098
    }
  },
  "6e393bd7-40b7-4375-b457-4b46f150af13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6e393bd7-40b7-4375-b457-4b46f150af13",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e393bd7-40b7-4375-b457-4b46f150af13",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2079855922,
      "longitude": 24.4225041497
    }
  },
  "6e504ebd-28a0-4e74-8eb6-40694732249b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй  ",
      "id": "6e504ebd-28a0-4e74-8eb6-40694732249b",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e504ebd-28a0-4e74-8eb6-40694732249b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1016906554,
      "longitude": 23.9214984837
    }
  },
  "6e531f51-1d03-407a-9afd-54949162a111": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 495",
      "id": "6e531f51-1d03-407a-9afd-54949162a111",
      "kilometrage": 495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e531f51-1d03-407a-9afd-54949162a111",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1177157522,
      "longitude": 26.5546696484
    }
  },
  "6e5bfc3c-7257-4328-85f0-5e13a267a78b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "6e5bfc3c-7257-4328-85f0-5e13a267a78b",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e5bfc3c-7257-4328-85f0-5e13a267a78b",
    "image": "bridge_low",
    "point": {
      "latitude": 52.1350019323,
      "longitude": 23.9468190953
    }
  },
  "6ea8df6d-f552-4984-b822-22bdb585c69a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 244",
      "id": "6ea8df6d-f552-4984-b822-22bdb585c69a",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ea8df6d-f552-4984-b822-22bdb585c69a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0823207867,
      "longitude": 23.7202302216
    }
  },
  "6eaafc67-78cd-483a-a870-ce32952fd36d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6eaafc67-78cd-483a-a870-ce32952fd36d",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6eaafc67-78cd-483a-a870-ce32952fd36d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1025448466,
      "longitude": 23.9214897305
    }
  },
  "6f9ce2da-da52-45b3-9dec-0f566d666cb3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 36",
      "id": "6f9ce2da-da52-45b3-9dec-0f566d666cb3",
      "kilometrage": 22,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6f9ce2da-da52-45b3-9dec-0f566d666cb3",
    "image": "perev_right",
    "point": {
      "latitude": 52.0757153393,
      "longitude": 25.8464133804
    }
  },
  "6fa11ffb-d4fe-4496-af2c-b00524040c35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда правый передний  ",
      "id": "6fa11ffb-d4fe-4496-af2c-b00524040c35",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fa11ffb-d4fe-4496-af2c-b00524040c35",
    "image": "raid_start_right",
    "point": {
      "latitude": 52.104194367,
      "longitude": 26.0096143032
    }
  },
  "6fef6942-13ff-45a8-a568-b6a4d66ee30f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "6fef6942-13ff-45a8-a568-b6a4d66ee30f",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fef6942-13ff-45a8-a568-b6a4d66ee30f",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1183719375,
      "longitude": 26.7394663865
    }
  },
  "7024a795-4fa4-4c84-b225-23ecd4978977": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 253",
      "id": "7024a795-4fa4-4c84-b225-23ecd4978977",
      "kilometrage": 418,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7024a795-4fa4-4c84-b225-23ecd4978977",
    "image": "perev_right",
    "point": {
      "latitude": 52.1464863445,
      "longitude": 27.3047045576
    }
  },
  "7042ccaa-b7b0-4d31-b7ab-9cf7420e2b7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Предписание подать звуковой сигнал  ",
      "id": "7042ccaa-b7b0-4d31-b7ab-9cf7420e2b7b",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7042ccaa-b7b0-4d31-b7ab-9cf7420e2b7b",
    "image": "sound_signal",
    "point": {
      "latitude": 52.1174506295,
      "longitude": 26.1550369412
    }
  },
  "7064902a-5290-482a-a675-374701df4424": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 159",
      "id": "7064902a-5290-482a-a675-374701df4424",
      "kilometrage": 146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7064902a-5290-482a-a675-374701df4424",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1959908496,
      "longitude": 24.2018075978
    }
  },
  "708cb03b-bbaa-4792-962e-f89e7999088f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 191",
      "id": "708cb03b-bbaa-4792-962e-f89e7999088f",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "708cb03b-bbaa-4792-962e-f89e7999088f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1632081664,
      "longitude": 24.0003352192
    }
  },
  "70929a92-2541-4fc3-a4ce-6e6fd155ce4e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 415",
      "id": "70929a92-2541-4fc3-a4ce-6e6fd155ce4e",
      "kilometrage": 415,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70929a92-2541-4fc3-a4ce-6e6fd155ce4e",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1397166536,
      "longitude": 27.3299202041
    }
  },
  "7093a0ad-8395-4bd2-a047-68e220cd980d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "7093a0ad-8395-4bd2-a047-68e220cd980d",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7093a0ad-8395-4bd2-a047-68e220cd980d",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.120101962,
      "longitude": 26.740360749
    }
  },
  "70a339e4-c7f8-4d5c-83bc-117106b5c57c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 175",
      "id": "70a339e4-c7f8-4d5c-83bc-117106b5c57c",
      "kilometrage": 451,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70a339e4-c7f8-4d5c-83bc-117106b5c57c",
    "image": "perev_left",
    "point": {
      "latitude": 52.1601096845,
      "longitude": 27.0296634835
    }
  },
  "71161d1b-6e26-4d07-8006-e50010e2c7d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 71",
      "id": "71161d1b-6e26-4d07-8006-e50010e2c7d0",
      "kilometrage": 497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "71161d1b-6e26-4d07-8006-e50010e2c7d0",
    "image": "perev_right",
    "point": {
      "latitude": 52.1146386946,
      "longitude": 26.5316389866
    }
  },
  "7166a7c6-0f62-4fdf-be13-573d0b21fbb4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 193",
      "id": "7166a7c6-0f62-4fdf-be13-573d0b21fbb4",
      "kilometrage": 444,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7166a7c6-0f62-4fdf-be13-573d0b21fbb4",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1459194785,
      "longitude": 27.0866763567
    }
  },
  "7179bd01-39b3-4f95-910e-627ebb64d07b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "7179bd01-39b3-4f95-910e-627ebb64d07b",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7179bd01-39b3-4f95-910e-627ebb64d07b",
    "image": "attention",
    "point": {
      "latitude": 52.1166573838,
      "longitude": 26.7393729103
    }
  },
  "721ddb4c-9f92-43e9-9f27-98d23b70376d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "721ddb4c-9f92-43e9-9f27-98d23b70376d",
      "kilometrage": 137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "721ddb4c-9f92-43e9-9f27-98d23b70376d",
    "image": "name_of",
    "point": {
      "latitude": 52.2164115757,
      "longitude": 24.3201331702
    }
  },
  "72e85f77-cc6a-4636-a585-eb05e7533c0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 36",
      "id": "72e85f77-cc6a-4636-a585-eb05e7533c0a",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72e85f77-cc6a-4636-a585-eb05e7533c0a",
    "image": "perev_left",
    "point": {
      "latitude": 52.0925130784,
      "longitude": 27.2459720435
    }
  },
  "73bcb198-e0cd-4617-9fd8-5f7c26badfb9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "73bcb198-e0cd-4617-9fd8-5f7c26badfb9",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73bcb198-e0cd-4617-9fd8-5f7c26badfb9",
    "image": "attention",
    "point": {
      "latitude": 52.1911859481,
      "longitude": 24.1297011295
    }
  },
  "73ddf339-929c-4713-b8bb-e8c294663396": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 239",
      "id": "73ddf339-929c-4713-b8bb-e8c294663396",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73ddf339-929c-4713-b8bb-e8c294663396",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0861983233,
      "longitude": 23.7329993142
    }
  },
  "743d22f0-2458-4066-b637-aa026d741b1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "743d22f0-2458-4066-b637-aa026d741b1a",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "743d22f0-2458-4066-b637-aa026d741b1a",
    "image": "stop",
    "point": {
      "latitude": 52.0384429302,
      "longitude": 25.6203017366
    }
  },
  "748d0832-4066-496c-bedd-cd1e993b621c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "748d0832-4066-496c-bedd-cd1e993b621c",
      "kilometrage": 36,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "748d0832-4066-496c-bedd-cd1e993b621c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0651571882,
      "longitude": 25.6648619459
    }
  },
  "74a2f337-25d3-49b4-8b68-df207d3e59ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 86",
      "id": "74a2f337-25d3-49b4-8b68-df207d3e59ec",
      "kilometrage": 64,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74a2f337-25d3-49b4-8b68-df207d3e59ec",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0210216277,
      "longitude": 25.2876080818
    }
  },
  "74c5a554-12c5-4253-8290-f2d08154c97c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 226",
      "id": "74c5a554-12c5-4253-8290-f2d08154c97c",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74c5a554-12c5-4253-8290-f2d08154c97c",
    "image": "perev_left",
    "point": {
      "latitude": 52.0884061327,
      "longitude": 23.8299086764
    }
  },
  "74e054bf-baf7-4614-9d5f-12d3c5063be0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "74e054bf-baf7-4614-9d5f-12d3c5063be0",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74e054bf-baf7-4614-9d5f-12d3c5063be0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0812879639,
      "longitude": 23.7060633399
    }
  },
  "74e7ddf4-741b-4ee6-93b6-f686b2e6cafc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "74e7ddf4-741b-4ee6-93b6-f686b2e6cafc",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74e7ddf4-741b-4ee6-93b6-f686b2e6cafc",
    "image": "attention",
    "point": {
      "latitude": 52.0872505497,
      "longitude": 23.7373106092
    }
  },
  "75663c84-6064-4fc4-8172-83c7efc957f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "75663c84-6064-4fc4-8172-83c7efc957f1",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75663c84-6064-4fc4-8172-83c7efc957f1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2142304832,
      "longitude": 24.3783878203
    }
  },
  "75d08272-be57-4200-8387-aca0ef569238": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 249",
      "id": "75d08272-be57-4200-8387-aca0ef569238",
      "kilometrage": 421,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75d08272-be57-4200-8387-aca0ef569238",
    "image": "perev_right",
    "point": {
      "latitude": 52.148190376,
      "longitude": 27.2903034602
    }
  },
  "75ecf28d-566d-41f7-8285-0ace7c17a894": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 122в",
      "id": "75ecf28d-566d-41f7-8285-0ace7c17a894",
      "kilometrage": 474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75ecf28d-566d-41f7-8285-0ace7c17a894",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1421095773,
      "longitude": 26.7964042725
    }
  },
  "763ac3d3-161a-418b-810d-3a6e89e8ae34": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "763ac3d3-161a-418b-810d-3a6e89e8ae34",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "763ac3d3-161a-418b-810d-3a6e89e8ae34",
    "image": "speed_limit",
    "point": {
      "latitude": 52.0801396787,
      "longitude": 23.7045647766
    }
  },
  "765a5912-d00b-4660-9cc4-0e0066de3d1c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 184",
      "id": "765a5912-d00b-4660-9cc4-0e0066de3d1c",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "765a5912-d00b-4660-9cc4-0e0066de3d1c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1830059241,
      "longitude": 24.0329434213
    }
  },
  "765e28f3-58f6-4b3f-beff-513939f19fab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 43",
      "id": "765e28f3-58f6-4b3f-beff-513939f19fab",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "765e28f3-58f6-4b3f-beff-513939f19fab",
    "image": "perev_right",
    "point": {
      "latitude": 52.0769044321,
      "longitude": 25.8003267147
    }
  },
  "76b4f3a0-db77-4044-92de-07537107d60f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "76b4f3a0-db77-4044-92de-07537107d60f",
      "kilometrage": 137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76b4f3a0-db77-4044-92de-07537107d60f",
    "image": "name_of",
    "point": {
      "latitude": 52.2137942864,
      "longitude": 24.3295254592
    }
  },
  "76b6b2ce-35ee-4f9e-a360-450f1d67e6ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "76b6b2ce-35ee-4f9e-a360-450f1d67e6ee",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76b6b2ce-35ee-4f9e-a360-450f1d67e6ee",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1112344134,
      "longitude": 26.1073945871
    }
  },
  "76dbd8dd-6aa8-4572-942c-a2798743cfe3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "76dbd8dd-6aa8-4572-942c-a2798743cfe3",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76dbd8dd-6aa8-4572-942c-a2798743cfe3",
    "image": "attention",
    "point": {
      "latitude": 52.195422085,
      "longitude": 24.1472841719
    }
  },
  "77153452-f301-4a21-a865-eae8f84faba2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 73",
      "id": "77153452-f301-4a21-a865-eae8f84faba2",
      "kilometrage": 44,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77153452-f301-4a21-a865-eae8f84faba2",
    "image": "perev_left",
    "point": {
      "latitude": 52.026568667,
      "longitude": 25.5750212533
    }
  },
  "778dd793-5ce4-4b69-b8b7-759471a34ce5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "778dd793-5ce4-4b69-b8b7-759471a34ce5",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "778dd793-5ce4-4b69-b8b7-759471a34ce5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2144443682,
      "longitude": 24.3855680471
    }
  },
  "7817f806-ac62-4e63-9209-27f758cdd4be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 161",
      "id": "7817f806-ac62-4e63-9209-27f758cdd4be",
      "kilometrage": 147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7817f806-ac62-4e63-9209-27f758cdd4be",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1930347509,
      "longitude": 24.1880410387
    }
  },
  "7843d500-3463-45c8-bee2-c5f70e99221e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 25",
      "id": "7843d500-3463-45c8-bee2-c5f70e99221e",
      "kilometrage": 66,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7843d500-3463-45c8-bee2-c5f70e99221e",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0238053723,
      "longitude": 25.2711672339
    }
  },
  "785662d1-b98c-4c98-9047-df6c26b31ec6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 244",
      "id": "785662d1-b98c-4c98-9047-df6c26b31ec6",
      "kilometrage": 424,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "785662d1-b98c-4c98-9047-df6c26b31ec6",
    "image": "buyo_right",
    "point": {
      "latitude": 52.143714556,
      "longitude": 27.253937472
    }
  },
  "78a63cbf-e0de-4085-96f4-e18e74da217f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "78a63cbf-e0de-4085-96f4-e18e74da217f",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "78a63cbf-e0de-4085-96f4-e18e74da217f",
    "image": "stop",
    "point": {
      "latitude": 52.0897044891,
      "longitude": 23.7454892033
    }
  },
  "78e0c052-74dc-4a72-9f89-291260e8213a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 15",
      "id": "78e0c052-74dc-4a72-9f89-291260e8213a",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "78e0c052-74dc-4a72-9f89-291260e8213a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1046907719,
      "longitude": 26.0064874841
    }
  },
  "79177e87-9694-4e01-8475-a3c35560181f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 159",
      "id": "79177e87-9694-4e01-8475-a3c35560181f",
      "kilometrage": 457,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "79177e87-9694-4e01-8475-a3c35560181f",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1489512879,
      "longitude": 26.9798888873
    }
  },
  "7945f628-2993-4abe-8bfd-60d712d07e90": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "7945f628-2993-4abe-8bfd-60d712d07e90",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7945f628-2993-4abe-8bfd-60d712d07e90",
    "image": "attention",
    "point": {
      "latitude": 52.0336643496,
      "longitude": 25.6176818487
    }
  },
  "795e358d-1f0c-4cbd-bf04-aa685effb1c0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 21",
      "id": "795e358d-1f0c-4cbd-bf04-aa685effb1c0",
      "kilometrage": 521,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "795e358d-1f0c-4cbd-bf04-aa685effb1c0",
    "image": "perev_left",
    "point": {
      "latitude": 52.1152794768,
      "longitude": 26.2392859992
    }
  },
  "7999efff-91f5-4346-b54f-aec271594a20": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7999efff-91f5-4346-b54f-aec271594a20",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7999efff-91f5-4346-b54f-aec271594a20",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1198927225,
      "longitude": 26.4315156951
    }
  },
  "79e133a4-0d7a-49c4-af96-6bb900782059": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 219",
      "id": "79e133a4-0d7a-49c4-af96-6bb900782059",
      "kilometrage": 434,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "79e133a4-0d7a-49c4-af96-6bb900782059",
    "image": "perev_left",
    "point": {
      "latitude": 52.1500306623,
      "longitude": 27.1789324642
    }
  },
  "7b0f25ec-64b1-48d2-ab91-a2ef03e43936": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 55",
      "id": "7b0f25ec-64b1-48d2-ab91-a2ef03e43936",
      "kilometrage": 139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b0f25ec-64b1-48d2-ab91-a2ef03e43936",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2122995954,
      "longitude": 24.2906203566
    }
  },
  "7b4b1274-320b-4792-86af-96d69792b6a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7b4b1274-320b-4792-86af-96d69792b6a8",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b4b1274-320b-4792-86af-96d69792b6a8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0184343798,
      "longitude": 25.4184758903
    }
  },
  "7b5d5a6b-1ccf-4091-921d-4530822fb204": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 150",
      "id": "7b5d5a6b-1ccf-4091-921d-4530822fb204",
      "kilometrage": 460,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b5d5a6b-1ccf-4091-921d-4530822fb204",
    "image": "perev_right",
    "point": {
      "latitude": 52.1476490676,
      "longitude": 26.9375293025
    }
  },
  "7b8a879e-fea3-4f0e-838d-bbeef5ed8043": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 167",
      "id": "7b8a879e-fea3-4f0e-838d-bbeef5ed8043",
      "kilometrage": 150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b8a879e-fea3-4f0e-838d-bbeef5ed8043",
    "image": "buyo_right",
    "point": {
      "latitude": 52.196289111,
      "longitude": 24.153459083
    }
  },
  "7c2a1198-c538-43b6-897b-df7038439b7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "7c2a1198-c538-43b6-897b-df7038439b7d",
      "kilometrage": 515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c2a1198-c538-43b6-897b-df7038439b7d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.109760923,
      "longitude": 26.3205420181
    }
  },
  "7c3c4114-3418-4bc5-9ae5-c71a7460c235": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 228",
      "id": "7c3c4114-3418-4bc5-9ae5-c71a7460c235",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c3c4114-3418-4bc5-9ae5-c71a7460c235",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0909562581,
      "longitude": 23.8123058444
    }
  },
  "7c785e47-e7db-47b6-84c0-0fe50a9bf313": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 96",
      "id": "7c785e47-e7db-47b6-84c0-0fe50a9bf313",
      "kilometrage": 76,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c785e47-e7db-47b6-84c0-0fe50a9bf313",
    "image": "perev_left",
    "point": {
      "latitude": 52.0535341941,
      "longitude": 25.1331309972
    }
  },
  "7c85d072-ad3c-421c-95dd-94b3987a0edb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 227",
      "id": "7c85d072-ad3c-421c-95dd-94b3987a0edb",
      "kilometrage": 182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c85d072-ad3c-421c-95dd-94b3987a0edb",
    "image": "perev_left",
    "point": {
      "latitude": 52.0887209006,
      "longitude": 23.8176603904
    }
  },
  "7ce81cf7-d4f2-42fd-84cf-230ced5b68d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 187",
      "id": "7ce81cf7-d4f2-42fd-84cf-230ced5b68d4",
      "kilometrage": 162,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7ce81cf7-d4f2-42fd-84cf-230ced5b68d4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.178267389,
      "longitude": 24.010382806
    }
  },
  "7cf9ba2f-03e5-438a-8fda-051d72d1c067": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 10",
      "id": "7cf9ba2f-03e5-438a-8fda-051d72d1c067",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7cf9ba2f-03e5-438a-8fda-051d72d1c067",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0889405985,
      "longitude": 27.2461193482
    }
  },
  "7d07cf4e-3e48-4cb4-955a-4b43704123f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7d07cf4e-3e48-4cb4-955a-4b43704123f0",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d07cf4e-3e48-4cb4-955a-4b43704123f0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.215456125,
      "longitude": 24.3586556226
    }
  },
  "7d1fe2bf-23ec-48ce-b222-47f07a2028a6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 18",
      "id": "7d1fe2bf-23ec-48ce-b222-47f07a2028a6",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d1fe2bf-23ec-48ce-b222-47f07a2028a6",
    "image": "perev_right",
    "point": {
      "latitude": 52.1270211646,
      "longitude": 27.2712977672
    }
  },
  "7d222cda-e2a6-478c-a494-a3888ddf77ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "7d222cda-e2a6-478c-a494-a3888ddf77ec",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d222cda-e2a6-478c-a494-a3888ddf77ec",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0896624152,
      "longitude": 23.7701600941
    }
  },
  "7d9b3928-bf47-4221-a4af-4fbffcaccc2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "7d9b3928-bf47-4221-a4af-4fbffcaccc2b",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d9b3928-bf47-4221-a4af-4fbffcaccc2b",
    "image": "attention",
    "point": {
      "latitude": 52.0880890313,
      "longitude": 23.736347712
    }
  },
  "7db8f549-f2d0-4ab6-bd62-138c54cf2f95": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "7db8f549-f2d0-4ab6-bd62-138c54cf2f95",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7db8f549-f2d0-4ab6-bd62-138c54cf2f95",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0900899945,
      "longitude": 23.7468132027
    }
  },
  "7e37e262-7825-476d-a1da-b8f6cb1fa997": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый  ",
      "id": "7e37e262-7825-476d-a1da-b8f6cb1fa997",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7e37e262-7825-476d-a1da-b8f6cb1fa997",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 52.1111564378,
      "longitude": 26.2895637952
    }
  },
  "7e773465-3c9e-48d4-a3d3-ae84f8534e97": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Имеются ограничения судоходства  ",
      "id": "7e773465-3c9e-48d4-a3d3-ae84f8534e97",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7e773465-3c9e-48d4-a3d3-ae84f8534e97",
    "image": "limitations",
    "point": {
      "latitude": 52.0829704905,
      "longitude": 23.681570254
    }
  },
  "7ec385e3-c395-40da-8c52-7f40004f781f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 119",
      "id": "7ec385e3-c395-40da-8c52-7f40004f781f",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7ec385e3-c395-40da-8c52-7f40004f781f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1335204491,
      "longitude": 24.7879528644
    }
  },
  "7ef1966c-33ce-4008-a670-cd1b12f1ad3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 175",
      "id": "7ef1966c-33ce-4008-a670-cd1b12f1ad3e",
      "kilometrage": 155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7ef1966c-33ce-4008-a670-cd1b12f1ad3e",
    "image": "perev_left",
    "point": {
      "latitude": 52.1964020113,
      "longitude": 24.0917571254
    }
  },
  "7f019f25-2ba7-42cc-80fd-d5016b3a541e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 15",
      "id": "7f019f25-2ba7-42cc-80fd-d5016b3a541e",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f019f25-2ba7-42cc-80fd-d5016b3a541e",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0951265386,
      "longitude": 23.8532057556
    }
  },
  "7f51d507-9f78-459c-9525-22919da2d10f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "7f51d507-9f78-459c-9525-22919da2d10f",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f51d507-9f78-459c-9525-22919da2d10f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1278477594,
      "longitude": 23.9434855904
    }
  },
  "7fa007ca-b95a-445d-9836-66e515d1a6b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "7fa007ca-b95a-445d-9836-66e515d1a6b0",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fa007ca-b95a-445d-9836-66e515d1a6b0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1422316023,
      "longitude": 23.9557940501
    }
  },
  "805588e8-6b74-4c86-a64c-6b3a137ccb8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 470",
      "id": "805588e8-6b74-4c86-a64c-6b3a137ccb8f",
      "kilometrage": 470,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "805588e8-6b74-4c86-a64c-6b3a137ccb8f",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1399439837,
      "longitude": 26.8510054489
    }
  },
  "80675d70-d97e-483e-8abc-60c319096915": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "80675d70-d97e-483e-8abc-60c319096915",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "80675d70-d97e-483e-8abc-60c319096915",
    "image": "attention",
    "point": {
      "latitude": 52.0975310244,
      "longitude": 26.3766494169
    }
  },
  "8075925f-fc62-416b-87d1-d97e592c7ff7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "8075925f-fc62-416b-87d1-d97e592c7ff7",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8075925f-fc62-416b-87d1-d97e592c7ff7",
    "image": "speed_limit",
    "point": {
      "latitude": 52.2145445057,
      "longitude": 24.3382431504
    }
  },
  "808db234-160d-435f-9e0b-41370ed94ad8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 30",
      "id": "808db234-160d-435f-9e0b-41370ed94ad8",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "808db234-160d-435f-9e0b-41370ed94ad8",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0349330509,
      "longitude": 25.2042736753
    }
  },
  "80ac53ff-7bd4-46c2-97aa-ba22f01040bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 80",
      "id": "80ac53ff-7bd4-46c2-97aa-ba22f01040bf",
      "kilometrage": 120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "80ac53ff-7bd4-46c2-97aa-ba22f01040bf",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1846121967,
      "longitude": 24.5568624243
    }
  },
  "80edf282-6810-441d-a9dd-92595266c43e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "80edf282-6810-441d-a9dd-92595266c43e",
      "kilometrage": 451,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "80edf282-6810-441d-a9dd-92595266c43e",
    "image": "name_of",
    "point": {
      "latitude": 52.159949853,
      "longitude": 27.0287225193
    }
  },
  "810758c3-acd2-4345-a176-995ac0fd3129": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "810758c3-acd2-4345-a176-995ac0fd3129",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "810758c3-acd2-4345-a176-995ac0fd3129",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.084958378,
      "longitude": 25.9608719621
    }
  },
  "8118fb82-cfd6-4d0e-9c98-5bbf752849b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 92",
      "id": "8118fb82-cfd6-4d0e-9c98-5bbf752849b9",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8118fb82-cfd6-4d0e-9c98-5bbf752849b9",
    "image": "perev_left",
    "point": {
      "latitude": 52.0374024961,
      "longitude": 25.1690703979
    }
  },
  "8142d68e-20b7-43dc-99c0-4fc0bd56bc51": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 21",
      "id": "8142d68e-20b7-43dc-99c0-4fc0bd56bc51",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8142d68e-20b7-43dc-99c0-4fc0bd56bc51",
    "image": "perev_left",
    "point": {
      "latitude": 52.1197221479,
      "longitude": 27.2685799375
    }
  },
  "814bd55a-10c3-4247-bc7f-fe72ce2ff88d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "814bd55a-10c3-4247-bc7f-fe72ce2ff88d",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "814bd55a-10c3-4247-bc7f-fe72ce2ff88d",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.0935206482,
      "longitude": 23.876127872
    }
  },
  "815b9b7c-e9bc-402e-9ae3-032d18913c88": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 90",
      "id": "815b9b7c-e9bc-402e-9ae3-032d18913c88",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "815b9b7c-e9bc-402e-9ae3-032d18913c88",
    "image": "perev_right",
    "point": {
      "latitude": 52.1236405701,
      "longitude": 26.6158911675
    }
  },
  "818da7ee-b9be-4ba8-ad62-4aaf8ac74083": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 490",
      "id": "818da7ee-b9be-4ba8-ad62-4aaf8ac74083",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "818da7ee-b9be-4ba8-ad62-4aaf8ac74083",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1228081901,
      "longitude": 26.6115204594
    }
  },
  "82204633-0907-4df1-bff5-0e1449e8ca3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "82204633-0907-4df1-bff5-0e1449e8ca3b",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82204633-0907-4df1-bff5-0e1449e8ca3b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.101742235,
      "longitude": 23.9207417242
    }
  },
  "822f7361-773e-4ce7-a76c-f5686d33a51f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "822f7361-773e-4ce7-a76c-f5686d33a51f",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "822f7361-773e-4ce7-a76c-f5686d33a51f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0887303665,
      "longitude": 23.7681797997
    }
  },
  "823f491a-17e4-4d06-8b2f-525acc1d19a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 37",
      "id": "823f491a-17e4-4d06-8b2f-525acc1d19a8",
      "kilometrage": 22,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "823f491a-17e4-4d06-8b2f-525acc1d19a8",
    "image": "perev_left",
    "point": {
      "latitude": 52.0778164389,
      "longitude": 25.8440094884
    }
  },
  "8249c46f-9a84-4618-a3d4-49ee21413afa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "8249c46f-9a84-4618-a3d4-49ee21413afa",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8249c46f-9a84-4618-a3d4-49ee21413afa",
    "image": "speed_limit",
    "point": {
      "latitude": 52.0828390715,
      "longitude": 23.6847939787
    }
  },
  "8251a07f-fc53-412d-88a3-80d7f0ef08f6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "8251a07f-fc53-412d-88a3-80d7f0ef08f6",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8251a07f-fc53-412d-88a3-80d7f0ef08f6",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2141086782,
      "longitude": 24.3739079508
    }
  },
  "82571fef-42e6-4698-8d6f-f483eaa04531": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "82571fef-42e6-4698-8d6f-f483eaa04531",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82571fef-42e6-4698-8d6f-f483eaa04531",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2140211639,
      "longitude": 24.3313644781
    }
  },
  "82d4ec82-a53e-428d-9a69-8e1fdc1d4023": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "82d4ec82-a53e-428d-9a69-8e1fdc1d4023",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82d4ec82-a53e-428d-9a69-8e1fdc1d4023",
    "image": "attention",
    "point": {
      "latitude": 52.0889034701,
      "longitude": 23.7407208504
    }
  },
  "82ea33fc-112b-4a54-a3d3-cac62046119f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 5",
      "id": "82ea33fc-112b-4a54-a3d3-cac62046119f",
      "kilometrage": 5,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82ea33fc-112b-4a54-a3d3-cac62046119f",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0960694741,
      "longitude": 26.0652384527
    }
  },
  "83ba1fb8-128c-4324-b634-54645229dea3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "83ba1fb8-128c-4324-b634-54645229dea3",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83ba1fb8-128c-4324-b634-54645229dea3",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1398729272,
      "longitude": 23.949127047
    }
  },
  "84042449-ff2f-4f9d-a7a4-b4db7da25ba0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 121",
      "id": "84042449-ff2f-4f9d-a7a4-b4db7da25ba0",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84042449-ff2f-4f9d-a7a4-b4db7da25ba0",
    "image": "perev_left",
    "point": {
      "latitude": 52.1343210103,
      "longitude": 24.7778997444
    }
  },
  "841cf683-20a2-48f5-8869-f439ddccc9fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 6г",
      "id": "841cf683-20a2-48f5-8869-f439ddccc9fe",
      "kilometrage": 528,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "841cf683-20a2-48f5-8869-f439ddccc9fe",
    "image": "buyo_left",
    "point": {
      "latitude": 52.116781111,
      "longitude": 26.148630917
    }
  },
  "843f28a1-fc6b-4775-8fbe-30acfb2da454": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 121а",
      "id": "843f28a1-fc6b-4775-8fbe-30acfb2da454",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "843f28a1-fc6b-4775-8fbe-30acfb2da454",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1418249231,
      "longitude": 26.7891696697
    }
  },
  "8535ea49-7009-4193-9402-ae8d0e9e52f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 144",
      "id": "8535ea49-7009-4193-9402-ae8d0e9e52f2",
      "kilometrage": 463,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8535ea49-7009-4193-9402-ae8d0e9e52f2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1397291538,
      "longitude": 26.9036163884
    }
  },
  "85661557-ac8f-4e4e-b63a-7b670c155f53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 31",
      "id": "85661557-ac8f-4e4e-b63a-7b670c155f53",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85661557-ac8f-4e4e-b63a-7b670c155f53",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1153633667,
      "longitude": 26.3147789481
    }
  },
  "8571f6ca-7780-43eb-9c28-ad19a5a2ce8b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "8571f6ca-7780-43eb-9c28-ad19a5a2ce8b",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8571f6ca-7780-43eb-9c28-ad19a5a2ce8b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1119233783,
      "longitude": 26.2904110502
    }
  },
  "85c3bd31-e7a3-4cf3-9086-98dfad0bc212": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "85c3bd31-e7a3-4cf3-9086-98dfad0bc212",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85c3bd31-e7a3-4cf3-9086-98dfad0bc212",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0372978721,
      "longitude": 25.1580542853
    }
  },
  "85e773c6-2f1e-47c6-837b-987c8654fe2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "85e773c6-2f1e-47c6-837b-987c8654fe2d",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85e773c6-2f1e-47c6-837b-987c8654fe2d",
    "image": "attention",
    "point": {
      "latitude": 52.1182376192,
      "longitude": 24.8304588689
    }
  },
  "85fe0b63-1496-45bc-8be7-f2cd664e7d1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 123а",
      "id": "85fe0b63-1496-45bc-8be7-f2cd664e7d1e",
      "kilometrage": 473,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85fe0b63-1496-45bc-8be7-f2cd664e7d1e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1432384577,
      "longitude": 26.808252243
    }
  },
  "866a8545-7e70-437c-bba9-867839badfcb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 60",
      "id": "866a8545-7e70-437c-bba9-867839badfcb",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "866a8545-7e70-437c-bba9-867839badfcb",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1210302963,
      "longitude": 24.81538972
    }
  },
  "86877a11-af97-49a1-b5e6-b6a0ce0bd720": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 191",
      "id": "86877a11-af97-49a1-b5e6-b6a0ce0bd720",
      "kilometrage": 445,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86877a11-af97-49a1-b5e6-b6a0ce0bd720",
    "image": "perev_right",
    "point": {
      "latitude": 52.1400409246,
      "longitude": 27.0820212672
    }
  },
  "86e573bc-68ee-4c3f-b7ec-8a16fcf9b3cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 4",
      "id": "86e573bc-68ee-4c3f-b7ec-8a16fcf9b3cc",
      "kilometrage": 529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86e573bc-68ee-4c3f-b7ec-8a16fcf9b3cc",
    "image": "perev_left",
    "point": {
      "latitude": 52.118494294,
      "longitude": 26.1292385188
    }
  },
  "870f05a0-3e3d-4f11-9323-ff0a2e787f25": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "870f05a0-3e3d-4f11-9323-ff0a2e787f25",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "870f05a0-3e3d-4f11-9323-ff0a2e787f25",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0268546497,
      "longitude": 25.5825027536
    }
  },
  "8711f860-6afb-4046-887b-dea9a202054d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "8711f860-6afb-4046-887b-dea9a202054d",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8711f860-6afb-4046-887b-dea9a202054d",
    "image": "name_of",
    "point": {
      "latitude": 52.1536081067,
      "longitude": 24.7067053446
    }
  },
  "87244c9a-b971-4005-ae58-878818b05857": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 229",
      "id": "87244c9a-b971-4005-ae58-878818b05857",
      "kilometrage": 430,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87244c9a-b971-4005-ae58-878818b05857",
    "image": "perev_right",
    "point": {
      "latitude": 52.1591168748,
      "longitude": 27.2031092038
    }
  },
  "8747ea4b-87f7-43e4-9323-eaca63863dea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 17",
      "id": "8747ea4b-87f7-43e4-9323-eaca63863dea",
      "kilometrage": 11,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8747ea4b-87f7-43e4-9323-eaca63863dea",
    "image": "perev_right",
    "point": {
      "latitude": 52.0935054547,
      "longitude": 25.9839473255
    }
  },
  "87b28c0e-b7d6-4c90-825c-9429f93d6342": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "87b28c0e-b7d6-4c90-825c-9429f93d6342",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87b28c0e-b7d6-4c90-825c-9429f93d6342",
    "image": "attention",
    "point": {
      "latitude": 52.1138801284,
      "longitude": 26.4288967389
    }
  },
  "87cff355-6951-45a9-8652-0f38ec11cc05": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 107",
      "id": "87cff355-6951-45a9-8652-0f38ec11cc05",
      "kilometrage": 91,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87cff355-6951-45a9-8652-0f38ec11cc05",
    "image": "perev_right",
    "point": {
      "latitude": 52.0888426545,
      "longitude": 24.9424719972
    }
  },
  "88528f6c-64d7-4f06-a3c5-2e422183c366": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "88528f6c-64d7-4f06-a3c5-2e422183c366",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88528f6c-64d7-4f06-a3c5-2e422183c366",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0225680375,
      "longitude": 25.3243095828
    }
  },
  "88ce62f7-5bc6-43f7-88cc-05b65a506f56": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 30",
      "id": "88ce62f7-5bc6-43f7-88cc-05b65a506f56",
      "kilometrage": 19,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88ce62f7-5bc6-43f7-88cc-05b65a506f56",
    "image": "perev_left",
    "point": {
      "latitude": 52.0766574064,
      "longitude": 25.8834795677
    }
  },
  "88fed1d2-f34f-438c-9b9b-ca9058af3ceb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 81",
      "id": "88fed1d2-f34f-438c-9b9b-ca9058af3ceb",
      "kilometrage": 494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88fed1d2-f34f-438c-9b9b-ca9058af3ceb",
    "image": "perev_right",
    "point": {
      "latitude": 52.109975923,
      "longitude": 26.5711090461
    }
  },
  "8938f20c-4004-4876-bca2-c5a57bdf5d80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 33",
      "id": "8938f20c-4004-4876-bca2-c5a57bdf5d80",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8938f20c-4004-4876-bca2-c5a57bdf5d80",
    "image": "perev_left",
    "point": {
      "latitude": 52.0747396802,
      "longitude": 25.8689889493
    }
  },
  "895d9bbf-48eb-40fd-8226-851e05d22b4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 136",
      "id": "895d9bbf-48eb-40fd-8226-851e05d22b4a",
      "kilometrage": 466,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "895d9bbf-48eb-40fd-8226-851e05d22b4a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1359604941,
      "longitude": 26.8809388596
    }
  },
  "8996c848-498c-4b3a-8976-6571a5c2e172": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 136а",
      "id": "8996c848-498c-4b3a-8976-6571a5c2e172",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8996c848-498c-4b3a-8976-6571a5c2e172",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2164905905,
      "longitude": 24.3486418258
    }
  },
  "899e7720-725f-49de-b592-821c1f5c2140": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "899e7720-725f-49de-b592-821c1f5c2140",
      "kilometrage": 14,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "899e7720-725f-49de-b592-821c1f5c2140",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0853575959,
      "longitude": 25.9521837844
    }
  },
  "89baf772-b82d-4ff5-a21d-7632b63312f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 232",
      "id": "89baf772-b82d-4ff5-a21d-7632b63312f2",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89baf772-b82d-4ff5-a21d-7632b63312f2",
    "image": "perev_right",
    "point": {
      "latitude": 52.0919055716,
      "longitude": 23.7831814409
    }
  },
  "89c263f4-1eea-40f3-aeb9-0aeee4c137e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 75",
      "id": "89c263f4-1eea-40f3-aeb9-0aeee4c137e3",
      "kilometrage": 115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89c263f4-1eea-40f3-aeb9-0aeee4c137e3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1723694362,
      "longitude": 24.6271797312
    }
  },
  "89d725b5-2d38-4885-81fa-548aae6132d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "89d725b5-2d38-4885-81fa-548aae6132d8",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89d725b5-2d38-4885-81fa-548aae6132d8",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0218639566,
      "longitude": 25.3265330272
    }
  },
  "89dca537-a038-4f35-b671-833378b90bc8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 235",
      "id": "89dca537-a038-4f35-b671-833378b90bc8",
      "kilometrage": 186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "89dca537-a038-4f35-b671-833378b90bc8",
    "image": "perev_left",
    "point": {
      "latitude": 52.0866759075,
      "longitude": 23.7585112799
    }
  },
  "8a0a1d55-276b-40d7-815f-ba7e720e87f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 50",
      "id": "8a0a1d55-276b-40d7-815f-ba7e720e87f4",
      "kilometrage": 30,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a0a1d55-276b-40d7-815f-ba7e720e87f4",
    "image": "perev_right",
    "point": {
      "latitude": 52.0764291985,
      "longitude": 25.738415477
    }
  },
  "8a638510-3ab5-43ba-90e1-e38c923e9c5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8a638510-3ab5-43ba-90e1-e38c923e9c5f",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a638510-3ab5-43ba-90e1-e38c923e9c5f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1162700669,
      "longitude": 23.9363755214
    }
  },
  "8adbd267-05c8-40e1-8c1c-5619074010d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8adbd267-05c8-40e1-8c1c-5619074010d1",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8adbd267-05c8-40e1-8c1c-5619074010d1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1023091714,
      "longitude": 26.0783436356
    }
  },
  "8b16d105-944f-4ca7-8b0a-5165107cded5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "8b16d105-944f-4ca7-8b0a-5165107cded5",
      "kilometrage": 171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b16d105-944f-4ca7-8b0a-5165107cded5",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1238209517,
      "longitude": 23.9360076947
    }
  },
  "8bb9baee-576d-45b9-9727-604ff37fa80d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 30",
      "id": "8bb9baee-576d-45b9-9727-604ff37fa80d",
      "kilometrage": 516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8bb9baee-576d-45b9-9727-604ff37fa80d",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1171182801,
      "longitude": 26.308336781
    }
  },
  "8bcaf487-5ac5-4a5d-bbd2-978accd02c23": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "8bcaf487-5ac5-4a5d-bbd2-978accd02c23",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8bcaf487-5ac5-4a5d-bbd2-978accd02c23",
    "image": "bridge_low",
    "point": {
      "latitude": 52.2146596965,
      "longitude": 24.3307991656
    }
  },
  "8c3c34ee-9a7e-4441-b6ca-3a0b6351d8ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 148",
      "id": "8c3c34ee-9a7e-4441-b6ca-3a0b6351d8ac",
      "kilometrage": 461,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c3c34ee-9a7e-4441-b6ca-3a0b6351d8ac",
    "image": "perev_right",
    "point": {
      "latitude": 52.1448289162,
      "longitude": 26.9280296703
    }
  },
  "8c5904da-82ef-4016-b51d-a99b8a265e55": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "8c5904da-82ef-4016-b51d-a99b8a265e55",
      "kilometrage": 470,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c5904da-82ef-4016-b51d-a99b8a265e55",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1391014506,
      "longitude": 26.8426138521
    }
  },
  "8ccdbc72-1fea-480a-a20d-4b03cfe73f1c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Предписание подать звуковой сигнал  ",
      "id": "8ccdbc72-1fea-480a-a20d-4b03cfe73f1c",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ccdbc72-1fea-480a-a20d-4b03cfe73f1c",
    "image": "sound_signal",
    "point": {
      "latitude": 52.1111778847,
      "longitude": 26.2912703095
    }
  },
  "8cd66647-b798-4be8-a58b-87c4cf556140": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8cd66647-b798-4be8-a58b-87c4cf556140",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8cd66647-b798-4be8-a58b-87c4cf556140",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0817851757,
      "longitude": 25.7833714312
    }
  },
  "8d02029a-fe14-4c3a-bf00-6c34b0f8722a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "8d02029a-fe14-4c3a-bf00-6c34b0f8722a",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d02029a-fe14-4c3a-bf00-6c34b0f8722a",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1188416154,
      "longitude": 26.739465431
    }
  },
  "8d2d0081-c20b-4768-9573-d01be27bb1f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "8d2d0081-c20b-4768-9573-d01be27bb1f7",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d2d0081-c20b-4768-9573-d01be27bb1f7",
    "image": "buyo_right",
    "point": {
      "latitude": 52.100492099,
      "longitude": 26.075006411
    }
  },
  "8d371350-7309-45ec-b5e2-4d7bc81209cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 63",
      "id": "8d371350-7309-45ec-b5e2-4d7bc81209cd",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d371350-7309-45ec-b5e2-4d7bc81209cd",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1160335228,
      "longitude": 26.4978575616
    }
  },
  "8da2ba61-419c-4f98-9607-e652b4aeeb72": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8da2ba61-419c-4f98-9607-e652b4aeeb72",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8da2ba61-419c-4f98-9607-e652b4aeeb72",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0264173136,
      "longitude": 25.587816714
    }
  },
  "8dd39330-f33c-4c85-9a55-d14d74e416f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Имеются ограничения судоходства  ",
      "id": "8dd39330-f33c-4c85-9a55-d14d74e416f1",
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8dd39330-f33c-4c85-9a55-d14d74e416f1",
    "image": "limitations",
    "point": {
      "latitude": 52.0670232801,
      "longitude": 26.1592571821
    }
  },
  "8e363f81-7b9e-4ab9-bc6a-dfb186963891": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "8e363f81-7b9e-4ab9-bc6a-dfb186963891",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e363f81-7b9e-4ab9-bc6a-dfb186963891",
    "image": "attention",
    "point": {
      "latitude": 52.210280894,
      "longitude": 24.4098082094
    }
  },
  "8e41aeae-47ad-45bd-9e77-2b7514ae7db7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "8e41aeae-47ad-45bd-9e77-2b7514ae7db7",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e41aeae-47ad-45bd-9e77-2b7514ae7db7",
    "image": "attention",
    "point": {
      "latitude": 52.0223344846,
      "longitude": 25.4649759165
    }
  },
  "8e97c77e-e9d1-4a25-8e04-068976d35c99": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 219",
      "id": "8e97c77e-e9d1-4a25-8e04-068976d35c99",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8e97c77e-e9d1-4a25-8e04-068976d35c99",
    "image": "buyo_left",
    "point": {
      "latitude": 52.093029222,
      "longitude": 23.872644361
    }
  },
  "8eafcfd8-b35a-4865-9117-f2b53af487f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 177",
      "id": "8eafcfd8-b35a-4865-9117-f2b53af487f2",
      "kilometrage": 450,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8eafcfd8-b35a-4865-9117-f2b53af487f2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1595179968,
      "longitude": 27.0368802076
    }
  },
  "8ec6faa4-0631-4af4-aa71-dc5daeb72ad4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "8ec6faa4-0631-4af4-aa71-dc5daeb72ad4",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ec6faa4-0631-4af4-aa71-dc5daeb72ad4",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.121276309,
      "longitude": 26.4349517067
    }
  },
  "8ed211d1-a48c-4a01-9ec6-6cf7b4a3e51f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8ed211d1-a48c-4a01-9ec6-6cf7b4a3e51f",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ed211d1-a48c-4a01-9ec6-6cf7b4a3e51f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2072522649,
      "longitude": 24.4270952168
    }
  },
  "8f0c3262-e039-4220-b007-6034ce41a99f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 47",
      "id": "8f0c3262-e039-4220-b007-6034ce41a99f",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f0c3262-e039-4220-b007-6034ce41a99f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1091165329,
      "longitude": 26.4134224094
    }
  },
  "8f431e71-7541-4448-b5a7-94ce03387c36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8f431e71-7541-4448-b5a7-94ce03387c36",
      "kilometrage": 75,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f431e71-7541-4448-b5a7-94ce03387c36",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.04357929,
      "longitude": 25.1403274275
    }
  },
  "8f4b6a37-cec9-4689-a54c-cabcfa655781": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "8f4b6a37-cec9-4689-a54c-cabcfa655781",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f4b6a37-cec9-4689-a54c-cabcfa655781",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0269262665,
      "longitude": 25.5857385531
    }
  },
  "8f7671b5-1f05-4afa-82f2-2c2106ac42fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 165",
      "id": "8f7671b5-1f05-4afa-82f2-2c2106ac42fe",
      "kilometrage": 149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f7671b5-1f05-4afa-82f2-2c2106ac42fe",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1919000248,
      "longitude": 24.169775785
    }
  },
  "8f8dbcae-81e8-4b93-bb82-aa735aea4610": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 98",
      "id": "8f8dbcae-81e8-4b93-bb82-aa735aea4610",
      "kilometrage": 486,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f8dbcae-81e8-4b93-bb82-aa735aea4610",
    "image": "perev_right",
    "point": {
      "latitude": 52.122299962,
      "longitude": 26.6603564994
    }
  },
  "90ec0b3c-9d64-4be2-84c7-3619ffb9e266": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "90ec0b3c-9d64-4be2-84c7-3619ffb9e266",
      "kilometrage": 535,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "90ec0b3c-9d64-4be2-84c7-3619ffb9e266",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0758912039,
      "longitude": 26.1494957844
    }
  },
  "9129fa2c-bc4b-487e-85dd-3f37b778a4c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "9129fa2c-bc4b-487e-85dd-3f37b778a4c7",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9129fa2c-bc4b-487e-85dd-3f37b778a4c7",
    "image": "attention",
    "point": {
      "latitude": 52.0218499639,
      "longitude": 25.3420633247
    }
  },
  "914b1e18-564b-4c04-9a59-fd6853755371": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 115",
      "id": "914b1e18-564b-4c04-9a59-fd6853755371",
      "kilometrage": 477,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "914b1e18-564b-4c04-9a59-fd6853755371",
    "image": "perev_left",
    "point": {
      "latitude": 52.1329784815,
      "longitude": 26.76163939
    }
  },
  "9152b7fa-9f0a-4977-85d8-abddbb5479d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 154",
      "id": "9152b7fa-9f0a-4977-85d8-abddbb5479d4",
      "kilometrage": 459,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9152b7fa-9f0a-4977-85d8-abddbb5479d4",
    "image": "perev_left",
    "point": {
      "latitude": 52.1508496151,
      "longitude": 26.9569136818
    }
  },
  "915eb1c9-6285-4fd0-8dbe-abc206d276b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "915eb1c9-6285-4fd0-8dbe-abc206d276b7",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "915eb1c9-6285-4fd0-8dbe-abc206d276b7",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1414438209,
      "longitude": 26.7930533171
    }
  },
  "9160b5b9-f6cd-454d-880d-4b9cfe6ec9f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 153",
      "id": "9160b5b9-f6cd-454d-880d-4b9cfe6ec9f1",
      "kilometrage": 459,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9160b5b9-f6cd-454d-880d-4b9cfe6ec9f1",
    "image": "perev_right",
    "point": {
      "latitude": 52.1476307113,
      "longitude": 26.95291547
    }
  },
  "91a77a2d-5c02-4e16-bc58-55727327045c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "91a77a2d-5c02-4e16-bc58-55727327045c",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91a77a2d-5c02-4e16-bc58-55727327045c",
    "image": "stop",
    "point": {
      "latitude": 52.0883239735,
      "longitude": 23.7424079772
    }
  },
  "91c3cd44-0837-44ae-8835-491b796f0702": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Движение маломерных судов запрещено  ",
      "id": "91c3cd44-0837-44ae-8835-491b796f0702",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91c3cd44-0837-44ae-8835-491b796f0702",
    "image": "small_ships_forbidden",
    "point": {
      "latitude": 52.1056042907,
      "longitude": 26.0114824452
    }
  },
  "9265a3cb-72ab-4e9a-ae41-ca70e96a5a66": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 14",
      "id": "9265a3cb-72ab-4e9a-ae41-ca70e96a5a66",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9265a3cb-72ab-4e9a-ae41-ca70e96a5a66",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1045424867,
      "longitude": 26.0139230065
    }
  },
  "92b0a786-2c13-45ef-b68d-baa16bbae800": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 26",
      "id": "92b0a786-2c13-45ef-b68d-baa16bbae800",
      "kilometrage": 16,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92b0a786-2c13-45ef-b68d-baa16bbae800",
    "image": "perev_left",
    "point": {
      "latitude": 52.0797273297,
      "longitude": 25.9228374784
    }
  },
  "92fb56b4-9275-477d-9df9-5a6e2a5a1654": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 166",
      "id": "92fb56b4-9275-477d-9df9-5a6e2a5a1654",
      "kilometrage": 454,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92fb56b4-9275-477d-9df9-5a6e2a5a1654",
    "image": "perev_right",
    "point": {
      "latitude": 52.1531082773,
      "longitude": 26.9942206839
    }
  },
  "931bd8cf-148e-4615-9c85-fbf567eb01dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 211",
      "id": "931bd8cf-148e-4615-9c85-fbf567eb01dc",
      "kilometrage": 437,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "931bd8cf-148e-4615-9c85-fbf567eb01dc",
    "image": "perev_right",
    "point": {
      "latitude": 52.1463988425,
      "longitude": 27.1472638897
    }
  },
  "932f89e7-be07-46f1-b704-567e35b272d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 25",
      "id": "932f89e7-be07-46f1-b704-567e35b272d3",
      "kilometrage": 519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "932f89e7-be07-46f1-b704-567e35b272d3",
    "image": "perev_left",
    "point": {
      "latitude": 52.1142171451,
      "longitude": 26.2683025145
    }
  },
  "93e203a5-ce0b-48e8-87ad-52574ce041ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 89",
      "id": "93e203a5-ce0b-48e8-87ad-52574ce041ee",
      "kilometrage": 68,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "93e203a5-ce0b-48e8-87ad-52574ce041ee",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.0331087931,
      "longitude": 25.2393225778
    }
  },
  "93f9bdeb-3834-4bf6-9acf-b16b36888ddc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "93f9bdeb-3834-4bf6-9acf-b16b36888ddc",
      "kilometrage": 60,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "93f9bdeb-3834-4bf6-9acf-b16b36888ddc",
    "image": "name_of",
    "point": {
      "latitude": 52.0209650205,
      "longitude": 25.3486819535
    }
  },
  "941daf10-787d-47f2-ad89-40bee5445361": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 66",
      "id": "941daf10-787d-47f2-ad89-40bee5445361",
      "kilometrage": 39,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "941daf10-787d-47f2-ad89-40bee5445361",
    "image": "perev_right",
    "point": {
      "latitude": 52.0478926347,
      "longitude": 25.6347052856
    }
  },
  "94d8482d-ae72-4e43-8255-3b76ae539938": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "94d8482d-ae72-4e43-8255-3b76ae539938",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "94d8482d-ae72-4e43-8255-3b76ae539938",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.202166879,
      "longitude": 24.250940327
    }
  },
  "9534a73e-04dd-44b7-8693-bcbbf5e835ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "9534a73e-04dd-44b7-8693-bcbbf5e835ae",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9534a73e-04dd-44b7-8693-bcbbf5e835ae",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0737127411,
      "longitude": 25.8761497032
    }
  },
  "9569e113-c2c6-4ab5-9ad8-b756997286d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9569e113-c2c6-4ab5-9ad8-b756997286d4",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9569e113-c2c6-4ab5-9ad8-b756997286d4",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1102294125,
      "longitude": 26.1075598207
    }
  },
  "95815b63-f74e-464e-854f-5ba16090611b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "95815b63-f74e-464e-854f-5ba16090611b",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95815b63-f74e-464e-854f-5ba16090611b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0833861071,
      "longitude": 23.7239841595
    }
  },
  "95931b34-f2fe-4837-997b-5caf5f8718f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 41",
      "id": "95931b34-f2fe-4837-997b-5caf5f8718f1",
      "kilometrage": 24,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95931b34-f2fe-4837-997b-5caf5f8718f1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0740028042,
      "longitude": 25.8103491623
    }
  },
  "95e0530a-46df-4288-b8a4-15d9cada17f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "95e0530a-46df-4288-b8a4-15d9cada17f0",
      "kilometrage": 420,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95e0530a-46df-4288-b8a4-15d9cada17f0",
    "image": "name_of",
    "point": {
      "latitude": 52.1571591669,
      "longitude": 27.2977314449
    }
  },
  "9614815a-bd22-4485-9c3b-7ec9f38c811d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 123в",
      "id": "9614815a-bd22-4485-9c3b-7ec9f38c811d",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9614815a-bd22-4485-9c3b-7ec9f38c811d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.14451575,
      "longitude": 26.81412725
    }
  },
  "968c829a-0730-4069-9262-75608b8f85f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "968c829a-0730-4069-9262-75608b8f85f4",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "968c829a-0730-4069-9262-75608b8f85f4",
    "image": "main_way",
    "point": {
      "latitude": 52.1425354321,
      "longitude": 27.2818922942
    }
  },
  "971d5f0b-a173-4a09-b017-00429b785936": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 195",
      "id": "971d5f0b-a173-4a09-b017-00429b785936",
      "kilometrage": 443,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "971d5f0b-a173-4a09-b017-00429b785936",
    "image": "perev_right",
    "point": {
      "latitude": 52.1414420714,
      "longitude": 27.0926837896
    }
  },
  "973b1e55-1775-45c1-8231-10397816d462": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "973b1e55-1775-45c1-8231-10397816d462",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "973b1e55-1775-45c1-8231-10397816d462",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2136969107,
      "longitude": 24.3875994093
    }
  },
  "97484850-ebb2-4f1b-be66-4508d56e4c67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 52",
      "id": "97484850-ebb2-4f1b-be66-4508d56e4c67",
      "kilometrage": 31,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97484850-ebb2-4f1b-be66-4508d56e4c67",
    "image": "perev_right",
    "point": {
      "latitude": 52.0750817863,
      "longitude": 25.7259725373
    }
  },
  "97dc246f-1498-4665-8bd9-7f2c71bcd783": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "97dc246f-1498-4665-8bd9-7f2c71bcd783",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97dc246f-1498-4665-8bd9-7f2c71bcd783",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.182689492,
      "longitude": 24.034363581
    }
  },
  "97f21635-449e-4042-ad8d-2632a8aa6e3f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "97f21635-449e-4042-ad8d-2632a8aa6e3f",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97f21635-449e-4042-ad8d-2632a8aa6e3f",
    "image": "attention",
    "point": {
      "latitude": 52.1154673258,
      "longitude": 26.4292893367
    }
  },
  "987a3f02-5e97-456c-8a4d-8a38a8d96602": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "987a3f02-5e97-456c-8a4d-8a38a8d96602",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "987a3f02-5e97-456c-8a4d-8a38a8d96602",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0834980026,
      "longitude": 23.7235379087
    }
  },
  "988126a4-3ea4-4c4f-852e-3e9545b0d0ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 5",
      "id": "988126a4-3ea4-4c4f-852e-3e9545b0d0ca",
      "kilometrage": 46,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "988126a4-3ea4-4c4f-852e-3e9545b0d0ca",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0251932146,
      "longitude": 25.5502903667
    }
  },
  "98aa8f3d-1a78-4467-be17-1b4fb5d57bc5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 104",
      "id": "98aa8f3d-1a78-4467-be17-1b4fb5d57bc5",
      "kilometrage": 483,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98aa8f3d-1a78-4467-be17-1b4fb5d57bc5",
    "image": "perev_right",
    "point": {
      "latitude": 52.1103169027,
      "longitude": 26.7079064381
    }
  },
  "98b36580-c2aa-4f2c-821f-0faa5017e88c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 29",
      "id": "98b36580-c2aa-4f2c-821f-0faa5017e88c",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98b36580-c2aa-4f2c-821f-0faa5017e88c",
    "image": "perev_left",
    "point": {
      "latitude": 52.1109717389,
      "longitude": 27.2620685102
    }
  },
  "990d3613-0b9a-4ff1-ad05-ec93a9a46f72": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 155",
      "id": "990d3613-0b9a-4ff1-ad05-ec93a9a46f72",
      "kilometrage": 458,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "990d3613-0b9a-4ff1-ad05-ec93a9a46f72",
    "image": "perev_right",
    "point": {
      "latitude": 52.1512555135,
      "longitude": 26.962417326
    }
  },
  "99192b68-ac45-430a-a018-eec516575e2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 149",
      "id": "99192b68-ac45-430a-a018-eec516575e2d",
      "kilometrage": 461,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99192b68-ac45-430a-a018-eec516575e2d",
    "image": "perev_left",
    "point": {
      "latitude": 52.148014411,
      "longitude": 26.9313257451
    }
  },
  "994606b2-869c-4b49-8c87-10aaee9c77ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Предписание подать звуковой сигнал  ",
      "id": "994606b2-869c-4b49-8c87-10aaee9c77ec",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "994606b2-869c-4b49-8c87-10aaee9c77ec",
    "image": "sound_signal",
    "point": {
      "latitude": 52.1174883454,
      "longitude": 26.1577463533
    }
  },
  "994cd1fb-068b-4168-bb81-0301b8fb96a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "994cd1fb-068b-4168-bb81-0301b8fb96a3",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "994cd1fb-068b-4168-bb81-0301b8fb96a3",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0271024594,
      "longitude": 25.5928371082
    }
  },
  "99675f51-077b-4656-9c39-1c19d23c9f6a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "99675f51-077b-4656-9c39-1c19d23c9f6a",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99675f51-077b-4656-9c39-1c19d23c9f6a",
    "image": "attention",
    "point": {
      "latitude": 52.0230161463,
      "longitude": 25.4709559765
    }
  },
  "9972c3c8-0512-42a0-86fc-3f255344d4f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 134",
      "id": "9972c3c8-0512-42a0-86fc-3f255344d4f7",
      "kilometrage": 467,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9972c3c8-0512-42a0-86fc-3f255344d4f7",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1342042133,
      "longitude": 26.8724583264
    }
  },
  "997dae85-79d2-4777-98a6-d0a5d8c8cea1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 14",
      "id": "997dae85-79d2-4777-98a6-d0a5d8c8cea1",
      "kilometrage": 525,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "997dae85-79d2-4777-98a6-d0a5d8c8cea1",
    "image": "perev_left",
    "point": {
      "latitude": 52.1174193138,
      "longitude": 26.1917531381
    }
  },
  "99dfa729-51c0-4a0f-bf18-8caf1ae45bb6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 28",
      "id": "99dfa729-51c0-4a0f-bf18-8caf1ae45bb6",
      "kilometrage": 18,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99dfa729-51c0-4a0f-bf18-8caf1ae45bb6",
    "image": "perev_left",
    "point": {
      "latitude": 52.0775029807,
      "longitude": 25.8959965055
    }
  },
  "9a1ee19b-9929-4088-8857-3e12d6162b5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 15",
      "id": "9a1ee19b-9929-4088-8857-3e12d6162b5f",
      "kilometrage": 524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a1ee19b-9929-4088-8857-3e12d6162b5f",
    "image": "perev_right",
    "point": {
      "latitude": 52.114251169,
      "longitude": 26.1992354064
    }
  },
  "9a652eae-615c-45dc-93b3-51625366af45": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 40",
      "id": "9a652eae-615c-45dc-93b3-51625366af45",
      "kilometrage": 511,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a652eae-615c-45dc-93b3-51625366af45",
    "image": "perev_right",
    "point": {
      "latitude": 52.0956886994,
      "longitude": 26.3737374978
    }
  },
  "9a76d23d-b208-4f2a-b0ce-db53eb235b1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 103",
      "id": "9a76d23d-b208-4f2a-b0ce-db53eb235b1d",
      "kilometrage": 84,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a76d23d-b208-4f2a-b0ce-db53eb235b1d",
    "image": "perev_right",
    "point": {
      "latitude": 52.0549829474,
      "longitude": 25.0233458516
    }
  },
  "9a8f80e1-4c3f-4306-aa2f-11433e09f8ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "9a8f80e1-4c3f-4306-aa2f-11433e09f8ce",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a8f80e1-4c3f-4306-aa2f-11433e09f8ce",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2113157139,
      "longitude": 24.4027453236
    }
  },
  "9a9dfc05-abf8-43a0-a203-2364332f3bb0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 120",
      "id": "9a9dfc05-abf8-43a0-a203-2364332f3bb0",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a9dfc05-abf8-43a0-a203-2364332f3bb0",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1410306709,
      "longitude": 26.7818917164
    }
  },
  "9ac54fc4-32ce-4655-a070-adaf0d956930": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "9ac54fc4-32ce-4655-a070-adaf0d956930",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ac54fc4-32ce-4655-a070-adaf0d956930",
    "image": "attention",
    "point": {
      "latitude": 52.1440344957,
      "longitude": 23.9595631381
    }
  },
  "9ac982d8-fc3c-41c7-bc35-07fc756649a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 225",
      "id": "9ac982d8-fc3c-41c7-bc35-07fc756649a2",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ac982d8-fc3c-41c7-bc35-07fc756649a2",
    "image": "perev_right",
    "point": {
      "latitude": 52.0941130281,
      "longitude": 23.8375826224
    }
  },
  "9ae64c7b-89ab-4803-bcf4-cbeeaec174bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "9ae64c7b-89ab-4803-bcf4-cbeeaec174bf",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ae64c7b-89ab-4803-bcf4-cbeeaec174bf",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0806544198,
      "longitude": 23.7051751565
    }
  },
  "9b8506f6-7d9b-4539-9492-23f89801a8a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 163",
      "id": "9b8506f6-7d9b-4539-9492-23f89801a8a0",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b8506f6-7d9b-4539-9492-23f89801a8a0",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1865440194,
      "longitude": 24.1821905031
    }
  },
  "9ccb3b4d-e7dd-4cc1-bd34-044ad17af1a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "9ccb3b4d-e7dd-4cc1-bd34-044ad17af1a3",
      "kilometrage": 462,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ccb3b4d-e7dd-4cc1-bd34-044ad17af1a3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.144933521,
      "longitude": 26.9189505823
    }
  },
  "9d929fad-330c-4136-af30-993504d4150f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "9d929fad-330c-4136-af30-993504d4150f",
      "kilometrage": 12,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d929fad-330c-4136-af30-993504d4150f",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0891236708,
      "longitude": 25.97256644
    }
  },
  "9dabec1f-1c1e-47a2-89a6-dd5e4d43d226": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "9dabec1f-1c1e-47a2-89a6-dd5e4d43d226",
      "kilometrage": 181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9dabec1f-1c1e-47a2-89a6-dd5e4d43d226",
    "image": "name_of",
    "point": {
      "latitude": 52.0881275422,
      "longitude": 23.8324377369
    }
  },
  "9dc81aca-7ee7-4f36-9a18-5b2b3a1aa701": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 112",
      "id": "9dc81aca-7ee7-4f36-9a18-5b2b3a1aa701",
      "kilometrage": 98,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9dc81aca-7ee7-4f36-9a18-5b2b3a1aa701",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1126410288,
      "longitude": 24.8490418043
    }
  },
  "9dec8e17-336d-473a-b88c-dcbe16ce04cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 206",
      "id": "9dec8e17-336d-473a-b88c-dcbe16ce04cd",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9dec8e17-336d-473a-b88c-dcbe16ce04cd",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1130855466,
      "longitude": 23.9356290473
    }
  },
  "9e31023f-1a3b-4f5f-99c0-a4b9c42cae87": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 78",
      "id": "9e31023f-1a3b-4f5f-99c0-a4b9c42cae87",
      "kilometrage": 50,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e31023f-1a3b-4f5f-99c0-a4b9c42cae87",
    "image": "perev_right",
    "point": {
      "latitude": 52.0267811827,
      "longitude": 25.4919386251
    }
  },
  "9e7ecd5b-3676-42a3-9993-e5e45cafcba7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 117",
      "id": "9e7ecd5b-3676-42a3-9993-e5e45cafcba7",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e7ecd5b-3676-42a3-9993-e5e45cafcba7",
    "image": "perev_left",
    "point": {
      "latitude": 52.1267142121,
      "longitude": 24.7996736149
    }
  },
  "9ea883e4-af40-42e2-b5f8-f114dce2c400": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 265",
      "id": "9ea883e4-af40-42e2-b5f8-f114dce2c400",
      "kilometrage": 411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ea883e4-af40-42e2-b5f8-f114dce2c400",
    "image": "perev_right",
    "point": {
      "latitude": 52.1525296285,
      "longitude": 27.3401284083
    }
  },
  "9ea95545-276f-470d-841f-0b66bc05c2db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 216",
      "id": "9ea95545-276f-470d-841f-0b66bc05c2db",
      "kilometrage": 435,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ea95545-276f-470d-841f-0b66bc05c2db",
    "image": "perev_right",
    "point": {
      "latitude": 52.1457131514,
      "longitude": 27.1723044132
    }
  },
  "9f0be051-e53d-4784-b013-ddc5252622a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 38",
      "id": "9f0be051-e53d-4784-b013-ddc5252622a0",
      "kilometrage": 23,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f0be051-e53d-4784-b013-ddc5252622a0",
    "image": "perev_left",
    "point": {
      "latitude": 52.078493313,
      "longitude": 25.8362309774
    }
  },
  "9f6db3ef-1015-4d06-a2e4-0f450b0b940d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 129",
      "id": "9f6db3ef-1015-4d06-a2e4-0f450b0b940d",
      "kilometrage": 109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f6db3ef-1015-4d06-a2e4-0f450b0b940d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1483890008,
      "longitude": 24.7130092088
    }
  },
  "9f77cdd3-e50a-4d56-9381-fd208d45ce60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 26",
      "id": "9f77cdd3-e50a-4d56-9381-fd208d45ce60",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f77cdd3-e50a-4d56-9381-fd208d45ce60",
    "image": "perev_right",
    "point": {
      "latitude": 52.1108839097,
      "longitude": 26.2875848225
    }
  },
  "<built-in function id>": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 6",
      "id": "62d5f3e3-558e-46a5-a713-405b379664da",
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62d5f3e3-558e-46a5-a713-405b379664da",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.20000793,
      "longitude": 27.3879748809
    }
  },
  "a069bb7d-64e0-43e3-a8b6-aa11c2b2f269": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a069bb7d-64e0-43e3-a8b6-aa11c2b2f269",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a069bb7d-64e0-43e3-a8b6-aa11c2b2f269",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1208023314,
      "longitude": 24.8213732724
    }
  },
  "a0d364ce-94e0-478a-a3b2-3c2397ed7e5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a0d364ce-94e0-478a-a3b2-3c2397ed7e5f",
      "kilometrage": 42,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0d364ce-94e0-478a-a3b2-3c2397ed7e5f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0272634488,
      "longitude": 25.5951092818
    }
  },
  "a0f0fe6e-aac2-4ba5-a121-4d3803376dc3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 64",
      "id": "a0f0fe6e-aac2-4ba5-a121-4d3803376dc3",
      "kilometrage": 38,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0f0fe6e-aac2-4ba5-a121-4d3803376dc3",
    "image": "perev_left",
    "point": {
      "latitude": 52.053817493,
      "longitude": 25.640288491
    }
  },
  "a0f84d47-4a87-4106-ba57-94082297560a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 158",
      "id": "a0f84d47-4a87-4106-ba57-94082297560a",
      "kilometrage": 457,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0f84d47-4a87-4106-ba57-94082297560a",
    "image": "perev_right",
    "point": {
      "latitude": 52.14914481,
      "longitude": 26.9729848769
    }
  },
  "a102a178-c0df-4f4f-acb3-0f9d70aeae18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 2",
      "id": "a102a178-c0df-4f4f-acb3-0f9d70aeae18",
      "kilometrage": 3,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a102a178-c0df-4f4f-acb3-0f9d70aeae18",
    "image": "perev_left",
    "point": {
      "latitude": 52.1054579027,
      "longitude": 26.0880828016
    }
  },
  "a120c94b-dd06-4ad0-ac82-afa1e2cfb7c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "a120c94b-dd06-4ad0-ac82-afa1e2cfb7c9",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a120c94b-dd06-4ad0-ac82-afa1e2cfb7c9",
    "image": "name_of",
    "point": {
      "latitude": 52.1425173394,
      "longitude": 27.2800057459
    }
  },
  "a142a958-d637-4237-8bb8-c179f3648d69": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 146",
      "id": "a142a958-d637-4237-8bb8-c179f3648d69",
      "kilometrage": 140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a142a958-d637-4237-8bb8-c179f3648d69",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2106963669,
      "longitude": 24.2877258115
    }
  },
  "a147b402-db0e-41f1-8912-93e23ec2df3f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "a147b402-db0e-41f1-8912-93e23ec2df3f",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a147b402-db0e-41f1-8912-93e23ec2df3f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0823822787,
      "longitude": 23.6869317871
    }
  },
  "a1bd7d07-ab4a-4f52-babf-bc9ed9a3fde1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 36",
      "id": "a1bd7d07-ab4a-4f52-babf-bc9ed9a3fde1",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1bd7d07-ab4a-4f52-babf-bc9ed9a3fde1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1003490604,
      "longitude": 26.3419279166
    }
  },
  "a1ee1b59-7705-4526-b8f7-9ccfb54d7c5c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a1ee1b59-7705-4526-b8f7-9ccfb54d7c5c",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1ee1b59-7705-4526-b8f7-9ccfb54d7c5c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1991236328,
      "longitude": 27.3871396317
    }
  },
  "a20c3e84-515f-4a01-8be6-8513f4af8c20": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a20c3e84-515f-4a01-8be6-8513f4af8c20",
      "kilometrage": 160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a20c3e84-515f-4a01-8be6-8513f4af8c20",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1832830747,
      "longitude": 24.0351579344
    }
  },
  "a249b8b2-2f1e-43c9-b8e2-dd3333e7d1f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 112",
      "id": "a249b8b2-2f1e-43c9-b8e2-dd3333e7d1f2",
      "kilometrage": 478,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a249b8b2-2f1e-43c9-b8e2-dd3333e7d1f2",
    "image": "perev_right",
    "point": {
      "latitude": 52.1263911246,
      "longitude": 26.7587414556
    }
  },
  "a30e353a-275d-4d4d-8daf-d98cf62b744b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 216",
      "id": "a30e353a-275d-4d4d-8daf-d98cf62b744b",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a30e353a-275d-4d4d-8daf-d98cf62b744b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0947340432,
      "longitude": 23.8874597596
    }
  },
  "a311b528-866f-4c31-95b4-3a0b2b704524": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "a311b528-866f-4c31-95b4-3a0b2b704524",
      "kilometrage": 474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a311b528-866f-4c31-95b4-3a0b2b704524",
    "image": "attention",
    "point": {
      "latitude": 52.1410915955,
      "longitude": 26.7950439009
    }
  },
  "a329cd41-62b1-4ec5-a8b8-03ded0cd2bdf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 130",
      "id": "a329cd41-62b1-4ec5-a8b8-03ded0cd2bdf",
      "kilometrage": 110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a329cd41-62b1-4ec5-a8b8-03ded0cd2bdf",
    "image": "perev_right",
    "point": {
      "latitude": 52.1590334096,
      "longitude": 24.6979781751
    }
  },
  "a32a58ff-bf2f-4e81-8201-b124211a9806": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 123б",
      "id": "a32a58ff-bf2f-4e81-8201-b124211a9806",
      "kilometrage": 473,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a32a58ff-bf2f-4e81-8201-b124211a9806",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1426343183,
      "longitude": 26.8080298066
    }
  },
  "a38a35b4-98ac-4e68-9ba0-2900340dbc12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 480",
      "id": "a38a35b4-98ac-4e68-9ba0-2900340dbc12",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a38a35b4-98ac-4e68-9ba0-2900340dbc12",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1167420205,
      "longitude": 26.7376366226
    }
  },
  "a3c0d104-b711-437b-9ce6-a95cd51581e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "a3c0d104-b711-437b-9ce6-a95cd51581e9",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3c0d104-b711-437b-9ce6-a95cd51581e9",
    "image": "stop",
    "point": {
      "latitude": 52.1161983319,
      "longitude": 26.7387098242
    }
  },
  "a40129d2-0cbf-4179-b579-dc94233041f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 202",
      "id": "a40129d2-0cbf-4179-b579-dc94233041f4",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a40129d2-0cbf-4179-b579-dc94233041f4",
    "image": "perev_left",
    "point": {
      "latitude": 52.1271616026,
      "longitude": 23.9420496259
    }
  },
  "a42e802d-9891-4d4e-95ba-9061a32d65b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 72",
      "id": "a42e802d-9891-4d4e-95ba-9061a32d65b5",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a42e802d-9891-4d4e-95ba-9061a32d65b5",
    "image": "perev_right",
    "point": {
      "latitude": 52.0264470696,
      "longitude": 25.5905711821
    }
  },
  "a463510a-2fef-4328-bd98-c16089a158b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a463510a-2fef-4328-bd98-c16089a158b7",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a463510a-2fef-4328-bd98-c16089a158b7",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2051261903,
      "longitude": 24.4392310451
    }
  },
  "a517e095-9517-4444-9fbf-e1c30282a977": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "a517e095-9517-4444-9fbf-e1c30282a977",
      "kilometrage": 51,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a517e095-9517-4444-9fbf-e1c30282a977",
    "image": "attention",
    "point": {
      "latitude": 52.0260315612,
      "longitude": 25.4846742616
    }
  },
  "a525ecc0-3720-40a7-93d5-94df1a283e2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a525ecc0-3720-40a7-93d5-94df1a283e2d",
      "kilometrage": 143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a525ecc0-3720-40a7-93d5-94df1a283e2d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2025835623,
      "longitude": 24.2485725409
    }
  },
  "a53c9a54-a82d-4107-ab8e-ff0e10a06c37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "a53c9a54-a82d-4107-ab8e-ff0e10a06c37",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a53c9a54-a82d-4107-ab8e-ff0e10a06c37",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0884544431,
      "longitude": 23.7393624202
    }
  },
  "a54d3af7-4e49-42e0-b146-2b92ca4de5e2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a54d3af7-4e49-42e0-b146-2b92ca4de5e2",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a54d3af7-4e49-42e0-b146-2b92ca4de5e2",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1642481422,
      "longitude": 24.0017057859
    }
  },
  "a5707d8e-7a5c-4a47-b379-92fde0ac04ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 240",
      "id": "a5707d8e-7a5c-4a47-b379-92fde0ac04ac",
      "kilometrage": 425,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5707d8e-7a5c-4a47-b379-92fde0ac04ac",
    "image": "perev_right",
    "point": {
      "latitude": 52.15036375,
      "longitude": 27.250183627
    }
  },
  "a62ee3b9-6da9-4877-ba8d-2532c370e40c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 79",
      "id": "a62ee3b9-6da9-4877-ba8d-2532c370e40c",
      "kilometrage": 495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a62ee3b9-6da9-4877-ba8d-2532c370e40c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1141094894,
      "longitude": 26.5616560008
    }
  },
  "a63cfe57-92ca-446c-905c-02e91c38f2e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 192",
      "id": "a63cfe57-92ca-446c-905c-02e91c38f2e8",
      "kilometrage": 444,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a63cfe57-92ca-446c-905c-02e91c38f2e8",
    "image": "perev_left",
    "point": {
      "latitude": 52.1430331477,
      "longitude": 27.0829407265
    }
  },
  "a712ba2e-bc37-4bd5-bdf3-bacdecb70e65": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "a712ba2e-bc37-4bd5-bdf3-bacdecb70e65",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a712ba2e-bc37-4bd5-bdf3-bacdecb70e65",
    "image": "axis_romb",
    "point": {
      "latitude": 52.1354995643,
      "longitude": 23.9467463873
    }
  },
  "a78afec9-bd51-4a2d-b326-a0b978084334": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 84",
      "id": "a78afec9-bd51-4a2d-b326-a0b978084334",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a78afec9-bd51-4a2d-b326-a0b978084334",
    "image": "perev_left",
    "point": {
      "latitude": 52.0228358907,
      "longitude": 25.3166226383
    }
  },
  "a7f04e4f-718b-4ea6-9d92-f7fdbdc4154d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 24",
      "id": "a7f04e4f-718b-4ea6-9d92-f7fdbdc4154d",
      "kilometrage": 520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a7f04e4f-718b-4ea6-9d92-f7fdbdc4154d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1145207633,
      "longitude": 26.2609392268
    }
  },
  "a81b89ac-b8ff-4962-ae50-d56ac21d41fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 535",
      "id": "a81b89ac-b8ff-4962-ae50-d56ac21d41fb",
      "kilometrage": 535,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a81b89ac-b8ff-4962-ae50-d56ac21d41fb",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0767727153,
      "longitude": 26.1472452663
    }
  },
  "a89d0a97-2122-4194-8e9b-d5a1cad564b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 15",
      "id": "a89d0a97-2122-4194-8e9b-d5a1cad564b7",
      "kilometrage": 15,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a89d0a97-2122-4194-8e9b-d5a1cad564b7",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0846153856,
      "longitude": 25.9375451264
    }
  },
  "a8e31b46-d326-4b96-aedd-abdb05fff1e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 124в",
      "id": "a8e31b46-d326-4b96-aedd-abdb05fff1e0",
      "kilometrage": 471,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a8e31b46-d326-4b96-aedd-abdb05fff1e0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1402038569,
      "longitude": 26.8336701276
    }
  },
  "a9021326-c21f-4d83-b29d-d69d33cc5135": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 261",
      "id": "a9021326-c21f-4d83-b29d-d69d33cc5135",
      "kilometrage": 414,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9021326-c21f-4d83-b29d-d69d33cc5135",
    "image": "perev_right",
    "point": {
      "latitude": 52.1365171102,
      "longitude": 27.3372308607
    }
  },
  "a92ae483-f092-44f4-86b2-2fd2dec0fe1c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 211",
      "id": "a92ae483-f092-44f4-86b2-2fd2dec0fe1c",
      "kilometrage": 174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a92ae483-f092-44f4-86b2-2fd2dec0fe1c",
    "image": "perev_right",
    "point": {
      "latitude": 52.0998864417,
      "longitude": 23.9171010448
    }
  },
  "a9544e16-4161-42cd-9951-a83a742ae735": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a9544e16-4161-42cd-9951-a83a742ae735",
      "kilometrage": 161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9544e16-4161-42cd-9951-a83a742ae735",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1847317874,
      "longitude": 24.0222683462
    }
  },
  "aa0f9f2c-1791-4f12-93a5-464e0f3774db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "aa0f9f2c-1791-4f12-93a5-464e0f3774db",
      "kilometrage": 469,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa0f9f2c-1791-4f12-93a5-464e0f3774db",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1384402972,
      "longitude": 26.8604648625
    }
  },
  "aa1064eb-5c41-433c-89e9-a701d2a38c77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 264",
      "id": "aa1064eb-5c41-433c-89e9-a701d2a38c77",
      "kilometrage": 412,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa1064eb-5c41-433c-89e9-a701d2a38c77",
    "image": "perev_left",
    "point": {
      "latitude": 52.1516911103,
      "longitude": 27.3329410107
    }
  },
  "aa17b1c6-63ac-4adb-b104-cbb3e7c6101b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "aa17b1c6-63ac-4adb-b104-cbb3e7c6101b",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa17b1c6-63ac-4adb-b104-cbb3e7c6101b",
    "image": "attention",
    "point": {
      "latitude": 52.0860755297,
      "longitude": 23.7331069461
    }
  },
  "aa2f113a-c2b0-4c12-a4b7-ab8c6ce4f13c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "aa2f113a-c2b0-4c12-a4b7-ab8c6ce4f13c",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa2f113a-c2b0-4c12-a4b7-ab8c6ce4f13c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0860415498,
      "longitude": 23.73417233
    }
  },
  "aa30eff9-5afd-4acc-ac36-284b2723e4e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 44",
      "id": "aa30eff9-5afd-4acc-ac36-284b2723e4e9",
      "kilometrage": 509,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa30eff9-5afd-4acc-ac36-284b2723e4e9",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1040975128,
      "longitude": 26.3997878173
    }
  },
  "aa5bc51a-9d28-404b-adf4-f6c7306e3c92": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "aa5bc51a-9d28-404b-adf4-f6c7306e3c92",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa5bc51a-9d28-404b-adf4-f6c7306e3c92",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1575855308,
      "longitude": 23.9994864819
    }
  },
  "ab0fc5c3-2aec-4649-9486-d727f483d2d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 135",
      "id": "ab0fc5c3-2aec-4649-9486-d727f483d2d9",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab0fc5c3-2aec-4649-9486-d727f483d2d9",
    "image": "buyo_left",
    "point": {
      "latitude": 52.215968869,
      "longitude": 24.3549696265
    }
  },
  "ab1a36b9-9644-4362-b898-fac41efe2923": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "ab1a36b9-9644-4362-b898-fac41efe2923",
      "kilometrage": 54,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab1a36b9-9644-4362-b898-fac41efe2923",
    "image": "crossing_way",
    "point": {
      "latitude": 52.018855419,
      "longitude": 25.4320806829
    }
  },
  "aba01cb3-9f9e-4069-bfce-939083290740": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "aba01cb3-9f9e-4069-bfce-939083290740",
      "kilometrage": 479,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aba01cb3-9f9e-4069-bfce-939083290740",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1277780156,
      "longitude": 26.7522512115
    }
  },
  "abab51e4-5c21-4d43-8c4f-dcf66826e716": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "abab51e4-5c21-4d43-8c4f-dcf66826e716",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "abab51e4-5c21-4d43-8c4f-dcf66826e716",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.083193074,
      "longitude": 23.7211556863
    }
  },
  "ababf98b-8396-4b87-b29f-737352a17690": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 49",
      "id": "ababf98b-8396-4b87-b29f-737352a17690",
      "kilometrage": 30,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ababf98b-8396-4b87-b29f-737352a17690",
    "image": "perev_left",
    "point": {
      "latitude": 52.0799412815,
      "longitude": 25.7422548713
    }
  },
  "abb1345d-d4a2-4d3c-bf99-ab61a09c8cce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 162",
      "id": "abb1345d-d4a2-4d3c-bf99-ab61a09c8cce",
      "kilometrage": 456,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "abb1345d-d4a2-4d3c-bf99-ab61a09c8cce",
    "image": "perev_left",
    "point": {
      "latitude": 52.1569430087,
      "longitude": 26.980901292
    }
  },
  "abc29bdc-b81d-4443-9d17-2d052203e522": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 76",
      "id": "abc29bdc-b81d-4443-9d17-2d052203e522",
      "kilometrage": 47,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "abc29bdc-b81d-4443-9d17-2d052203e522",
    "image": "perev_left",
    "point": {
      "latitude": 52.0339669933,
      "longitude": 25.5296781259
    }
  },
  "abe16379-fc78-4b01-9ad5-c727d294fe24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "abe16379-fc78-4b01-9ad5-c727d294fe24",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "abe16379-fc78-4b01-9ad5-c727d294fe24",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0853254803,
      "longitude": 25.958761922
    }
  },
  "ac7a293d-8287-4fb2-aee7-7141a81c8251": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "ac7a293d-8287-4fb2-aee7-7141a81c8251",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac7a293d-8287-4fb2-aee7-7141a81c8251",
    "image": "main_way",
    "point": {
      "latitude": 52.1134533114,
      "longitude": 26.115782626
    }
  },
  "aca90bf0-beb3-45af-9b6e-75454e08f9c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 218",
      "id": "aca90bf0-beb3-45af-9b6e-75454e08f9c7",
      "kilometrage": 434,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aca90bf0-beb3-45af-9b6e-75454e08f9c7",
    "image": "perev_left",
    "point": {
      "latitude": 52.1491705938,
      "longitude": 27.1760166251
    }
  },
  "acd889f4-1d83-4491-a50f-ad73c68fb023": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 25",
      "id": "acd889f4-1d83-4491-a50f-ad73c68fb023",
      "kilometrage": 25,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "acd889f4-1d83-4491-a50f-ad73c68fb023",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0763320608,
      "longitude": 25.8067331421
    }
  },
  "acdca38f-a3c1-4442-b3b5-b5e74b38f3e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "acdca38f-a3c1-4442-b3b5-b5e74b38f3e6",
      "kilometrage": 510,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "acdca38f-a3c1-4442-b3b5-b5e74b38f3e6",
    "image": "attention",
    "point": {
      "latitude": 52.1004707432,
      "longitude": 26.3797666855
    }
  },
  "acef521c-d6f8-4351-867f-273a9f243fb9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 230",
      "id": "acef521c-d6f8-4351-867f-273a9f243fb9",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "acef521c-d6f8-4351-867f-273a9f243fb9",
    "image": "perev_right",
    "point": {
      "latitude": 52.0911371427,
      "longitude": 23.7983906609
    }
  },
  "ad455a8a-de98-42f4-8302-1b08ef9f0f18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 238",
      "id": "ad455a8a-de98-42f4-8302-1b08ef9f0f18",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ad455a8a-de98-42f4-8302-1b08ef9f0f18",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0870866238,
      "longitude": 23.7329956154
    }
  },
  "adc307f6-9009-42b7-bb21-3a8c792ae03d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "adc307f6-9009-42b7-bb21-3a8c792ae03d",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "adc307f6-9009-42b7-bb21-3a8c792ae03d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1101896191,
      "longitude": 26.1039833473
    }
  },
  "adcdf01b-8114-4bec-bfbf-ec064e69f6d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 95",
      "id": "adcdf01b-8114-4bec-bfbf-ec064e69f6d9",
      "kilometrage": 488,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "adcdf01b-8114-4bec-bfbf-ec064e69f6d9",
    "image": "perev_right",
    "point": {
      "latitude": 52.1227339118,
      "longitude": 26.638494212
    }
  },
  "ae1c9163-1b4f-4ac4-b646-be3023521fb8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "ae1c9163-1b4f-4ac4-b646-be3023521fb8",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae1c9163-1b4f-4ac4-b646-be3023521fb8",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0912511169,
      "longitude": 23.7864965762
    }
  },
  "aebe89e6-fb0e-4655-8a72-254cf99089a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 57",
      "id": "aebe89e6-fb0e-4655-8a72-254cf99089a4",
      "kilometrage": 503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aebe89e6-fb0e-4655-8a72-254cf99089a4",
    "image": "perev_left",
    "point": {
      "latitude": 52.1177957819,
      "longitude": 26.4666150284
    }
  },
  "aece850b-5a75-4bcf-90ea-6422c7ddb818": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "aece850b-5a75-4bcf-90ea-6422c7ddb818",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aece850b-5a75-4bcf-90ea-6422c7ddb818",
    "image": "name_of",
    "point": {
      "latitude": 52.1171044709,
      "longitude": 26.4462610129
    }
  },
  "aee75e46-98a3-475e-acee-d82c1358eb68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 8",
      "id": "aee75e46-98a3-475e-acee-d82c1358eb68",
      "kilometrage": 534,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aee75e46-98a3-475e-acee-d82c1358eb68",
    "image": "perev_right",
    "point": {
      "latitude": 52.086704914,
      "longitude": 26.1397552871
    }
  },
  "afcf5f66-c1d6-4afa-a132-45068aaf092e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 13",
      "id": "afcf5f66-c1d6-4afa-a132-45068aaf092e",
      "kilometrage": 525,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afcf5f66-c1d6-4afa-a132-45068aaf092e",
    "image": "perev_right",
    "point": {
      "latitude": 52.1167256386,
      "longitude": 26.1875188002
    }
  },
  "afd216d2-ba3f-4ad7-adfa-bdb67b14a6e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 237",
      "id": "afd216d2-ba3f-4ad7-adfa-bdb67b14a6e4",
      "kilometrage": 426,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afd216d2-ba3f-4ad7-adfa-bdb67b14a6e4",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1497046739,
      "longitude": 27.2372372273
    }
  },
  "afe4b8b7-acaf-460a-83aa-7d7b06b183d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 204",
      "id": "afe4b8b7-acaf-460a-83aa-7d7b06b183d4",
      "kilometrage": 440,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afe4b8b7-acaf-460a-83aa-7d7b06b183d4",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1557155312,
      "longitude": 27.1274341876
    }
  },
  "b021af7c-97e7-4496-b09b-0301955ccc9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 6",
      "id": "b021af7c-97e7-4496-b09b-0301955ccc9c",
      "kilometrage": 528,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b021af7c-97e7-4496-b09b-0301955ccc9c",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1163840591,
      "longitude": 26.1428256472
    }
  },
  "b0316ba4-89aa-4ab1-92ca-170f4419f665": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 215",
      "id": "b0316ba4-89aa-4ab1-92ca-170f4419f665",
      "kilometrage": 435,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0316ba4-89aa-4ab1-92ca-170f4419f665",
    "image": "perev_left",
    "point": {
      "latitude": 52.1481581056,
      "longitude": 27.1694318291
    }
  },
  "b0abd384-5fef-4382-aba2-b0775594e1e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "b0abd384-5fef-4382-aba2-b0775594e1e5",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0abd384-5fef-4382-aba2-b0775594e1e5",
    "image": "attention",
    "point": {
      "latitude": 52.1175629795,
      "longitude": 26.1587181318
    }
  },
  "b0aca67b-09ca-494c-9ded-fb12dad9b7ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 221",
      "id": "b0aca67b-09ca-494c-9ded-fb12dad9b7ae",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0aca67b-09ca-494c-9ded-fb12dad9b7ae",
    "image": "perev_left",
    "point": {
      "latitude": 52.0937477534,
      "longitude": 23.8634415488
    }
  },
  "b0bf2191-7e29-40cc-aaf2-21c2f1af02f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 236",
      "id": "b0bf2191-7e29-40cc-aaf2-21c2f1af02f3",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0bf2191-7e29-40cc-aaf2-21c2f1af02f3",
    "image": "perev_right",
    "point": {
      "latitude": 52.0915933622,
      "longitude": 23.7509398668
    }
  },
  "b0dad9a7-1f4b-46ec-88c7-484f51dd4b1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "b0dad9a7-1f4b-46ec-88c7-484f51dd4b1d",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0dad9a7-1f4b-46ec-88c7-484f51dd4b1d",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.142091863,
      "longitude": 26.7923337166
    }
  },
  "b0df6c4a-4503-4b12-9c32-e5a3d1199ab0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b0df6c4a-4503-4b12-9c32-e5a3d1199ab0",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0df6c4a-4503-4b12-9c32-e5a3d1199ab0",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.21628928,
      "longitude": 24.3474341841
    }
  },
  "b10769a7-3441-49c4-8560-60221f0f1a14": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "b10769a7-3441-49c4-8560-60221f0f1a14",
      "kilometrage": 74,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b10769a7-3441-49c4-8560-60221f0f1a14",
    "image": "attention",
    "point": {
      "latitude": 52.0373010373,
      "longitude": 25.1589173602
    }
  },
  "b10ee18b-0c9b-42d9-a099-d2ddc4ba1857": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 225",
      "id": "b10ee18b-0c9b-42d9-a099-d2ddc4ba1857",
      "kilometrage": 432,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b10ee18b-0c9b-42d9-a099-d2ddc4ba1857",
    "image": "perev_right",
    "point": {
      "latitude": 52.1586791356,
      "longitude": 27.1990468611
    }
  },
  "b1b1d78c-ba85-40a3-b732-5184bf12ef42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 2",
      "id": "b1b1d78c-ba85-40a3-b732-5184bf12ef42",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1b1d78c-ba85-40a3-b732-5184bf12ef42",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1057341773,
      "longitude": 26.0975312271
    }
  },
  "b2101f8b-bc97-46ba-a922-7c6b6aec9d20": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 218",
      "id": "b2101f8b-bc97-46ba-a922-7c6b6aec9d20",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2101f8b-bc97-46ba-a922-7c6b6aec9d20",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0936212713,
      "longitude": 23.8742627047
    }
  },
  "b21105a3-ddec-40c5-8948-8005296a6832": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b21105a3-ddec-40c5-8948-8005296a6832",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b21105a3-ddec-40c5-8948-8005296a6832",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2095368409,
      "longitude": 24.4136179891
    }
  },
  "b2904b5f-66f3-4f08-ac94-e401bd905184": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 74",
      "id": "b2904b5f-66f3-4f08-ac94-e401bd905184",
      "kilometrage": 496,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2904b5f-66f3-4f08-ac94-e401bd905184",
    "image": "perev_left",
    "point": {
      "latitude": 52.1193158066,
      "longitude": 26.5392178544
    }
  },
  "b2a3e8f0-c6de-4f19-9d30-2426d83304ef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй  ",
      "id": "b2a3e8f0-c6de-4f19-9d30-2426d83304ef",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2a3e8f0-c6de-4f19-9d30-2426d83304ef",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1419504755,
      "longitude": 26.7936363682
    }
  },
  "b2c4059d-a840-42f0-be6e-23f19faa3f2c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 43",
      "id": "b2c4059d-a840-42f0-be6e-23f19faa3f2c",
      "kilometrage": 509,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2c4059d-a840-42f0-be6e-23f19faa3f2c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.104201853,
      "longitude": 26.394609862
    }
  },
  "b2c89e41-8e80-46f8-afcd-82ad9538b97c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 7",
      "id": "b2c89e41-8e80-46f8-afcd-82ad9538b97c",
      "kilometrage": 528,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2c89e41-8e80-46f8-afcd-82ad9538b97c",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1164673834,
      "longitude": 26.1531582227
    }
  },
  "b2ca895f-96f7-4ab7-aee1-be504b6f3cae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 31",
      "id": "b2ca895f-96f7-4ab7-aee1-be504b6f3cae",
      "kilometrage": 19,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2ca895f-96f7-4ab7-aee1-be504b6f3cae",
    "image": "perev_right",
    "point": {
      "latitude": 52.0739685678,
      "longitude": 25.8801672274
    }
  },
  "b33349f9-8f2a-4db8-bdba-695eb8beff00": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 99",
      "id": "b33349f9-8f2a-4db8-bdba-695eb8beff00",
      "kilometrage": 80,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b33349f9-8f2a-4db8-bdba-695eb8beff00",
    "image": "perev_left",
    "point": {
      "latitude": 52.0545984904,
      "longitude": 25.0871763316
    }
  },
  "b33dc2c1-2af2-4c8d-aa92-eadc9eb25dfa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b33dc2c1-2af2-4c8d-aa92-eadc9eb25dfa",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b33dc2c1-2af2-4c8d-aa92-eadc9eb25dfa",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0543642326,
      "longitude": 25.1104668465
    }
  },
  "b3f6da30-5eeb-438f-ae93-9a5bc52ac351": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b3f6da30-5eeb-438f-ae93-9a5bc52ac351",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3f6da30-5eeb-438f-ae93-9a5bc52ac351",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2083620069,
      "longitude": 24.4205218033
    }
  },
  "b45f95f8-7046-4f5a-8b9c-7b961af9b4aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 40",
      "id": "b45f95f8-7046-4f5a-8b9c-7b961af9b4aa",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b45f95f8-7046-4f5a-8b9c-7b961af9b4aa",
    "image": "kilometrage",
    "point": {
      "latitude": 52.19464334,
      "longitude": 24.0988318344
    }
  },
  "b4642260-54ce-4676-80a7-f59f08a0c168": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 197",
      "id": "b4642260-54ce-4676-80a7-f59f08a0c168",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4642260-54ce-4676-80a7-f59f08a0c168",
    "image": "perev_left",
    "point": {
      "latitude": 52.144883933,
      "longitude": 23.9677645237
    }
  },
  "b4a222a0-9ab2-48a3-84f4-345cc638f711": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b4a222a0-9ab2-48a3-84f4-345cc638f711",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4a222a0-9ab2-48a3-84f4-345cc638f711",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2026353648,
      "longitude": 24.2607787191
    }
  },
  "b4f7fd61-965d-447c-8c21-ffd4d59eec49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "b4f7fd61-965d-447c-8c21-ffd4d59eec49",
      "kilometrage": 440,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4f7fd61-965d-447c-8c21-ffd4d59eec49",
    "image": "name_of",
    "point": {
      "latitude": 52.1567609562,
      "longitude": 27.1309756826
    }
  },
  "b4fd6d85-5694-48d5-b581-30d203ba876b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 42",
      "id": "b4fd6d85-5694-48d5-b581-30d203ba876b",
      "kilometrage": 509,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4fd6d85-5694-48d5-b581-30d203ba876b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1024517579,
      "longitude": 26.3905801487
    }
  },
  "b53e4181-11cb-4ecd-90b1-709d30c9b837": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 124",
      "id": "b53e4181-11cb-4ecd-90b1-709d30c9b837",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b53e4181-11cb-4ecd-90b1-709d30c9b837",
    "image": "perev_left",
    "point": {
      "latitude": 52.1463213759,
      "longitude": 26.8220502498
    }
  },
  "b61f266c-7275-413b-ab49-bbadf8e9b44a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 132",
      "id": "b61f266c-7275-413b-ab49-bbadf8e9b44a",
      "kilometrage": 468,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b61f266c-7275-413b-ab49-bbadf8e9b44a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1414054257,
      "longitude": 26.8708449441
    }
  },
  "b6b3edce-1ed7-431c-9e24-0c9a837cefac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 98",
      "id": "b6b3edce-1ed7-431c-9e24-0c9a837cefac",
      "kilometrage": 79,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6b3edce-1ed7-431c-9e24-0c9a837cefac",
    "image": "perev_right",
    "point": {
      "latitude": 52.0525298748,
      "longitude": 25.0914525326
    }
  },
  "b6b9750d-cefc-4371-92c2-3465e5ed2371": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 147",
      "id": "b6b9750d-cefc-4371-92c2-3465e5ed2371",
      "kilometrage": 140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6b9750d-cefc-4371-92c2-3465e5ed2371",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2066613032,
      "longitude": 24.2842336072
    }
  },
  "b6c76f10-9482-431c-b54d-16db356359f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b6c76f10-9482-431c-b54d-16db356359f1",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6c76f10-9482-431c-b54d-16db356359f1",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0538129217,
      "longitude": 25.111947011
    }
  },
  "b702fa8a-1d71-4700-8883-099db76896a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 109",
      "id": "b702fa8a-1d71-4700-8883-099db76896a3",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b702fa8a-1d71-4700-8883-099db76896a3",
    "image": "perev_left",
    "point": {
      "latitude": 52.1197213446,
      "longitude": 26.7392412971
    }
  },
  "b7437890-a8e3-4b48-82d1-8b7c9f82a578": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 267",
      "id": "b7437890-a8e3-4b48-82d1-8b7c9f82a578",
      "kilometrage": 411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7437890-a8e3-4b48-82d1-8b7c9f82a578",
    "image": "perev_left",
    "point": {
      "latitude": 52.157618281,
      "longitude": 27.3386251232
    }
  },
  "b77883bd-b690-4a3e-a996-87981810c148": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 420",
      "id": "b77883bd-b690-4a3e-a996-87981810c148",
      "kilometrage": 420,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b77883bd-b690-4a3e-a996-87981810c148",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1569826588,
      "longitude": 27.2965410967
    }
  },
  "b77d515e-1a19-4406-9bc2-950ea4f3edeb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 7",
      "id": "b77d515e-1a19-4406-9bc2-950ea4f3edeb",
      "kilometrage": 6,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b77d515e-1a19-4406-9bc2-950ea4f3edeb",
    "image": "perev_left",
    "point": {
      "latitude": 52.100737484,
      "longitude": 26.056977009
    }
  },
  "b7833e42-67f2-4336-988a-51acf1d1d7c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 72",
      "id": "b7833e42-67f2-4336-988a-51acf1d1d7c1",
      "kilometrage": 497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7833e42-67f2-4336-988a-51acf1d1d7c1",
    "image": "perev_left",
    "point": {
      "latitude": 52.1184009211,
      "longitude": 26.5313779072
    }
  },
  "b7982345-92e4-4c9f-a6b5-ca7d2c54c499": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 252",
      "id": "b7982345-92e4-4c9f-a6b5-ca7d2c54c499",
      "kilometrage": 419,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7982345-92e4-4c9f-a6b5-ca7d2c54c499",
    "image": "perev_left",
    "point": {
      "latitude": 52.1551018754,
      "longitude": 27.3048966442
    }
  },
  "b7ae5e7e-1170-4c2a-802b-9fd9c9276d28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 455",
      "id": "b7ae5e7e-1170-4c2a-802b-9fd9c9276d28",
      "kilometrage": 455,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7ae5e7e-1170-4c2a-802b-9fd9c9276d28",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1563447685,
      "longitude": 26.9965469636
    }
  },
  "b7bae7d4-d1be-49d0-b2a5-641fd9870cc7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b7bae7d4-d1be-49d0-b2a5-641fd9870cc7",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7bae7d4-d1be-49d0-b2a5-641fd9870cc7",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0826565833,
      "longitude": 23.7224254712
    }
  },
  "b843b463-8da0-42ff-874f-2c7eda6e0f8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 108а",
      "id": "b843b463-8da0-42ff-874f-2c7eda6e0f8c",
      "kilometrage": 481,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b843b463-8da0-42ff-874f-2c7eda6e0f8c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.111682611,
      "longitude": 26.732959778
    }
  },
  "b89e78ea-c88f-4040-847e-e31f66ca837f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "b89e78ea-c88f-4040-847e-e31f66ca837f",
      "kilometrage": 480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b89e78ea-c88f-4040-847e-e31f66ca837f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1168061846,
      "longitude": 26.7403052563
    }
  },
  "b8c344c6-b7b9-4e38-9a75-262664e36845": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 10",
      "id": "b8c344c6-b7b9-4e38-9a75-262664e36845",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8c344c6-b7b9-4e38-9a75-262664e36845",
    "image": "perev_left",
    "point": {
      "latitude": 52.1186376956,
      "longitude": 26.1668099814
    }
  },
  "b8f145b4-9357-4e5d-8a48-44116960d600": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "b8f145b4-9357-4e5d-8a48-44116960d600",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8f145b4-9357-4e5d-8a48-44116960d600",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0955017989,
      "longitude": 23.8558260109
    }
  },
  "b8f58d57-fd85-40ac-99b7-36449f3b4132": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 169",
      "id": "b8f58d57-fd85-40ac-99b7-36449f3b4132",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8f58d57-fd85-40ac-99b7-36449f3b4132",
    "image": "perev_left",
    "point": {
      "latitude": 52.1918619489,
      "longitude": 24.1360799545
    }
  },
  "b947a830-adbe-4e1a-b3a8-e495195dbbfd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 35",
      "id": "b947a830-adbe-4e1a-b3a8-e495195dbbfd",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b947a830-adbe-4e1a-b3a8-e495195dbbfd",
    "image": "perev_left",
    "point": {
      "latitude": 52.0970469348,
      "longitude": 27.2492387352
    }
  },
  "b9b9aead-3f82-4ef0-a087-e910e6d18696": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "b9b9aead-3f82-4ef0-a087-e910e6d18696",
      "kilometrage": 506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b9b9aead-3f82-4ef0-a087-e910e6d18696",
    "image": "attention",
    "point": {
      "latitude": 52.1153153907,
      "longitude": 26.4298320188
    }
  },
  "ba0c5930-506c-4313-82e8-9f15f359dbc4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "ba0c5930-506c-4313-82e8-9f15f359dbc4",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba0c5930-506c-4313-82e8-9f15f359dbc4",
    "image": "attention",
    "point": {
      "latitude": 52.0794810712,
      "longitude": 25.7764865587
    }
  },
  "ba50e9c8-cfe0-4bc5-86cd-43edecf42b43": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "ba50e9c8-cfe0-4bc5-86cd-43edecf42b43",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba50e9c8-cfe0-4bc5-86cd-43edecf42b43",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0783942911,
      "longitude": 25.789317416
    }
  },
  "ba524b32-3a0a-4415-abaf-d76d8e5872e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 170",
      "id": "ba524b32-3a0a-4415-abaf-d76d8e5872e1",
      "kilometrage": 453,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba524b32-3a0a-4415-abaf-d76d8e5872e1",
    "image": "perev_right",
    "point": {
      "latitude": 52.1507533506,
      "longitude": 27.0134438693
    }
  },
  "ba6059ef-a355-4844-90ad-a43bc6edf85a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "ba6059ef-a355-4844-90ad-a43bc6edf85a",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba6059ef-a355-4844-90ad-a43bc6edf85a",
    "image": "attention",
    "point": {
      "latitude": 52.2110636866,
      "longitude": 24.4066894393
    }
  },
  "ba901628-7c90-435d-97dd-481cb8ccbb36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 190",
      "id": "ba901628-7c90-435d-97dd-481cb8ccbb36",
      "kilometrage": 445,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba901628-7c90-435d-97dd-481cb8ccbb36",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1359076983,
      "longitude": 27.0792652459
    }
  },
  "baf2f9f5-6ac4-451c-9f36-42e66973de6d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "baf2f9f5-6ac4-451c-9f36-42e66973de6d",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "baf2f9f5-6ac4-451c-9f36-42e66973de6d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2074930406,
      "longitude": 24.4254464624
    }
  },
  "bb1425d1-2746-43ee-af7c-e35ec22827e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 4",
      "id": "bb1425d1-2746-43ee-af7c-e35ec22827e9",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb1425d1-2746-43ee-af7c-e35ec22827e9",
    "image": "perev_right",
    "point": {
      "latitude": 52.1357710808,
      "longitude": 27.2798553697
    }
  },
  "bb23e6bd-288c-416f-b2ad-eaa60102bdfd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "bb23e6bd-288c-416f-b2ad-eaa60102bdfd",
      "kilometrage": 52,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb23e6bd-288c-416f-b2ad-eaa60102bdfd",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0221716573,
      "longitude": 25.4688810098
    }
  },
  "bb801df3-8e3e-4adf-a2a8-dd16875e933a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 9",
      "id": "bb801df3-8e3e-4adf-a2a8-dd16875e933a",
      "kilometrage": 7,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb801df3-8e3e-4adf-a2a8-dd16875e933a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1014983547,
      "longitude": 26.0383115106
    }
  },
  "bbde2785-1587-44d2-972e-e3ecf0afa9aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 245",
      "id": "bbde2785-1587-44d2-972e-e3ecf0afa9aa",
      "kilometrage": 189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbde2785-1587-44d2-972e-e3ecf0afa9aa",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0825642332,
      "longitude": 23.7197261211
    }
  },
  "bc116bb4-db27-4e64-abeb-2837289f856c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 20",
      "id": "bc116bb4-db27-4e64-abeb-2837289f856c",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc116bb4-db27-4e64-abeb-2837289f856c",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0218090032,
      "longitude": 25.3430657882
    }
  },
  "bca5c760-edf6-4fea-b1de-ff61fe46d3b9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 176",
      "id": "bca5c760-edf6-4fea-b1de-ff61fe46d3b9",
      "kilometrage": 156,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bca5c760-edf6-4fea-b1de-ff61fe46d3b9",
    "image": "perev_right",
    "point": {
      "latitude": 52.2011616471,
      "longitude": 24.0809591942
    }
  },
  "bcada0fa-19fd-450b-adc6-72c983603138": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 235",
      "id": "bcada0fa-19fd-450b-adc6-72c983603138",
      "kilometrage": 427,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcada0fa-19fd-450b-adc6-72c983603138",
    "image": "perev_left",
    "point": {
      "latitude": 52.1568603048,
      "longitude": 27.2356848709
    }
  },
  "bcea62fb-34fa-47be-bc02-27d9934547ef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 185",
      "id": "bcea62fb-34fa-47be-bc02-27d9934547ef",
      "kilometrage": 447,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcea62fb-34fa-47be-bc02-27d9934547ef",
    "image": "perev_right",
    "point": {
      "latitude": 52.1488125246,
      "longitude": 27.0662213659
    }
  },
  "bd5ab4e3-ae0d-4a4f-b8fb-916a4ffe6183": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 179",
      "id": "bd5ab4e3-ae0d-4a4f-b8fb-916a4ffe6183",
      "kilometrage": 450,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd5ab4e3-ae0d-4a4f-b8fb-916a4ffe6183",
    "image": "perev_right",
    "point": {
      "latitude": 52.1536559538,
      "longitude": 27.0375498441
    }
  },
  "bd9f20f2-be9d-40c2-b173-19ba186bf4e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 16",
      "id": "bd9f20f2-be9d-40c2-b173-19ba186bf4e1",
      "kilometrage": 11,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd9f20f2-be9d-40c2-b173-19ba186bf4e1",
    "image": "perev_left",
    "point": {
      "latitude": 52.0990424749,
      "longitude": 25.9899094627
    }
  },
  "bde725e7-4421-4fc4-9a8e-37fb30c28829": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 39",
      "id": "bde725e7-4421-4fc4-9a8e-37fb30c28829",
      "kilometrage": 511,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bde725e7-4421-4fc4-9a8e-37fb30c28829",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0938588864,
      "longitude": 26.3699102564
    }
  },
  "be399d70-e014-48cf-bad7-3f288c122d57": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "be399d70-e014-48cf-bad7-3f288c122d57",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be399d70-e014-48cf-bad7-3f288c122d57",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0908838748,
      "longitude": 23.786850717
    }
  },
  "be4beb8f-a7ff-4460-a608-3c660e2d70b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 222",
      "id": "be4beb8f-a7ff-4460-a608-3c660e2d70b3",
      "kilometrage": 433,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be4beb8f-a7ff-4460-a608-3c660e2d70b3",
    "image": "perev_right",
    "point": {
      "latitude": 52.1516992474,
      "longitude": 27.1903480039
    }
  },
  "be950df8-f64b-407c-a2bc-f982b8a28e0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "be950df8-f64b-407c-a2bc-f982b8a28e0b",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be950df8-f64b-407c-a2bc-f982b8a28e0b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.212731801,
      "longitude": 24.3989180772
    }
  },
  "beb58cac-3f43-4afc-a9e2-2b6a53098b7e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 123г",
      "id": "beb58cac-3f43-4afc-a9e2-2b6a53098b7e",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "beb58cac-3f43-4afc-a9e2-2b6a53098b7e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1460868905,
      "longitude": 26.8189551646
    }
  },
  "bee06164-667c-403c-9a7e-d0f6ec550e38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 1а",
      "id": "bee06164-667c-403c-9a7e-d0f6ec550e38",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bee06164-667c-403c-9a7e-d0f6ec550e38",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1108789683,
      "longitude": 26.1068263643
    }
  },
  "bef1f01a-314a-4468-844a-705de6043c7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "bef1f01a-314a-4468-844a-705de6043c7c",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bef1f01a-314a-4468-844a-705de6043c7c",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1163173411,
      "longitude": 24.8387471893
    }
  },
  "bf62cdf3-94c8-4bd5-a2ec-466f1eceba71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 157",
      "id": "bf62cdf3-94c8-4bd5-a2ec-466f1eceba71",
      "kilometrage": 458,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf62cdf3-94c8-4bd5-a2ec-466f1eceba71",
    "image": "perev_left",
    "point": {
      "latitude": 52.1532194911,
      "longitude": 26.9684166832
    }
  },
  "c07de370-cfff-4b0d-ad88-622ab840c86d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "c07de370-cfff-4b0d-ad88-622ab840c86d",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c07de370-cfff-4b0d-ad88-622ab840c86d",
    "image": "attention",
    "point": {
      "latitude": 52.1064165904,
      "longitude": 26.0967212942
    }
  },
  "c0a0e6d6-c840-46b3-856c-37455cb597fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "c0a0e6d6-c840-46b3-856c-37455cb597fb",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0a0e6d6-c840-46b3-856c-37455cb597fb",
    "image": "axis_romb",
    "point": {
      "latitude": 52.2126688997,
      "longitude": 24.3983313648
    }
  },
  "c0ba9de8-2d54-4f3f-9ad4-69616c1e674d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 43",
      "id": "c0ba9de8-2d54-4f3f-9ad4-69616c1e674d",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0ba9de8-2d54-4f3f-9ad4-69616c1e674d",
    "image": "perev_left",
    "point": {
      "latitude": 52.0710946155,
      "longitude": 27.2142368486
    }
  },
  "c0c777da-ec2f-40a1-be73-c8d6e1be3f85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 56",
      "id": "c0c777da-ec2f-40a1-be73-c8d6e1be3f85",
      "kilometrage": 503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0c777da-ec2f-40a1-be73-c8d6e1be3f85",
    "image": "perev_right",
    "point": {
      "latitude": 52.1161500662,
      "longitude": 26.4623273541
    }
  },
  "c0e47665-ef87-445e-bee3-185b18067d90": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 223",
      "id": "c0e47665-ef87-445e-bee3-185b18067d90",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0e47665-ef87-445e-bee3-185b18067d90",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0926617429,
      "longitude": 23.8489710147
    }
  },
  "c0e9200a-53ef-4686-ad37-36b0cdf3bc18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 85",
      "id": "c0e9200a-53ef-4686-ad37-36b0cdf3bc18",
      "kilometrage": 492,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0e9200a-53ef-4686-ad37-36b0cdf3bc18",
    "image": "perev_left",
    "point": {
      "latitude": 52.1137381579,
      "longitude": 26.5921551194
    }
  },
  "c10ca21c-ff77-4d2f-84e3-7016f8ffe7be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c10ca21c-ff77-4d2f-84e3-7016f8ffe7be",
      "kilometrage": 129,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c10ca21c-ff77-4d2f-84e3-7016f8ffe7be",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2065519379,
      "longitude": 24.4310443969
    }
  },
  "c151fb31-f4c6-42fb-b31b-73ff77d0abf7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "c151fb31-f4c6-42fb-b31b-73ff77d0abf7",
      "kilometrage": 529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c151fb31-f4c6-42fb-b31b-73ff77d0abf7",
    "image": "main_way",
    "point": {
      "latitude": 52.1196245953,
      "longitude": 26.1270954482
    }
  },
  "c20a0db9-fb85-4aeb-87c7-29d56a65a35e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 129",
      "id": "c20a0db9-fb85-4aeb-87c7-29d56a65a35e",
      "kilometrage": 469,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c20a0db9-fb85-4aeb-87c7-29d56a65a35e",
    "image": "perev_right",
    "point": {
      "latitude": 52.1388398873,
      "longitude": 26.8624927552
    }
  },
  "c26e4101-6cde-4c55-bb0e-234633072f39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 130",
      "id": "c26e4101-6cde-4c55-bb0e-234633072f39",
      "kilometrage": 468,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c26e4101-6cde-4c55-bb0e-234633072f39",
    "image": "perev_left",
    "point": {
      "latitude": 52.1434396245,
      "longitude": 26.8634337931
    }
  },
  "c2c33c8f-fcf1-4fb5-8931-f02152b709ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "c2c33c8f-fcf1-4fb5-8931-f02152b709ce",
      "kilometrage": 482,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2c33c8f-fcf1-4fb5-8931-f02152b709ce",
    "image": "attention",
    "point": {
      "latitude": 52.1081482833,
      "longitude": 26.7236352368
    }
  },
  "c357d5e0-21d8-4cb0-bea7-0e7ed3f82fd5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "c357d5e0-21d8-4cb0-bea7-0e7ed3f82fd5",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c357d5e0-21d8-4cb0-bea7-0e7ed3f82fd5",
    "image": "attention",
    "point": {
      "latitude": 52.1407365453,
      "longitude": 23.9514446219
    }
  },
  "c37f1980-98c4-4f81-b63b-3993d5ca0334": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 203",
      "id": "c37f1980-98c4-4f81-b63b-3993d5ca0334",
      "kilometrage": 440,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c37f1980-98c4-4f81-b63b-3993d5ca0334",
    "image": "perev_left",
    "point": {
      "latitude": 52.1540140751,
      "longitude": 27.1210171196
    }
  },
  "c3894b10-ecb6-4b43-a7fe-b6cd0b8cabeb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 256",
      "id": "c3894b10-ecb6-4b43-a7fe-b6cd0b8cabeb",
      "kilometrage": 416,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3894b10-ecb6-4b43-a7fe-b6cd0b8cabeb",
    "image": "perev_left",
    "point": {
      "latitude": 52.1452596442,
      "longitude": 27.3160326952
    }
  },
  "c3b00442-2778-48b5-b1da-a7e556005e2a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 55а",
      "id": "c3b00442-2778-48b5-b1da-a7e556005e2a",
      "kilometrage": 503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3b00442-2778-48b5-b1da-a7e556005e2a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1164108404,
      "longitude": 26.4584967513
    }
  },
  "c471830a-119a-4f3c-96aa-cb6059351763": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "c471830a-119a-4f3c-96aa-cb6059351763",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c471830a-119a-4f3c-96aa-cb6059351763",
    "image": "stop",
    "point": {
      "latitude": 52.0372891367,
      "longitude": 25.1658852796
    }
  },
  "c4813d01-c538-4c4c-8750-75cf20157d3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 7",
      "id": "c4813d01-c538-4c4c-8750-75cf20157d3c",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4813d01-c538-4c4c-8750-75cf20157d3c",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1347301577,
      "longitude": 27.2746895445
    }
  },
  "c4ae9de1-dda8-499e-b490-85b39c4c1296": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "c4ae9de1-dda8-499e-b490-85b39c4c1296",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4ae9de1-dda8-499e-b490-85b39c4c1296",
    "image": "speed_limit",
    "point": {
      "latitude": 52.1013682122,
      "longitude": 26.0742649911
    }
  },
  "c4c5d036-683c-43bb-8edd-01d74c1cf6cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 26",
      "id": "c4c5d036-683c-43bb-8edd-01d74c1cf6cb",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4c5d036-683c-43bb-8edd-01d74c1cf6cb",
    "image": "perev_right",
    "point": {
      "latitude": 52.1119053211,
      "longitude": 27.2684005921
    }
  },
  "c4eca6b7-d853-41a8-85bc-705bbd8bb1ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "c4eca6b7-d853-41a8-85bc-705bbd8bb1ff",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4eca6b7-d853-41a8-85bc-705bbd8bb1ff",
    "image": "attention",
    "point": {
      "latitude": 52.1915598338,
      "longitude": 24.1253622802
    }
  },
  "c4fcdaee-0abe-4656-97a2-bcb69b29980a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 20",
      "id": "c4fcdaee-0abe-4656-97a2-bcb69b29980a",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4fcdaee-0abe-4656-97a2-bcb69b29980a",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0733948464,
      "longitude": 25.8731278369
    }
  },
  "c53c2cf6-b250-4356-89f2-d58e15793401": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c53c2cf6-b250-4356-89f2-d58e15793401",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c53c2cf6-b250-4356-89f2-d58e15793401",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0219361601,
      "longitude": 25.3253031902
    }
  },
  "c5917d0a-5e11-47a6-8c53-18f4160d995b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 445",
      "id": "c5917d0a-5e11-47a6-8c53-18f4160d995b",
      "kilometrage": 445,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5917d0a-5e11-47a6-8c53-18f4160d995b",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1389633583,
      "longitude": 27.0815582571
    }
  },
  "c5de16e7-2367-4f65-885e-9a080736a2bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 10",
      "id": "c5de16e7-2367-4f65-885e-9a080736a2bd",
      "kilometrage": 51,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5de16e7-2367-4f65-885e-9a080736a2bd",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0262820541,
      "longitude": 25.4859917676
    }
  },
  "c60f8165-8ad8-497c-b4e0-624e53812afe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 207",
      "id": "c60f8165-8ad8-497c-b4e0-624e53812afe",
      "kilometrage": 439,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c60f8165-8ad8-497c-b4e0-624e53812afe",
    "image": "perev_right",
    "point": {
      "latitude": 52.151873199,
      "longitude": 27.1357550025
    }
  },
  "c65a92d3-bc5a-4261-9ddf-b6a4b60f3588": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c65a92d3-bc5a-4261-9ddf-b6a4b60f3588",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c65a92d3-bc5a-4261-9ddf-b6a4b60f3588",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1944580249,
      "longitude": 24.1041886231
    }
  },
  "c65eff2d-0544-4f89-96c5-552f80eddbf9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "c65eff2d-0544-4f89-96c5-552f80eddbf9",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c65eff2d-0544-4f89-96c5-552f80eddbf9",
    "image": "stop",
    "point": {
      "latitude": 52.1400761649,
      "longitude": 23.9513791178
    }
  },
  "c6c17093-70a4-4a23-a025-9bf25ec70abf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 430",
      "id": "c6c17093-70a4-4a23-a025-9bf25ec70abf",
      "kilometrage": 430,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6c17093-70a4-4a23-a025-9bf25ec70abf",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1623664512,
      "longitude": 27.208606824
    }
  },
  "c6d28ccd-90fd-4585-bc34-6633fdc7ad07": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 234",
      "id": "c6d28ccd-90fd-4585-bc34-6633fdc7ad07",
      "kilometrage": 428,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6d28ccd-90fd-4585-bc34-6633fdc7ad07",
    "image": "perev_left",
    "point": {
      "latitude": 52.1632953602,
      "longitude": 27.2294585924
    }
  },
  "c6f9da27-690c-4c30-ba71-f6a61c8981eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда правый задний  ",
      "id": "c6f9da27-690c-4c30-ba71-f6a61c8981eb",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6f9da27-690c-4c30-ba71-f6a61c8981eb",
    "image": "raid_end_right",
    "point": {
      "latitude": 52.1040409839,
      "longitude": 26.0168581271
    }
  },
  "c71c7f61-52f2-4e7c-8ba5-57dbab4af6ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "c71c7f61-52f2-4e7c-8ba5-57dbab4af6ac",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c71c7f61-52f2-4e7c-8ba5-57dbab4af6ac",
    "image": "name_of",
    "point": {
      "latitude": 52.214881302,
      "longitude": 24.3776517853
    }
  },
  "c743c2e3-3c3c-4577-a6ea-88d86d7962b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 54",
      "id": "c743c2e3-3c3c-4577-a6ea-88d86d7962b6",
      "kilometrage": 32,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c743c2e3-3c3c-4577-a6ea-88d86d7962b6",
    "image": "perev_left",
    "point": {
      "latitude": 52.0766955906,
      "longitude": 25.706637878
    }
  },
  "c7a14021-d901-48c0-aac2-246b0d51eab2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 223",
      "id": "c7a14021-d901-48c0-aac2-246b0d51eab2",
      "kilometrage": 433,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7a14021-d901-48c0-aac2-246b0d51eab2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1550447119,
      "longitude": 27.1918648306
    }
  },
  "c7b01a71-2a33-4444-a479-41f3fe891e98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 238",
      "id": "c7b01a71-2a33-4444-a479-41f3fe891e98",
      "kilometrage": 426,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7b01a71-2a33-4444-a479-41f3fe891e98",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1487437348,
      "longitude": 27.2422775465
    }
  },
  "c7bc30ba-d344-44b9-ae96-662bcf32a530": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 227",
      "id": "c7bc30ba-d344-44b9-ae96-662bcf32a530",
      "kilometrage": 431,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7bc30ba-d344-44b9-ae96-662bcf32a530",
    "image": "buyo_left",
    "point": {
      "latitude": 52.161920889,
      "longitude": 27.192095611
    }
  },
  "c8416f7a-2eac-4da0-8d21-11d4090d9267": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 246",
      "id": "c8416f7a-2eac-4da0-8d21-11d4090d9267",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8416f7a-2eac-4da0-8d21-11d4090d9267",
    "image": "perev_right",
    "point": {
      "latitude": 52.1414514909,
      "longitude": 27.2638246742
    }
  },
  "c85f1658-1276-4275-9746-c0eef646b578": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c85f1658-1276-4275-9746-c0eef646b578",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c85f1658-1276-4275-9746-c0eef646b578",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0859064334,
      "longitude": 25.9633058064
    }
  },
  "c8791c0c-e751-4243-a9a6-893eba08051a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c8791c0c-e751-4243-a9a6-893eba08051a",
      "kilometrage": 142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8791c0c-e751-4243-a9a6-893eba08051a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2029193887,
      "longitude": 24.2633510379
    }
  },
  "c8b13212-0b5e-479e-9c2c-96b539454f1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 114",
      "id": "c8b13212-0b5e-479e-9c2c-96b539454f1e",
      "kilometrage": 477,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8b13212-0b5e-479e-9c2c-96b539454f1e",
    "image": "perev_left",
    "point": {
      "latitude": 52.131875965,
      "longitude": 26.7586028509
    }
  },
  "c8b8bc00-1960-46a4-abc0-d4d7d6729a97": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 169",
      "id": "c8b8bc00-1960-46a4-abc0-d4d7d6729a97",
      "kilometrage": 453,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8b8bc00-1960-46a4-abc0-d4d7d6729a97",
    "image": "perev_right",
    "point": {
      "latitude": 52.1497816917,
      "longitude": 27.0108179132
    }
  },
  "c8e9b072-bfd4-48cd-97b4-165a6ca07576": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "c8e9b072-bfd4-48cd-97b4-165a6ca07576",
      "kilometrage": 28,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8e9b072-bfd4-48cd-97b4-165a6ca07576",
    "image": "attention",
    "point": {
      "latitude": 52.0779807002,
      "longitude": 25.7580850541
    }
  },
  "c8f7eb3d-730c-457c-80d4-3c90fed665a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 196",
      "id": "c8f7eb3d-730c-457c-80d4-3c90fed665a8",
      "kilometrage": 167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8f7eb3d-730c-457c-80d4-3c90fed665a8",
    "image": "perev_right",
    "point": {
      "latitude": 52.1496543911,
      "longitude": 23.9759813992
    }
  },
  "c94f4470-6535-4b7e-af9f-c9704728cf55": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "c94f4470-6535-4b7e-af9f-c9704728cf55",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c94f4470-6535-4b7e-af9f-c9704728cf55",
    "image": "stop",
    "point": {
      "latitude": 52.1910785425,
      "longitude": 24.1321935504
    }
  },
  "c97cdae3-dc5b-4aa0-b53f-4471d4e42bb1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "c97cdae3-dc5b-4aa0-b53f-4471d4e42bb1",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c97cdae3-dc5b-4aa0-b53f-4471d4e42bb1",
    "image": "stop",
    "point": {
      "latitude": 52.0222145345,
      "longitude": 25.3309163439
    }
  },
  "c9afaf6a-5fad-4ed3-978d-c0cda982a397": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 5",
      "id": "c9afaf6a-5fad-4ed3-978d-c0cda982a397",
      "kilometrage": 533,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9afaf6a-5fad-4ed3-978d-c0cda982a397",
    "image": "perev_left",
    "point": {
      "latitude": 52.0919110865,
      "longitude": 26.1269276347
    }
  },
  "c9d0409d-5c4d-4196-80ca-1d07c6115ffb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c9d0409d-5c4d-4196-80ca-1d07c6115ffb",
      "kilometrage": 36,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9d0409d-5c4d-4196-80ca-1d07c6115ffb",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0647772714,
      "longitude": 25.6641664069
    }
  },
  "ca2ad143-0b4c-4940-a00c-0adb6b6c558b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "ca2ad143-0b4c-4940-a00c-0adb6b6c558b",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca2ad143-0b4c-4940-a00c-0adb6b6c558b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1459265391,
      "longitude": 26.8208727585
    }
  },
  "ca4d1052-3c84-4edd-a8d8-03f36c45a0ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "ca4d1052-3c84-4edd-a8d8-03f36c45a0ea",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca4d1052-3c84-4edd-a8d8-03f36c45a0ea",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0823688797,
      "longitude": 23.6863607698
    }
  },
  "caf52633-0783-4edc-96c5-b4c2b0237e0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "caf52633-0783-4edc-96c5-b4c2b0237e0b",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "caf52633-0783-4edc-96c5-b4c2b0237e0b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1286611667,
      "longitude": 23.9442954674
    }
  },
  "cb5c97f7-b312-4283-8918-02d26911c849": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "cb5c97f7-b312-4283-8918-02d26911c849",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb5c97f7-b312-4283-8918-02d26911c849",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2146996878,
      "longitude": 24.375438009
    }
  },
  "cbf9bc78-57bd-45d4-a266-cd3379c11246": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "cbf9bc78-57bd-45d4-a266-cd3379c11246",
      "kilometrage": 526,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbf9bc78-57bd-45d4-a266-cd3379c11246",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1190387096,
      "longitude": 26.1793024889
    }
  },
  "cc01592e-3043-486f-98dd-f5974b5255ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "cc01592e-3043-486f-98dd-f5974b5255ec",
      "kilometrage": 51,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc01592e-3043-486f-98dd-f5974b5255ec",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0233068948,
      "longitude": 25.4759151795
    }
  },
  "cc06cb05-197f-4223-b1eb-69df5e8b4686": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 262",
      "id": "cc06cb05-197f-4223-b1eb-69df5e8b4686",
      "kilometrage": 413,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc06cb05-197f-4223-b1eb-69df5e8b4686",
    "image": "perev_right",
    "point": {
      "latitude": 52.1448403916,
      "longitude": 27.337582444
    }
  },
  "cc08a4dd-6357-457c-b23f-d457f1376d8e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 48",
      "id": "cc08a4dd-6357-457c-b23f-d457f1376d8e",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc08a4dd-6357-457c-b23f-d457f1376d8e",
    "image": "perev_right",
    "point": {
      "latitude": 52.1080694324,
      "longitude": 26.4181558397
    }
  },
  "cc50e8eb-5e92-4016-a349-d196033916a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 17",
      "id": "cc50e8eb-5e92-4016-a349-d196033916a1",
      "kilometrage": 523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc50e8eb-5e92-4016-a349-d196033916a1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1135441232,
      "longitude": 26.2102957998
    }
  },
  "cc736f17-57e7-43a1-9975-463d6966e2e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "cc736f17-57e7-43a1-9975-463d6966e2e4",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc736f17-57e7-43a1-9975-463d6966e2e4",
    "image": "stop",
    "point": {
      "latitude": 52.2137760401,
      "longitude": 24.3889364434
    }
  },
  "ccccbd8e-2da0-4768-ae46-24086486d077": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "ccccbd8e-2da0-4768-ae46-24086486d077",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ccccbd8e-2da0-4768-ae46-24086486d077",
    "image": "axis_romb",
    "point": {
      "latitude": 52.2146701971,
      "longitude": 24.3312631819
    }
  },
  "cd3d615f-035d-4552-be3c-bab23092a93f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 27",
      "id": "cd3d615f-035d-4552-be3c-bab23092a93f",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd3d615f-035d-4552-be3c-bab23092a93f",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1091399509,
      "longitude": 27.2679146959
    }
  },
  "cd468e26-3f34-4a05-85fd-afb8257127ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "cd468e26-3f34-4a05-85fd-afb8257127ee",
      "kilometrage": 21,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd468e26-3f34-4a05-85fd-afb8257127ee",
    "image": "crossing_way",
    "point": {
      "latitude": 52.073127509,
      "longitude": 25.8584048112
    }
  },
  "cd5e1cf3-619e-47b1-a4a6-2628f94d2138": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 125",
      "id": "cd5e1cf3-619e-47b1-a4a6-2628f94d2138",
      "kilometrage": 107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd5e1cf3-619e-47b1-a4a6-2628f94d2138",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1456400989,
      "longitude": 24.7438812736
    }
  },
  "cd8af268-4231-43e2-b731-4fa0ee08b4a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "cd8af268-4231-43e2-b731-4fa0ee08b4a7",
      "kilometrage": 93,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd8af268-4231-43e2-b731-4fa0ee08b4a7",
    "image": "name_of",
    "point": {
      "latitude": 52.0962533652,
      "longitude": 24.9077706673
    }
  },
  "cdaa48f7-d991-4b6b-b71a-bd4ec004314d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 152",
      "id": "cdaa48f7-d991-4b6b-b71a-bd4ec004314d",
      "kilometrage": 143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cdaa48f7-d991-4b6b-b71a-bd4ec004314d",
    "image": "perev_right",
    "point": {
      "latitude": 52.2046533327,
      "longitude": 24.2448135735
    }
  },
  "cdafb5b3-c760-4f35-8b2d-1be8c4ba73d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 525",
      "id": "cdafb5b3-c760-4f35-8b2d-1be8c4ba73d3",
      "kilometrage": 525,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cdafb5b3-c760-4f35-8b2d-1be8c4ba73d3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1182827043,
      "longitude": 26.1847679435
    }
  },
  "ce0b4333-7e5d-49fe-98c1-1c3b57a28d51": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 189",
      "id": "ce0b4333-7e5d-49fe-98c1-1c3b57a28d51",
      "kilometrage": 445,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce0b4333-7e5d-49fe-98c1-1c3b57a28d51",
    "image": "perev_right",
    "point": {
      "latitude": 52.1372598843,
      "longitude": 27.0744622379
    }
  },
  "ce0d6cbd-7282-4a8f-967d-ae3c5d6137d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Спуск судов на воду или подъем на берег разрешен  ",
      "id": "ce0d6cbd-7282-4a8f-967d-ae3c5d6137d5",
      "kilometrage": 490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce0d6cbd-7282-4a8f-967d-ae3c5d6137d5",
    "image": "slope",
    "point": {
      "latitude": 52.1257087628,
      "longitude": 26.6194515303
    }
  },
  "ce7410f8-4600-4b7d-8729-fe028e1303b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "ce7410f8-4600-4b7d-8729-fe028e1303b2",
      "kilometrage": 411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce7410f8-4600-4b7d-8729-fe028e1303b2",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1566371697,
      "longitude": 27.3389774181
    }
  },
  "ce8899ce-d452-42a2-821c-8f4d9370c827": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 143",
      "id": "ce8899ce-d452-42a2-821c-8f4d9370c827",
      "kilometrage": 464,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce8899ce-d452-42a2-821c-8f4d9370c827",
    "image": "perev_right",
    "point": {
      "latitude": 52.1364665982,
      "longitude": 26.9070340434
    }
  },
  "ce9e3018-2ea4-44bd-8fca-34cc1aa3f6ed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 146",
      "id": "ce9e3018-2ea4-44bd-8fca-34cc1aa3f6ed",
      "kilometrage": 462,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce9e3018-2ea4-44bd-8fca-34cc1aa3f6ed",
    "image": "perev_right",
    "point": {
      "latitude": 52.1431880499,
      "longitude": 26.9140169169
    }
  },
  "ced1d6ca-4d76-447b-9898-072a1d05c06a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 206",
      "id": "ced1d6ca-4d76-447b-9898-072a1d05c06a",
      "kilometrage": 439,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ced1d6ca-4d76-447b-9898-072a1d05c06a",
    "image": "perev_left",
    "point": {
      "latitude": 52.1550588671,
      "longitude": 27.1376003523
    }
  },
  "cefac91c-e185-4fec-9665-d455952fb31d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 1д",
      "id": "cefac91c-e185-4fec-9665-d455952fb31d",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cefac91c-e185-4fec-9665-d455952fb31d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1094460959,
      "longitude": 26.1034766254
    }
  },
  "cefd399e-47b5-44c7-b908-1cdb8ebb1c8e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 260",
      "id": "cefd399e-47b5-44c7-b908-1cdb8ebb1c8e",
      "kilometrage": 414,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cefd399e-47b5-44c7-b908-1cdb8ebb1c8e",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1343727388,
      "longitude": 27.3329859503
    }
  },
  "cfa28023-58cd-41e5-8e66-96dff4fdea12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 12",
      "id": "cfa28023-58cd-41e5-8e66-96dff4fdea12",
      "kilometrage": 526,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cfa28023-58cd-41e5-8e66-96dff4fdea12",
    "image": "perev_left",
    "point": {
      "latitude": 52.1190049941,
      "longitude": 26.1810738207
    }
  },
  "cfa9dac9-880c-4acf-9d3d-cdfead73b12b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "cfa9dac9-880c-4acf-9d3d-cdfead73b12b",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cfa9dac9-880c-4acf-9d3d-cdfead73b12b",
    "image": "bridge_low",
    "point": {
      "latitude": 52.0868254773,
      "longitude": 23.7345694616
    }
  },
  "cfdf5a34-9a2d-412c-9a66-e16fc9899173": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 222",
      "id": "cfdf5a34-9a2d-412c-9a66-e16fc9899173",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cfdf5a34-9a2d-412c-9a66-e16fc9899173",
    "image": "perev_right",
    "point": {
      "latitude": 52.0962379218,
      "longitude": 23.8549715543
    }
  },
  "d018e8f0-fa1b-48a6-9857-060ab4ee1e3a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 53",
      "id": "d018e8f0-fa1b-48a6-9857-060ab4ee1e3a",
      "kilometrage": 32,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d018e8f0-fa1b-48a6-9857-060ab4ee1e3a",
    "image": "perev_right",
    "point": {
      "latitude": 52.0745838695,
      "longitude": 25.7182605602
    }
  },
  "d0680706-00a3-49e5-afb0-dc86abef634c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "d0680706-00a3-49e5-afb0-dc86abef634c",
      "kilometrage": 70,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0680706-00a3-49e5-afb0-dc86abef634c",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0347518507,
      "longitude": 25.2061414129
    }
  },
  "d07a2be2-9bfd-4613-9331-59a6c36940e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "d07a2be2-9bfd-4613-9331-59a6c36940e7",
      "kilometrage": 73,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d07a2be2-9bfd-4613-9331-59a6c36940e7",
    "image": "attention",
    "point": {
      "latitude": 52.0368138797,
      "longitude": 25.1675836699
    }
  },
  "d10c7864-5283-43d4-8b34-3d7b696b5729": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "d10c7864-5283-43d4-8b34-3d7b696b5729",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d10c7864-5283-43d4-8b34-3d7b696b5729",
    "image": "stop",
    "point": {
      "latitude": 52.0806952714,
      "longitude": 25.7774627972
    }
  },
  "d130d602-4dbf-4cf5-af27-04ff7750050a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 91",
      "id": "d130d602-4dbf-4cf5-af27-04ff7750050a",
      "kilometrage": 71,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d130d602-4dbf-4cf5-af27-04ff7750050a",
    "image": "perev_right",
    "point": {
      "latitude": 52.0320497291,
      "longitude": 25.1949371091
    }
  },
  "d13b16e5-59a8-4724-b3a1-49ccda8f5bdc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "d13b16e5-59a8-4724-b3a1-49ccda8f5bdc",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d13b16e5-59a8-4724-b3a1-49ccda8f5bdc",
    "image": "axis_romb",
    "point": {
      "latitude": 52.1100227992,
      "longitude": 26.1062817307
    }
  },
  "d2526b14-5223-4adc-84bb-c1efce37db7f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 27",
      "id": "d2526b14-5223-4adc-84bb-c1efce37db7f",
      "kilometrage": 17,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2526b14-5223-4adc-84bb-c1efce37db7f",
    "image": "perev_right",
    "point": {
      "latitude": 52.0749812182,
      "longitude": 25.9137667037
    }
  },
  "d2ec1698-6a98-4672-b710-2c6972f5f9e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "d2ec1698-6a98-4672-b710-2c6972f5f9e7",
      "kilometrage": 424,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2ec1698-6a98-4672-b710-2c6972f5f9e7",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1426496618,
      "longitude": 27.2550536407
    }
  },
  "d36046fe-02e0-46d0-a95f-befaf9d589e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "d36046fe-02e0-46d0-a95f-befaf9d589e5",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d36046fe-02e0-46d0-a95f-befaf9d589e5",
    "image": "attention",
    "point": {
      "latitude": 52.1110403078,
      "longitude": 26.2901408964
    }
  },
  "d36b10e3-db38-422a-a31e-e860a78f7878": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d36b10e3-db38-422a-a31e-e860a78f7878",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d36b10e3-db38-422a-a31e-e860a78f7878",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1270633289,
      "longitude": 24.8022510523
    }
  },
  "d387c9d3-20d8-410c-a792-9159a9ee81d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 143",
      "id": "d387c9d3-20d8-410c-a792-9159a9ee81d3",
      "kilometrage": 138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d387c9d3-20d8-410c-a792-9159a9ee81d3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2165395795,
      "longitude": 24.3122707543
    }
  },
  "d45b852a-d901-45ae-9d13-6a3f813452dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 239",
      "id": "d45b852a-d901-45ae-9d13-6a3f813452dc",
      "kilometrage": 426,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d45b852a-d901-45ae-9d13-6a3f813452dc",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1485053233,
      "longitude": 27.2466477211
    }
  },
  "d4d0562d-4c5d-4f63-91ec-4b943c62387d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 164",
      "id": "d4d0562d-4c5d-4f63-91ec-4b943c62387d",
      "kilometrage": 455,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4d0562d-4c5d-4f63-91ec-4b943c62387d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1595878321,
      "longitude": 26.9923678681
    }
  },
  "d4ea01f4-f987-4b36-898d-17f46f94e487": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d4ea01f4-f987-4b36-898d-17f46f94e487",
      "kilometrage": 170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4ea01f4-f987-4b36-898d-17f46f94e487",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1291376118,
      "longitude": 23.9447288118
    }
  },
  "d5024019-54c3-4a44-996a-ccc2ade5fc2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 51",
      "id": "d5024019-54c3-4a44-996a-ccc2ade5fc2b",
      "kilometrage": 31,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5024019-54c3-4a44-996a-ccc2ade5fc2b",
    "image": "perev_left",
    "point": {
      "latitude": 52.0768728203,
      "longitude": 25.7280211511
    }
  },
  "d558fddb-74c2-42a0-84aa-68a7a08a27a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 263",
      "id": "d558fddb-74c2-42a0-84aa-68a7a08a27a9",
      "kilometrage": 412,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d558fddb-74c2-42a0-84aa-68a7a08a27a9",
    "image": "perev_left",
    "point": {
      "latitude": 52.1479301345,
      "longitude": 27.3318542365
    }
  },
  "d5636a1d-c926-4f07-96fd-620e81580b81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 27",
      "id": "d5636a1d-c926-4f07-96fd-620e81580b81",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5636a1d-c926-4f07-96fd-620e81580b81",
    "image": "perev_left",
    "point": {
      "latitude": 52.1120478636,
      "longitude": 26.2914452864
    }
  },
  "d59f6000-c01a-4a26-a58e-5d814b74f0a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "d59f6000-c01a-4a26-a58e-5d814b74f0a1",
      "kilometrage": 527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d59f6000-c01a-4a26-a58e-5d814b74f0a1",
    "image": "attention",
    "point": {
      "latitude": 52.1174924381,
      "longitude": 26.154168583
    }
  },
  "d5f17e88-95ba-4020-bf01-e1cebfb139ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 66",
      "id": "d5f17e88-95ba-4020-bf01-e1cebfb139ca",
      "kilometrage": 499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5f17e88-95ba-4020-bf01-e1cebfb139ca",
    "image": "perev_right",
    "point": {
      "latitude": 52.1132827704,
      "longitude": 26.5101065985
    }
  },
  "d6292f8c-67ff-4ac7-b835-051a496f70a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 25",
      "id": "d6292f8c-67ff-4ac7-b835-051a496f70a5",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6292f8c-67ff-4ac7-b835-051a496f70a5",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1364707595,
      "longitude": 23.9464143916
    }
  },
  "d66fd693-7d2f-4d74-a256-8a0277edfeb3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 60",
      "id": "d66fd693-7d2f-4d74-a256-8a0277edfeb3",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d66fd693-7d2f-4d74-a256-8a0277edfeb3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2159736095,
      "longitude": 24.3587443232
    }
  },
  "d68a704e-f06a-4aef-b0d7-e184d962dc34": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d68a704e-f06a-4aef-b0d7-e184d962dc34",
      "kilometrage": 164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d68a704e-f06a-4aef-b0d7-e184d962dc34",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1588641169,
      "longitude": 24.0003198655
    }
  },
  "d6f950d4-6257-421c-a9b6-f7115f061d96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "d6f950d4-6257-421c-a9b6-f7115f061d96",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6f950d4-6257-421c-a9b6-f7115f061d96",
    "image": "attention",
    "point": {
      "latitude": 52.1928666868,
      "longitude": 24.1084762705
    }
  },
  "d704c295-bcf2-41ac-8436-8b036c19f5d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 228",
      "id": "d704c295-bcf2-41ac-8436-8b036c19f5d3",
      "kilometrage": 431,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d704c295-bcf2-41ac-8436-8b036c19f5d3",
    "image": "perev_left",
    "point": {
      "latitude": 52.1628270843,
      "longitude": 27.1967895828
    }
  },
  "d7074688-1037-4973-8fe0-671ba69e7910": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 117",
      "id": "d7074688-1037-4973-8fe0-671ba69e7910",
      "kilometrage": 477,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7074688-1037-4973-8fe0-671ba69e7910",
    "image": "perev_left",
    "point": {
      "latitude": 52.1366912391,
      "longitude": 26.7669368754
    }
  },
  "d70871d8-c591-4a25-90eb-dafe8e1f9880": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 108",
      "id": "d70871d8-c591-4a25-90eb-dafe8e1f9880",
      "kilometrage": 92,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d70871d8-c591-4a25-90eb-dafe8e1f9880",
    "image": "perev_left",
    "point": {
      "latitude": 52.0909851863,
      "longitude": 24.9292046957
    }
  },
  "d751212f-38ff-450a-8796-f4b548ce8b41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 210",
      "id": "d751212f-38ff-450a-8796-f4b548ce8b41",
      "kilometrage": 437,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d751212f-38ff-450a-8796-f4b548ce8b41",
    "image": "perev_left",
    "point": {
      "latitude": 52.1486912884,
      "longitude": 27.1521515075
    }
  },
  "d7d082fd-cefc-4fc3-8923-27b2e06c2127": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 33",
      "id": "d7d082fd-cefc-4fc3-8923-27b2e06c2127",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7d082fd-cefc-4fc3-8923-27b2e06c2127",
    "image": "perev_left",
    "point": {
      "latitude": 52.1021351318,
      "longitude": 27.2592726413
    }
  },
  "d7f9f568-fd5c-4963-a92b-1f903ad42c8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый  ",
      "id": "d7f9f568-fd5c-4963-a92b-1f903ad42c8c",
      "kilometrage": 475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7f9f568-fd5c-4963-a92b-1f903ad42c8c",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 52.1422239585,
      "longitude": 26.7910242388
    }
  },
  "d82a003a-c2b4-4e06-b68b-feff6924661d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d82a003a-c2b4-4e06-b68b-feff6924661d",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d82a003a-c2b4-4e06-b68b-feff6924661d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0911164723,
      "longitude": 23.7853993296
    }
  },
  "d87d2f3a-edfc-4db8-ab49-2d3605df593e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "d87d2f3a-edfc-4db8-ab49-2d3605df593e",
      "kilometrage": 61,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d87d2f3a-edfc-4db8-ab49-2d3605df593e",
    "image": "attention",
    "point": {
      "latitude": 52.0222274092,
      "longitude": 25.3297876916
    }
  },
  "d8e22154-b3e0-46ae-b254-244609095ec8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "d8e22154-b3e0-46ae-b254-244609095ec8",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d8e22154-b3e0-46ae-b254-244609095ec8",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2158301555,
      "longitude": 24.3570573722
    }
  },
  "d8f3f22a-f7f8-476b-867a-08d82554b4d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d8f3f22a-f7f8-476b-867a-08d82554b4d4",
      "kilometrage": 185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d8f3f22a-f7f8-476b-867a-08d82554b4d4",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0903970221,
      "longitude": 23.7709272133
    }
  },
  "d9578906-a8fd-4d66-b4d1-7adf4aab3484": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 182",
      "id": "d9578906-a8fd-4d66-b4d1-7adf4aab3484",
      "kilometrage": 448,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9578906-a8fd-4d66-b4d1-7adf4aab3484",
    "image": "perev_left",
    "point": {
      "latitude": 52.1576568285,
      "longitude": 27.0519316876
    }
  },
  "d9c7e784-ee53-4fb1-8596-dc53afc3c1dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 35",
      "id": "d9c7e784-ee53-4fb1-8596-dc53afc3c1dc",
      "kilometrage": 76,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9c7e784-ee53-4fb1-8596-dc53afc3c1dc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0461242176,
      "longitude": 25.1388593284
    }
  },
  "da2aa970-7d4c-46cc-bf1f-db26b806c52c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 247",
      "id": "da2aa970-7d4c-46cc-bf1f-db26b806c52c",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da2aa970-7d4c-46cc-bf1f-db26b806c52c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0803746601,
      "longitude": 23.7068663171
    }
  },
  "da3b4372-a029-4aee-843e-b3232710befb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 151",
      "id": "da3b4372-a029-4aee-843e-b3232710befb",
      "kilometrage": 143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da3b4372-a029-4aee-843e-b3232710befb",
    "image": "perev_left",
    "point": {
      "latitude": 52.2023561382,
      "longitude": 24.2495589264
    }
  },
  "da4c9170-7911-4416-b9b3-3b78eddd9106": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "da4c9170-7911-4416-b9b3-3b78eddd9106",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da4c9170-7911-4416-b9b3-3b78eddd9106",
    "image": "stop",
    "point": {
      "latitude": 52.19248253,
      "longitude": 24.1242060142
    }
  },
  "da9afa8f-1299-481b-82b4-562256500673": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 75",
      "id": "da9afa8f-1299-481b-82b4-562256500673",
      "kilometrage": 496,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da9afa8f-1299-481b-82b4-562256500673",
    "image": "perev_left",
    "point": {
      "latitude": 52.1185363796,
      "longitude": 26.5430738859
    }
  },
  "da9bfc97-2fbb-462f-9077-b323f1aa03d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 172",
      "id": "da9bfc97-2fbb-462f-9077-b323f1aa03d9",
      "kilometrage": 154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da9bfc97-2fbb-462f-9077-b323f1aa03d9",
    "image": "perev_left",
    "point": {
      "latitude": 52.1930382141,
      "longitude": 24.1078012232
    }
  },
  "daa2a909-90aa-4a7b-9a39-b144f1f588d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 111",
      "id": "daa2a909-90aa-4a7b-9a39-b144f1f588d3",
      "kilometrage": 479,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "daa2a909-90aa-4a7b-9a39-b144f1f588d3",
    "image": "perev_left",
    "point": {
      "latitude": 52.1280305976,
      "longitude": 26.7511238002
    }
  },
  "dafb238d-5e14-4519-b755-37aaff9c8ac0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 4",
      "id": "dafb238d-5e14-4519-b755-37aaff9c8ac0",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dafb238d-5e14-4519-b755-37aaff9c8ac0",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1885062989,
      "longitude": 27.3772730456
    }
  },
  "db672570-ed98-4087-99e6-d6f44e8e2d5d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 19",
      "id": "db672570-ed98-4087-99e6-d6f44e8e2d5d",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "db672570-ed98-4087-99e6-d6f44e8e2d5d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1253118429,
      "longitude": 27.2693928069
    }
  },
  "db89dfb0-32c4-4d10-a47b-74ec2f2163bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 198е",
      "id": "db89dfb0-32c4-4d10-a47b-74ec2f2163bf",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "db89dfb0-32c4-4d10-a47b-74ec2f2163bf",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1377457456,
      "longitude": 23.946945258
    }
  },
  "dbb85662-cd73-44c5-9523-6e9418c9a40d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "dbb85662-cd73-44c5-9523-6e9418c9a40d",
      "kilometrage": 78,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbb85662-cd73-44c5-9523-6e9418c9a40d",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0539996185,
      "longitude": 25.1095209634
    }
  },
  "dbd31519-61b5-422c-8ba8-793ee07c4119": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 122б",
      "id": "dbd31519-61b5-422c-8ba8-793ee07c4119",
      "kilometrage": 474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbd31519-61b5-422c-8ba8-793ee07c4119",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1411334968,
      "longitude": 26.7983444377
    }
  },
  "dbef437f-94cf-4bf2-a05c-96359f8030fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 221",
      "id": "dbef437f-94cf-4bf2-a05c-96359f8030fd",
      "kilometrage": 434,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbef437f-94cf-4bf2-a05c-96359f8030fd",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.148907591,
      "longitude": 27.188900244
    }
  },
  "dbfa7f77-fa8f-4e2c-990e-b3f7dc707b2e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "dbfa7f77-fa8f-4e2c-990e-b3f7dc707b2e",
      "kilometrage": 489,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbfa7f77-fa8f-4e2c-990e-b3f7dc707b2e",
    "image": "attention",
    "point": {
      "latitude": 52.1266270426,
      "longitude": 26.6295144203
    }
  },
  "dc083a35-8bef-4f7e-8051-fb77516f2409": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 198а",
      "id": "dc083a35-8bef-4f7e-8051-fb77516f2409",
      "kilometrage": 442,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc083a35-8bef-4f7e-8051-fb77516f2409",
    "image": "perev_left",
    "point": {
      "latitude": 52.1478540616,
      "longitude": 27.1045650389
    }
  },
  "dc789df4-3898-4484-918e-2fc1ae680c40": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "dc789df4-3898-4484-918e-2fc1ae680c40",
      "kilometrage": 472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc789df4-3898-4484-918e-2fc1ae680c40",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1448845659,
      "longitude": 26.8266172945
    }
  },
  "dcb5da05-bd8e-414c-810c-c2d8ab48f474": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 57",
      "id": "dcb5da05-bd8e-414c-810c-c2d8ab48f474",
      "kilometrage": 34,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dcb5da05-bd8e-414c-810c-c2d8ab48f474",
    "image": "perev_left",
    "point": {
      "latitude": 52.0733145862,
      "longitude": 25.6789218726
    }
  },
  "dccbd81e-ce8a-4b66-b910-10838779d61f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "dccbd81e-ce8a-4b66-b910-10838779d61f",
      "kilometrage": 420,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dccbd81e-ce8a-4b66-b910-10838779d61f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1563173741,
      "longitude": 27.2981120961
    }
  },
  "dd59d634-2e74-4447-928a-f4eb1c2fe695": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 132",
      "id": "dd59d634-2e74-4447-928a-f4eb1c2fe695",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd59d634-2e74-4447-928a-f4eb1c2fe695",
    "image": "perev_left",
    "point": {
      "latitude": 52.2140916706,
      "longitude": 24.3839739249
    }
  },
  "dd717f1b-7f3f-4b66-9d58-920b6fd30fdf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "dd717f1b-7f3f-4b66-9d58-920b6fd30fdf",
      "kilometrage": 136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd717f1b-7f3f-4b66-9d58-920b6fd30fdf",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2158075093,
      "longitude": 24.3432816408
    }
  },
  "dd8ed0a6-01a8-4696-8ee1-05417302b4fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 127",
      "id": "dd8ed0a6-01a8-4696-8ee1-05417302b4fe",
      "kilometrage": 469,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd8ed0a6-01a8-4696-8ee1-05417302b4fe",
    "image": "perev_left",
    "point": {
      "latitude": 52.1396582555,
      "longitude": 26.8538062748
    }
  },
  "ddb8f635-d8de-488f-bb3d-23b6c612bbc7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 224",
      "id": "ddb8f635-d8de-488f-bb3d-23b6c612bbc7",
      "kilometrage": 180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ddb8f635-d8de-488f-bb3d-23b6c612bbc7",
    "image": "perev_right",
    "point": {
      "latitude": 52.094550509,
      "longitude": 23.8445571164
    }
  },
  "ddd601db-12a9-4bd1-81f0-a798047c766d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "ddd601db-12a9-4bd1-81f0-a798047c766d",
      "kilometrage": 69,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ddd601db-12a9-4bd1-81f0-a798047c766d",
    "image": "crossing_way",
    "point": {
      "latitude": 52.0353322795,
      "longitude": 25.2303084896
    }
  },
  "de074cd2-e9fb-4ee2-be39-df6b228b1f78": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "de074cd2-e9fb-4ee2-be39-df6b228b1f78",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de074cd2-e9fb-4ee2-be39-df6b228b1f78",
    "image": "attention",
    "point": {
      "latitude": 52.1066917073,
      "longitude": 26.098654406
    }
  },
  "de488ff7-4249-49e4-8e9f-0c62aa6a99f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "de488ff7-4249-49e4-8e9f-0c62aa6a99f3",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de488ff7-4249-49e4-8e9f-0c62aa6a99f3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1185401731,
      "longitude": 26.4319047354
    }
  },
  "de569da0-1403-42f5-9a94-f0e0fa39eec0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 202",
      "id": "de569da0-1403-42f5-9a94-f0e0fa39eec0",
      "kilometrage": 441,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de569da0-1403-42f5-9a94-f0e0fa39eec0",
    "image": "perev_right",
    "point": {
      "latitude": 52.1508963648,
      "longitude": 27.1171132031
    }
  },
  "de728b71-41a2-4885-a99d-a10113cb8b78": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 122",
      "id": "de728b71-41a2-4885-a99d-a10113cb8b78",
      "kilometrage": 474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de728b71-41a2-4885-a99d-a10113cb8b78",
    "image": "perev_right",
    "point": {
      "latitude": 52.1413284503,
      "longitude": 26.7995741744
    }
  },
  "debddaa2-e096-4953-9612-a0549ce92bae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 148",
      "id": "debddaa2-e096-4953-9612-a0549ce92bae",
      "kilometrage": 141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "debddaa2-e096-4953-9612-a0549ce92bae",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2042608636,
      "longitude": 24.275781911
    }
  },
  "df02a8d1-8706-4ac8-86e5-a760d0a8acd7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 5",
      "id": "df02a8d1-8706-4ac8-86e5-a760d0a8acd7",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df02a8d1-8706-4ac8-86e5-a760d0a8acd7",
    "image": "perev_right",
    "point": {
      "latitude": 52.1349004812,
      "longitude": 27.2782852923
    }
  },
  "df25f8ff-18e7-4b21-9e10-01a426d5fec0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "df25f8ff-18e7-4b21-9e10-01a426d5fec0",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df25f8ff-18e7-4b21-9e10-01a426d5fec0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1097566867,
      "longitude": 26.1062911324
    }
  },
  "df2a7e2b-36f3-4628-8260-f8d418da6fb5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "df2a7e2b-36f3-4628-8260-f8d418da6fb5",
      "kilometrage": 513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df2a7e2b-36f3-4628-8260-f8d418da6fb5",
    "image": "attention",
    "point": {
      "latitude": 52.0993083004,
      "longitude": 26.3475695731
    }
  },
  "df9c0349-478f-4ca3-90ef-898a80a3efc6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 118",
      "id": "df9c0349-478f-4ca3-90ef-898a80a3efc6",
      "kilometrage": 102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df9c0349-478f-4ca3-90ef-898a80a3efc6",
    "image": "perev_right",
    "point": {
      "latitude": 52.1306557409,
      "longitude": 24.7960348751
    }
  },
  "dfe32b72-390a-4ec9-a8c7-1caf2717db28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "dfe32b72-390a-4ec9-a8c7-1caf2717db28",
      "kilometrage": 169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dfe32b72-390a-4ec9-a8c7-1caf2717db28",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1373131044,
      "longitude": 23.9466001758
    }
  },
  "e013ae2e-4cc2-454d-beaa-d7d59a6226d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 28",
      "id": "e013ae2e-4cc2-454d-beaa-d7d59a6226d3",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e013ae2e-4cc2-454d-beaa-d7d59a6226d3",
    "image": "perev_right",
    "point": {
      "latitude": 52.1085774958,
      "longitude": 27.2652765676
    }
  },
  "e02958fa-945b-49dd-ae4b-497a1f7412aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 68",
      "id": "e02958fa-945b-49dd-ae4b-497a1f7412aa",
      "kilometrage": 40,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e02958fa-945b-49dd-ae4b-497a1f7412aa",
    "image": "perev_right",
    "point": {
      "latitude": 52.0397782746,
      "longitude": 25.6245878401
    }
  },
  "e02ed1a7-265e-4907-9434-be2dd56cffcd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 259",
      "id": "e02ed1a7-265e-4907-9434-be2dd56cffcd",
      "kilometrage": 414,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e02ed1a7-265e-4907-9434-be2dd56cffcd",
    "image": "perev_right",
    "point": {
      "latitude": 52.1361765086,
      "longitude": 27.3289065166
    }
  },
  "e03e8541-6249-44f8-aba9-aeed946e8b2a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e03e8541-6249-44f8-aba9-aeed946e8b2a",
      "kilometrage": 32,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e03e8541-6249-44f8-aba9-aeed946e8b2a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0753068176,
      "longitude": 25.7134309962
    }
  },
  "e0411180-0427-4858-bc16-34a7076c9541": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "e0411180-0427-4858-bc16-34a7076c9541",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0411180-0427-4858-bc16-34a7076c9541",
    "image": "attention",
    "point": {
      "latitude": 52.0910287361,
      "longitude": 23.7526108319
    }
  },
  "e06ea254-5113-4505-af1e-b0c72ef44977": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 124а",
      "id": "e06ea254-5113-4505-af1e-b0c72ef44977",
      "kilometrage": 471,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e06ea254-5113-4505-af1e-b0c72ef44977",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1436792886,
      "longitude": 26.8273975773
    }
  },
  "e0ae2394-39ee-4028-a29a-d9471c8a71f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 181",
      "id": "e0ae2394-39ee-4028-a29a-d9471c8a71f4",
      "kilometrage": 158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0ae2394-39ee-4028-a29a-d9471c8a71f4",
    "image": "perev_right",
    "point": {
      "latitude": 52.1916797447,
      "longitude": 24.052941712
    }
  },
  "e0d20120-38f4-4a49-a3d4-3247f0da5e7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "e0d20120-38f4-4a49-a3d4-3247f0da5e7a",
      "kilometrage": 192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0d20120-38f4-4a49-a3d4-3247f0da5e7a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0820435307,
      "longitude": 23.6869608379
    }
  },
  "e129b484-19f6-412c-9ae6-74aea875897a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 32",
      "id": "e129b484-19f6-412c-9ae6-74aea875897a",
      "kilometrage": 20,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e129b484-19f6-412c-9ae6-74aea875897a",
    "image": "perev_right",
    "point": {
      "latitude": 52.0729425193,
      "longitude": 25.8717428746
    }
  },
  "e129fbca-52bb-48e1-bd64-87c4e845d96a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "e129fbca-52bb-48e1-bd64-87c4e845d96a",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e129fbca-52bb-48e1-bd64-87c4e845d96a",
    "image": "crossing_way",
    "point": {
      "latitude": 52.1439457075,
      "longitude": 24.7268199628
    }
  },
  "e171aa8a-533e-4af4-90a0-b03fdac62dbf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 194",
      "id": "e171aa8a-533e-4af4-90a0-b03fdac62dbf",
      "kilometrage": 165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e171aa8a-533e-4af4-90a0-b03fdac62dbf",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1512254617,
      "longitude": 23.9976588579
    }
  },
  "e18935fb-7f85-46e2-b44b-e8089671da2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "e18935fb-7f85-46e2-b44b-e8089671da2b",
      "kilometrage": 37,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e18935fb-7f85-46e2-b44b-e8089671da2b",
    "image": "name_of",
    "point": {
      "latitude": 52.0575226869,
      "longitude": 25.6512394024
    }
  },
  "e18b0750-5f4d-45aa-aad3-b66bd8f1dd53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Скорость ограничена  ",
      "id": "e18b0750-5f4d-45aa-aad3-b66bd8f1dd53",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e18b0750-5f4d-45aa-aad3-b66bd8f1dd53",
    "image": "speed_limit",
    "point": {
      "latitude": 52.1028866293,
      "longitude": 26.0765327198
    }
  },
  "e193d742-b5f2-4880-b3aa-b3e7993b9512": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "e193d742-b5f2-4880-b3aa-b3e7993b9512",
      "kilometrage": 469,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e193d742-b5f2-4880-b3aa-b3e7993b9512",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1382831468,
      "longitude": 26.8568744556
    }
  },
  "e19f9255-8138-4840-8494-1a8743a2adf3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 154",
      "id": "e19f9255-8138-4840-8494-1a8743a2adf3",
      "kilometrage": 144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e19f9255-8138-4840-8494-1a8743a2adf3",
    "image": "buyo_left",
    "point": {
      "latitude": 52.202885167,
      "longitude": 24.23094525
    }
  },
  "e1b2b7d5-dcb2-4c56-bdb1-e91d507045db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 75",
      "id": "e1b2b7d5-dcb2-4c56-bdb1-e91d507045db",
      "kilometrage": 46,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1b2b7d5-dcb2-4c56-bdb1-e91d507045db",
    "image": "perev_right",
    "point": {
      "latitude": 52.0247007802,
      "longitude": 25.5467711942
    }
  },
  "e1cd6dce-2f07-4161-b26f-1aa82104b1aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 62",
      "id": "e1cd6dce-2f07-4161-b26f-1aa82104b1aa",
      "kilometrage": 500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1cd6dce-2f07-4161-b26f-1aa82104b1aa",
    "image": "perev_left",
    "point": {
      "latitude": 52.1148777021,
      "longitude": 26.4900462424
    }
  },
  "e1e99896-707f-40c5-81e6-549a758c36ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e1e99896-707f-40c5-81e6-549a758c36ca",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1e99896-707f-40c5-81e6-549a758c36ca",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1836189108,
      "longitude": 24.0388335978
    }
  },
  "e29ef2d9-b5d2-4925-8f5a-08b5b183d863": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 120",
      "id": "e29ef2d9-b5d2-4925-8f5a-08b5b183d863",
      "kilometrage": 103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e29ef2d9-b5d2-4925-8f5a-08b5b183d863",
    "image": "perev_left",
    "point": {
      "latitude": 52.1323586616,
      "longitude": 24.7816968055
    }
  },
  "e2f7753b-559c-4eb2-b9dd-ca5b863afb04": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 29",
      "id": "e2f7753b-559c-4eb2-b9dd-ca5b863afb04",
      "kilometrage": 18,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2f7753b-559c-4eb2-b9dd-ca5b863afb04",
    "image": "perev_right",
    "point": {
      "latitude": 52.0754137967,
      "longitude": 25.8923240723
    }
  },
  "e3035664-1a19-454a-aa5f-2c2a20c79df1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e3035664-1a19-454a-aa5f-2c2a20c79df1",
      "kilometrage": 13,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3035664-1a19-454a-aa5f-2c2a20c79df1",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.084512411,
      "longitude": 25.9593212306
    }
  },
  "e328996d-592c-4826-86fd-2839d6fa8c1f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 3",
      "id": "e328996d-592c-4826-86fd-2839d6fa8c1f",
      "kilometrage": 3,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e328996d-592c-4826-86fd-2839d6fa8c1f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.103349697,
      "longitude": 26.0846319982
    }
  },
  "e345202f-cf08-4930-9f9b-bf4b9074b669": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 71",
      "id": "e345202f-cf08-4930-9f9b-bf4b9074b669",
      "kilometrage": 42,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e345202f-cf08-4930-9f9b-bf4b9074b669",
    "image": "perev_right",
    "point": {
      "latitude": 52.0275907377,
      "longitude": 25.6055304201
    }
  },
  "e3502a17-37d0-46de-8a21-41a29a3b1247": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 261а",
      "id": "e3502a17-37d0-46de-8a21-41a29a3b1247",
      "kilometrage": 413,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3502a17-37d0-46de-8a21-41a29a3b1247",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1407100565,
      "longitude": 27.3365365911
    }
  },
  "e3b8c88d-588e-43b4-a9ec-a022d8dcd073": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "e3b8c88d-588e-43b4-a9ec-a022d8dcd073",
      "kilometrage": 62,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3b8c88d-588e-43b4-a9ec-a022d8dcd073",
    "image": "stop",
    "point": {
      "latitude": 52.0224277191,
      "longitude": 25.3269949485
    }
  },
  "e3ed566b-b35c-453b-b79f-9305717228f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 84",
      "id": "e3ed566b-b35c-453b-b79f-9305717228f2",
      "kilometrage": 493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3ed566b-b35c-453b-b79f-9305717228f2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1115713899,
      "longitude": 26.5858643384
    }
  },
  "e404d6f8-5f0e-41cb-a1ea-78d709470d0b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 30",
      "id": "e404d6f8-5f0e-41cb-a1ea-78d709470d0b",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e404d6f8-5f0e-41cb-a1ea-78d709470d0b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1101925614,
      "longitude": 27.2601321369
    }
  },
  "e4069811-4143-46de-ab8f-f6af6a3257e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e4069811-4143-46de-ab8f-f6af6a3257e7",
      "kilometrage": 32,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4069811-4143-46de-ab8f-f6af6a3257e7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0755032478,
      "longitude": 25.7173300914
    }
  },
  "e407ecac-f8a8-4ef7-bec1-8280cfa75b9b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 4",
      "id": "e407ecac-f8a8-4ef7-bec1-8280cfa75b9b",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e407ecac-f8a8-4ef7-bec1-8280cfa75b9b",
    "image": "perev_left",
    "point": {
      "latitude": 52.1030104717,
      "longitude": 26.0773432849
    }
  },
  "e4a024e6-1f82-4f58-ac45-4c88147e4bd8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "e4a024e6-1f82-4f58-ac45-4c88147e4bd8",
      "kilometrage": 507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4a024e6-1f82-4f58-ac45-4c88147e4bd8",
    "image": "attention",
    "point": {
      "latitude": 52.1092455874,
      "longitude": 26.4143460314
    }
  },
  "e4a0b62d-53c5-4dba-9c1e-05b9fa8ae6fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 230",
      "id": "e4a0b62d-53c5-4dba-9c1e-05b9fa8ae6fe",
      "kilometrage": 430,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4a0b62d-53c5-4dba-9c1e-05b9fa8ae6fe",
    "image": "perev_right",
    "point": {
      "latitude": 52.1596811587,
      "longitude": 27.2074131461
    }
  },
  "e4a5752d-35b0-48e7-8acc-95470afd41f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e4a5752d-35b0-48e7-8acc-95470afd41f8",
      "kilometrage": 67,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4a5752d-35b0-48e7-8acc-95470afd41f8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0309147728,
      "longitude": 25.2474308437
    }
  },
  "e4ed445f-779a-47c0-914d-1588e0d1ed91": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 99",
      "id": "e4ed445f-779a-47c0-914d-1588e0d1ed91",
      "kilometrage": 486,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4ed445f-779a-47c0-914d-1588e0d1ed91",
    "image": "perev_right",
    "point": {
      "latitude": 52.1199347133,
      "longitude": 26.6722406407
    }
  },
  "e4f95ab4-87b9-443b-9a84-8f226ec11775": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 34",
      "id": "e4f95ab4-87b9-443b-9a84-8f226ec11775",
      "kilometrage": 514,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4f95ab4-87b9-443b-9a84-8f226ec11775",
    "image": "perev_right",
    "point": {
      "latitude": 52.1064201601,
      "longitude": 26.3270376871
    }
  },
  "e5294cbe-4e48-4acd-a7be-b816853d7833": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e5294cbe-4e48-4acd-a7be-b816853d7833",
      "kilometrage": 94,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e5294cbe-4e48-4acd-a7be-b816853d7833",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0993429111,
      "longitude": 24.8946116315
    }
  },
  "e558a809-c82c-42fc-9204-1a0257b8a881": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 138",
      "id": "e558a809-c82c-42fc-9204-1a0257b8a881",
      "kilometrage": 465,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e558a809-c82c-42fc-9204-1a0257b8a881",
    "image": "perev_right",
    "point": {
      "latitude": 52.1306058099,
      "longitude": 26.8869127718
    }
  },
  "e59becb5-941c-4fd4-a73a-8a02f0f92e24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 13",
      "id": "e59becb5-941c-4fd4-a73a-8a02f0f92e24",
      "kilometrage": 536,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e59becb5-941c-4fd4-a73a-8a02f0f92e24",
    "image": "perev_right",
    "point": {
      "latitude": 52.0724620701,
      "longitude": 26.1587211853
    }
  },
  "e5dba0bd-6713-462a-afd6-2e413ac095fa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 199",
      "id": "e5dba0bd-6713-462a-afd6-2e413ac095fa",
      "kilometrage": 441,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e5dba0bd-6713-462a-afd6-2e413ac095fa",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1508299326,
      "longitude": 27.1067890228
    }
  },
  "e5f0c8e1-b265-4908-885c-931d8f337c42": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 79",
      "id": "e5f0c8e1-b265-4908-885c-931d8f337c42",
      "kilometrage": 53,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e5f0c8e1-b265-4908-885c-931d8f337c42",
    "image": "perev_right",
    "point": {
      "latitude": 52.0192293241,
      "longitude": 25.4511382177
    }
  },
  "e68f96a7-bd5d-4b56-bfe7-1a25cad06d00": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 197",
      "id": "e68f96a7-bd5d-4b56-bfe7-1a25cad06d00",
      "kilometrage": 443,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e68f96a7-bd5d-4b56-bfe7-1a25cad06d00",
    "image": "perev_right",
    "point": {
      "latitude": 52.1414659532,
      "longitude": 27.1020922161
    }
  },
  "e69594f0-8818-4e8d-80bb-9e667f289fe0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e69594f0-8818-4e8d-80bb-9e667f289fe0",
      "kilometrage": 55,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e69594f0-8818-4e8d-80bb-9e667f289fe0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0177632891,
      "longitude": 25.4171775223
    }
  },
  "e82b50f2-5ee3-496a-93a4-0a6377ceee2a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "e82b50f2-5ee3-496a-93a4-0a6377ceee2a",
      "kilometrage": 152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e82b50f2-5ee3-496a-93a4-0a6377ceee2a",
    "image": "attention",
    "point": {
      "latitude": 52.1920883402,
      "longitude": 24.1298429835
    }
  },
  "e82b57b1-e808-4c24-ac05-8959988813d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 250",
      "id": "e82b57b1-e808-4c24-ac05-8959988813d4",
      "kilometrage": 420,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e82b57b1-e808-4c24-ac05-8959988813d4",
    "image": "perev_left",
    "point": {
      "latitude": 52.1539705589,
      "longitude": 27.2913707159
    }
  },
  "e859a44e-365c-4531-b435-f797a3064542": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "e859a44e-365c-4531-b435-f797a3064542",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e859a44e-365c-4531-b435-f797a3064542",
    "image": "attention",
    "point": {
      "latitude": 52.1212422431,
      "longitude": 26.4386841389
    }
  },
  "e85cade0-d508-45f6-8f28-9cb3f1f15a41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "e85cade0-d508-45f6-8f28-9cb3f1f15a41",
      "kilometrage": 9,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e85cade0-d508-45f6-8f28-9cb3f1f15a41",
    "image": "main_way",
    "point": {
      "latitude": 52.1057855659,
      "longitude": 26.0142903015
    }
  },
  "e8601341-67fe-44a2-8c1f-b0e8f600ad71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 209",
      "id": "e8601341-67fe-44a2-8c1f-b0e8f600ad71",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e8601341-67fe-44a2-8c1f-b0e8f600ad71",
    "image": "perev_right",
    "point": {
      "latitude": 52.1064697291,
      "longitude": 23.9262075714
    }
  },
  "e873ab67-9c2c-483c-8c5f-6a2fed406264": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 224",
      "id": "e873ab67-9c2c-483c-8c5f-6a2fed406264",
      "kilometrage": 432,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e873ab67-9c2c-483c-8c5f-6a2fed406264",
    "image": "perev_right",
    "point": {
      "latitude": 52.1550862228,
      "longitude": 27.1984086186
    }
  },
  "e894893f-2416-4e38-9c45-24562e81408f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e894893f-2416-4e38-9c45-24562e81408f",
      "kilometrage": 137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e894893f-2416-4e38-9c45-24562e81408f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2141102897,
      "longitude": 24.3280701383
    }
  },
  "e8e2e624-4adc-48f8-8e47-e388cc65d67e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "e8e2e624-4adc-48f8-8e47-e388cc65d67e",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e8e2e624-4adc-48f8-8e47-e388cc65d67e",
    "image": "attention",
    "point": {
      "latitude": 52.0929438555,
      "longitude": 23.9111578373
    }
  },
  "e955aecd-9b76-4532-9415-3b58042c9789": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 248",
      "id": "e955aecd-9b76-4532-9415-3b58042c9789",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e955aecd-9b76-4532-9415-3b58042c9789",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0809308338,
      "longitude": 23.7067672313
    }
  },
  "e96fcb94-d11d-478c-91b9-d5fb68e40b12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 110",
      "id": "e96fcb94-d11d-478c-91b9-d5fb68e40b12",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e96fcb94-d11d-478c-91b9-d5fb68e40b12",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1002530582,
      "longitude": 24.8915805797
    }
  },
  "e971ff20-77e8-4df0-affe-25bd03916e12": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "e971ff20-77e8-4df0-affe-25bd03916e12",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e971ff20-77e8-4df0-affe-25bd03916e12",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0806749016,
      "longitude": 23.7059072301
    }
  },
  "e9a0af86-ccdd-4c67-a1cd-638a4a051411": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "e9a0af86-ccdd-4c67-a1cd-638a4a051411",
      "kilometrage": 530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9a0af86-ccdd-4c67-a1cd-638a4a051411",
    "image": "perev_left",
    "point": {
      "latitude": 52.1132890372,
      "longitude": 26.1213809134
    }
  },
  "e9d6a7b0-5072-45c2-8111-7fe4fb1cc7fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 207",
      "id": "e9d6a7b0-5072-45c2-8111-7fe4fb1cc7fc",
      "kilometrage": 173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9d6a7b0-5072-45c2-8111-7fe4fb1cc7fc",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1091878935,
      "longitude": 23.9339219442
    }
  },
  "e9e1cb0f-70a3-49c2-aab1-52fb29d8c57a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e9e1cb0f-70a3-49c2-aab1-52fb29d8c57a",
      "kilometrage": 190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9e1cb0f-70a3-49c2-aab1-52fb29d8c57a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0823264921,
      "longitude": 23.7143022725
    }
  },
  "ea0068b6-608e-4efb-a41f-5ca7aa3b596b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "ea0068b6-608e-4efb-a41f-5ca7aa3b596b",
      "kilometrage": 481,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea0068b6-608e-4efb-a41f-5ca7aa3b596b",
    "image": "stop",
    "point": {
      "latitude": 52.1129411905,
      "longitude": 26.7350510573
    }
  },
  "ea307318-61ae-44b6-911c-53580ab90e71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 100",
      "id": "ea307318-61ae-44b6-911c-53580ab90e71",
      "kilometrage": 81,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea307318-61ae-44b6-911c-53580ab90e71",
    "image": "perev_left",
    "point": {
      "latitude": 52.0575479831,
      "longitude": 25.0741367733
    }
  },
  "ea88d3d7-9bb8-4c6c-89f2-e8e122e6ee55": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 113",
      "id": "ea88d3d7-9bb8-4c6c-89f2-e8e122e6ee55",
      "kilometrage": 99,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ea88d3d7-9bb8-4c6c-89f2-e8e122e6ee55",
    "image": "perev_left",
    "point": {
      "latitude": 52.1176339952,
      "longitude": 24.8317575376
    }
  },
  "eaf34bc3-b981-40ce-afa9-af175ac35ffa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 180",
      "id": "eaf34bc3-b981-40ce-afa9-af175ac35ffa",
      "kilometrage": 449,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eaf34bc3-b981-40ce-afa9-af175ac35ffa",
    "image": "perev_left",
    "point": {
      "latitude": 52.1553543348,
      "longitude": 27.0428093137
    }
  },
  "eb25f0f4-4ef1-41d8-9e90-86d2aeda3c67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 173",
      "id": "eb25f0f4-4ef1-41d8-9e90-86d2aeda3c67",
      "kilometrage": 452,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb25f0f4-4ef1-41d8-9e90-86d2aeda3c67",
    "image": "perev_right",
    "point": {
      "latitude": 52.1524153916,
      "longitude": 27.0231282315
    }
  },
  "eb95a383-979e-4071-b317-97bfdb43e699": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 205",
      "id": "eb95a383-979e-4071-b317-97bfdb43e699",
      "kilometrage": 172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb95a383-979e-4071-b317-97bfdb43e699",
    "image": "perev_right",
    "point": {
      "latitude": 52.1185619976,
      "longitude": 23.9349777544
    }
  },
  "ebbd4999-25c2-4dc9-aa62-f9a3fb317a2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "ebbd4999-25c2-4dc9-aa62-f9a3fb317a2d",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebbd4999-25c2-4dc9-aa62-f9a3fb317a2d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0794049067,
      "longitude": 25.777087398
    }
  },
  "ebde6f5d-5242-487a-8b4f-1eb36c1b52b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "ebde6f5d-5242-487a-8b4f-1eb36c1b52b0",
      "kilometrage": 518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebde6f5d-5242-487a-8b4f-1eb36c1b52b0",
    "image": "attention",
    "point": {
      "latitude": 52.1110876284,
      "longitude": 26.2837782154
    }
  },
  "ecd3f79a-5ab5-4446-86cf-61dc0f960a3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "ecd3f79a-5ab5-4446-86cf-61dc0f960a3d",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ecd3f79a-5ab5-4446-86cf-61dc0f960a3d",
    "image": "axis_romb",
    "point": {
      "latitude": 52.2078170601,
      "longitude": 24.4218375081
    }
  },
  "ed29cfe2-39b8-4754-b47c-193b8fe6e9b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 10",
      "id": "ed29cfe2-39b8-4754-b47c-193b8fe6e9b6",
      "kilometrage": 7,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed29cfe2-39b8-4754-b47c-193b8fe6e9b6",
    "image": "perev_left",
    "point": {
      "latitude": 52.1030177084,
      "longitude": 26.0339633329
    }
  },
  "ed930025-6b46-4641-b290-b64b4f9f0bff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 520",
      "id": "ed930025-6b46-4641-b290-b64b4f9f0bff",
      "kilometrage": 520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed930025-6b46-4641-b290-b64b4f9f0bff",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1146009879,
      "longitude": 26.2554787758
    }
  },
  "eda0c4ba-e377-45b3-891d-c32400f5c4b8": {
    "data": {
      "color": false,
      "comment": "Буй а не перевальный",
      "description": "Перевальный знак левый 182",
      "id": "eda0c4ba-e377-45b3-891d-c32400f5c4b8",
      "kilometrage": 159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eda0c4ba-e377-45b3-891d-c32400f5c4b8",
    "image": "perev_left",
    "point": {
      "latitude": 52.18572717830125,
      "longitude": 24.048848922381325
    }
  },
  "edbd3b6e-90d2-490b-8ed7-e54a9fa229b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 81",
      "id": "edbd3b6e-90d2-490b-8ed7-e54a9fa229b3",
      "kilometrage": 57,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edbd3b6e-90d2-490b-8ed7-e54a9fa229b3",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0173727573,
      "longitude": 25.398488064
    }
  },
  "edd85091-e1a7-47db-b5ab-934f46eaa0a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 63",
      "id": "edd85091-e1a7-47db-b5ab-934f46eaa0a5",
      "kilometrage": 38,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edd85091-e1a7-47db-b5ab-934f46eaa0a5",
    "image": "perev_right",
    "point": {
      "latitude": 52.0531273489,
      "longitude": 25.6446341059
    }
  },
  "edee73c4-2c7e-4055-8511-94338c66740f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "edee73c4-2c7e-4055-8511-94338c66740f",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edee73c4-2c7e-4055-8511-94338c66740f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.121449162,
      "longitude": 24.8225082486
    }
  },
  "ee014c90-56f0-4965-8777-6c42fe43f4e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 14",
      "id": "ee014c90-56f0-4965-8777-6c42fe43f4e7",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee014c90-56f0-4965-8777-6c42fe43f4e7",
    "image": "perev_right",
    "point": {
      "latitude": 52.1272273526,
      "longitude": 27.2729635597
    }
  },
  "ee618249-131c-4bf7-bdef-eb52678f32e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 1г",
      "id": "ee618249-131c-4bf7-bdef-eb52678f32e3",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee618249-131c-4bf7-bdef-eb52678f32e3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1094302429,
      "longitude": 26.1056674565
    }
  },
  "ef38be9b-4d24-4612-89dd-d268b3d48d24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 505",
      "id": "ef38be9b-4d24-4612-89dd-d268b3d48d24",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef38be9b-4d24-4612-89dd-d268b3d48d24",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1208151799,
      "longitude": 26.4325038129
    }
  },
  "ef8e5d09-fbb1-4039-8c88-a120befc4e95": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "ef8e5d09-fbb1-4039-8c88-a120befc4e95",
      "kilometrage": 187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef8e5d09-fbb1-4039-8c88-a120befc4e95",
    "image": "attention",
    "point": {
      "latitude": 52.0898803134,
      "longitude": 23.7461690541
    }
  },
  "ef91a17f-72ca-4997-b6d9-9a5a9cc3160e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "ef91a17f-72ca-4997-b6d9-9a5a9cc3160e",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ef91a17f-72ca-4997-b6d9-9a5a9cc3160e",
    "image": "axis_romb",
    "point": {
      "latitude": 52.0873800391,
      "longitude": 23.7348378611
    }
  },
  "eff4bf11-2a7b-40a2-a9e5-bb7cee0e6c98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй  ",
      "id": "eff4bf11-2a7b-40a2-a9e5-bb7cee0e6c98",
      "kilometrage": 153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eff4bf11-2a7b-40a2-a9e5-bb7cee0e6c98",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1914861246,
      "longitude": 24.1239870991
    }
  },
  "f036f2c3-9f82-47a9-a7e7-68e634ab65e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "f036f2c3-9f82-47a9-a7e7-68e634ab65e8",
      "kilometrage": 28,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f036f2c3-9f82-47a9-a7e7-68e634ab65e8",
    "image": "buyo_right",
    "point": {
      "latitude": 52.07715586,
      "longitude": 25.7663085469
    }
  },
  "f03ed745-af2e-45bc-ab04-b341fcbc68d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 95",
      "id": "f03ed745-af2e-45bc-ab04-b341fcbc68d7",
      "kilometrage": 76,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f03ed745-af2e-45bc-ab04-b341fcbc68d7",
    "image": "perev_right",
    "point": {
      "latitude": 52.0460161832,
      "longitude": 25.1376622907
    }
  },
  "f050dac3-9e26-4a65-887a-f3505275778b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый  ",
      "id": "f050dac3-9e26-4a65-887a-f3505275778b",
      "kilometrage": 183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f050dac3-9e26-4a65-887a-f3505275778b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.090495327,
      "longitude": 23.7999272936
    }
  },
  "f05728fa-41a9-4ae4-978a-891e608b9974": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый  ",
      "id": "f05728fa-41a9-4ae4-978a-891e608b9974",
      "kilometrage": 476,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f05728fa-41a9-4ae4-978a-891e608b9974",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1364966349,
      "longitude": 26.7682431755
    }
  },
  "f058ca30-588a-4fb6-95a3-6cc8b7989be7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 220",
      "id": "f058ca30-588a-4fb6-95a3-6cc8b7989be7",
      "kilometrage": 434,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f058ca30-588a-4fb6-95a3-6cc8b7989be7",
    "image": "perev_right",
    "point": {
      "latitude": 52.1475684576,
      "longitude": 27.1842491329
    }
  },
  "f097e872-def9-423c-87f4-a18be0a4c08c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 122г",
      "id": "f097e872-def9-423c-87f4-a18be0a4c08c",
      "kilometrage": 474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f097e872-def9-423c-87f4-a18be0a4c08c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.141110056,
      "longitude": 26.796446778
    }
  },
  "f0a71ad8-6b39-472e-abbc-edf6d47bf457": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 116",
      "id": "f0a71ad8-6b39-472e-abbc-edf6d47bf457",
      "kilometrage": 477,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0a71ad8-6b39-472e-abbc-edf6d47bf457",
    "image": "perev_right",
    "point": {
      "latitude": 52.132718537,
      "longitude": 26.7661454186
    }
  },
  "f0b6a4c8-ac7d-43f4-be05-d9e6d8451137": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 46",
      "id": "f0b6a4c8-ac7d-43f4-be05-d9e6d8451137",
      "kilometrage": 26,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0b6a4c8-ac7d-43f4-be05-d9e6d8451137",
    "image": "perev_left",
    "point": {
      "latitude": 52.081458508,
      "longitude": 25.7856298785
    }
  },
  "f0fe9d7c-17f7-4c17-8215-dbde9e868158": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 5",
      "id": "f0fe9d7c-17f7-4c17-8215-dbde9e868158",
      "kilometrage": 410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0fe9d7c-17f7-4c17-8215-dbde9e868158",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1965002604,
      "longitude": 27.3846829608
    }
  },
  "f18c1837-6708-48b6-bee3-9586490fc636": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f18c1837-6708-48b6-bee3-9586490fc636",
      "kilometrage": 36,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f18c1837-6708-48b6-bee3-9586490fc636",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0617205347,
      "longitude": 25.6610088007
    }
  },
  "f1a9d23c-2d4d-4d6f-ae80-411801ed9bc5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 144",
      "id": "f1a9d23c-2d4d-4d6f-ae80-411801ed9bc5",
      "kilometrage": 138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1a9d23c-2d4d-4d6f-ae80-411801ed9bc5",
    "image": "perev_right",
    "point": {
      "latitude": 52.2166228731,
      "longitude": 24.3022634918
    }
  },
  "f1b6afdb-38c9-4059-bc42-a2e6a113717f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 140",
      "id": "f1b6afdb-38c9-4059-bc42-a2e6a113717f",
      "kilometrage": 465,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1b6afdb-38c9-4059-bc42-a2e6a113717f",
    "image": "perev_right",
    "point": {
      "latitude": 52.1304792333,
      "longitude": 26.8958147613
    }
  },
  "f1dd5d36-ca3f-4dfd-8098-5f67f3ebc500": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Внимание  ",
      "id": "f1dd5d36-ca3f-4dfd-8098-5f67f3ebc500",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1dd5d36-ca3f-4dfd-8098-5f67f3ebc500",
    "image": "attention",
    "point": {
      "latitude": 52.2138144882,
      "longitude": 24.3879875237
    }
  },
  "f1dd8f51-6771-40f5-afe3-6a84872e7c41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 195",
      "id": "f1dd8f51-6771-40f5-afe3-6a84872e7c41",
      "kilometrage": 166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1dd8f51-6771-40f5-afe3-6a84872e7c41",
    "image": "perev_left",
    "point": {
      "latitude": 52.1484360616,
      "longitude": 23.9900813997
    }
  },
  "f1ef9b98-c035-4c0e-8a09-09e0dd60b1ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 10",
      "id": "f1ef9b98-c035-4c0e-8a09-09e0dd60b1ab",
      "kilometrage": 10,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1ef9b98-c035-4c0e-8a09-09e0dd60b1ab",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1023585712,
      "longitude": 25.9986939346
    }
  },
  "f25bd318-015b-45c0-8cb5-be43e4d9999b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 30",
      "id": "f25bd318-015b-45c0-8cb5-be43e4d9999b",
      "kilometrage": 30,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f25bd318-015b-45c0-8cb5-be43e4d9999b",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0788610837,
      "longitude": 25.7403524054
    }
  },
  "f269a384-9a38-4aea-be0d-36ee0d134fb7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "f269a384-9a38-4aea-be0d-36ee0d134fb7",
      "kilometrage": 443,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f269a384-9a38-4aea-be0d-36ee0d134fb7",
    "image": "name_of",
    "point": {
      "latitude": 52.1413499821,
      "longitude": 27.09975822
    }
  },
  "f27f26fd-b8d5-45d9-bfbd-a7701857e8b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 131",
      "id": "f27f26fd-b8d5-45d9-bfbd-a7701857e8b7",
      "kilometrage": 468,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f27f26fd-b8d5-45d9-bfbd-a7701857e8b7",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1445249827,
      "longitude": 26.8666924455
    }
  },
  "f2a35d0c-7295-49ad-a434-d842e1e68907": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f2a35d0c-7295-49ad-a434-d842e1e68907",
      "kilometrage": 135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2a35d0c-7295-49ad-a434-d842e1e68907",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2165840105,
      "longitude": 24.3562245631
    }
  },
  "f30d313a-7803-44fa-a8db-ed68d60986ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 127",
      "id": "f30d313a-7803-44fa-a8db-ed68d60986ee",
      "kilometrage": 108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f30d313a-7803-44fa-a8db-ed68d60986ee",
    "image": "perev_left",
    "point": {
      "latitude": 52.1427156652,
      "longitude": 24.7298779469
    }
  },
  "f39b1564-bb3b-42b5-8abc-e5d908ae98d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 55",
      "id": "f39b1564-bb3b-42b5-8abc-e5d908ae98d0",
      "kilometrage": 504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f39b1564-bb3b-42b5-8abc-e5d908ae98d0",
    "image": "perev_right",
    "point": {
      "latitude": 52.11577519,
      "longitude": 26.4539770216
    }
  },
  "f470edbc-f1b9-4340-89a5-3ab86a9ea0bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "f470edbc-f1b9-4340-89a5-3ab86a9ea0bc",
      "kilometrage": 130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f470edbc-f1b9-4340-89a5-3ab86a9ea0bc",
    "image": "bridge_low",
    "point": {
      "latitude": 52.2079570043,
      "longitude": 24.4211673938
    }
  },
  "f4ccbb30-7374-490b-a06b-32787964333c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 118",
      "id": "f4ccbb30-7374-490b-a06b-32787964333c",
      "kilometrage": 476,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4ccbb30-7374-490b-a06b-32787964333c",
    "image": "perev_right",
    "point": {
      "latitude": 52.1372244443,
      "longitude": 26.7735287343
    }
  },
  "f4ed7d0f-6222-4a4e-9b4c-61b27351d594": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "f4ed7d0f-6222-4a4e-9b4c-61b27351d594",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4ed7d0f-6222-4a4e-9b4c-61b27351d594",
    "image": "stop",
    "point": {
      "latitude": 52.1420684741,
      "longitude": 23.9570696272
    }
  },
  "f50adea3-1802-4b92-a173-9d6a42377152": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 162",
      "id": "f50adea3-1802-4b92-a173-9d6a42377152",
      "kilometrage": 148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f50adea3-1802-4b92-a173-9d6a42377152",
    "image": "perev_left",
    "point": {
      "latitude": 52.1864644186,
      "longitude": 24.1842656268
    }
  },
  "f55a2660-6cf8-424f-88b7-dfdf9707cfe1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 174",
      "id": "f55a2660-6cf8-424f-88b7-dfdf9707cfe1",
      "kilometrage": 451,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f55a2660-6cf8-424f-88b7-dfdf9707cfe1",
    "image": "perev_right",
    "point": {
      "latitude": 52.1564079861,
      "longitude": 27.0290292025
    }
  },
  "f5d272b5-0a02-4016-8e50-0bdf1bad4a3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 254а",
      "id": "f5d272b5-0a02-4016-8e50-0bdf1bad4a3e",
      "kilometrage": 417,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5d272b5-0a02-4016-8e50-0bdf1bad4a3e",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1401654328,
      "longitude": 27.3151421634
    }
  },
  "f6536445-3539-47ae-9f68-4e897e48d2ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 217",
      "id": "f6536445-3539-47ae-9f68-4e897e48d2ab",
      "kilometrage": 177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6536445-3539-47ae-9f68-4e897e48d2ab",
    "image": "perev_left",
    "point": {
      "latitude": 52.0930459394,
      "longitude": 23.883807585
    }
  },
  "f6591d88-2a5d-4f1f-856a-d4fd26466f24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 1б",
      "id": "f6591d88-2a5d-4f1f-856a-d4fd26466f24",
      "kilometrage": 1,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6591d88-2a5d-4f1f-856a-d4fd26466f24",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1104632333,
      "longitude": 26.1072338433
    }
  },
  "f6fe97ec-ce4a-48cf-ae29-40a578aeb612": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f6fe97ec-ce4a-48cf-ae29-40a578aeb612",
      "kilometrage": 43,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6fe97ec-ce4a-48cf-ae29-40a578aeb612",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0261362346,
      "longitude": 25.5807944135
    }
  },
  "f75cc432-236e-4f84-b763-aa7ece08ab06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 123",
      "id": "f75cc432-236e-4f84-b763-aa7ece08ab06",
      "kilometrage": 105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f75cc432-236e-4f84-b763-aa7ece08ab06",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.1421658168,
      "longitude": 24.7722299888
    }
  },
  "f77d993b-73c5-4c28-9453-dc53eed05203": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 85",
      "id": "f77d993b-73c5-4c28-9453-dc53eed05203",
      "kilometrage": 125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f77d993b-73c5-4c28-9453-dc53eed05203",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1968650571,
      "longitude": 24.4865955584
    }
  },
  "f7984528-d933-45a5-be42-07a2e8458b55": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 142",
      "id": "f7984528-d933-45a5-be42-07a2e8458b55",
      "kilometrage": 137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7984528-d933-45a5-be42-07a2e8458b55",
    "image": "perev_right",
    "point": {
      "latitude": 52.2159891734,
      "longitude": 24.3227614104
    }
  },
  "f7b382a1-fcce-471e-9646-9b3a499d6115": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 209",
      "id": "f7b382a1-fcce-471e-9646-9b3a499d6115",
      "kilometrage": 438,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7b382a1-fcce-471e-9646-9b3a499d6115",
    "image": "perev_left",
    "point": {
      "latitude": 52.1508902056,
      "longitude": 27.1511716711
    }
  },
  "f7d2e3f2-a55c-48f2-9d9d-2ecd4830619d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f7d2e3f2-a55c-48f2-9d9d-2ecd4830619d",
      "kilometrage": 4,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7d2e3f2-a55c-48f2-9d9d-2ecd4830619d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.103256939,
      "longitude": 26.0779622705
    }
  },
  "f7e5d2b3-ad40-4c1c-ab49-9d72994c67c7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "f7e5d2b3-ad40-4c1c-ab49-9d72994c67c7",
      "kilometrage": 131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7e5d2b3-ad40-4c1c-ab49-9d72994c67c7",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2110302894,
      "longitude": 24.403828117
    }
  },
  "f8419d6a-83d6-4a4b-905d-0afed7c9072c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 168",
      "id": "f8419d6a-83d6-4a4b-905d-0afed7c9072c",
      "kilometrage": 151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8419d6a-83d6-4a4b-905d-0afed7c9072c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.195590008,
      "longitude": 24.1424190864
    }
  },
  "f8cb09cf-6f56-4381-a951-925912092a74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 15",
      "id": "f8cb09cf-6f56-4381-a951-925912092a74",
      "kilometrage": 56,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8cb09cf-6f56-4381-a951-925912092a74",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0183778738,
      "longitude": 25.4141022405
    }
  },
  "f9673bf2-451d-4773-a70d-6dabc8713542": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 156",
      "id": "f9673bf2-451d-4773-a70d-6dabc8713542",
      "kilometrage": 145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9673bf2-451d-4773-a70d-6dabc8713542",
    "image": "buyo_left",
    "point": {
      "latitude": 52.199493806,
      "longitude": 24.222249528
    }
  },
  "f973fab7-91b1-44ce-8611-29f928794f80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 25",
      "id": "f973fab7-91b1-44ce-8611-29f928794f80",
      "kilometrage": 16,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f973fab7-91b1-44ce-8611-29f928794f80",
    "image": "perev_right",
    "point": {
      "latitude": 52.0797794342,
      "longitude": 25.929400429
    }
  },
  "f9cb6631-55da-4ae7-8f04-27f622c855a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 10",
      "id": "f9cb6631-55da-4ae7-8f04-27f622c855a9",
      "kilometrage": 184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9cb6631-55da-4ae7-8f04-27f622c855a9",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0917039613,
      "longitude": 23.7857048028
    }
  },
  "f9e37705-527c-4fb8-898c-5ac51a5a7100": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "f9e37705-527c-4fb8-898c-5ac51a5a7100",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9e37705-527c-4fb8-898c-5ac51a5a7100",
    "image": "axis_romb",
    "point": {
      "latitude": 52.2155267792,
      "longitude": 24.3594395251
    }
  },
  "fa81f245-3c90-4601-8dee-d9c99e8f2626": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "fa81f245-3c90-4601-8dee-d9c99e8f2626",
      "kilometrage": 132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa81f245-3c90-4601-8dee-d9c99e8f2626",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2136036857,
      "longitude": 24.3925297963
    }
  },
  "fa8f68fc-41a2-480b-b234-91ce92a1c501": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 255",
      "id": "fa8f68fc-41a2-480b-b234-91ce92a1c501",
      "kilometrage": 417,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa8f68fc-41a2-480b-b234-91ce92a1c501",
    "image": "perev_right",
    "point": {
      "latitude": 52.1424958913,
      "longitude": 27.3195188351
    }
  },
  "fae23a1c-3375-4a4b-9b18-ec531ba48d27": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 9",
      "id": "fae23a1c-3375-4a4b-9b18-ec531ba48d27",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fae23a1c-3375-4a4b-9b18-ec531ba48d27",
    "image": "perev_right",
    "point": {
      "latitude": 52.1317563084,
      "longitude": 27.2788585124
    }
  },
  "fae50744-06ba-445f-963b-b12ee392d08e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "fae50744-06ba-445f-963b-b12ee392d08e",
      "kilometrage": 134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fae50744-06ba-445f-963b-b12ee392d08e",
    "image": "bridge_low",
    "point": {
      "latitude": 52.2157216015,
      "longitude": 24.3587929366
    }
  },
  "faefa2dd-c7e9-427f-97cf-c6b13bca35a6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 172",
      "id": "faefa2dd-c7e9-427f-97cf-c6b13bca35a6",
      "kilometrage": 452,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "faefa2dd-c7e9-427f-97cf-c6b13bca35a6",
    "image": "perev_left",
    "point": {
      "latitude": 52.1542915987,
      "longitude": 27.016530772
    }
  },
  "fb179dd0-eabd-4886-89d4-b8c92d5a477a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 220",
      "id": "fb179dd0-eabd-4886-89d4-b8c92d5a477a",
      "kilometrage": 178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb179dd0-eabd-4886-89d4-b8c92d5a477a",
    "image": "perev_right",
    "point": {
      "latitude": 52.0941172983,
      "longitude": 23.8703519714
    }
  },
  "fb751cfd-a65a-4340-91d3-3dda4e277b16": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 40",
      "id": "fb751cfd-a65a-4340-91d3-3dda4e277b16",
      "kilometrage": 24,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb751cfd-a65a-4340-91d3-3dda4e277b16",
    "image": "perev_left",
    "point": {
      "latitude": 52.0744475842,
      "longitude": 25.8209304012
    }
  },
  "fbaf2c3a-b887-42a7-93b2-4b32b500379d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 86",
      "id": "fbaf2c3a-b887-42a7-93b2-4b32b500379d",
      "kilometrage": 491,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fbaf2c3a-b887-42a7-93b2-4b32b500379d",
    "image": "perev_right",
    "point": {
      "latitude": 52.114897373,
      "longitude": 26.6014672471
    }
  },
  "fc4db159-ce5c-45f2-9415-8cd7a9086037": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 40",
      "id": "fc4db159-ce5c-45f2-9415-8cd7a9086037",
      "kilometrage": 423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc4db159-ce5c-45f2-9415-8cd7a9086037",
    "image": "perev_right",
    "point": {
      "latitude": 52.0814532219,
      "longitude": 27.2376347237
    }
  },
  "fc6d26d7-fcca-495f-9fe6-0412769e8af1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 1е",
      "id": "fc6d26d7-fcca-495f-9fe6-0412769e8af1",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc6d26d7-fcca-495f-9fe6-0412769e8af1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1072689142,
      "longitude": 26.0999193184
    }
  },
  "fc8045ba-2595-4211-89ef-b3147ecae82a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 2а",
      "id": "fc8045ba-2595-4211-89ef-b3147ecae82a",
      "kilometrage": 3,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc8045ba-2595-4211-89ef-b3147ecae82a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.1055676176,
      "longitude": 26.0894625111
    }
  },
  "fcb26027-358e-4f8c-b82d-72241c47e07f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 70",
      "id": "fcb26027-358e-4f8c-b82d-72241c47e07f",
      "kilometrage": 41,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fcb26027-358e-4f8c-b82d-72241c47e07f",
    "image": "perev_left",
    "point": {
      "latitude": 52.031916466,
      "longitude": 25.6137339528
    }
  },
  "fce89814-b890-4975-a8ce-472ba03efa50": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй  ",
      "id": "fce89814-b890-4975-a8ce-472ba03efa50",
      "kilometrage": 422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fce89814-b890-4975-a8ce-472ba03efa50",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.1427413457,
      "longitude": 27.280809981
    }
  },
  "fcf2b77d-6666-4c62-be63-4486bc43933c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 51",
      "id": "fcf2b77d-6666-4c62-be63-4486bc43933c",
      "kilometrage": 505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fcf2b77d-6666-4c62-be63-4486bc43933c",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1214063289,
      "longitude": 26.4377154092
    }
  },
  "fd0c7894-38a5-4c86-ad18-bcb7cf10e8a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 55",
      "id": "fd0c7894-38a5-4c86-ad18-bcb7cf10e8a5",
      "kilometrage": 95,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd0c7894-38a5-4c86-ad18-bcb7cf10e8a5",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1040815082,
      "longitude": 24.8809357607
    }
  },
  "fd0e80d5-6649-459a-a09f-05954210b2e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 114",
      "id": "fd0e80d5-6649-459a-a09f-05954210b2e5",
      "kilometrage": 100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd0e80d5-6649-459a-a09f-05954210b2e5",
    "image": "perev_right",
    "point": {
      "latitude": 52.121484883,
      "longitude": 24.8235401494
    }
  },
  "fd8254bf-002d-474b-9045-114668be607e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "fd8254bf-002d-474b-9045-114668be607e",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd8254bf-002d-474b-9045-114668be607e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2146141645,
      "longitude": 24.3727584168
    }
  },
  "fe274caf-ea3e-4ae7-8349-87e1a31c6b1e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 122",
      "id": "fe274caf-ea3e-4ae7-8349-87e1a31c6b1e",
      "kilometrage": 104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe274caf-ea3e-4ae7-8349-87e1a31c6b1e",
    "image": "perev_right",
    "point": {
      "latitude": 52.1396959695,
      "longitude": 24.7753655838
    }
  },
  "fe4669cf-71cc-4cb4-a63b-8310684f56d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 161",
      "id": "fe4669cf-71cc-4cb4-a63b-8310684f56d2",
      "kilometrage": 456,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe4669cf-71cc-4cb4-a63b-8310684f56d2",
    "image": "perev_left",
    "point": {
      "latitude": 52.1543695381,
      "longitude": 26.9791658943
    }
  },
  "fe96a43c-f1db-430b-8729-d63acdad4880": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 212",
      "id": "fe96a43c-f1db-430b-8729-d63acdad4880",
      "kilometrage": 175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe96a43c-f1db-430b-8729-d63acdad4880",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0918044322,
      "longitude": 23.9121760418
    }
  },
  "ff0f29c2-ca9b-4c79-bdae-812b95fb7d9e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "ff0f29c2-ca9b-4c79-bdae-812b95fb7d9e",
      "kilometrage": 133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ff0f29c2-ca9b-4c79-bdae-812b95fb7d9e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2139616593,
      "longitude": 24.3847525941
    }
  },
  "ff25b806-b63e-4483-9bd4-b4ea5f280608": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ff25b806-b63e-4483-9bd4-b4ea5f280608",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ff25b806-b63e-4483-9bd4-b4ea5f280608",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0957847946,
      "longitude": 23.8527780259
    }
  },
  "ffa23e32-b381-4d31-b4d7-6947a0d40d1b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Стоповый  ",
      "id": "ffa23e32-b381-4d31-b4d7-6947a0d40d1b",
      "kilometrage": 27,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffa23e32-b381-4d31-b4d7-6947a0d40d1b",
    "image": "stop",
    "point": {
      "latitude": 52.078278055,
      "longitude": 25.7720090338
    }
  },
  "ffa25d69-ede1-456f-9a45-e979fd48411f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ffa25d69-ede1-456f-9a45-e979fd48411f",
      "kilometrage": 2,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffa25d69-ede1-456f-9a45-e979fd48411f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.1090043019,
      "longitude": 26.1049998849
    }
  },
  "ffb3c031-1d46-4798-944f-cc832a93cbd5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 251",
      "id": "ffb3c031-1d46-4798-944f-cc832a93cbd5",
      "kilometrage": 420,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffb3c031-1d46-4798-944f-cc832a93cbd5",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1572228252,
      "longitude": 27.2988299554
    }
  },
  "ffc2ba48-c073-4f29-b790-056b287d90d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "ffc2ba48-c073-4f29-b790-056b287d90d8",
      "kilometrage": 188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffc2ba48-c073-4f29-b790-056b287d90d8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.0868000159,
      "longitude": 23.7356259608
    }
  },
  "ffce5842-fab6-4a28-8aac-b84d2592050f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ffce5842-fab6-4a28-8aac-b84d2592050f",
      "kilometrage": 179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffce5842-fab6-4a28-8aac-b84d2592050f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0956506002,
      "longitude": 23.8590295927
    }
  },
  "ffd843c7-a132-4d08-a7e4-582caf56e741": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 198",
      "id": "ffd843c7-a132-4d08-a7e4-582caf56e741",
      "kilometrage": 168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffd843c7-a132-4d08-a7e4-582caf56e741",
    "image": "perev_right",
    "point": {
      "latitude": 52.1443162592,
      "longitude": 23.9602719313
    }
  }
  }

let transformedArray = [];

// for (const key in data) {
//     transformedArray.push({
//       id: data[key].data.id,
//       image: data[key].image,
//       latitude: data[key].point.latitude,
//       longitude: data[key].point.longitude,
//       currentWaterLevel: data[key].data.currentWaterLevel,
//       waterLevel: data[key].data.waterLevel,
//       description: data[key].data.description,
//     });
//   }

// let arrayForChange = [
  
// ]

// arrayForChange.forEach((item) => { 
//   let changeItem = transformedArray.find((obj) => obj.id === item.id);
//   item.latitude = changeItem.latitude;
//   item.longitude = changeItem.longitude;
//  })
for (const key in data) {
  transformedArray.push({
    id: data[key].data.id,
    image: data[key].image,
    latitude: data[key].point.latitude,
    longitude: data[key].point.longitude,
    color: data[key].data.color,
    place: data[key].data.place,
    size: data[key].data.size,
    visibility: data[key].data.visibility,
    kilometrage: data[key].data.kilometrage ? data[key].data.kilometrage : null,
    description: data[key].data.description
  });
}


fs.writeFile(
  "asdf.js",
  `module.exports = ${JSON.stringify(transformedArray, null, 2)}`,
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Array has been written");
    }
  }
);
