const fs = require("fs");

let data = {
  "00177803-052f-4906-9344-45fada687e33": {
    "data": {
      "color": false,
      "comment": "отсутствует",
      "description": "Соблюдать надводный габарит  ",
      "id": "00177803-052f-4906-9344-45fada687e33",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00177803-052f-4906-9344-45fada687e33",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8851423055,
      "longitude": 30.3096777806
    }
  },
  "00494a4c-4bd9-47eb-b197-9e0a04c17374": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 50",
      "id": "00494a4c-4bd9-47eb-b197-9e0a04c17374",
      "kilometrage": 1342,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00494a4c-4bd9-47eb-b197-9e0a04c17374",
    "image": "perev_right",
    "point": {
      "latitude": 53.0848401498,
      "longitude": 30.2178849837
    }
  },
  "0078aee7-9e35-486a-84aa-067377c2ba1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый 11м",
      "id": "0078aee7-9e35-486a-84aa-067377c2ba1d",
      "kilometrage": 1050,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0078aee7-9e35-486a-84aa-067377c2ba1d",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 51.7631765844,
      "longitude": 30.6307494571
    }
  },
  "00c1d100-cea4-489e-9bbc-e1e6c415791a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 86",
      "id": "00c1d100-cea4-489e-9bbc-e1e6c415791a",
      "kilometrage": 1250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00c1d100-cea4-489e-9bbc-e1e6c415791a",
    "image": "perev_right",
    "point": {
      "latitude": 52.7274534338,
      "longitude": 30.1310130629
    }
  },
  "00c60e5b-9945-4731-84a9-16f53c4e7a6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 14",
      "id": "00c60e5b-9945-4731-84a9-16f53c4e7a6c",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00c60e5b-9945-4731-84a9-16f53c4e7a6c",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8886923378,
      "longitude": 30.3327640463
    }
  },
  "00ffaa2a-732e-4636-845f-0d7f9944c079": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 120",
      "id": "00ffaa2a-732e-4636-845f-0d7f9944c079",
      "kilometrage": 1269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "00ffaa2a-732e-4636-845f-0d7f9944c079",
    "image": "perev_right",
    "point": {
      "latitude": 52.8368103663,
      "longitude": 30.0739073885
    }
  },
  "0191e48a-f601-4527-b71c-96c3bea0bd35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 3",
      "id": "0191e48a-f601-4527-b71c-96c3bea0bd35",
      "kilometrage": 1260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0191e48a-f601-4527-b71c-96c3bea0bd35",
    "image": "buyo_right",
    "point": {
      "latitude": 52.7838603012,
      "longitude": 30.1118204508
    }
  },
  "01b67ccd-baa7-4f30-8370-debed1a1536e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 174",
      "id": "01b67ccd-baa7-4f30-8370-debed1a1536e",
      "kilometrage": 1195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01b67ccd-baa7-4f30-8370-debed1a1536e",
    "image": "perev_left",
    "point": {
      "latitude": 52.4802074913,
      "longitude": 30.3081985578
    }
  },
  "01bf8a23-600e-46fb-8901-4f5497ae2fd1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1230",
      "id": "01bf8a23-600e-46fb-8901-4f5497ae2fd1",
      "kilometrage": 1230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "01bf8a23-600e-46fb-8901-4f5497ae2fd1",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6675912518,
      "longitude": 30.2192216325
    }
  },
  "02246dfc-c068-4f55-9b27-9d94d0a64505": {
    "data": {
      "color": false,
      "comment": "его нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "02246dfc-c068-4f55-9b27-9d94d0a64505",
      "kilometrage": 1515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "02246dfc-c068-4f55-9b27-9d94d0a64505",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.924443879,
      "longitude": 30.438438563
    }
  },
  "025dc554-6866-4480-a62e-b77f0ae184b0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 181",
      "id": "025dc554-6866-4480-a62e-b77f0ae184b0",
      "kilometrage": 1200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "025dc554-6866-4480-a62e-b77f0ae184b0",
    "image": "perev_left",
    "point": {
      "latitude": 52.5028936542,
      "longitude": 30.2779549048
    }
  },
  "028ddca5-def9-4385-8b8e-ee2b6b81ae14": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1510",
      "id": "028ddca5-def9-4385-8b8e-ee2b6b81ae14",
      "kilometrage": 1509,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "028ddca5-def9-4385-8b8e-ee2b6b81ae14",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8901279215,
      "longitude": 30.4152814999
    }
  },
  "029fc790-1e90-47a5-b899-2605429054c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "029fc790-1e90-47a5-b899-2605429054c5",
      "kilometrage": 1326,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "029fc790-1e90-47a5-b899-2605429054c5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1142442845,
      "longitude": 30.1072193813
    }
  },
  "03075d0b-2dfa-4977-93fd-4d1d11524f59": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 26",
      "id": "03075d0b-2dfa-4977-93fd-4d1d11524f59",
      "kilometrage": 1455,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03075d0b-2dfa-4977-93fd-4d1d11524f59",
    "image": "perev_right",
    "point": {
      "latitude": 53.5982688771,
      "longitude": 30.2716501291
    }
  },
  "030b733f-a817-4b0d-a4dd-8e87ad6c8725": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 166",
      "id": "030b733f-a817-4b0d-a4dd-8e87ad6c8725",
      "kilometrage": 1303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "030b733f-a817-4b0d-a4dd-8e87ad6c8725",
    "image": "perev_left",
    "point": {
      "latitude": 53.0026336983,
      "longitude": 30.0501646395
    }
  },
  "032da43f-9369-4054-9151-4d32e42c7ef4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 17",
      "id": "032da43f-9369-4054-9151-4d32e42c7ef4",
      "kilometrage": 1450,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "032da43f-9369-4054-9151-4d32e42c7ef4",
    "image": "perev_left",
    "point": {
      "latitude": 53.5736071721,
      "longitude": 30.2809218996
    }
  },
  "03e51553-c482-4c23-b150-1ba6d5939c52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 29",
      "id": "03e51553-c482-4c23-b150-1ba6d5939c52",
      "kilometrage": 1067,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03e51553-c482-4c23-b150-1ba6d5939c52",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8541567091,
      "longitude": 30.6991088994
    }
  },
  "03f41726-9c9b-469c-a534-9f402b9a63d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "03f41726-9c9b-469c-a534-9f402b9a63d1",
      "kilometrage": 1158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "03f41726-9c9b-469c-a534-9f402b9a63d1",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3156705701,
      "longitude": 30.535771755
    }
  },
  "051aeeea-521b-49dd-a8ff-186fd73f0871": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 13",
      "id": "051aeeea-521b-49dd-a8ff-186fd73f0871",
      "kilometrage": 1322,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "051aeeea-521b-49dd-a8ff-186fd73f0871",
    "image": "perev_left",
    "point": {
      "latitude": 53.1099110957,
      "longitude": 30.0793617526
    }
  },
  "052d1661-d0a8-416c-a415-3535a16c25e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 140",
      "id": "052d1661-d0a8-416c-a415-3535a16c25e5",
      "kilometrage": 1396,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "052d1661-d0a8-416c-a415-3535a16c25e5",
    "image": "perev_right",
    "point": {
      "latitude": 53.3170004402,
      "longitude": 30.3553706175
    }
  },
  "053dde88-9d02-41b8-82f3-2462eb5c85fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 92",
      "id": "053dde88-9d02-41b8-82f3-2462eb5c85fb",
      "kilometrage": 1254,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "053dde88-9d02-41b8-82f3-2462eb5c85fb",
    "image": "perev_left",
    "point": {
      "latitude": 52.7460394463,
      "longitude": 30.1104550548
    }
  },
  "0567b6a1-18e6-4fbb-91cf-fe77db09e53b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "0567b6a1-18e6-4fbb-91cf-fe77db09e53b",
      "kilometrage": 1487,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0567b6a1-18e6-4fbb-91cf-fe77db09e53b",
    "image": "axis_romb",
    "point": {
      "latitude": 53.7760785615,
      "longitude": 30.27584511
    }
  },
  "05bd1b8c-2cff-47a0-9acf-0b40c6bafcf8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 31",
      "id": "05bd1b8c-2cff-47a0-9acf-0b40c6bafcf8",
      "kilometrage": 1458,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "05bd1b8c-2cff-47a0-9acf-0b40c6bafcf8",
    "image": "perev_right",
    "point": {
      "latitude": 53.6081477875,
      "longitude": 30.2830299369
    }
  },
  "05f20730-a4e7-4f57-a2fd-877ebec2b865": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 86",
      "id": "05f20730-a4e7-4f57-a2fd-877ebec2b865",
      "kilometrage": 1134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "05f20730-a4e7-4f57-a2fd-877ebec2b865",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2025472656,
      "longitude": 30.5752988188
    }
  },
  "0615f7f9-e166-4627-ab28-e5da5e0b83c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 34",
      "id": "0615f7f9-e166-4627-ab28-e5da5e0b83c4",
      "kilometrage": 1073,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0615f7f9-e166-4627-ab28-e5da5e0b83c4",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8957224814,
      "longitude": 30.7421732201
    }
  },
  "06220b6f-766b-4280-9800-b55da0efac11": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1450",
      "id": "06220b6f-766b-4280-9800-b55da0efac11",
      "kilometrage": 1450,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06220b6f-766b-4280-9800-b55da0efac11",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5712309386,
      "longitude": 30.2753974079
    }
  },
  "06b54773-b56d-4159-a591-d2ea45e8ce5f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 121",
      "id": "06b54773-b56d-4159-a591-d2ea45e8ce5f",
      "kilometrage": 1385,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06b54773-b56d-4159-a591-d2ea45e8ce5f",
    "image": "perev_left",
    "point": {
      "latitude": 53.2508826885,
      "longitude": 30.3734384507
    }
  },
  "06bbbf03-a798-48de-8d5c-86bcaf20f6ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 133",
      "id": "06bbbf03-a798-48de-8d5c-86bcaf20f6ad",
      "kilometrage": 1160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06bbbf03-a798-48de-8d5c-86bcaf20f6ad",
    "image": "perev_left",
    "point": {
      "latitude": 52.331565312,
      "longitude": 30.5169482267
    }
  },
  "06ca1362-216e-4978-b411-c5490e201fef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1275",
      "id": "06ca1362-216e-4978-b411-c5490e201fef",
      "kilometrage": 1275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06ca1362-216e-4978-b411-c5490e201fef",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8606769958,
      "longitude": 30.0935576294
    }
  },
  "06dd0ecf-9faa-4679-aeb6-4e8d761ead5e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 48",
      "id": "06dd0ecf-9faa-4679-aeb6-4e8d761ead5e",
      "kilometrage": 1230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "06dd0ecf-9faa-4679-aeb6-4e8d761ead5e",
    "image": "perev_left",
    "point": {
      "latitude": 52.6667630276,
      "longitude": 30.2138666028
    }
  },
  "0709cc96-0a52-4bed-989b-5be01608d8a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый 9м",
      "id": "0709cc96-0a52-4bed-989b-5be01608d8a1",
      "kilometrage": 1050,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0709cc96-0a52-4bed-989b-5be01608d8a1",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7638064964,
      "longitude": 30.6315956404
    }
  },
  "0731d2ad-c20c-4f9c-a641-0d3b5955c73f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 31",
      "id": "0731d2ad-c20c-4f9c-a641-0d3b5955c73f",
      "kilometrage": 1222,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0731d2ad-c20c-4f9c-a641-0d3b5955c73f",
    "image": "perev_right",
    "point": {
      "latitude": 52.6312299646,
      "longitude": 30.2310618239
    }
  },
  "078609fe-e0ff-4aed-a055-c1ce2cec37bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 206",
      "id": "078609fe-e0ff-4aed-a055-c1ce2cec37bc",
      "kilometrage": 1435,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "078609fe-e0ff-4aed-a055-c1ce2cec37bc",
    "image": "perev_left",
    "point": {
      "latitude": 53.5035336771,
      "longitude": 30.287805129
    }
  },
  "07bc84f7-22ce-40aa-be82-cfc16bebb447": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 160",
      "id": "07bc84f7-22ce-40aa-be82-cfc16bebb447",
      "kilometrage": 1184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "07bc84f7-22ce-40aa-be82-cfc16bebb447",
    "image": "perev_left",
    "point": {
      "latitude": 52.4126258963,
      "longitude": 30.3824560727
    }
  },
  "07e79db7-879b-49af-886d-502439b64d61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 74",
      "id": "07e79db7-879b-49af-886d-502439b64d61",
      "kilometrage": 1245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "07e79db7-879b-49af-886d-502439b64d61",
    "image": "perev_right",
    "point": {
      "latitude": 52.7068786673,
      "longitude": 30.1693721685
    }
  },
  "0813be93-54cd-423e-968c-97902da0bc15": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 129",
      "id": "0813be93-54cd-423e-968c-97902da0bc15",
      "kilometrage": 1389,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0813be93-54cd-423e-968c-97902da0bc15",
    "image": "perev_left",
    "point": {
      "latitude": 53.2778259478,
      "longitude": 30.3873342528
    }
  },
  "081bd26b-f296-4196-8c3b-4ae1a585db3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "081bd26b-f296-4196-8c3b-4ae1a585db3e",
      "kilometrage": 1287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "081bd26b-f296-4196-8c3b-4ae1a585db3e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9266063412,
      "longitude": 30.0441238067
    }
  },
  "089bdedb-292f-4fbe-8954-8559f443d02f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 119",
      "id": "089bdedb-292f-4fbe-8954-8559f443d02f",
      "kilometrage": 1150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "089bdedb-292f-4fbe-8954-8559f443d02f",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.2721686183,
      "longitude": 30.5358824403
    }
  },
  "0954ccdc-1a00-49ff-9cc7-bc60cff85874": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0954ccdc-1a00-49ff-9cc7-bc60cff85874",
      "kilometrage": 1282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0954ccdc-1a00-49ff-9cc7-bc60cff85874",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8902933611,
      "longitude": 30.0599903897
    }
  },
  "09684c00-2192-4794-8d06-feb9cba15865": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 106",
      "id": "09684c00-2192-4794-8d06-feb9cba15865",
      "kilometrage": 1379,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "09684c00-2192-4794-8d06-feb9cba15865",
    "image": "perev_left",
    "point": {
      "latitude": 53.2468430717,
      "longitude": 30.3263184854
    }
  },
  "0987ae3e-6127-41da-87dc-9ca2707769c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 39",
      "id": "0987ae3e-6127-41da-87dc-9ca2707769c3",
      "kilometrage": 1088,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0987ae3e-6127-41da-87dc-9ca2707769c3",
    "image": "perev_left",
    "point": {
      "latitude": 51.9829915075,
      "longitude": 30.8078041554
    }
  },
  "09915a0e-ffad-4f94-9d25-193f59edf63c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 6",
      "id": "09915a0e-ffad-4f94-9d25-193f59edf63c",
      "kilometrage": 1443,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "09915a0e-ffad-4f94-9d25-193f59edf63c",
    "image": "perev_right",
    "point": {
      "latitude": 53.5385504006,
      "longitude": 30.2603160707
    }
  },
  "0a1d2781-3dd2-4aae-b3e2-2f4513df3283": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 109",
      "id": "0a1d2781-3dd2-4aae-b3e2-2f4513df3283",
      "kilometrage": 1261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a1d2781-3dd2-4aae-b3e2-2f4513df3283",
    "image": "perev_right",
    "point": {
      "latitude": 52.7940963494,
      "longitude": 30.1002487842
    }
  },
  "0a36d34d-7f72-48d3-861e-c314408f559c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 129",
      "id": "0a36d34d-7f72-48d3-861e-c314408f559c",
      "kilometrage": 1156,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0a36d34d-7f72-48d3-861e-c314408f559c",
    "image": "perev_left",
    "point": {
      "latitude": 52.3095830431,
      "longitude": 30.5490799307
    }
  },
  "0ad5f514-65cc-4c10-97a4-84fdba1a8ee4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 95",
      "id": "0ad5f514-65cc-4c10-97a4-84fdba1a8ee4",
      "kilometrage": 1255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ad5f514-65cc-4c10-97a4-84fdba1a8ee4",
    "image": "perev_left",
    "point": {
      "latitude": 52.7505443372,
      "longitude": 30.1130979881
    }
  },
  "0b001216-b3c9-45a4-8ace-a22b27780f3c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 26",
      "id": "0b001216-b3c9-45a4-8ace-a22b27780f3c",
      "kilometrage": 1219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b001216-b3c9-45a4-8ace-a22b27780f3c",
    "image": "perev_right",
    "point": {
      "latitude": 52.6073345955,
      "longitude": 30.2485198545
    }
  },
  "0b37e7b3-edc0-4c61-8324-3803bb78a152": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 52",
      "id": "0b37e7b3-edc0-4c61-8324-3803bb78a152",
      "kilometrage": 1233,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b37e7b3-edc0-4c61-8324-3803bb78a152",
    "image": "perev_left",
    "point": {
      "latitude": 52.6678645194,
      "longitude": 30.2049843633
    }
  },
  "0b9fe63f-527e-486c-90a8-bcce1a52846f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 61м",
      "id": "0b9fe63f-527e-486c-90a8-bcce1a52846f",
      "kilometrage": 1088,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0b9fe63f-527e-486c-90a8-bcce1a52846f",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9817981573,
      "longitude": 30.805024373
    }
  },
  "0bb6e008-f22f-4d2e-965f-775105cb4940": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 43",
      "id": "0bb6e008-f22f-4d2e-965f-775105cb4940",
      "kilometrage": 1338,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bb6e008-f22f-4d2e-965f-775105cb4940",
    "image": "perev_right",
    "point": {
      "latitude": 53.1000373569,
      "longitude": 30.1972372526
    }
  },
  "0bba1693-add0-49fe-9f92-a8f493b3b8b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 43",
      "id": "0bba1693-add0-49fe-9f92-a8f493b3b8b8",
      "kilometrage": 1227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bba1693-add0-49fe-9f92-a8f493b3b8b8",
    "image": "perev_left",
    "point": {
      "latitude": 52.6575625517,
      "longitude": 30.2308538587
    }
  },
  "0bbe7a48-84e8-4c7f-b07f-e0d179a87b82": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 87",
      "id": "0bbe7a48-84e8-4c7f-b07f-e0d179a87b82",
      "kilometrage": 1134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bbe7a48-84e8-4c7f-b07f-e0d179a87b82",
    "image": "buyo_right",
    "point": {
      "latitude": 52.2092029765,
      "longitude": 30.5747386039
    }
  },
  "0bd70ede-cc40-42f9-875e-1dfbed3946cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0bd70ede-cc40-42f9-875e-1dfbed3946cd",
      "kilometrage": 1186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bd70ede-cc40-42f9-875e-1dfbed3946cd",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4342118112,
      "longitude": 30.3786008652
    }
  },
  "0be827a2-a692-4134-a11a-3d0ec8ad8828": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "0be827a2-a692-4134-a11a-3d0ec8ad8828",
      "kilometrage": 1278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0be827a2-a692-4134-a11a-3d0ec8ad8828",
    "image": "axis_romb",
    "point": {
      "latitude": 52.8640554767,
      "longitude": 30.071855935
    }
  },
  "0bfb367a-d9fa-4eee-bdbf-1232565e0c13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0bfb367a-d9fa-4eee-bdbf-1232565e0c13",
      "kilometrage": 1480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0bfb367a-d9fa-4eee-bdbf-1232565e0c13",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.7305026565,
      "longitude": 30.2791388663
    }
  },
  "0c925482-1b58-4525-bf7d-0674c1a41917": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 50",
      "id": "0c925482-1b58-4525-bf7d-0674c1a41917",
      "kilometrage": 1470,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0c925482-1b58-4525-bf7d-0674c1a41917",
    "image": "perev_right",
    "point": {
      "latitude": 53.669581682,
      "longitude": 30.2937187491
    }
  },
  "0cd33b06-a44b-43dd-97ae-efba46ff3819": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 134",
      "id": "0cd33b06-a44b-43dd-97ae-efba46ff3819",
      "kilometrage": 1392,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0cd33b06-a44b-43dd-97ae-efba46ff3819",
    "image": "perev_right",
    "point": {
      "latitude": 53.2993708063,
      "longitude": 30.3669729717
    }
  },
  "0d025f01-dd9b-48cf-87a9-12bb305c3827": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "0d025f01-dd9b-48cf-87a9-12bb305c3827",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d025f01-dd9b-48cf-87a9-12bb305c3827",
    "image": "bridge_low",
    "point": {
      "latitude": 53.8906016953,
      "longitude": 30.3756513836
    }
  },
  "0d228809-46b0-40fd-a418-d5c8c8569016": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 183",
      "id": "0d228809-46b0-40fd-a418-d5c8c8569016",
      "kilometrage": 1421,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d228809-46b0-40fd-a418-d5c8c8569016",
    "image": "perev_right",
    "point": {
      "latitude": 53.4640619576,
      "longitude": 30.3304838203
    }
  },
  "0d527aff-8076-41d2-b0cc-2ae4a2bbdf0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1355",
      "id": "0d527aff-8076-41d2-b0cc-2ae4a2bbdf0a",
      "kilometrage": 1355,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d527aff-8076-41d2-b0cc-2ae4a2bbdf0a",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1247302813,
      "longitude": 30.2813893301
    }
  },
  "0d59c5b3-6ffa-447c-b73c-21bfc957125c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 98",
      "id": "0d59c5b3-6ffa-447c-b73c-21bfc957125c",
      "kilometrage": 1506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d59c5b3-6ffa-447c-b73c-21bfc957125c",
    "image": "perev_left",
    "point": {
      "latitude": 53.8854382533,
      "longitude": 30.364406845
    }
  },
  "0d6b0182-273a-4a57-98c1-b7b6dc12cc23": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "0d6b0182-273a-4a57-98c1-b7b6dc12cc23",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d6b0182-273a-4a57-98c1-b7b6dc12cc23",
    "image": "axis_romb",
    "point": {
      "latitude": 53.891111517,
      "longitude": 30.3758348582
    }
  },
  "0d75c16b-4172-4fe0-929e-643613a5149d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 108",
      "id": "0d75c16b-4172-4fe0-929e-643613a5149d",
      "kilometrage": 1170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0d75c16b-4172-4fe0-929e-643613a5149d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3602095263,
      "longitude": 30.4465489597
    }
  },
  "0dbb9747-dae0-440b-96df-d8458244426f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 122",
      "id": "0dbb9747-dae0-440b-96df-d8458244426f",
      "kilometrage": 1175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0dbb9747-dae0-440b-96df-d8458244426f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3727408059,
      "longitude": 30.3919483611
    }
  },
  "0dc1ae43-9dd7-4935-bbca-7dc87491b853": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "0dc1ae43-9dd7-4935-bbca-7dc87491b853",
      "kilometrage": 1326,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0dc1ae43-9dd7-4935-bbca-7dc87491b853",
    "image": "perev_right",
    "point": {
      "latitude": 53.1153848327,
      "longitude": 30.1084212806
    }
  },
  "0df37ca6-cb3a-4088-b5b9-1f331293f71e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 119",
      "id": "0df37ca6-cb3a-4088-b5b9-1f331293f71e",
      "kilometrage": 1174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0df37ca6-cb3a-4088-b5b9-1f331293f71e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.372284915,
      "longitude": 30.4062317465
    }
  },
  "0e338a6f-5b99-4ed8-9b60-eb9f4accc224": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "0e338a6f-5b99-4ed8-9b60-eb9f4accc224",
      "kilometrage": 1282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0e338a6f-5b99-4ed8-9b60-eb9f4accc224",
    "image": "axis_romb",
    "point": {
      "latitude": 52.8890145894,
      "longitude": 30.0608654112
    }
  },
  "0e477b5d-6eaf-45d7-a45e-f9b6d408b229": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "0e477b5d-6eaf-45d7-a45e-f9b6d408b229",
      "kilometrage": 1453,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0e477b5d-6eaf-45d7-a45e-f9b6d408b229",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5888198822,
      "longitude": 30.2609762412
    }
  },
  "0e8a7a49-bbbb-4397-95fb-930062007338": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 70",
      "id": "0e8a7a49-bbbb-4397-95fb-930062007338",
      "kilometrage": 1101,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0e8a7a49-bbbb-4397-95fb-930062007338",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0179832713,
      "longitude": 30.7635455141
    }
  },
  "0e98498f-e399-4140-bad3-45a4da70f0e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 8",
      "id": "0e98498f-e399-4140-bad3-45a4da70f0e7",
      "kilometrage": 1500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0e98498f-e399-4140-bad3-45a4da70f0e7",
    "image": "buyo_left",
    "point": {
      "latitude": 53.881686734,
      "longitude": 30.2998871276
    }
  },
  "0ead26d5-64aa-4c59-bbcf-b35272ccc7a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 124",
      "id": "0ead26d5-64aa-4c59-bbcf-b35272ccc7a3",
      "kilometrage": 1386,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ead26d5-64aa-4c59-bbcf-b35272ccc7a3",
    "image": "perev_left",
    "point": {
      "latitude": 53.2577329137,
      "longitude": 30.3866414681
    }
  },
  "0eb839f9-9472-45b4-b639-d2c70b84ce7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 30",
      "id": "0eb839f9-9472-45b4-b639-d2c70b84ce7b",
      "kilometrage": 1458,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0eb839f9-9472-45b4-b639-d2c70b84ce7b",
    "image": "perev_right",
    "point": {
      "latitude": 53.6052770505,
      "longitude": 30.28231057
    }
  },
  "0ed5b83f-34aa-42fb-a4ed-eb95989fe4c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 160",
      "id": "0ed5b83f-34aa-42fb-a4ed-eb95989fe4c3",
      "kilometrage": 1407,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0ed5b83f-34aa-42fb-a4ed-eb95989fe4c3",
    "image": "perev_right",
    "point": {
      "latitude": 53.3816062822,
      "longitude": 30.3636615054
    }
  },
  "0f226b47-0dcf-45af-9dd3-e9d339545755": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1175",
      "id": "0f226b47-0dcf-45af-9dd3-e9d339545755",
      "kilometrage": 1075,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0f226b47-0dcf-45af-9dd3-e9d339545755",
    "image": "kilometrage",
    "point": {
      "latitude": 51.8997699953,
      "longitude": 30.7698515303
    }
  },
  "0fcbc55b-59f8-479c-90d3-ff2edbb504be": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "0fcbc55b-59f8-479c-90d3-ff2edbb504be",
      "kilometrage": 1554,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "0fcbc55b-59f8-479c-90d3-ff2edbb504be",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 54.2073408321,
      "longitude": 30.3071957057
    }
  },
  "102eeae5-0370-4638-93b1-f28c731c488d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 45",
      "id": "102eeae5-0370-4638-93b1-f28c731c488d",
      "kilometrage": 1093,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "102eeae5-0370-4638-93b1-f28c731c488d",
    "image": "perev_left",
    "point": {
      "latitude": 51.9946049484,
      "longitude": 30.7804142919
    }
  },
  "104cd618-b039-4de0-b95a-76a5d2fba5ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 74",
      "id": "104cd618-b039-4de0-b95a-76a5d2fba5ca",
      "kilometrage": 1485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "104cd618-b039-4de0-b95a-76a5d2fba5ca",
    "image": "perev_right",
    "point": {
      "latitude": 53.7638890441,
      "longitude": 30.2594946569
    }
  },
  "1099b912-cb1e-4e29-8df6-b6a395771e33": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 3",
      "id": "1099b912-cb1e-4e29-8df6-b6a395771e33",
      "kilometrage": 1049,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1099b912-cb1e-4e29-8df6-b6a395771e33",
    "image": "perev_left",
    "point": {
      "latitude": 51.7669785903,
      "longitude": 30.6419659354
    }
  },
  "10abf83d-8a29-48c5-8bd0-469a4ff1b3b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 173",
      "id": "10abf83d-8a29-48c5-8bd0-469a4ff1b3b2",
      "kilometrage": 1194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10abf83d-8a29-48c5-8bd0-469a4ff1b3b2",
    "image": "perev_right",
    "point": {
      "latitude": 52.4701096808,
      "longitude": 30.3067708138
    }
  },
  "10b0171a-f4b7-4c31-89e1-a31cd7c0b76b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "10b0171a-f4b7-4c31-89e1-a31cd7c0b76b",
      "kilometrage": 1281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "10b0171a-f4b7-4c31-89e1-a31cd7c0b76b",
    "image": "name_of",
    "point": {
      "latitude": 52.8817221649,
      "longitude": 30.0631804009
    }
  },
  "113dc735-3445-4aea-a1fe-89e23cac19f9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 56",
      "id": "113dc735-3445-4aea-a1fe-89e23cac19f9",
      "kilometrage": 1099,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "113dc735-3445-4aea-a1fe-89e23cac19f9",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0234137341,
      "longitude": 30.7803500743
    }
  },
  "116b0d15-4e21-4c36-8b16-ca106f2864ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 110",
      "id": "116b0d15-4e21-4c36-8b16-ca106f2864ca",
      "kilometrage": 1262,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "116b0d15-4e21-4c36-8b16-ca106f2864ca",
    "image": "perev_right",
    "point": {
      "latitude": 52.7980970742,
      "longitude": 30.0968172104
    }
  },
  "11e0a3aa-4df4-4e1a-aa47-c512a4cf9146": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "11e0a3aa-4df4-4e1a-aa47-c512a4cf9146",
      "kilometrage": 1280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "11e0a3aa-4df4-4e1a-aa47-c512a4cf9146",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8800087683,
      "longitude": 30.0670872667
    }
  },
  "120a6936-9ff0-4941-9f0a-48ae8b66d58d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "120a6936-9ff0-4941-9f0a-48ae8b66d58d",
      "kilometrage": 1288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "120a6936-9ff0-4941-9f0a-48ae8b66d58d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.9335916517,
      "longitude": 30.0498418884
    }
  },
  "121ab1c4-808f-4814-a031-fcedb11656c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 73",
      "id": "121ab1c4-808f-4814-a031-fcedb11656c1",
      "kilometrage": 1357,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "121ab1c4-808f-4814-a031-fcedb11656c1",
    "image": "perev_right",
    "point": {
      "latitude": 53.1363070321,
      "longitude": 30.2811695085
    }
  },
  "12438c94-db24-4948-ba55-6ca4809f32ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 54",
      "id": "12438c94-db24-4948-ba55-6ca4809f32ea",
      "kilometrage": 1344,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12438c94-db24-4948-ba55-6ca4809f32ea",
    "image": "perev_right",
    "point": {
      "latitude": 53.08530349,
      "longitude": 30.2442251609
    }
  },
  "1253ffb3-79ab-41ca-b5b0-848f4af09f18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 92",
      "id": "1253ffb3-79ab-41ca-b5b0-848f4af09f18",
      "kilometrage": 1132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1253ffb3-79ab-41ca-b5b0-848f4af09f18",
    "image": "perev_left",
    "point": {
      "latitude": 52.1950325099,
      "longitude": 30.6045747591
    }
  },
  "1289425c-cb37-4a2f-a6c1-53dfe761c71e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "1289425c-cb37-4a2f-a6c1-53dfe761c71e",
      "kilometrage": 1180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1289425c-cb37-4a2f-a6c1-53dfe761c71e",
    "image": "name_of",
    "point": {
      "latitude": 52.3949842388,
      "longitude": 30.3560998312
    }
  },
  "129517c3-255e-4a17-bc24-6dc7da165833": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 101",
      "id": "129517c3-255e-4a17-bc24-6dc7da165833",
      "kilometrage": 1138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "129517c3-255e-4a17-bc24-6dc7da165833",
    "image": "perev_left",
    "point": {
      "latitude": 52.23982809,
      "longitude": 30.5755921895
    }
  },
  "12d3ded0-8e08-4a71-8605-607a74a73c29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1505",
      "id": "12d3ded0-8e08-4a71-8605-607a74a73c29",
      "kilometrage": 1505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12d3ded0-8e08-4a71-8605-607a74a73c29",
    "image": "kilometrage",
    "point": {
      "latitude": 53.889161477,
      "longitude": 30.3498718909
    }
  },
  "12f3b100-1b19-43a5-9740-23a6a29de3b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 70",
      "id": "12f3b100-1b19-43a5-9740-23a6a29de3b2",
      "kilometrage": 1355,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "12f3b100-1b19-43a5-9740-23a6a29de3b2",
    "image": "perev_right",
    "point": {
      "latitude": 53.1245469939,
      "longitude": 30.2799225647
    }
  },
  "1383b88e-76c1-40ab-bd90-b1e7fc1b1b81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 36",
      "id": "1383b88e-76c1-40ab-bd90-b1e7fc1b1b81",
      "kilometrage": 1073,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1383b88e-76c1-40ab-bd90-b1e7fc1b1b81",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9037371721,
      "longitude": 30.7479691633
    }
  },
  "13c7da04-0c5f-480f-8da5-fb9de610c2a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 25",
      "id": "13c7da04-0c5f-480f-8da5-fb9de610c2a7",
      "kilometrage": 1219,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "13c7da04-0c5f-480f-8da5-fb9de610c2a7",
    "image": "perev_right",
    "point": {
      "latitude": 52.6056976506,
      "longitude": 30.2537598378
    }
  },
  "13f658cc-302e-49c4-9e06-05036f864a1c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 7",
      "id": "13f658cc-302e-49c4-9e06-05036f864a1c",
      "kilometrage": 1443,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "13f658cc-302e-49c4-9e06-05036f864a1c",
    "image": "perev_right",
    "point": {
      "latitude": 53.5427698735,
      "longitude": 30.2610246203
    }
  },
  "1420af8a-2191-4050-b914-dafb79df0d47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 176",
      "id": "1420af8a-2191-4050-b914-dafb79df0d47",
      "kilometrage": 1309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1420af8a-2191-4050-b914-dafb79df0d47",
    "image": "perev_right",
    "point": {
      "latitude": 53.0350671719,
      "longitude": 30.0240946101
    }
  },
  "149c1837-af18-4d05-9af6-852baddc6853": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "149c1837-af18-4d05-9af6-852baddc6853",
      "kilometrage": 1449,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "149c1837-af18-4d05-9af6-852baddc6853",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5688343883,
      "longitude": 30.2727532352
    }
  },
  "14af6153-ea44-4ec9-a49e-4480a6a5e685": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "14af6153-ea44-4ec9-a49e-4480a6a5e685",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14af6153-ea44-4ec9-a49e-4480a6a5e685",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3191738046,
      "longitude": 30.5299721925
    }
  },
  "14b000f2-f615-49bb-86cd-e707c69f4767": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 71",
      "id": "14b000f2-f615-49bb-86cd-e707c69f4767",
      "kilometrage": 1103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14b000f2-f615-49bb-86cd-e707c69f4767",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0207941545,
      "longitude": 30.7370961098
    }
  },
  "14da88e8-8ce0-47f7-975c-8e944a03543d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "14da88e8-8ce0-47f7-975c-8e944a03543d",
      "kilometrage": 1570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14da88e8-8ce0-47f7-975c-8e944a03543d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.3188066351,
      "longitude": 30.2812157974
    }
  },
  "14f242e7-55db-4f13-9d58-d4479007c997": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "14f242e7-55db-4f13-9d58-d4479007c997",
      "kilometrage": 1152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "14f242e7-55db-4f13-9d58-d4479007c997",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.287633901,
      "longitude": 30.542322558
    }
  },
  "15137201-1a0f-4fe8-ae41-ed0e247f41b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 88",
      "id": "15137201-1a0f-4fe8-ae41-ed0e247f41b5",
      "kilometrage": 1251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15137201-1a0f-4fe8-ae41-ed0e247f41b5",
    "image": "perev_left",
    "point": {
      "latitude": 52.7340271977,
      "longitude": 30.1279533413
    }
  },
  "15f96467-ca08-43b6-bee7-236f41debbc3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "15f96467-ca08-43b6-bee7-236f41debbc3",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "15f96467-ca08-43b6-bee7-236f41debbc3",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3216779438,
      "longitude": 30.5257045541
    }
  },
  "166164a7-c4ae-4b34-9227-49469a2af4b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 139",
      "id": "166164a7-c4ae-4b34-9227-49469a2af4b5",
      "kilometrage": 1286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "166164a7-c4ae-4b34-9227-49469a2af4b5",
    "image": "perev_right",
    "point": {
      "latitude": 52.9203344007,
      "longitude": 30.0432047853
    }
  },
  "167699cd-3ffd-4a88-98ee-d790acdbd93a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 45",
      "id": "167699cd-3ffd-4a88-98ee-d790acdbd93a",
      "kilometrage": 1467,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "167699cd-3ffd-4a88-98ee-d790acdbd93a",
    "image": "perev_left",
    "point": {
      "latitude": 53.6548138389,
      "longitude": 30.3040544986
    }
  },
  "16ba6b47-254a-467e-b7ca-7a6e20294d0c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "16ba6b47-254a-467e-b7ca-7a6e20294d0c",
      "kilometrage": 1439,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "16ba6b47-254a-467e-b7ca-7a6e20294d0c",
    "image": "bridge_low",
    "point": {
      "latitude": 53.5178887411,
      "longitude": 30.2698939193
    }
  },
  "174d4429-7bc1-4367-9548-94411589b65f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 117",
      "id": "174d4429-7bc1-4367-9548-94411589b65f",
      "kilometrage": 1383,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "174d4429-7bc1-4367-9548-94411589b65f",
    "image": "perev_right",
    "point": {
      "latitude": 53.2526465391,
      "longitude": 30.3542437192
    }
  },
  "17515640-9cdf-4c56-b98b-e1c61b1a98ca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1350",
      "id": "17515640-9cdf-4c56-b98b-e1c61b1a98ca",
      "kilometrage": 1350,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "17515640-9cdf-4c56-b98b-e1c61b1a98ca",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1146834981,
      "longitude": 30.2728151303
    }
  },
  "17b09913-6692-4a24-b49d-37c70d9f61ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "17b09913-6692-4a24-b49d-37c70d9f61ad",
      "kilometrage": 1554,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "17b09913-6692-4a24-b49d-37c70d9f61ad",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.2070519831,
      "longitude": 30.3055172596
    }
  },
  "181fb1c0-d8d6-4c93-9c9e-cf4e80c8a07e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 98",
      "id": "181fb1c0-d8d6-4c93-9c9e-cf4e80c8a07e",
      "kilometrage": 1136,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "181fb1c0-d8d6-4c93-9c9e-cf4e80c8a07e",
    "image": "perev_right",
    "point": {
      "latitude": 52.2194561833,
      "longitude": 30.5818485763
    }
  },
  "183e617f-a132-4bbd-8c6a-14e959c6cc85": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 131",
      "id": "183e617f-a132-4bbd-8c6a-14e959c6cc85",
      "kilometrage": 1179,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "183e617f-a132-4bbd-8c6a-14e959c6cc85",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3958919318,
      "longitude": 30.3643110722
    }
  },
  "183f5522-f4b5-46ca-888a-7a37d4bd5e84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1395",
      "id": "183f5522-f4b5-46ca-888a-7a37d4bd5e84",
      "kilometrage": 1395,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "183f5522-f4b5-46ca-888a-7a37d4bd5e84",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3059458529,
      "longitude": 30.3638962315
    }
  },
  "18409d4d-e691-4a1f-a20a-5efc20fe0eb2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "18409d4d-e691-4a1f-a20a-5efc20fe0eb2",
      "kilometrage": 1193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18409d4d-e691-4a1f-a20a-5efc20fe0eb2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4684898651,
      "longitude": 30.3145431584
    }
  },
  "1847881e-58f5-421b-831e-11d0722c497a": {
    "data": {
      "color": false,
      "comment": "его нет",
      "description": "Соблюдать надводный габарит  ",
      "id": "1847881e-58f5-421b-831e-11d0722c497a",
      "kilometrage": 1515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1847881e-58f5-421b-831e-11d0722c497a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.9247151209,
      "longitude": 30.4405849366
    }
  },
  "18767bd5-e2c2-4782-a477-8c35de3a4141": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "18767bd5-e2c2-4782-a477-8c35de3a4141",
      "kilometrage": 1071,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18767bd5-e2c2-4782-a477-8c35de3a4141",
    "image": "perev_right",
    "point": {
      "latitude": 51.8858937726,
      "longitude": 30.726142293
    }
  },
  "1877c824-f42d-4649-8362-e817a854b471": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 7",
      "id": "1877c824-f42d-4649-8362-e817a854b471",
      "kilometrage": 1049,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1877c824-f42d-4649-8362-e817a854b471",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7649740223,
      "longitude": 30.6407800533
    }
  },
  "1894795b-2d17-4ff7-b431-6079f078d93e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1515",
      "id": "1894795b-2d17-4ff7-b431-6079f078d93e",
      "kilometrage": 1515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1894795b-2d17-4ff7-b431-6079f078d93e",
    "image": "kilometrage",
    "point": {
      "latitude": 53.9177610976,
      "longitude": 30.4421700495
    }
  },
  "189895da-a57d-472b-8903-312db3d94629": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 145",
      "id": "189895da-a57d-472b-8903-312db3d94629",
      "kilometrage": 1173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "189895da-a57d-472b-8903-312db3d94629",
    "image": "perev_left",
    "point": {
      "latitude": 52.3815389427,
      "longitude": 30.4232628318
    }
  },
  "18ab04ab-3f4e-42ee-8828-16eabaa06966": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 39",
      "id": "18ab04ab-3f4e-42ee-8828-16eabaa06966",
      "kilometrage": 1075,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18ab04ab-3f4e-42ee-8828-16eabaa06966",
    "image": "buyo_right",
    "point": {
      "latitude": 51.901511527,
      "longitude": 30.7727807001
    }
  },
  "18cf8470-aa11-4689-8323-8222e1956e57": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 187",
      "id": "18cf8470-aa11-4689-8323-8222e1956e57",
      "kilometrage": 1423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "18cf8470-aa11-4689-8323-8222e1956e57",
    "image": "perev_left",
    "point": {
      "latitude": 53.4709485414,
      "longitude": 30.3178676229
    }
  },
  "19155f44-dbba-4e3e-84a6-da98bc370927": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1095",
      "id": "19155f44-dbba-4e3e-84a6-da98bc370927",
      "kilometrage": 1095,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19155f44-dbba-4e3e-84a6-da98bc370927",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0121312422,
      "longitude": 30.7764289106
    }
  },
  "196626b8-eddb-4596-8a11-3c32eff2dae0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "196626b8-eddb-4596-8a11-3c32eff2dae0",
      "kilometrage": 1507,
      "place": false,
      "size": true,
      "visibility": false
    },
    "id": "196626b8-eddb-4596-8a11-3c32eff2dae0",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8950554117,
      "longitude": 30.3824835103
    }
  },
  "1992dc7a-265c-4842-bb1f-7e0b00790618": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 34",
      "id": "1992dc7a-265c-4842-bb1f-7e0b00790618",
      "kilometrage": 1332,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1992dc7a-265c-4842-bb1f-7e0b00790618",
    "image": "perev_left",
    "point": {
      "latitude": 53.1128391352,
      "longitude": 30.1377679585
    }
  },
  "19ae02b5-d175-4314-b1bd-0569d0ce4585": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "19ae02b5-d175-4314-b1bd-0569d0ce4585",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "19ae02b5-d175-4314-b1bd-0569d0ce4585",
    "image": "main_way",
    "point": {
      "latitude": 53.8705880746,
      "longitude": 30.2881187921
    }
  },
  "1a82002c-15b8-4032-947d-fca1f0da9d32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 168",
      "id": "1a82002c-15b8-4032-947d-fca1f0da9d32",
      "kilometrage": 1412,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1a82002c-15b8-4032-947d-fca1f0da9d32",
    "image": "perev_right",
    "point": {
      "latitude": 53.4043024809,
      "longitude": 30.3299566334
    }
  },
  "1aed4010-0a88-422b-b98b-886fb0c97d38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 125",
      "id": "1aed4010-0a88-422b-b98b-886fb0c97d38",
      "kilometrage": 1153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1aed4010-0a88-422b-b98b-886fb0c97d38",
    "image": "perev_right",
    "point": {
      "latitude": 52.2917021291,
      "longitude": 30.5270590164
    }
  },
  "1b4802e2-8605-4640-a2fc-8349a9d866fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1255",
      "id": "1b4802e2-8605-4640-a2fc-8349a9d866fb",
      "kilometrage": 1255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b4802e2-8605-4640-a2fc-8349a9d866fb",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7501880005,
      "longitude": 30.1096376843
    }
  },
  "1b7666fe-5844-4091-8554-e309531f4913": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1b7666fe-5844-4091-8554-e309531f4913",
      "kilometrage": 1452,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b7666fe-5844-4091-8554-e309531f4913",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5877754091,
      "longitude": 30.2637264386
    }
  },
  "1b7dc9a9-460a-4845-bf25-8de6d41768bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 152",
      "id": "1b7dc9a9-460a-4845-bf25-8de6d41768bc",
      "kilometrage": 1295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1b7dc9a9-460a-4845-bf25-8de6d41768bc",
    "image": "perev_right",
    "point": {
      "latitude": 52.9677044963,
      "longitude": 30.050747634
    }
  },
  "1ba59186-71c5-48df-81de-fe9d3f0ba817": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1ba59186-71c5-48df-81de-fe9d3f0ba817",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ba59186-71c5-48df-81de-fe9d3f0ba817",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8915682,
      "longitude": 30.3304152921
    }
  },
  "1c28eb4d-7fe0-4f4e-b25d-a54cebfd03fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 76",
      "id": "1c28eb4d-7fe0-4f4e-b25d-a54cebfd03fe",
      "kilometrage": 1118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c28eb4d-7fe0-4f4e-b25d-a54cebfd03fe",
    "image": "perev_right",
    "point": {
      "latitude": 52.1213281433,
      "longitude": 30.6881644127
    }
  },
  "1c581a6a-adce-431d-9151-9f1ae0843a21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 98",
      "id": "1c581a6a-adce-431d-9151-9f1ae0843a21",
      "kilometrage": 1257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c581a6a-adce-431d-9151-9f1ae0843a21",
    "image": "perev_right",
    "point": {
      "latitude": 52.7622721597,
      "longitude": 30.1096859505
    }
  },
  "1c7cd32b-d5cb-400d-b0d4-5002a01f6a48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 20",
      "id": "1c7cd32b-d5cb-400d-b0d4-5002a01f6a48",
      "kilometrage": 1325,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1c7cd32b-d5cb-400d-b0d4-5002a01f6a48",
    "image": "perev_left",
    "point": {
      "latitude": 53.1123854336,
      "longitude": 30.1001847749
    }
  },
  "1ccdb76b-c1f4-483a-9609-6654046ab246": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 55",
      "id": "1ccdb76b-c1f4-483a-9609-6654046ab246",
      "kilometrage": 1099,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ccdb76b-c1f4-483a-9609-6654046ab246",
    "image": "perev_right",
    "point": {
      "latitude": 52.0280821043,
      "longitude": 30.7854759198
    }
  },
  "1cff16a5-c373-4ac6-80c6-3c9341c7005b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "1cff16a5-c373-4ac6-80c6-3c9341c7005b",
      "kilometrage": 1105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1cff16a5-c373-4ac6-80c6-3c9341c7005b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0356651008,
      "longitude": 30.7443236361
    }
  },
  "1dbaf4a9-79ea-489f-8523-b9754e0b6d32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 12",
      "id": "1dbaf4a9-79ea-489f-8523-b9754e0b6d32",
      "kilometrage": 1059,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1dbaf4a9-79ea-489f-8523-b9754e0b6d32",
    "image": "perev_right",
    "point": {
      "latitude": 51.8009080927,
      "longitude": 30.6651975168
    }
  },
  "1e52cb64-fe85-4609-a4ba-023bc72e7334": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1325",
      "id": "1e52cb64-fe85-4609-a4ba-023bc72e7334",
      "kilometrage": 1325,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e52cb64-fe85-4609-a4ba-023bc72e7334",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1164603137,
      "longitude": 30.1007701682
    }
  },
  "1e6333ac-3648-4127-b03f-bbe047629910": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1e6333ac-3648-4127-b03f-bbe047629910",
      "kilometrage": 1333,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1e6333ac-3648-4127-b03f-bbe047629910",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.113118996,
      "longitude": 30.1479875433
    }
  },
  "1eb7151c-dbfb-481d-bb55-5af2ae3f36fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 11",
      "id": "1eb7151c-dbfb-481d-bb55-5af2ae3f36fd",
      "kilometrage": 1446,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1eb7151c-dbfb-481d-bb55-5af2ae3f36fd",
    "image": "perev_right",
    "point": {
      "latitude": 53.5446676654,
      "longitude": 30.261473907
    }
  },
  "1ecf1d77-352e-4bbc-9c93-72b278c45850": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1220",
      "id": "1ecf1d77-352e-4bbc-9c93-72b278c45850",
      "kilometrage": 1220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1ecf1d77-352e-4bbc-9c93-72b278c45850",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6120816473,
      "longitude": 30.2482432524
    }
  },
  "1efea9a6-184a-4c56-81fd-469ffb112d3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1efea9a6-184a-4c56-81fd-469ffb112d3d",
      "kilometrage": 1281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1efea9a6-184a-4c56-81fd-469ffb112d3d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8875500413,
      "longitude": 30.0585417878
    }
  },
  "1f03e98d-2473-4739-adaf-8fe4abdb2e63": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "1f03e98d-2473-4739-adaf-8fe4abdb2e63",
      "kilometrage": 1167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f03e98d-2473-4739-adaf-8fe4abdb2e63",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3384558732,
      "longitude": 30.453831202
    }
  },
  "1f282ef0-ccec-4792-bf40-b965113b7657": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 58",
      "id": "1f282ef0-ccec-4792-bf40-b965113b7657",
      "kilometrage": 1346,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f282ef0-ccec-4792-bf40-b965113b7657",
    "image": "perev_left",
    "point": {
      "latitude": 53.0904881268,
      "longitude": 30.2575059389
    }
  },
  "1f837c7e-4f2d-4e65-a072-702cf9e6bee8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "1f837c7e-4f2d-4e65-a072-702cf9e6bee8",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1f837c7e-4f2d-4e65-a072-702cf9e6bee8",
    "image": "bridge_low",
    "point": {
      "latitude": 52.3223911934,
      "longitude": 30.5276560529
    }
  },
  "1fcd3581-fb96-46ef-bfb5-e515a35462d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 111",
      "id": "1fcd3581-fb96-46ef-bfb5-e515a35462d0",
      "kilometrage": 1381,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fcd3581-fb96-46ef-bfb5-e515a35462d0",
    "image": "perev_right",
    "point": {
      "latitude": 53.2459651425,
      "longitude": 30.3489269589
    }
  },
  "1fd5b0ad-c105-4e91-ad42-b22127e37793": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 67",
      "id": "1fd5b0ad-c105-4e91-ad42-b22127e37793",
      "kilometrage": 1111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "1fd5b0ad-c105-4e91-ad42-b22127e37793",
    "image": "perev_right",
    "point": {
      "latitude": 52.0768534071,
      "longitude": 30.7232678066
    }
  },
  "201fdb3c-a264-43e9-b8f8-831f31ce21f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "201fdb3c-a264-43e9-b8f8-831f31ce21f4",
      "kilometrage": 1524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "201fdb3c-a264-43e9-b8f8-831f31ce21f4",
    "image": "bridge_low",
    "point": {
      "latitude": 53.9800074321,
      "longitude": 30.3955436994
    }
  },
  "2062aed3-90bc-4746-811c-78daf06a4a8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 21",
      "id": "2062aed3-90bc-4746-811c-78daf06a4a8f",
      "kilometrage": 1216,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2062aed3-90bc-4746-811c-78daf06a4a8f",
    "image": "perev_right",
    "point": {
      "latitude": 52.6035324924,
      "longitude": 30.2854234618
    }
  },
  "207e61bb-f2ff-493c-9bde-1ce4f144d7ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1570",
      "id": "207e61bb-f2ff-493c-9bde-1ce4f144d7ea",
      "kilometrage": 1570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "207e61bb-f2ff-493c-9bde-1ce4f144d7ea",
    "image": "kilometrage",
    "point": {
      "latitude": 54.3190195886,
      "longitude": 30.2797437994
    }
  },
  "20ca4496-f88f-46d5-9c97-c30a2bf67ece": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 209",
      "id": "20ca4496-f88f-46d5-9c97-c30a2bf67ece",
      "kilometrage": 1436,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20ca4496-f88f-46d5-9c97-c30a2bf67ece",
    "image": "perev_right",
    "point": {
      "latitude": 53.5011496985,
      "longitude": 30.2687621214
    }
  },
  "20e3566a-61e7-47ef-9b9b-6c27a968483d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 101",
      "id": "20e3566a-61e7-47ef-9b9b-6c27a968483d",
      "kilometrage": 1377,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "20e3566a-61e7-47ef-9b9b-6c27a968483d",
    "image": "perev_left",
    "point": {
      "latitude": 53.243653724,
      "longitude": 30.2901812043
    }
  },
  "2109bdc8-d182-455d-9bc5-8c7aa3712484": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 90",
      "id": "2109bdc8-d182-455d-9bc5-8c7aa3712484",
      "kilometrage": 1368,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2109bdc8-d182-455d-9bc5-8c7aa3712484",
    "image": "perev_right",
    "point": {
      "latitude": 53.2218890546,
      "longitude": 30.2417851336
    }
  },
  "21341641-88c8-4cff-b281-24ae2f44f962": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 186",
      "id": "21341641-88c8-4cff-b281-24ae2f44f962",
      "kilometrage": 1203,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21341641-88c8-4cff-b281-24ae2f44f962",
    "image": "perev_left",
    "point": {
      "latitude": 52.5285396581,
      "longitude": 30.2572388403
    }
  },
  "2163170d-393f-4866-93f4-b88a37eceb8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1435",
      "id": "2163170d-393f-4866-93f4-b88a37eceb8f",
      "kilometrage": 1435,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2163170d-393f-4866-93f4-b88a37eceb8f",
    "image": "kilometrage",
    "point": {
      "latitude": 53.502208257,
      "longitude": 30.2878617051
    }
  },
  "2165e8a4-c56c-4f86-93c5-8469c4acf096": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 99",
      "id": "2165e8a4-c56c-4f86-93c5-8469c4acf096",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2165e8a4-c56c-4f86-93c5-8469c4acf096",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3236373266,
      "longitude": 30.5232729176
    }
  },
  "219aa0d6-84e5-48e5-89f2-6eec8ebf8582": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 5",
      "id": "219aa0d6-84e5-48e5-89f2-6eec8ebf8582",
      "kilometrage": 1442,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "219aa0d6-84e5-48e5-89f2-6eec8ebf8582",
    "image": "perev_left",
    "point": {
      "latitude": 53.5364432911,
      "longitude": 30.2695303676
    }
  },
  "21a6680b-8cfd-4dab-a9d1-919cc7564257": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 9",
      "id": "21a6680b-8cfd-4dab-a9d1-919cc7564257",
      "kilometrage": 1445,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21a6680b-8cfd-4dab-a9d1-919cc7564257",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.5487580059,
      "longitude": 30.2776091125
    }
  },
  "21a7099b-50f1-45ca-9abe-d83e3f4fd71a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый 10",
      "id": "21a7099b-50f1-45ca-9abe-d83e3f4fd71a",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21a7099b-50f1-45ca-9abe-d83e3f4fd71a",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8843663502,
      "longitude": 30.3094883741
    }
  },
  "21d19489-9aed-4e88-91ae-65dce06e43d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 95",
      "id": "21d19489-9aed-4e88-91ae-65dce06e43d5",
      "kilometrage": 1133,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21d19489-9aed-4e88-91ae-65dce06e43d5",
    "image": "perev_right",
    "point": {
      "latitude": 52.1994054315,
      "longitude": 30.5855139713
    }
  },
  "21edd8ef-78dd-4b25-b1ad-c033cae32ed5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 165",
      "id": "21edd8ef-78dd-4b25-b1ad-c033cae32ed5",
      "kilometrage": 1302,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "21edd8ef-78dd-4b25-b1ad-c033cae32ed5",
    "image": "perev_left",
    "point": {
      "latitude": 53.0022848417,
      "longitude": 30.0466762132
    }
  },
  "220bab6b-d57d-45fb-b29f-4cb4068c99dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1315",
      "id": "220bab6b-d57d-45fb-b29f-4cb4068c99dd",
      "kilometrage": 1315,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "220bab6b-d57d-45fb-b29f-4cb4068c99dd",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0623973944,
      "longitude": 30.0482684503
    }
  },
  "221fecf3-6ec0-44df-b803-29113b485d72": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "221fecf3-6ec0-44df-b803-29113b485d72",
      "kilometrage": 1193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "221fecf3-6ec0-44df-b803-29113b485d72",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.466473187,
      "longitude": 30.3161089417
    }
  },
  "222508c3-ff0a-47d8-8736-e86412b18d87": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1470",
      "id": "222508c3-ff0a-47d8-8736-e86412b18d87",
      "kilometrage": 1470,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "222508c3-ff0a-47d8-8736-e86412b18d87",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6692017179,
      "longitude": 30.2951400709
    }
  },
  "223f837f-4a27-4e91-b2a2-ca32238e8a04": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 19",
      "id": "223f837f-4a27-4e91-b2a2-ca32238e8a04",
      "kilometrage": 1325,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "223f837f-4a27-4e91-b2a2-ca32238e8a04",
    "image": "perev_right",
    "point": {
      "latitude": 53.1178179568,
      "longitude": 30.0993343483
    }
  },
  "2260ac56-0caa-47cf-bd64-96d7acc03db1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 26",
      "id": "2260ac56-0caa-47cf-bd64-96d7acc03db1",
      "kilometrage": 1064,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2260ac56-0caa-47cf-bd64-96d7acc03db1",
    "image": "buyo_right",
    "point": {
      "latitude": 51.832567893,
      "longitude": 30.6918314156
    }
  },
  "22ce0ae4-bd27-492e-8e27-ce3db57b4a56": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 7",
      "id": "22ce0ae4-bd27-492e-8e27-ce3db57b4a56",
      "kilometrage": 1209,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "22ce0ae4-bd27-492e-8e27-ce3db57b4a56",
    "image": "perev_left",
    "point": {
      "latitude": 52.5675513571,
      "longitude": 30.2678511555
    }
  },
  "22e24e48-21bc-4e75-9e4e-04f95ce3a5ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 30",
      "id": "22e24e48-21bc-4e75-9e4e-04f95ce3a5ae",
      "kilometrage": 1067,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "22e24e48-21bc-4e75-9e4e-04f95ce3a5ae",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8580636925,
      "longitude": 30.6986832959
    }
  },
  "23277649-34f2-46fa-a9fb-8540abf1cacb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 137",
      "id": "23277649-34f2-46fa-a9fb-8540abf1cacb",
      "kilometrage": 1394,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23277649-34f2-46fa-a9fb-8540abf1cacb",
    "image": "perev_left",
    "point": {
      "latitude": 53.302877856,
      "longitude": 30.3795671753
    }
  },
  "23519cbb-1040-4c13-a886-463f050952eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 9",
      "id": "23519cbb-1040-4c13-a886-463f050952eb",
      "kilometrage": 1211,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23519cbb-1040-4c13-a886-463f050952eb",
    "image": "perev_right",
    "point": {
      "latitude": 52.5743965973,
      "longitude": 30.2594978008
    }
  },
  "23548304-980f-4e6f-85ba-9a33f1aeb41f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 47",
      "id": "23548304-980f-4e6f-85ba-9a33f1aeb41f",
      "kilometrage": 1080,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "23548304-980f-4e6f-85ba-9a33f1aeb41f",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9239116974,
      "longitude": 30.8232215487
    }
  },
  "236fa783-76dd-467a-9dd8-117ad3dd9204": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 120",
      "id": "236fa783-76dd-467a-9dd8-117ad3dd9204",
      "kilometrage": 1524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "236fa783-76dd-467a-9dd8-117ad3dd9204",
    "image": "perev_left",
    "point": {
      "latitude": 53.9786426051,
      "longitude": 30.3960705796
    }
  },
  "2378b48b-6122-493f-9a3d-c35d0dbe5113": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 114",
      "id": "2378b48b-6122-493f-9a3d-c35d0dbe5113",
      "kilometrage": 1146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2378b48b-6122-493f-9a3d-c35d0dbe5113",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.2493829603,
      "longitude": 30.5429217846
    }
  },
  "24123db7-8961-467a-a463-8e59cc713720": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 75",
      "id": "24123db7-8961-467a-a463-8e59cc713720",
      "kilometrage": 1485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24123db7-8961-467a-a463-8e59cc713720",
    "image": "perev_right",
    "point": {
      "latitude": 53.7689585026,
      "longitude": 30.2600519174
    }
  },
  "245ba66b-802e-41bb-9ef1-a152ce00d7f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 127",
      "id": "245ba66b-802e-41bb-9ef1-a152ce00d7f3",
      "kilometrage": 1155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "245ba66b-802e-41bb-9ef1-a152ce00d7f3",
    "image": "perev_right",
    "point": {
      "latitude": 52.3032322123,
      "longitude": 30.5302092701
    }
  },
  "24940b92-67c9-48bf-a2f1-5c9f58147206": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 42",
      "id": "24940b92-67c9-48bf-a2f1-5c9f58147206",
      "kilometrage": 1227,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24940b92-67c9-48bf-a2f1-5c9f58147206",
    "image": "perev_right",
    "point": {
      "latitude": 52.6583041686,
      "longitude": 30.2228844474
    }
  },
  "24aff5a3-afe1-4982-b4b6-bf86c7d93f90": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 5",
      "id": "24aff5a3-afe1-4982-b4b6-bf86c7d93f90",
      "kilometrage": 1496,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24aff5a3-afe1-4982-b4b6-bf86c7d93f90",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8512839441,
      "longitude": 30.2724518462
    }
  },
  "24c2ec97-225d-4caf-8ca4-7fac2f73e504": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "24c2ec97-225d-4caf-8ca4-7fac2f73e504",
      "kilometrage": 1566,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "24c2ec97-225d-4caf-8ca4-7fac2f73e504",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.2951110812,
      "longitude": 30.2630127211
    }
  },
  "2523cdd1-4800-4a85-ba51-716f9b461993": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 88",
      "id": "2523cdd1-4800-4a85-ba51-716f9b461993",
      "kilometrage": 1367,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2523cdd1-4800-4a85-ba51-716f9b461993",
    "image": "perev_left",
    "point": {
      "latitude": 53.2092003662,
      "longitude": 30.2494594746
    }
  },
  "254ba99e-e74e-487f-8907-6628f96fc2af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 70",
      "id": "254ba99e-e74e-487f-8907-6628f96fc2af",
      "kilometrage": 1482,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "254ba99e-e74e-487f-8907-6628f96fc2af",
    "image": "perev_right",
    "point": {
      "latitude": 53.7448723307,
      "longitude": 30.2688169609
    }
  },
  "25563a80-3e8d-4b4e-b259-37d1be498268": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "25563a80-3e8d-4b4e-b259-37d1be498268",
      "kilometrage": 1480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25563a80-3e8d-4b4e-b259-37d1be498268",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.7294060113,
      "longitude": 30.2771988629
    }
  },
  "25794817-9a11-45a5-991d-87f9a61b9a54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 9",
      "id": "25794817-9a11-45a5-991d-87f9a61b9a54",
      "kilometrage": 1500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25794817-9a11-45a5-991d-87f9a61b9a54",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8836730315,
      "longitude": 30.3027886299
    }
  },
  "25bed757-c010-4543-b00f-d28595792032": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 190",
      "id": "25bed757-c010-4543-b00f-d28595792032",
      "kilometrage": 1425,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25bed757-c010-4543-b00f-d28595792032",
    "image": "perev_left",
    "point": {
      "latitude": 53.4761671228,
      "longitude": 30.3205865862
    }
  },
  "25c86a53-dff5-4e6e-9e54-ced66c55f1ed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1250",
      "id": "25c86a53-dff5-4e6e-9e54-ced66c55f1ed",
      "kilometrage": 1250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25c86a53-dff5-4e6e-9e54-ced66c55f1ed",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7244933535,
      "longitude": 30.129186207
    }
  },
  "25cc4c85-2e91-471c-b2b4-a865e2cfae19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "25cc4c85-2e91-471c-b2b4-a865e2cfae19",
      "kilometrage": 1083,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "25cc4c85-2e91-471c-b2b4-a865e2cfae19",
    "image": "name_of",
    "point": {
      "latitude": 51.9452637803,
      "longitude": 30.8044826775
    }
  },
  "2603e5f8-266f-4d90-89ff-36608c4f07ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 67",
      "id": "2603e5f8-266f-4d90-89ff-36608c4f07ee",
      "kilometrage": 1098,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2603e5f8-266f-4d90-89ff-36608c4f07ee",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0311311998,
      "longitude": 30.7896065432
    }
  },
  "266bc98b-f48a-48b8-a9f7-dda6791b1e87": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1240",
      "id": "266bc98b-f48a-48b8-a9f7-dda6791b1e87",
      "kilometrage": 1240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "266bc98b-f48a-48b8-a9f7-dda6791b1e87",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6876482897,
      "longitude": 30.1942534462
    }
  },
  "2699ddc5-7007-4830-9361-fb55d4febf28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 2",
      "id": "2699ddc5-7007-4830-9361-fb55d4febf28",
      "kilometrage": 1048,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2699ddc5-7007-4830-9361-fb55d4febf28",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7564415414,
      "longitude": 30.6494969743
    }
  },
  "26e3d410-e785-46c5-b543-ec2f1fb30eb9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "26e3d410-e785-46c5-b543-ec2f1fb30eb9",
      "kilometrage": 1105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26e3d410-e785-46c5-b543-ec2f1fb30eb9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0368442037,
      "longitude": 30.7426254783
    }
  },
  "26fc11d9-78cf-4c43-a6c2-c8bf971c95bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1385",
      "id": "26fc11d9-78cf-4c43-a6c2-c8bf971c95bf",
      "kilometrage": 1385,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "26fc11d9-78cf-4c43-a6c2-c8bf971c95bf",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2540644566,
      "longitude": 30.3711157223
    }
  },
  "27233a36-b324-4fce-9fce-1c26f5390bf2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 110",
      "id": "27233a36-b324-4fce-9fce-1c26f5390bf2",
      "kilometrage": 1381,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27233a36-b324-4fce-9fce-1c26f5390bf2",
    "image": "perev_left",
    "point": {
      "latitude": 53.2472055694,
      "longitude": 30.3445613826
    }
  },
  "277fdd8c-28ca-4823-a2c5-a9c80429549c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 20",
      "id": "277fdd8c-28ca-4823-a2c5-a9c80429549c",
      "kilometrage": 1057,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "277fdd8c-28ca-4823-a2c5-a9c80429549c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7837565251,
      "longitude": 30.6571021842
    }
  },
  "279fd476-bc3e-4e8f-9a53-c0e0c5d6b9c2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1370",
      "id": "279fd476-bc3e-4e8f-9a53-c0e0c5d6b9c2",
      "kilometrage": 1370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "279fd476-bc3e-4e8f-9a53-c0e0c5d6b9c2",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2311435974,
      "longitude": 30.2460816235
    }
  },
  "27a2daf2-22f4-4e14-82d9-5a5bb64fa335": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 11",
      "id": "27a2daf2-22f4-4e14-82d9-5a5bb64fa335",
      "kilometrage": 1321,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "27a2daf2-22f4-4e14-82d9-5a5bb64fa335",
    "image": "perev_right",
    "point": {
      "latitude": 53.1030842478,
      "longitude": 30.0697003196
    }
  },
  "280a0bc1-f75e-4568-9b48-dd5b4cb4a6f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый 12м",
      "id": "280a0bc1-f75e-4568-9b48-dd5b4cb4a6f0",
      "kilometrage": 1050,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "280a0bc1-f75e-4568-9b48-dd5b4cb4a6f0",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7613405858,
      "longitude": 30.6289455106
    }
  },
  "280a4802-0adf-4b65-a99d-6ae7a8fd4946": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 171",
      "id": "280a4802-0adf-4b65-a99d-6ae7a8fd4946",
      "kilometrage": 1306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "280a4802-0adf-4b65-a99d-6ae7a8fd4946",
    "image": "perev_right",
    "point": {
      "latitude": 53.0128003521,
      "longitude": 30.0334000869
    }
  },
  "289281f0-07b6-4cd4-8b53-faa55e03f45f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 177",
      "id": "289281f0-07b6-4cd4-8b53-faa55e03f45f",
      "kilometrage": 1418,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "289281f0-07b6-4cd4-8b53-faa55e03f45f",
    "image": "perev_left",
    "point": {
      "latitude": 53.4426431655,
      "longitude": 30.3431857159
    }
  },
  "289d9aab-e732-4d7f-95a4-3a0f5aa97817": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "289d9aab-e732-4d7f-95a4-3a0f5aa97817",
      "kilometrage": 1187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "289d9aab-e732-4d7f-95a4-3a0f5aa97817",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4370915034,
      "longitude": 30.3765088506
    }
  },
  "28c3833f-ac03-4815-99c0-6035b55c3a7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 46",
      "id": "28c3833f-ac03-4815-99c0-6035b55c3a7c",
      "kilometrage": 1467,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "28c3833f-ac03-4815-99c0-6035b55c3a7c",
    "image": "perev_right",
    "point": {
      "latitude": 53.6564916383,
      "longitude": 30.2967382963
    }
  },
  "29081edd-e58c-4f75-8e3b-1174f32f3c1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1050",
      "id": "29081edd-e58c-4f75-8e3b-1174f32f3c1a",
      "kilometrage": 1050,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29081edd-e58c-4f75-8e3b-1174f32f3c1a",
    "image": "kilometrage",
    "point": {
      "latitude": 51.761693125,
      "longitude": 30.6326566
    }
  },
  "2966f151-1a2f-4247-876f-b8d55e10b998": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 196",
      "id": "2966f151-1a2f-4247-876f-b8d55e10b998",
      "kilometrage": 1429,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2966f151-1a2f-4247-876f-b8d55e10b998",
    "image": "perev_right",
    "point": {
      "latitude": 53.4874949266,
      "longitude": 30.3056784255
    }
  },
  "29924eb2-bd9e-4ca8-85d4-f03d655ff269": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 8а",
      "id": "29924eb2-bd9e-4ca8-85d4-f03d655ff269",
      "kilometrage": 1055,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "29924eb2-bd9e-4ca8-85d4-f03d655ff269",
    "image": "perev_right",
    "point": {
      "latitude": 51.7815763655,
      "longitude": 30.6314693156
    }
  },
  "2a1ddec8-6068-4669-a128-0ceb4a04daf0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 21",
      "id": "2a1ddec8-6068-4669-a128-0ceb4a04daf0",
      "kilometrage": 1452,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a1ddec8-6068-4669-a128-0ceb4a04daf0",
    "image": "perev_left",
    "point": {
      "latitude": 53.5868823905,
      "longitude": 30.263840248
    }
  },
  "2a5ab4fa-d3e0-4da7-984b-b2df7e2c03c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 114",
      "id": "2a5ab4fa-d3e0-4da7-984b-b2df7e2c03c4",
      "kilometrage": 1264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2a5ab4fa-d3e0-4da7-984b-b2df7e2c03c4",
    "image": "perev_right",
    "point": {
      "latitude": 52.8119116158,
      "longitude": 30.0985538061
    }
  },
  "2b1521a1-6205-497b-921e-b2a5a992a099": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 80Б",
      "id": "2b1521a1-6205-497b-921e-b2a5a992a099",
      "kilometrage": 1122,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b1521a1-6205-497b-921e-b2a5a992a099",
    "image": "perev_right",
    "point": {
      "latitude": 52.1386769182,
      "longitude": 30.666688564
    }
  },
  "2b1a90c9-20d6-48c6-b97d-8b3970c9f71b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 144",
      "id": "2b1a90c9-20d6-48c6-b97d-8b3970c9f71b",
      "kilometrage": 1290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b1a90c9-20d6-48c6-b97d-8b3970c9f71b",
    "image": "perev_left",
    "point": {
      "latitude": 52.9524822212,
      "longitude": 30.0513978951
    }
  },
  "2b2bf634-6d85-4784-aed8-301b45c9ae6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 142",
      "id": "2b2bf634-6d85-4784-aed8-301b45c9ae6f",
      "kilometrage": 1289,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b2bf634-6d85-4784-aed8-301b45c9ae6f",
    "image": "perev_left",
    "point": {
      "latitude": 52.9401725484,
      "longitude": 30.0542141955
    }
  },
  "2b323830-d675-4edd-aea1-767c8596c434": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 135",
      "id": "2b323830-d675-4edd-aea1-767c8596c434",
      "kilometrage": 1393,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b323830-d675-4edd-aea1-767c8596c434",
    "image": "perev_right",
    "point": {
      "latitude": 53.3016665505,
      "longitude": 30.3664300391
    }
  },
  "2b3ecf9d-7d20-42e4-bfe6-9f529ecb4128": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 123",
      "id": "2b3ecf9d-7d20-42e4-bfe6-9f529ecb4128",
      "kilometrage": 1271,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b3ecf9d-7d20-42e4-bfe6-9f529ecb4128",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.850466065,
      "longitude": 30.0635355984
    }
  },
  "2b492057-3f81-4148-8645-9ea8edc504a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 121",
      "id": "2b492057-3f81-4148-8645-9ea8edc504a9",
      "kilometrage": 1525,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b492057-3f81-4148-8645-9ea8edc504a9",
    "image": "perev_right",
    "point": {
      "latitude": 53.9875869716,
      "longitude": 30.3926060954
    }
  },
  "2b4b7db1-ed9e-428b-8900-7727ba649bb8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 36",
      "id": "2b4b7db1-ed9e-428b-8900-7727ba649bb8",
      "kilometrage": 1333,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b4b7db1-ed9e-428b-8900-7727ba649bb8",
    "image": "perev_right",
    "point": {
      "latitude": 53.1137628274,
      "longitude": 30.1500963092
    }
  },
  "2b6ec118-b074-44b7-a03a-2abdedbf6b1c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 100",
      "id": "2b6ec118-b074-44b7-a03a-2abdedbf6b1c",
      "kilometrage": 1160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2b6ec118-b074-44b7-a03a-2abdedbf6b1c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3267289437,
      "longitude": 30.5185689141
    }
  },
  "2bbc4268-b3d7-432d-9ed8-9c684ff2f5c2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 192",
      "id": "2bbc4268-b3d7-432d-9ed8-9c684ff2f5c2",
      "kilometrage": 1426,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2bbc4268-b3d7-432d-9ed8-9c684ff2f5c2",
    "image": "perev_right",
    "point": {
      "latitude": 53.4799407611,
      "longitude": 30.3149700176
    }
  },
  "2bc09854-ef1f-470e-9393-67d441892819": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 134",
      "id": "2bc09854-ef1f-470e-9393-67d441892819",
      "kilometrage": 1188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2bc09854-ef1f-470e-9393-67d441892819",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4442008069,
      "longitude": 30.3742657993
    }
  },
  "2c541823-eb16-4acc-8fa1-c413fb4921d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 6",
      "id": "2c541823-eb16-4acc-8fa1-c413fb4921d8",
      "kilometrage": 1317,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c541823-eb16-4acc-8fa1-c413fb4921d8",
    "image": "perev_left",
    "point": {
      "latitude": 53.0785828436,
      "longitude": 30.0645973536
    }
  },
  "2c612176-af21-4c27-9e9d-3587e877c16e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1460",
      "id": "2c612176-af21-4c27-9e9d-3587e877c16e",
      "kilometrage": 1460,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2c612176-af21-4c27-9e9d-3587e877c16e",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6175055198,
      "longitude": 30.2838220887
    }
  },
  "2cbf8021-5e01-412f-a67e-ef32f96776af": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "2cbf8021-5e01-412f-a67e-ef32f96776af",
      "kilometrage": 1287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cbf8021-5e01-412f-a67e-ef32f96776af",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.9234196907,
      "longitude": 30.0457709124
    }
  },
  "2cce6a4d-854a-4b16-8d16-1a2c70d424f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "2cce6a4d-854a-4b16-8d16-1a2c70d424f0",
      "kilometrage": 1570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2cce6a4d-854a-4b16-8d16-1a2c70d424f0",
    "image": "bridge_low",
    "point": {
      "latitude": 54.3192928594,
      "longitude": 30.28106287
    }
  },
  "2ce98d5f-ed7f-4688-a456-9de6c643793b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 3",
      "id": "2ce98d5f-ed7f-4688-a456-9de6c643793b",
      "kilometrage": 1493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2ce98d5f-ed7f-4688-a456-9de6c643793b",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8251569737,
      "longitude": 30.2761887962
    }
  },
  "2da3eeb8-4481-4833-864d-75687551699a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 163",
      "id": "2da3eeb8-4481-4833-864d-75687551699a",
      "kilometrage": 1409,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2da3eeb8-4481-4833-864d-75687551699a",
    "image": "perev_left",
    "point": {
      "latitude": 53.3949109406,
      "longitude": 30.3535682707
    }
  },
  "2df70ce5-d273-4bc1-be65-a3f516197710": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 180",
      "id": "2df70ce5-d273-4bc1-be65-a3f516197710",
      "kilometrage": 1419,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2df70ce5-d273-4bc1-be65-a3f516197710",
    "image": "perev_left",
    "point": {
      "latitude": 53.4467027619,
      "longitude": 30.3377305827
    }
  },
  "2e163ff8-9dfa-40a6-9c19-eb3442f75949": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 48",
      "id": "2e163ff8-9dfa-40a6-9c19-eb3442f75949",
      "kilometrage": 1341,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e163ff8-9dfa-40a6-9c19-eb3442f75949",
    "image": "perev_right",
    "point": {
      "latitude": 53.0821739251,
      "longitude": 30.2073509628
    }
  },
  "2e3e1890-81d7-4967-8752-0dc9aad5c045": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 116",
      "id": "2e3e1890-81d7-4967-8752-0dc9aad5c045",
      "kilometrage": 1521,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e3e1890-81d7-4967-8752-0dc9aad5c045",
    "image": "perev_left",
    "point": {
      "latitude": 53.958781097,
      "longitude": 30.4010326608
    }
  },
  "2e7c07b8-5700-4e43-94c5-ee704550937b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 23",
      "id": "2e7c07b8-5700-4e43-94c5-ee704550937b",
      "kilometrage": 1326,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2e7c07b8-5700-4e43-94c5-ee704550937b",
    "image": "perev_right",
    "point": {
      "latitude": 53.1167229584,
      "longitude": 30.1109491016
    }
  },
  "2f1db56e-65a8-4bd6-b122-34ac7059fb06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 83",
      "id": "2f1db56e-65a8-4bd6-b122-34ac7059fb06",
      "kilometrage": 1492,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f1db56e-65a8-4bd6-b122-34ac7059fb06",
    "image": "perev_left",
    "point": {
      "latitude": 53.8179611268,
      "longitude": 30.2815269119
    }
  },
  "2f21711d-9b41-4258-b63f-b8c22f099e53": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 174",
      "id": "2f21711d-9b41-4258-b63f-b8c22f099e53",
      "kilometrage": 1307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f21711d-9b41-4258-b63f-b8c22f099e53",
    "image": "perev_left",
    "point": {
      "latitude": 53.0202810124,
      "longitude": 30.0248189837
    }
  },
  "2f2f5e4b-6de8-4190-aea9-d9272cac7292": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 20",
      "id": "2f2f5e4b-6de8-4190-aea9-d9272cac7292",
      "kilometrage": 1452,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f2f5e4b-6de8-4190-aea9-d9272cac7292",
    "image": "perev_right",
    "point": {
      "latitude": 53.5839496692,
      "longitude": 30.2612730725
    }
  },
  "2f7ee71d-149e-49e9-8e6f-7be4cfdd5839": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 4",
      "id": "2f7ee71d-149e-49e9-8e6f-7be4cfdd5839",
      "kilometrage": 1569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "2f7ee71d-149e-49e9-8e6f-7be4cfdd5839",
    "image": "buyo_left",
    "point": {
      "latitude": 54.3143617443,
      "longitude": 30.2738948513
    }
  },
  "301ca8fb-b4a2-49ee-873a-8b8e1de4d6a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 102",
      "id": "301ca8fb-b4a2-49ee-873a-8b8e1de4d6a7",
      "kilometrage": 1509,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "301ca8fb-b4a2-49ee-873a-8b8e1de4d6a7",
    "image": "perev_left",
    "point": {
      "latitude": 53.8904625344,
      "longitude": 30.4091917096
    }
  },
  "303ea242-4ce1-4113-8124-630d966d1d29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 50",
      "id": "303ea242-4ce1-4113-8124-630d966d1d29",
      "kilometrage": 1082,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "303ea242-4ce1-4113-8124-630d966d1d29",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9359219276,
      "longitude": 30.8095024015
    }
  },
  "309b4f33-64fa-46f4-a1e8-bee731dbe089": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 105",
      "id": "309b4f33-64fa-46f4-a1e8-bee731dbe089",
      "kilometrage": 1260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "309b4f33-64fa-46f4-a1e8-bee731dbe089",
    "image": "perev_right",
    "point": {
      "latitude": 52.7879279005,
      "longitude": 30.1047449859
    }
  },
  "30c791ef-8b05-4588-8dfe-8189ab8e6ae1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "30c791ef-8b05-4588-8dfe-8189ab8e6ae1",
      "kilometrage": 1571,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30c791ef-8b05-4588-8dfe-8189ab8e6ae1",
    "image": "perev_right",
    "point": {
      "latitude": 54.3276560037,
      "longitude": 30.2825269831
    }
  },
  "30d4be32-1041-43f6-9e69-dd595ae40e20": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 4",
      "id": "30d4be32-1041-43f6-9e69-dd595ae40e20",
      "kilometrage": 1264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "30d4be32-1041-43f6-9e69-dd595ae40e20",
    "image": "buyo_left",
    "point": {
      "latitude": 52.8176689685,
      "longitude": 30.0949716821
    }
  },
  "311a9c08-29c9-4784-b5ae-b65b1d89b96a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 94",
      "id": "311a9c08-29c9-4784-b5ae-b65b1d89b96a",
      "kilometrage": 1504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "311a9c08-29c9-4784-b5ae-b65b1d89b96a",
    "image": "perev_left",
    "point": {
      "latitude": 53.8849473903,
      "longitude": 30.3381767345
    }
  },
  "319ab20a-9b37-492c-8ff4-485a5a2465ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "319ab20a-9b37-492c-8ff4-485a5a2465ad",
      "kilometrage": 1171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "319ab20a-9b37-492c-8ff4-485a5a2465ad",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3718910136,
      "longitude": 30.4334407636
    }
  },
  "3296b336-f649-4b7e-970d-1d06c3d460e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "3296b336-f649-4b7e-970d-1d06c3d460e3",
      "kilometrage": 1287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3296b336-f649-4b7e-970d-1d06c3d460e3",
    "image": "axis_romb",
    "point": {
      "latitude": 52.9283328437,
      "longitude": 30.0453849466
    }
  },
  "32a02455-06d9-4dc4-ab4b-15e8fc91b3ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 115",
      "id": "32a02455-06d9-4dc4-ab4b-15e8fc91b3ac",
      "kilometrage": 1383,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32a02455-06d9-4dc4-ab4b-15e8fc91b3ac",
    "image": "perev_left",
    "point": {
      "latitude": 53.2476280317,
      "longitude": 30.3568205138
    }
  },
  "32b0d1ff-49dd-4c16-ab7a-60e51cc0ce33": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 202",
      "id": "32b0d1ff-49dd-4c16-ab7a-60e51cc0ce33",
      "kilometrage": 1432,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32b0d1ff-49dd-4c16-ab7a-60e51cc0ce33",
    "image": "perev_right",
    "point": {
      "latitude": 53.4968705371,
      "longitude": 30.2956774151
    }
  },
  "32b7ceb3-64e4-4034-95cb-0737b45fea71": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 166",
      "id": "32b7ceb3-64e4-4034-95cb-0737b45fea71",
      "kilometrage": 1411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "32b7ceb3-64e4-4034-95cb-0737b45fea71",
    "image": "perev_right",
    "point": {
      "latitude": 53.4033277755,
      "longitude": 30.3402040637
    }
  },
  "330ea980-3fde-45d4-850f-4dca37e9d943": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 44",
      "id": "330ea980-3fde-45d4-850f-4dca37e9d943",
      "kilometrage": 1092,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "330ea980-3fde-45d4-850f-4dca37e9d943",
    "image": "perev_right",
    "point": {
      "latitude": 51.9931399311,
      "longitude": 30.772248889
    }
  },
  "3323c4e4-94b4-4289-81fb-48a51b7b7fe5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3323c4e4-94b4-4289-81fb-48a51b7b7fe5",
      "kilometrage": 1144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3323c4e4-94b4-4289-81fb-48a51b7b7fe5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2340639122,
      "longitude": 30.5409601955
    }
  },
  "3368550d-ce89-4d33-b385-333c107f5dbd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 41",
      "id": "3368550d-ce89-4d33-b385-333c107f5dbd",
      "kilometrage": 1465,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3368550d-ce89-4d33-b385-333c107f5dbd",
    "image": "perev_left",
    "point": {
      "latitude": 53.6450925398,
      "longitude": 30.2900888938
    }
  },
  "342c9606-af36-437d-b09a-da3c73979209": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 144",
      "id": "342c9606-af36-437d-b09a-da3c73979209",
      "kilometrage": 1172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "342c9606-af36-437d-b09a-da3c73979209",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.3793465616,
      "longitude": 30.4331238759
    }
  },
  "34330fb0-7266-4923-8ac9-e59bcfa6d6aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 72",
      "id": "34330fb0-7266-4923-8ac9-e59bcfa6d6aa",
      "kilometrage": 1115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34330fb0-7266-4923-8ac9-e59bcfa6d6aa",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.1058487114,
      "longitude": 30.7204002185
    }
  },
  "345c0b7c-5f08-46af-976e-9e87d6a4bcbc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 161",
      "id": "345c0b7c-5f08-46af-976e-9e87d6a4bcbc",
      "kilometrage": 1184,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "345c0b7c-5f08-46af-976e-9e87d6a4bcbc",
    "image": "perev_right",
    "point": {
      "latitude": 52.4165640669,
      "longitude": 30.3738820186
    }
  },
  "346cf785-e6b3-4615-9ccc-9e2a20d4ab0e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 141",
      "id": "346cf785-e6b3-4615-9ccc-9e2a20d4ab0e",
      "kilometrage": 1396,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "346cf785-e6b3-4615-9ccc-9e2a20d4ab0e",
    "image": "perev_left",
    "point": {
      "latitude": 53.3202766561,
      "longitude": 30.3585967546
    }
  },
  "34838be5-7b6b-4d7d-b1f0-55234d8c5d6d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "34838be5-7b6b-4d7d-b1f0-55234d8c5d6d",
      "kilometrage": 1553,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34838be5-7b6b-4d7d-b1f0-55234d8c5d6d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.2001368245,
      "longitude": 30.3129304048
    }
  },
  "34de8c39-214b-4262-b7d4-23f280dc441e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "34de8c39-214b-4262-b7d4-23f280dc441e",
      "kilometrage": 1152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34de8c39-214b-4262-b7d4-23f280dc441e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2852432915,
      "longitude": 30.5520317285
    }
  },
  "34e7d2de-4318-4926-96a4-491e8fb902c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 24",
      "id": "34e7d2de-4318-4926-96a4-491e8fb902c3",
      "kilometrage": 1064,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34e7d2de-4318-4926-96a4-491e8fb902c3",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8268676369,
      "longitude": 30.6885728436
    }
  },
  "34f553e8-f502-4cfa-86d0-5275caf7c7d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 142",
      "id": "34f553e8-f502-4cfa-86d0-5275caf7c7d0",
      "kilometrage": 1398,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "34f553e8-f502-4cfa-86d0-5275caf7c7d0",
    "image": "perev_right",
    "point": {
      "latitude": 53.3305640139,
      "longitude": 30.3555022325
    }
  },
  "351abcdc-8adf-4806-a637-a526083130ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 81",
      "id": "351abcdc-8adf-4806-a637-a526083130ac",
      "kilometrage": 1123,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "351abcdc-8adf-4806-a637-a526083130ac",
    "image": "perev_right",
    "point": {
      "latitude": 52.1423532248,
      "longitude": 30.6562286876
    }
  },
  "353d995d-137c-4214-8f0c-50548d5d2680": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 172",
      "id": "353d995d-137c-4214-8f0c-50548d5d2680",
      "kilometrage": 1414,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "353d995d-137c-4214-8f0c-50548d5d2680",
    "image": "perev_right",
    "point": {
      "latitude": 53.4182942173,
      "longitude": 30.3208401406
    }
  },
  "35687e81-2186-4a9e-829c-539f82362b61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый 14в",
      "id": "35687e81-2186-4a9e-829c-539f82362b61",
      "kilometrage": 1050,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35687e81-2186-4a9e-829c-539f82362b61",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7613677485,
      "longitude": 30.625687373
    }
  },
  "356b510c-9220-40fb-a0f9-2790b614af83": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 85",
      "id": "356b510c-9220-40fb-a0f9-2790b614af83",
      "kilometrage": 1127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "356b510c-9220-40fb-a0f9-2790b614af83",
    "image": "perev_right",
    "point": {
      "latitude": 52.1646694593,
      "longitude": 30.6152734324
    }
  },
  "358c3f90-0198-47ab-a8ad-d602a2e7ccba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "358c3f90-0198-47ab-a8ad-d602a2e7ccba",
      "kilometrage": 1207,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "358c3f90-0198-47ab-a8ad-d602a2e7ccba",
    "image": "perev_left",
    "point": {
      "latitude": 52.5497985105,
      "longitude": 30.2537603633
    }
  },
  "35d96a01-f2b5-4076-9afc-a08c30166c6a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 163",
      "id": "35d96a01-f2b5-4076-9afc-a08c30166c6a",
      "kilometrage": 1185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "35d96a01-f2b5-4076-9afc-a08c30166c6a",
    "image": "perev_left",
    "point": {
      "latitude": 52.4225285919,
      "longitude": 30.3737382581
    }
  },
  "36106afc-d713-4d55-8cc9-cc7e96f5fa0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 150",
      "id": "36106afc-d713-4d55-8cc9-cc7e96f5fa0a",
      "kilometrage": 1402,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "36106afc-d713-4d55-8cc9-cc7e96f5fa0a",
    "image": "perev_right",
    "point": {
      "latitude": 53.3496611108,
      "longitude": 30.3686429878
    }
  },
  "3644b0fe-2d44-4b54-a8ec-e90f6b73fd4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "3644b0fe-2d44-4b54-a8ec-e90f6b73fd4b",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3644b0fe-2d44-4b54-a8ec-e90f6b73fd4b",
    "image": "axis_romb",
    "point": {
      "latitude": 53.8846756088,
      "longitude": 30.3122206761
    }
  },
  "365d6c72-a584-45e6-a3e1-551803432043": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "365d6c72-a584-45e6-a3e1-551803432043",
      "kilometrage": 1505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "365d6c72-a584-45e6-a3e1-551803432043",
    "image": "name_of",
    "point": {
      "latitude": 53.8894897115,
      "longitude": 30.3519087834
    }
  },
  "367947fe-00c9-4d22-bd46-942a1a9e253c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "367947fe-00c9-4d22-bd46-942a1a9e253c",
      "kilometrage": 1573,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "367947fe-00c9-4d22-bd46-942a1a9e253c",
    "image": "perev_left",
    "point": {
      "latitude": 54.3393588997,
      "longitude": 30.3150659044
    }
  },
  "3679d415-2718-487c-92fa-ce1c3258f3d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 109",
      "id": "3679d415-2718-487c-92fa-ce1c3258f3d9",
      "kilometrage": 1516,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3679d415-2718-487c-92fa-ce1c3258f3d9",
    "image": "perev_left",
    "point": {
      "latitude": 53.9292028973,
      "longitude": 30.4430788825
    }
  },
  "36b0d51b-91c6-4bf9-b0e3-6e4d82e993c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 43",
      "id": "36b0d51b-91c6-4bf9-b0e3-6e4d82e993c9",
      "kilometrage": 1466,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "36b0d51b-91c6-4bf9-b0e3-6e4d82e993c9",
    "image": "perev_right",
    "point": {
      "latitude": 53.6512367834,
      "longitude": 30.2960197652
    }
  },
  "374de08e-8b52-4ce0-bfd1-b03a3ced2a07": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 139",
      "id": "374de08e-8b52-4ce0-bfd1-b03a3ced2a07",
      "kilometrage": 1395,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "374de08e-8b52-4ce0-bfd1-b03a3ced2a07",
    "image": "perev_left",
    "point": {
      "latitude": 53.310760232,
      "longitude": 30.3598782259
    }
  },
  "384eec31-3d86-4e8f-a191-b69c53ef69c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 145",
      "id": "384eec31-3d86-4e8f-a191-b69c53ef69c4",
      "kilometrage": 1290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "384eec31-3d86-4e8f-a191-b69c53ef69c4",
    "image": "perev_right",
    "point": {
      "latitude": 52.953874791,
      "longitude": 30.0484938708
    }
  },
  "38833a83-af9b-4b9c-9c1a-0aeb3fac065e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 10",
      "id": "38833a83-af9b-4b9c-9c1a-0aeb3fac065e",
      "kilometrage": 1320,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "38833a83-af9b-4b9c-9c1a-0aeb3fac065e",
    "image": "perev_left",
    "point": {
      "latitude": 53.0980588196,
      "longitude": 30.0734011119
    }
  },
  "38937fc7-1c4a-40ce-91e0-ae8db5e3edb2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 35м",
      "id": "38937fc7-1c4a-40ce-91e0-ae8db5e3edb2",
      "kilometrage": 1073,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "38937fc7-1c4a-40ce-91e0-ae8db5e3edb2",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9019429897,
      "longitude": 30.7450552687
    }
  },
  "38d085e8-feb4-4c7c-bade-885044037418": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1300",
      "id": "38d085e8-feb4-4c7c-bade-885044037418",
      "kilometrage": 1300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "38d085e8-feb4-4c7c-bade-885044037418",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9826478053,
      "longitude": 30.0501562389
    }
  },
  "39361751-9a35-41e6-bc43-06cf66d9afa1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 47",
      "id": "39361751-9a35-41e6-bc43-06cf66d9afa1",
      "kilometrage": 1341,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39361751-9a35-41e6-bc43-06cf66d9afa1",
    "image": "perev_left",
    "point": {
      "latitude": 53.0802855489,
      "longitude": 30.2021670527
    }
  },
  "3949400c-b9fc-4c21-8b2b-e3735c06262d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 127",
      "id": "3949400c-b9fc-4c21-8b2b-e3735c06262d",
      "kilometrage": 1177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3949400c-b9fc-4c21-8b2b-e3735c06262d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3845932995,
      "longitude": 30.3919812417
    }
  },
  "3985808d-ef49-4cb5-b14a-3bc9f19f8516": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 4",
      "id": "3985808d-ef49-4cb5-b14a-3bc9f19f8516",
      "kilometrage": 1495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3985808d-ef49-4cb5-b14a-3bc9f19f8516",
    "image": "buyo_right",
    "point": {
      "latitude": 53.844815294,
      "longitude": 30.2747114201
    }
  },
  "399bea51-a829-4077-8655-f07e9fb409fb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 72",
      "id": "399bea51-a829-4077-8655-f07e9fb409fb",
      "kilometrage": 1104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "399bea51-a829-4077-8655-f07e9fb409fb",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0279809657,
      "longitude": 30.7336335652
    }
  },
  "39a644f1-41a7-4f7b-8709-44d24b146865": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 179",
      "id": "39a644f1-41a7-4f7b-8709-44d24b146865",
      "kilometrage": 1419,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39a644f1-41a7-4f7b-8709-44d24b146865",
    "image": "perev_right",
    "point": {
      "latitude": 53.4449789284,
      "longitude": 30.3328044629
    }
  },
  "39c3f37d-6445-4d6b-9f00-85362c00d5bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 59",
      "id": "39c3f37d-6445-4d6b-9f00-85362c00d5bd",
      "kilometrage": 1087,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39c3f37d-6445-4d6b-9f00-85362c00d5bd",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9741738639,
      "longitude": 30.7920802773
    }
  },
  "39df0ad4-7702-440c-b113-55bfd8da1864": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 141",
      "id": "39df0ad4-7702-440c-b113-55bfd8da1864",
      "kilometrage": 1288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "39df0ad4-7702-440c-b113-55bfd8da1864",
    "image": "perev_left",
    "point": {
      "latitude": 52.9358696817,
      "longitude": 30.0523943595
    }
  },
  "3b13887d-e420-49f5-8964-241a42187a23": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 104",
      "id": "3b13887d-e420-49f5-8964-241a42187a23",
      "kilometrage": 1259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3b13887d-e420-49f5-8964-241a42187a23",
    "image": "perev_left",
    "point": {
      "latitude": 52.7820200046,
      "longitude": 30.1207544986
    }
  },
  "3bbc6fa9-1db4-4267-a8de-04775b9f5510": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 34",
      "id": "3bbc6fa9-1db4-4267-a8de-04775b9f5510",
      "kilometrage": 1223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3bbc6fa9-1db4-4267-a8de-04775b9f5510",
    "image": "perev_right",
    "point": {
      "latitude": 52.6346395447,
      "longitude": 30.2258157988
    }
  },
  "3c01e649-34db-4666-94e8-04cf5b2d05a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 82",
      "id": "3c01e649-34db-4666-94e8-04cf5b2d05a3",
      "kilometrage": 1490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c01e649-34db-4666-94e8-04cf5b2d05a3",
    "image": "perev_right",
    "point": {
      "latitude": 53.800109302,
      "longitude": 30.2714101819
    }
  },
  "3c778315-5620-4edb-8d98-335b78e51097": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3c778315-5620-4edb-8d98-335b78e51097",
      "kilometrage": 1554,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c778315-5620-4edb-8d98-335b78e51097",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.2057262621,
      "longitude": 30.3079967305
    }
  },
  "3c8827a4-b574-4523-9543-e1c840010928": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 118",
      "id": "3c8827a4-b574-4523-9543-e1c840010928",
      "kilometrage": 1149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3c8827a4-b574-4523-9543-e1c840010928",
    "image": "perev_right",
    "point": {
      "latitude": 52.2673836768,
      "longitude": 30.5420257238
    }
  },
  "3ccb45fe-50d0-4390-a137-cb28833bcd94": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 94",
      "id": "3ccb45fe-50d0-4390-a137-cb28833bcd94",
      "kilometrage": 1370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ccb45fe-50d0-4390-a137-cb28833bcd94",
    "image": "perev_right",
    "point": {
      "latitude": 53.2382586772,
      "longitude": 30.2475793273
    }
  },
  "3cf1dd6b-a4a8-4b04-a2e9-415b1e8be525": {
    "data": {
      "color": false,
      "comment": "отвутствует",
      "description": "Якорь не бросать  ",
      "id": "3cf1dd6b-a4a8-4b04-a2e9-415b1e8be525",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3cf1dd6b-a4a8-4b04-a2e9-415b1e8be525",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.88708115836914,
      "longitude": 30.332368120869944
    }
  },
  "3d002dae-b67d-4cff-a83b-985f98846a82": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 59",
      "id": "3d002dae-b67d-4cff-a83b-985f98846a82",
      "kilometrage": 1475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d002dae-b67d-4cff-a83b-985f98846a82",
    "image": "perev_right",
    "point": {
      "latitude": 53.7040074548,
      "longitude": 30.3040866217
    }
  },
  "3d017883-4694-455c-a833-09e9cfcb5299": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый 5м",
      "id": "3d017883-4694-455c-a833-09e9cfcb5299",
      "kilometrage": 1049,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d017883-4694-455c-a833-09e9cfcb5299",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7660191363,
      "longitude": 30.6444984992
    }
  },
  "3d14ecc2-5479-42cd-a652-209b88b37750": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 34",
      "id": "3d14ecc2-5479-42cd-a652-209b88b37750",
      "kilometrage": 1460,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d14ecc2-5479-42cd-a652-209b88b37750",
    "image": "perev_right",
    "point": {
      "latitude": 53.6183153421,
      "longitude": 30.2828876371
    }
  },
  "3d1e6caf-f4db-43cc-b901-3d2171c7eb4f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 114",
      "id": "3d1e6caf-f4db-43cc-b901-3d2171c7eb4f",
      "kilometrage": 1519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3d1e6caf-f4db-43cc-b901-3d2171c7eb4f",
    "image": "perev_left",
    "point": {
      "latitude": 53.9517488877,
      "longitude": 30.4164360427
    }
  },
  "3dbeec34-e446-40d4-8d70-dd461b62849a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 8",
      "id": "3dbeec34-e446-40d4-8d70-dd461b62849a",
      "kilometrage": 1054,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dbeec34-e446-40d4-8d70-dd461b62849a",
    "image": "perev_left",
    "point": {
      "latitude": 51.7735516208,
      "longitude": 30.631577051
    }
  },
  "3dd2edc7-3680-4e7e-bbca-5ad5bb8d8fc8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "3dd2edc7-3680-4e7e-bbca-5ad5bb8d8fc8",
      "kilometrage": 1260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dd2edc7-3680-4e7e-bbca-5ad5bb8d8fc8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.786901459,
      "longitude": 30.105550719
    }
  },
  "3de1252c-a118-4a1c-9abd-89ed44d9c5a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 179",
      "id": "3de1252c-a118-4a1c-9abd-89ed44d9c5a4",
      "kilometrage": 1198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3de1252c-a118-4a1c-9abd-89ed44d9c5a4",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.490795114,
      "longitude": 30.2833484817
    }
  },
  "3dee97e5-68a8-4e54-a445-4a98c5ca7b95": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 81",
      "id": "3dee97e5-68a8-4e54-a445-4a98c5ca7b95",
      "kilometrage": 1362,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dee97e5-68a8-4e54-a445-4a98c5ca7b95",
    "image": "perev_right",
    "point": {
      "latitude": 53.1705327783,
      "longitude": 30.2548240277
    }
  },
  "3dfcf150-6924-4cce-9565-aa1f2968e861": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 19",
      "id": "3dfcf150-6924-4cce-9565-aa1f2968e861",
      "kilometrage": 1451,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3dfcf150-6924-4cce-9565-aa1f2968e861",
    "image": "perev_right",
    "point": {
      "latitude": 53.5785678513,
      "longitude": 30.2674836239
    }
  },
  "3e35bb0d-2056-42ea-a000-1fc6940bb910": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 57",
      "id": "3e35bb0d-2056-42ea-a000-1fc6940bb910",
      "kilometrage": 1237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e35bb0d-2056-42ea-a000-1fc6940bb910",
    "image": "perev_right",
    "point": {
      "latitude": 52.6733190691,
      "longitude": 30.205512194
    }
  },
  "3e469708-f902-4cbf-bf66-a7c76b59e8a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 81",
      "id": "3e469708-f902-4cbf-bf66-a7c76b59e8a2",
      "kilometrage": 1125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3e469708-f902-4cbf-bf66-a7c76b59e8a2",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1526862304,
      "longitude": 30.6421913717
    }
  },
  "3eb5144f-58b8-4d6d-a2f6-169698da0b49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 140А",
      "id": "3eb5144f-58b8-4d6d-a2f6-169698da0b49",
      "kilometrage": 1167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3eb5144f-58b8-4d6d-a2f6-169698da0b49",
    "image": "perev_right",
    "point": {
      "latitude": 52.3371556515,
      "longitude": 30.4615247946
    }
  },
  "3ec91781-cd71-4b79-8b36-845c9c994a07": {
    "data": {
      "color": false,
      "comment": "изменить на буй",
      "description": "Перевальный знак правый 105",
      "id": "3ec91781-cd71-4b79-8b36-845c9c994a07",
      "kilometrage": 1514,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3ec91781-cd71-4b79-8b36-845c9c994a07",
    "image": "perev_right",
    "point": {
      "latitude": 53.911981747887616,
      "longitude": 30.44986314414814
    }
  },
  "3f2ab1c7-933c-4161-bc6d-e8503d5b0ce9": {
    "data": {
      "color": false,
      "comment": "Отсутствует",
      "description": "Якорь не бросать  ",
      "id": "3f2ab1c7-933c-4161-bc6d-e8503d5b0ce9",
      "kilometrage": 1504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f2ab1c7-933c-4161-bc6d-e8503d5b0ce9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8848400908,
      "longitude": 30.3394101836
    }
  },
  "3f8597cf-1e19-4184-81c6-d7b40d39bbfc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 15",
      "id": "3f8597cf-1e19-4184-81c6-d7b40d39bbfc",
      "kilometrage": 1323,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3f8597cf-1e19-4184-81c6-d7b40d39bbfc",
    "image": "perev_right",
    "point": {
      "latitude": 53.1159782846,
      "longitude": 30.0776935871
    }
  },
  "3faa9bf9-8035-4bd1-9f9d-4d756a26b5cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1225",
      "id": "3faa9bf9-8035-4bd1-9f9d-4d756a26b5cf",
      "kilometrage": 1225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "3faa9bf9-8035-4bd1-9f9d-4d756a26b5cf",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6454128347,
      "longitude": 30.2072087356
    }
  },
  "40902ab4-fbae-4bd5-b0bd-ac3f748f3251": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 205",
      "id": "40902ab4-fbae-4bd5-b0bd-ac3f748f3251",
      "kilometrage": 1434,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40902ab4-fbae-4bd5-b0bd-ac3f748f3251",
    "image": "perev_right",
    "point": {
      "latitude": 53.5012178758,
      "longitude": 30.2966145801
    }
  },
  "40ff9625-ab13-4492-be77-17686ef50c54": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "40ff9625-ab13-4492-be77-17686ef50c54",
      "kilometrage": 1288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "40ff9625-ab13-4492-be77-17686ef50c54",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.9348090191,
      "longitude": 30.0511679896
    }
  },
  "411f55b6-6d15-41be-9c15-927dba8d9775": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 115",
      "id": "411f55b6-6d15-41be-9c15-927dba8d9775",
      "kilometrage": 1520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "411f55b6-6d15-41be-9c15-927dba8d9775",
    "image": "perev_right",
    "point": {
      "latitude": 53.9551562377,
      "longitude": 30.4048359323
    }
  },
  "4134302a-8124-4f09-8e95-b99675486af9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 170",
      "id": "4134302a-8124-4f09-8e95-b99675486af9",
      "kilometrage": 1191,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4134302a-8124-4f09-8e95-b99675486af9",
    "image": "perev_left",
    "point": {
      "latitude": 52.4582884615,
      "longitude": 30.3481983311
    }
  },
  "417654b4-0311-4f33-b7ae-0b5abd32d7d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1475",
      "id": "417654b4-0311-4f33-b7ae-0b5abd32d7d5",
      "kilometrage": 1475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "417654b4-0311-4f33-b7ae-0b5abd32d7d5",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7035619187,
      "longitude": 30.303451931
    }
  },
  "418542aa-63fc-440c-9261-d57705edc839": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "418542aa-63fc-440c-9261-d57705edc839",
      "kilometrage": 1083,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "418542aa-63fc-440c-9261-d57705edc839",
    "image": "name_of",
    "point": {
      "latitude": 51.946704746,
      "longitude": 30.8072104538
    }
  },
  "41b0e464-9b4d-4f8b-b8ec-1a6999fddfde": {
    "data": {
      "color": false,
      "comment": "Отсутствует ",
      "description": "Левый буй 16",
      "id": "41b0e464-9b4d-4f8b-b8ec-1a6999fddfde",
      "kilometrage": 1504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "41b0e464-9b4d-4f8b-b8ec-1a6999fddfde",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8881596349,
      "longitude": 30.3468614133
    }
  },
  "426a56ed-54e0-45ed-81a3-1d912efe2568": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "426a56ed-54e0-45ed-81a3-1d912efe2568",
      "kilometrage": 1557,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "426a56ed-54e0-45ed-81a3-1d912efe2568",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.2291694669,
      "longitude": 30.2938018897
    }
  },
  "42a88b1c-7a6b-474a-8075-152f8536b90f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 94",
      "id": "42a88b1c-7a6b-474a-8075-152f8536b90f",
      "kilometrage": 1132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42a88b1c-7a6b-474a-8075-152f8536b90f",
    "image": "perev_left",
    "point": {
      "latitude": 52.1998918923,
      "longitude": 30.5962962894
    }
  },
  "42dce910-d331-4c59-9728-dba8d0ce4553": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 143",
      "id": "42dce910-d331-4c59-9728-dba8d0ce4553",
      "kilometrage": 1290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "42dce910-d331-4c59-9728-dba8d0ce4553",
    "image": "perev_right",
    "point": {
      "latitude": 52.9496252389,
      "longitude": 30.0492538107
    }
  },
  "430f7571-51f6-4262-8a22-6ea6fea2cadf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 131",
      "id": "430f7571-51f6-4262-8a22-6ea6fea2cadf",
      "kilometrage": 1157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "430f7571-51f6-4262-8a22-6ea6fea2cadf",
    "image": "perev_left",
    "point": {
      "latitude": 52.3166356787,
      "longitude": 30.5493809657
    }
  },
  "435872a2-b62e-4b57-9687-a46e9fb13192": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "435872a2-b62e-4b57-9687-a46e9fb13192",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "435872a2-b62e-4b57-9687-a46e9fb13192",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3215415651,
      "longitude": 30.5307398607
    }
  },
  "43ce4624-3010-4714-aee9-e589dda1a625": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 107",
      "id": "43ce4624-3010-4714-aee9-e589dda1a625",
      "kilometrage": 1143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "43ce4624-3010-4714-aee9-e589dda1a625",
    "image": "perev_left",
    "point": {
      "latitude": 52.2285098671,
      "longitude": 30.54914114
    }
  },
  "4403eae8-3e1f-4d2d-a633-0a9a1a1bfb40": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1125",
      "id": "4403eae8-3e1f-4d2d-a633-0a9a1a1bfb40",
      "kilometrage": 1125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4403eae8-3e1f-4d2d-a633-0a9a1a1bfb40",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1528673641,
      "longitude": 30.6405189161
    }
  },
  "4413c1a9-86a3-4ba4-8155-bd2975a4f378": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 16",
      "id": "4413c1a9-86a3-4ba4-8155-bd2975a4f378",
      "kilometrage": 1449,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4413c1a9-86a3-4ba4-8155-bd2975a4f378",
    "image": "perev_right",
    "point": {
      "latitude": 53.5697779132,
      "longitude": 30.2734753576
    }
  },
  "443a2b3a-cb90-4b5b-a8f7-443daf6a8c6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 138",
      "id": "443a2b3a-cb90-4b5b-a8f7-443daf6a8c6f",
      "kilometrage": 1194,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "443a2b3a-cb90-4b5b-a8f7-443daf6a8c6f",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4740488852,
      "longitude": 30.3029095821
    }
  },
  "44bb042e-9820-4709-8667-d075efdbc2a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый 102м",
      "id": "44bb042e-9820-4709-8667-d075efdbc2a1",
      "kilometrage": 1166,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44bb042e-9820-4709-8667-d075efdbc2a1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3374057679,
      "longitude": 30.4709066943
    }
  },
  "44d57bc3-8f83-4138-8263-aa4e1e49e107": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "44d57bc3-8f83-4138-8263-aa4e1e49e107",
      "kilometrage": 1313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "44d57bc3-8f83-4138-8263-aa4e1e49e107",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.0530353031,
      "longitude": 30.026476184
    }
  },
  "45593c0f-d04a-46d5-8847-9c21186a7b48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1160",
      "id": "45593c0f-d04a-46d5-8847-9c21186a7b48",
      "kilometrage": 1160,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45593c0f-d04a-46d5-8847-9c21186a7b48",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3285347172,
      "longitude": 30.5176296784
    }
  },
  "45d86fd7-97ab-47b1-b718-badd8832a94a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "45d86fd7-97ab-47b1-b718-badd8832a94a",
      "kilometrage": 1316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45d86fd7-97ab-47b1-b718-badd8832a94a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.0700744892,
      "longitude": 30.0538769624
    }
  },
  "45da36ba-d98d-415b-b9e1-d97d1415d936": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 12",
      "id": "45da36ba-d98d-415b-b9e1-d97d1415d936",
      "kilometrage": 1447,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "45da36ba-d98d-415b-b9e1-d97d1415d936",
    "image": "perev_right",
    "point": {
      "latitude": 53.551092801,
      "longitude": 30.2573669117
    }
  },
  "4616e2eb-73f3-4f16-8a3d-598d96e86f14": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 65",
      "id": "4616e2eb-73f3-4f16-8a3d-598d96e86f14",
      "kilometrage": 1478,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4616e2eb-73f3-4f16-8a3d-598d96e86f14",
    "image": "perev_right",
    "point": {
      "latitude": 53.7156549318,
      "longitude": 30.2805245704
    }
  },
  "4647b22f-aaa5-4243-a9d8-834c8a703d18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 34",
      "id": "4647b22f-aaa5-4243-a9d8-834c8a703d18",
      "kilometrage": 1085,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4647b22f-aaa5-4243-a9d8-834c8a703d18",
    "image": "perev_right",
    "point": {
      "latitude": 51.959923381,
      "longitude": 30.7942976308
    }
  },
  "4681a28c-d47d-4069-b324-8cf5d375f008": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 23",
      "id": "4681a28c-d47d-4069-b324-8cf5d375f008",
      "kilometrage": 1217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4681a28c-d47d-4069-b324-8cf5d375f008",
    "image": "perev_left",
    "point": {
      "latitude": 52.6073898355,
      "longitude": 30.2814805262
    }
  },
  "46a71393-62ae-40c0-8e9d-d28bd0dec529": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 169",
      "id": "46a71393-62ae-40c0-8e9d-d28bd0dec529",
      "kilometrage": 1304,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "46a71393-62ae-40c0-8e9d-d28bd0dec529",
    "image": "perev_left",
    "point": {
      "latitude": 53.0168248265,
      "longitude": 30.0525165563
    }
  },
  "474c9cda-18bf-4d21-9cef-b83e7c960252": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 46",
      "id": "474c9cda-18bf-4d21-9cef-b83e7c960252",
      "kilometrage": 1093,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "474c9cda-18bf-4d21-9cef-b83e7c960252",
    "image": "perev_left",
    "point": {
      "latitude": 51.9988882932,
      "longitude": 30.7849995395
    }
  },
  "477a9947-2b23-46ff-9446-69268ee6b8eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 99",
      "id": "477a9947-2b23-46ff-9446-69268ee6b8eb",
      "kilometrage": 1375,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "477a9947-2b23-46ff-9446-69268ee6b8eb",
    "image": "perev_left",
    "point": {
      "latitude": 53.2414736023,
      "longitude": 30.266837895
    }
  },
  "4782dceb-0692-45b7-b613-5104c180e867": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 162",
      "id": "4782dceb-0692-45b7-b613-5104c180e867",
      "kilometrage": 1408,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4782dceb-0692-45b7-b613-5104c180e867",
    "image": "perev_right",
    "point": {
      "latitude": 53.3892024287,
      "longitude": 30.3524455105
    }
  },
  "47b1db58-ef6a-47ec-ae3d-ea43fd611d46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1060",
      "id": "47b1db58-ef6a-47ec-ae3d-ea43fd611d46",
      "kilometrage": 1060,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47b1db58-ef6a-47ec-ae3d-ea43fd611d46",
    "image": "kilometrage",
    "point": {
      "latitude": 51.8075001305,
      "longitude": 30.6625774317
    }
  },
  "47f7ead9-3b94-4b30-87e5-e713b187bc22": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 109",
      "id": "47f7ead9-3b94-4b30-87e5-e713b187bc22",
      "kilometrage": 1170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "47f7ead9-3b94-4b30-87e5-e713b187bc22",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3592967945,
      "longitude": 30.4443058277
    }
  },
  "4808748f-6ce9-46e9-a011-b56c70ced59b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый передний  ",
      "id": "4808748f-6ce9-46e9-a011-b56c70ced59b",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4808748f-6ce9-46e9-a011-b56c70ced59b",
    "image": "raid_start_left",
    "point": {
      "latitude": 53.8730895341,
      "longitude": 30.2927508069
    }
  },
  "483b8d85-475c-4900-bfc1-4682121841e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 2",
      "id": "483b8d85-475c-4900-bfc1-4682121841e7",
      "kilometrage": 1559,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "483b8d85-475c-4900-bfc1-4682121841e7",
    "image": "buyo_left",
    "point": {
      "latitude": 54.2401621732,
      "longitude": 30.2896641548
    }
  },
  "489651e5-644f-4dc5-98e8-f78cb116a823": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 27",
      "id": "489651e5-644f-4dc5-98e8-f78cb116a823",
      "kilometrage": 1456,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "489651e5-644f-4dc5-98e8-f78cb116a823",
    "image": "perev_right",
    "point": {
      "latitude": 53.599713747,
      "longitude": 30.2837323557
    }
  },
  "48ac3f7a-02e8-4c3c-9ab2-06db64472c78": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "48ac3f7a-02e8-4c3c-9ab2-06db64472c78",
      "kilometrage": 1494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48ac3f7a-02e8-4c3c-9ab2-06db64472c78",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8348006471,
      "longitude": 30.2737841112
    }
  },
  "48e71604-215e-4068-9157-ee9801f87568": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 37",
      "id": "48e71604-215e-4068-9157-ee9801f87568",
      "kilometrage": 1462,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "48e71604-215e-4068-9157-ee9801f87568",
    "image": "perev_left",
    "point": {
      "latitude": 53.6337506849,
      "longitude": 30.2908572203
    }
  },
  "492090b6-0166-42ad-a02e-6c9198c6f87d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 96",
      "id": "492090b6-0166-42ad-a02e-6c9198c6f87d",
      "kilometrage": 1134,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "492090b6-0166-42ad-a02e-6c9198c6f87d",
    "image": "perev_right",
    "point": {
      "latitude": 52.2009175478,
      "longitude": 30.578015592
    }
  },
  "49543189-71c3-4d5b-910d-77b8220ac443": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1265",
      "id": "49543189-71c3-4d5b-910d-77b8220ac443",
      "kilometrage": 1265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49543189-71c3-4d5b-910d-77b8220ac443",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8196956917,
      "longitude": 30.0916647177
    }
  },
  "49b0943c-0b3b-4c17-87be-b9e9d3d43faa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1295",
      "id": "49b0943c-0b3b-4c17-87be-b9e9d3d43faa",
      "kilometrage": 1295,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "49b0943c-0b3b-4c17-87be-b9e9d3d43faa",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9673221856,
      "longitude": 30.0494948808
    }
  },
  "4a34420c-14c9-4047-a2d8-0227a418fb81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 54м",
      "id": "4a34420c-14c9-4047-a2d8-0227a418fb81",
      "kilometrage": 1083,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a34420c-14c9-4047-a2d8-0227a418fb81",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9445365711,
      "longitude": 30.8071301868
    }
  },
  "4a4bbbe6-7909-4c34-899f-3b8c2f15409d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "4a4bbbe6-7909-4c34-899f-3b8c2f15409d",
      "kilometrage": 1447,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a4bbbe6-7909-4c34-899f-3b8c2f15409d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.5485407494,
      "longitude": 30.2552574428
    }
  },
  "4a4ff994-bdd6-42fc-91a9-80126cc8efcc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 86",
      "id": "4a4ff994-bdd6-42fc-91a9-80126cc8efcc",
      "kilometrage": 1128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4a4ff994-bdd6-42fc-91a9-80126cc8efcc",
    "image": "perev_right",
    "point": {
      "latitude": 52.1690416741,
      "longitude": 30.6095131258
    }
  },
  "4ab23a82-90f3-457c-ad13-1227ec87da96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 84",
      "id": "4ab23a82-90f3-457c-ad13-1227ec87da96",
      "kilometrage": 1364,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ab23a82-90f3-457c-ad13-1227ec87da96",
    "image": "perev_left",
    "point": {
      "latitude": 53.1843026685,
      "longitude": 30.2565324573
    }
  },
  "4b025be2-5bb3-4b62-8697-79e38ad3bb57": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 136",
      "id": "4b025be2-5bb3-4b62-8697-79e38ad3bb57",
      "kilometrage": 1283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b025be2-5bb3-4b62-8697-79e38ad3bb57",
    "image": "perev_left",
    "point": {
      "latitude": 52.9013544574,
      "longitude": 30.0692705051
    }
  },
  "4b432fef-fb7a-4ee7-8f0a-e229a9e95f52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 73",
      "id": "4b432fef-fb7a-4ee7-8f0a-e229a9e95f52",
      "kilometrage": 1245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4b432fef-fb7a-4ee7-8f0a-e229a9e95f52",
    "image": "perev_left",
    "point": {
      "latitude": 52.7078535101,
      "longitude": 30.1691439723
    }
  },
  "4bb4b255-617f-4cab-8885-ac2083538519": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 143",
      "id": "4bb4b255-617f-4cab-8885-ac2083538519",
      "kilometrage": 1171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bb4b255-617f-4cab-8885-ac2083538519",
    "image": "perev_left",
    "point": {
      "latitude": 52.3705724913,
      "longitude": 30.4368813384
    }
  },
  "4bd270e2-679f-4499-9020-dcb6fda7edd8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4bd270e2-679f-4499-9020-dcb6fda7edd8",
      "kilometrage": 1280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bd270e2-679f-4499-9020-dcb6fda7edd8",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8813386687,
      "longitude": 30.0739749835
    }
  },
  "4bd35646-2953-41b4-a1b7-8fdd018b709b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 109",
      "id": "4bd35646-2953-41b4-a1b7-8fdd018b709b",
      "kilometrage": 1381,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4bd35646-2953-41b4-a1b7-8fdd018b709b",
    "image": "perev_right",
    "point": {
      "latitude": 53.2509939425,
      "longitude": 30.3392246235
    }
  },
  "4c001f09-3fae-478c-b9c3-81dc9868df00": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 155",
      "id": "4c001f09-3fae-478c-b9c3-81dc9868df00",
      "kilometrage": 1404,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c001f09-3fae-478c-b9c3-81dc9868df00",
    "image": "perev_left",
    "point": {
      "latitude": 53.3621345143,
      "longitude": 30.3679538963
    }
  },
  "4c35423f-9dae-4597-a024-a1eda8d21b7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "4c35423f-9dae-4597-a024-a1eda8d21b7a",
      "kilometrage": 1570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c35423f-9dae-4597-a024-a1eda8d21b7a",
    "image": "perev_left",
    "point": {
      "latitude": 54.3221765641,
      "longitude": 30.2836968062
    }
  },
  "4c7b90e1-993e-4d46-8660-e7058a9f66d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 121",
      "id": "4c7b90e1-993e-4d46-8660-e7058a9f66d7",
      "kilometrage": 1151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4c7b90e1-993e-4d46-8660-e7058a9f66d7",
    "image": "perev_left",
    "point": {
      "latitude": 52.2788074382,
      "longitude": 30.5466404826
    }
  },
  "4cc9ca60-32f6-4308-86ed-726d337137ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 105",
      "id": "4cc9ca60-32f6-4308-86ed-726d337137ae",
      "kilometrage": 1141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4cc9ca60-32f6-4308-86ed-726d337137ae",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.2247861947,
      "longitude": 30.5704453743
    }
  },
  "4cd1f4e0-f276-4fe5-93d9-6d378c438592": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 212",
      "id": "4cd1f4e0-f276-4fe5-93d9-6d378c438592",
      "kilometrage": 1438,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4cd1f4e0-f276-4fe5-93d9-6d378c438592",
    "image": "perev_right",
    "point": {
      "latitude": 53.5092431611,
      "longitude": 30.2637882063
    }
  },
  "4d111796-d810-4622-b58d-ae2f0be3f3a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 44",
      "id": "4d111796-d810-4622-b58d-ae2f0be3f3a8",
      "kilometrage": 1229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d111796-d810-4622-b58d-ae2f0be3f3a8",
    "image": "perev_left",
    "point": {
      "latitude": 52.666406855,
      "longitude": 30.2340104269
    }
  },
  "4d908030-c474-470d-8e93-2b9f949491b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "4d908030-c474-470d-8e93-2b9f949491b3",
      "kilometrage": 1439,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d908030-c474-470d-8e93-2b9f949491b3",
    "image": "axis_romb",
    "point": {
      "latitude": 53.5186485909,
      "longitude": 30.2700149633
    }
  },
  "4d950ca5-b31e-4064-b789-31cba58beaf6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 19",
      "id": "4d950ca5-b31e-4064-b789-31cba58beaf6",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4d950ca5-b31e-4064-b789-31cba58beaf6",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8945790784,
      "longitude": 30.3841818984
    }
  },
  "4db65ac5-634e-4d2f-b5c7-dbb36a6d1202": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4db65ac5-634e-4d2f-b5c7-dbb36a6d1202",
      "kilometrage": 1492,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4db65ac5-634e-4d2f-b5c7-dbb36a6d1202",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8141749289,
      "longitude": 30.2820868433
    }
  },
  "4de59400-c090-4c98-8f5f-547d8028c45c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 4",
      "id": "4de59400-c090-4c98-8f5f-547d8028c45c",
      "kilometrage": 1048,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4de59400-c090-4c98-8f5f-547d8028c45c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7621715525,
      "longitude": 30.6494253787
    }
  },
  "4e15e9d2-8db3-4af3-aa3b-93751a938d7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 128",
      "id": "4e15e9d2-8db3-4af3-aa3b-93751a938d7b",
      "kilometrage": 1275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e15e9d2-8db3-4af3-aa3b-93751a938d7b",
    "image": "perev_left",
    "point": {
      "latitude": 52.8612272133,
      "longitude": 30.09210325
    }
  },
  "4e1e83ec-e09d-4917-b4cf-f9ba2fccfe29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1495",
      "id": "4e1e83ec-e09d-4917-b4cf-f9ba2fccfe29",
      "kilometrage": 1495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e1e83ec-e09d-4917-b4cf-f9ba2fccfe29",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8385841238,
      "longitude": 30.2794494005
    }
  },
  "4e4fb81c-cb1b-4294-86d8-eaac2b10a373": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 111",
      "id": "4e4fb81c-cb1b-4294-86d8-eaac2b10a373",
      "kilometrage": 1145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e4fb81c-cb1b-4294-86d8-eaac2b10a373",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.2458742641,
      "longitude": 30.5274381809
    }
  },
  "4e53b3f0-b279-4cba-8676-104b9c4e6ea6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 77",
      "id": "4e53b3f0-b279-4cba-8676-104b9c4e6ea6",
      "kilometrage": 1119,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4e53b3f0-b279-4cba-8676-104b9c4e6ea6",
    "image": "perev_left",
    "point": {
      "latitude": 52.1258674892,
      "longitude": 30.6981410205
    }
  },
  "4ea0fbe1-d5e8-4a81-97b0-14fdd91dcf06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 199",
      "id": "4ea0fbe1-d5e8-4a81-97b0-14fdd91dcf06",
      "kilometrage": 1430,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4ea0fbe1-d5e8-4a81-97b0-14fdd91dcf06",
    "image": "perev_left",
    "point": {
      "latitude": 53.4959066295,
      "longitude": 30.3050817007
    }
  },
  "4eb49ffb-014d-4a50-923c-5ba3e78a43a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 154",
      "id": "4eb49ffb-014d-4a50-923c-5ba3e78a43a1",
      "kilometrage": 1404,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4eb49ffb-014d-4a50-923c-5ba3e78a43a1",
    "image": "perev_right",
    "point": {
      "latitude": 53.3613465207,
      "longitude": 30.3606121835
    }
  },
  "4f05c47e-7718-461a-9331-221f38bb314f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 82",
      "id": "4f05c47e-7718-461a-9331-221f38bb314f",
      "kilometrage": 1362,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4f05c47e-7718-461a-9331-221f38bb314f",
    "image": "perev_left",
    "point": {
      "latitude": 53.1740321666,
      "longitude": 30.2581037198
    }
  },
  "4f643fc5-4415-47df-b2cc-4b9b64516320": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 108",
      "id": "4f643fc5-4415-47df-b2cc-4b9b64516320",
      "kilometrage": 1261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4f643fc5-4415-47df-b2cc-4b9b64516320",
    "image": "perev_left",
    "point": {
      "latitude": 52.7923713786,
      "longitude": 30.1052606865
    }
  },
  "4f6c6c7c-e22f-4cad-a0f8-cb2f7229cb15": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 64",
      "id": "4f6c6c7c-e22f-4cad-a0f8-cb2f7229cb15",
      "kilometrage": 1477,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4f6c6c7c-e22f-4cad-a0f8-cb2f7229cb15",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.7066554457,
      "longitude": 30.285699588
    }
  },
  "4f91e8d1-d06e-4a2b-a8bb-e1a210d2e0d9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "4f91e8d1-d06e-4a2b-a8bb-e1a210d2e0d9",
      "kilometrage": 1172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4f91e8d1-d06e-4a2b-a8bb-e1a210d2e0d9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3731362954,
      "longitude": 30.4373416791
    }
  },
  "4fbb5071-3698-4010-ad2f-8f51b47f3877": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 24",
      "id": "4fbb5071-3698-4010-ad2f-8f51b47f3877",
      "kilometrage": 1327,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4fbb5071-3698-4010-ad2f-8f51b47f3877",
    "image": "perev_left",
    "point": {
      "latitude": 53.1152141484,
      "longitude": 30.1230029151
    }
  },
  "4fd1dae2-3df2-42fa-b252-1492e132a56f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 18",
      "id": "4fd1dae2-3df2-42fa-b252-1492e132a56f",
      "kilometrage": 1053,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "4fd1dae2-3df2-42fa-b252-1492e132a56f",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7718072567,
      "longitude": 30.6204353723
    }
  },
  "508fcb09-23fc-461f-a6fd-8c524221d8a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1055",
      "id": "508fcb09-23fc-461f-a6fd-8c524221d8a5",
      "kilometrage": 1055,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "508fcb09-23fc-461f-a6fd-8c524221d8a5",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7839978684,
      "longitude": 30.6336411866
    }
  },
  "50ae3d36-3434-407a-acc5-eed3bf7b1f34": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 164",
      "id": "50ae3d36-3434-407a-acc5-eed3bf7b1f34",
      "kilometrage": 1411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50ae3d36-3434-407a-acc5-eed3bf7b1f34",
    "image": "perev_left",
    "point": {
      "latitude": 53.4072899077,
      "longitude": 30.3465071184
    }
  },
  "50daacc2-5fb2-4a53-aa8f-dc78c9044804": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 72",
      "id": "50daacc2-5fb2-4a53-aa8f-dc78c9044804",
      "kilometrage": 1244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50daacc2-5fb2-4a53-aa8f-dc78c9044804",
    "image": "perev_right",
    "point": {
      "latitude": 52.7118866055,
      "longitude": 30.1720985074
    }
  },
  "50f0a871-7f2c-4c3b-95ff-87294fe093ea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 113",
      "id": "50f0a871-7f2c-4c3b-95ff-87294fe093ea",
      "kilometrage": 1264,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "50f0a871-7f2c-4c3b-95ff-87294fe093ea",
    "image": "perev_right",
    "point": {
      "latitude": 52.8101598661,
      "longitude": 30.1008879992
    }
  },
  "51166e5b-5df9-431c-bf85-a6b0fa0f2e9b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 169",
      "id": "51166e5b-5df9-431c-bf85-a6b0fa0f2e9b",
      "kilometrage": 1190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51166e5b-5df9-431c-bf85-a6b0fa0f2e9b",
    "image": "perev_left",
    "point": {
      "latitude": 52.4546540729,
      "longitude": 30.3517638384
    }
  },
  "511f1985-0a49-4a76-a8a9-cb5f33805fa4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 65",
      "id": "511f1985-0a49-4a76-a8a9-cb5f33805fa4",
      "kilometrage": 1241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "511f1985-0a49-4a76-a8a9-cb5f33805fa4",
    "image": "perev_right",
    "point": {
      "latitude": 52.6940763997,
      "longitude": 30.182212741
    }
  },
  "51675924-93f5-4317-b893-dabc1a46d720": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 103",
      "id": "51675924-93f5-4317-b893-dabc1a46d720",
      "kilometrage": 1378,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51675924-93f5-4317-b893-dabc1a46d720",
    "image": "perev_right",
    "point": {
      "latitude": 53.2476300401,
      "longitude": 30.3034517398
    }
  },
  "51ec6885-4a42-4d2a-a6ca-acd4ce5c64f9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 88",
      "id": "51ec6885-4a42-4d2a-a6ca-acd4ce5c64f9",
      "kilometrage": 1497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "51ec6885-4a42-4d2a-a6ca-acd4ce5c64f9",
    "image": "perev_left",
    "point": {
      "latitude": 53.8569230957,
      "longitude": 30.2793429473
    }
  },
  "525b1deb-2e7e-452e-83f0-12e9af3f08f3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "525b1deb-2e7e-452e-83f0-12e9af3f08f3",
      "kilometrage": 1530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "525b1deb-2e7e-452e-83f0-12e9af3f08f3",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.0306023709,
      "longitude": 30.3878337377
    }
  },
  "5280e7c6-c23f-47bf-a689-6672062d2575": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "5280e7c6-c23f-47bf-a689-6672062d2575",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5280e7c6-c23f-47bf-a689-6672062d2575",
    "image": "main_way",
    "point": {
      "latitude": 53.8736471039,
      "longitude": 30.2935773989
    }
  },
  "52cb45ca-f99e-49bd-800b-a191b7fd8821": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 1",
      "id": "52cb45ca-f99e-49bd-800b-a191b7fd8821",
      "kilometrage": 1487,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "52cb45ca-f99e-49bd-800b-a191b7fd8821",
    "image": "buyo_left",
    "point": {
      "latitude": 53.7801831931,
      "longitude": 30.2809216247
    }
  },
  "53150e82-d826-48fd-93a6-f8bb422ce10f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 139м",
      "id": "53150e82-d826-48fd-93a6-f8bb422ce10f",
      "kilometrage": 1196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53150e82-d826-48fd-93a6-f8bb422ce10f",
    "image": "buyo_left",
    "point": {
      "latitude": 52.4895247841,
      "longitude": 30.3083607582
    }
  },
  "534033e4-3402-4d1c-bb28-3a1efe6bc932": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 1",
      "id": "534033e4-3402-4d1c-bb28-3a1efe6bc932",
      "kilometrage": 1246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "534033e4-3402-4d1c-bb28-3a1efe6bc932",
    "image": "buyo_right",
    "point": {
      "latitude": 52.7066220145,
      "longitude": 30.1494293216
    }
  },
  "534988ca-85b4-450d-82f5-1069b3510436": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 87",
      "id": "534988ca-85b4-450d-82f5-1069b3510436",
      "kilometrage": 1251,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "534988ca-85b4-450d-82f5-1069b3510436",
    "image": "perev_left",
    "point": {
      "latitude": 52.7311858723,
      "longitude": 30.1350352893
    }
  },
  "537301c5-4862-4246-95dc-270e8403e627": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 130",
      "id": "537301c5-4862-4246-95dc-270e8403e627",
      "kilometrage": 1390,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "537301c5-4862-4246-95dc-270e8403e627",
    "image": "perev_right",
    "point": {
      "latitude": 53.2814478522,
      "longitude": 30.3799077572
    }
  },
  "53aff195-678b-4b2b-8c3e-8038c5742132": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 143",
      "id": "53aff195-678b-4b2b-8c3e-8038c5742132",
      "kilometrage": 1398,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53aff195-678b-4b2b-8c3e-8038c5742132",
    "image": "perev_right",
    "point": {
      "latitude": 53.3352605594,
      "longitude": 30.360303446
    }
  },
  "53bd2c08-f425-420d-b2c3-90c7790df89d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 137А",
      "id": "53bd2c08-f425-420d-b2c3-90c7790df89d",
      "kilometrage": 1164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "53bd2c08-f425-420d-b2c3-90c7790df89d",
    "image": "perev_left",
    "point": {
      "latitude": 52.3236080688,
      "longitude": 30.4889682718
    }
  },
  "54a2a126-cc44-4aba-8640-2c294428ebb7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 117",
      "id": "54a2a126-cc44-4aba-8640-2c294428ebb7",
      "kilometrage": 1148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54a2a126-cc44-4aba-8640-2c294428ebb7",
    "image": "perev_left",
    "point": {
      "latitude": 52.2649742796,
      "longitude": 30.5507234402
    }
  },
  "54c535d7-a05c-4637-96eb-1d0d8c7bf7d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 98",
      "id": "54c535d7-a05c-4637-96eb-1d0d8c7bf7d4",
      "kilometrage": 1372,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54c535d7-a05c-4637-96eb-1d0d8c7bf7d4",
    "image": "perev_left",
    "point": {
      "latitude": 53.2495654657,
      "longitude": 30.2663628388
    }
  },
  "54c677d9-fb55-4d4c-abfd-643c4020b02e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "54c677d9-fb55-4d4c-abfd-643c4020b02e",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "54c677d9-fb55-4d4c-abfd-643c4020b02e",
    "image": "axis_romb",
    "point": {
      "latitude": 52.3230497017,
      "longitude": 30.5265351157
    }
  },
  "559b1084-eb44-49b7-bea3-445c912e6a6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 33",
      "id": "559b1084-eb44-49b7-bea3-445c912e6a6c",
      "kilometrage": 1072,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "559b1084-eb44-49b7-bea3-445c912e6a6c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8902129296,
      "longitude": 30.7313479901
    }
  },
  "55a481d1-510d-4eba-b01f-f8cb2c210f66": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 88",
      "id": "55a481d1-510d-4eba-b01f-f8cb2c210f66",
      "kilometrage": 1137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "55a481d1-510d-4eba-b01f-f8cb2c210f66",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2327183828,
      "longitude": 30.584262605
    }
  },
  "55ccdb1f-f331-4df4-9fd0-a9b6b5998c41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 4",
      "id": "55ccdb1f-f331-4df4-9fd0-a9b6b5998c41",
      "kilometrage": 1442,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "55ccdb1f-f331-4df4-9fd0-a9b6b5998c41",
    "image": "perev_left",
    "point": {
      "latitude": 53.5329151912,
      "longitude": 30.2693852359
    }
  },
  "5626ce44-0d94-43a7-bf50-c4b3a260daac": {
    "data": {
      "color": true,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "5626ce44-0d94-43a7-bf50-c4b3a260daac",
      "kilometrage": 1506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5626ce44-0d94-43a7-bf50-c4b3a260daac",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8899916084,
      "longitude": 30.3748241126
    }
  },
  "5629d276-a713-4e19-b17c-8077233a4ac7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 8",
      "id": "5629d276-a713-4e19-b17c-8077233a4ac7",
      "kilometrage": 1210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5629d276-a713-4e19-b17c-8077233a4ac7",
    "image": "perev_left",
    "point": {
      "latitude": 52.5728791008,
      "longitude": 30.2681491332
    }
  },
  "56664f3a-8df0-421c-b771-0cfae6a7f2b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 13",
      "id": "56664f3a-8df0-421c-b771-0cfae6a7f2b5",
      "kilometrage": 1213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "56664f3a-8df0-421c-b771-0cfae6a7f2b5",
    "image": "perev_left",
    "point": {
      "latitude": 52.5766102281,
      "longitude": 30.2830437036
    }
  },
  "566bf344-b938-4970-a603-e387bf9f3d3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 64",
      "id": "566bf344-b938-4970-a603-e387bf9f3d3e",
      "kilometrage": 1240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "566bf344-b938-4970-a603-e387bf9f3d3e",
    "image": "perev_left",
    "point": {
      "latitude": 52.6925828991,
      "longitude": 30.1899531591
    }
  },
  "57037e86-2533-4970-befd-0f9b784f349c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "57037e86-2533-4970-befd-0f9b784f349c",
      "kilometrage": 1279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57037e86-2533-4970-befd-0f9b784f349c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8738749212,
      "longitude": 30.0792429392
    }
  },
  "572ccce3-4653-4f2c-96f5-318745636464": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 93",
      "id": "572ccce3-4653-4f2c-96f5-318745636464",
      "kilometrage": 1370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "572ccce3-4653-4f2c-96f5-318745636464",
    "image": "perev_left",
    "point": {
      "latitude": 53.2332976771,
      "longitude": 30.2493148009
    }
  },
  "5734cf36-f9e8-4fd9-b14e-c790f3c06170": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5734cf36-f9e8-4fd9-b14e-c790f3c06170",
      "kilometrage": 1193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5734cf36-f9e8-4fd9-b14e-c790f3c06170",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4675160437,
      "longitude": 30.3132639835
    }
  },
  "5744f00e-e5c9-45e9-b68c-41c63739dd37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 129",
      "id": "5744f00e-e5c9-45e9-b68c-41c63739dd37",
      "kilometrage": 1276,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5744f00e-e5c9-45e9-b68c-41c63739dd37",
    "image": "perev_right",
    "point": {
      "latitude": 52.8546333282,
      "longitude": 30.0840771906
    }
  },
  "579ee08e-267b-4ba3-b60c-a800152c5750": {
    "data": {
      "color": false,
      "comment": "отсутствует",
      "description": "Якорь не бросать  ",
      "id": "579ee08e-267b-4ba3-b60c-a800152c5750",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "579ee08e-267b-4ba3-b60c-a800152c5750",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8855799626,
      "longitude": 30.3340330302
    }
  },
  "57e84a9b-e398-4eb5-a076-3cbe01a0168e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 153",
      "id": "57e84a9b-e398-4eb5-a076-3cbe01a0168e",
      "kilometrage": 1296,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "57e84a9b-e398-4eb5-a076-3cbe01a0168e",
    "image": "perev_right",
    "point": {
      "latitude": 52.9709463427,
      "longitude": 30.0396983218
    }
  },
  "5811fe97-a99f-45be-ae0b-33421acb48e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 90",
      "id": "5811fe97-a99f-45be-ae0b-33421acb48e0",
      "kilometrage": 1131,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5811fe97-a99f-45be-ae0b-33421acb48e0",
    "image": "perev_right",
    "point": {
      "latitude": 52.1904253894,
      "longitude": 30.6158275853
    }
  },
  "58945908-6bed-4c81-8808-9245ef2f5055": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1065",
      "id": "58945908-6bed-4c81-8808-9245ef2f5055",
      "kilometrage": 1065,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "58945908-6bed-4c81-8808-9245ef2f5055",
    "image": "kilometrage",
    "point": {
      "latitude": 51.8389811869,
      "longitude": 30.6926823524
    }
  },
  "596f368d-7a9f-46f1-8011-beefd90ad003": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "596f368d-7a9f-46f1-8011-beefd90ad003",
      "kilometrage": 1449,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "596f368d-7a9f-46f1-8011-beefd90ad003",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5664483097,
      "longitude": 30.2717469646
    }
  },
  "5990a161-d21e-4d49-b2e9-26a4f3dd0219": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 133",
      "id": "5990a161-d21e-4d49-b2e9-26a4f3dd0219",
      "kilometrage": 1392,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5990a161-d21e-4d49-b2e9-26a4f3dd0219",
    "image": "perev_left",
    "point": {
      "latitude": 53.2968009193,
      "longitude": 30.3751588912
    }
  },
  "59b979bd-747d-4ba3-b892-c4acf25a38ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 10",
      "id": "59b979bd-747d-4ba3-b892-c4acf25a38ae",
      "kilometrage": 1211,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59b979bd-747d-4ba3-b892-c4acf25a38ae",
    "image": "perev_right",
    "point": {
      "latitude": 52.5778832729,
      "longitude": 30.2588964001
    }
  },
  "59c993d0-2645-46ef-bdcc-20e82cb53ce0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 75",
      "id": "59c993d0-2645-46ef-bdcc-20e82cb53ce0",
      "kilometrage": 1107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "59c993d0-2645-46ef-bdcc-20e82cb53ce0",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0476872491,
      "longitude": 30.7204268483
    }
  },
  "5a324743-b260-46d9-b9f6-a6ea76e70710": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 148",
      "id": "5a324743-b260-46d9-b9f6-a6ea76e70710",
      "kilometrage": 1292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a324743-b260-46d9-b9f6-a6ea76e70710",
    "image": "perev_left",
    "point": {
      "latitude": 52.9559535797,
      "longitude": 30.0683730651
    }
  },
  "5a87f2d9-0dab-4ff1-9849-6b2016943ee8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 86",
      "id": "5a87f2d9-0dab-4ff1-9849-6b2016943ee8",
      "kilometrage": 1495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5a87f2d9-0dab-4ff1-9849-6b2016943ee8",
    "image": "perev_left",
    "point": {
      "latitude": 53.8378012999,
      "longitude": 30.2788655362
    }
  },
  "5aa95865-c312-494c-b8e9-071801b5d2f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 182",
      "id": "5aa95865-c312-494c-b8e9-071801b5d2f1",
      "kilometrage": 1420,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5aa95865-c312-494c-b8e9-071801b5d2f1",
    "image": "perev_right",
    "point": {
      "latitude": 53.4558098187,
      "longitude": 30.3282311714
    }
  },
  "5b47c694-df60-4a0e-9ccb-b6b19ce9c9ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "5b47c694-df60-4a0e-9ccb-b6b19ce9c9ac",
      "kilometrage": 1566,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b47c694-df60-4a0e-9ccb-b6b19ce9c9ac",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.293289821,
      "longitude": 30.2629285268
    }
  },
  "5b959bba-eab6-4e02-8978-5cf4a977a1a1": {
    "data": {
      "color": false,
      "comment": "добавить чуть ниже красный ",
      "description": "Перевальный знак левый 110",
      "id": "5b959bba-eab6-4e02-8978-5cf4a977a1a1",
      "kilometrage": 1517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5b959bba-eab6-4e02-8978-5cf4a977a1a1",
    "image": "perev_left",
    "point": {
      "latitude": 53.934151040628585,
      "longitude": 30.442468878856772
    }
  },
  "5be31bff-c6a4-4489-a718-0f9bf137e8b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 90",
      "id": "5be31bff-c6a4-4489-a718-0f9bf137e8b2",
      "kilometrage": 1253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5be31bff-c6a4-4489-a718-0f9bf137e8b2",
    "image": "perev_right",
    "point": {
      "latitude": 52.7346693109,
      "longitude": 30.110508094
    }
  },
  "5c08a986-1b7a-468c-85e8-34aa37405136": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "5c08a986-1b7a-468c-85e8-34aa37405136",
      "kilometrage": 1407,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c08a986-1b7a-468c-85e8-34aa37405136",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.380904387,
      "longitude": 30.3675909538
    }
  },
  "5c441805-b14a-4533-9032-d35b58e7c563": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 114",
      "id": "5c441805-b14a-4533-9032-d35b58e7c563",
      "kilometrage": 1382,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c441805-b14a-4533-9032-d35b58e7c563",
    "image": "perev_right",
    "point": {
      "latitude": 53.2455929404,
      "longitude": 30.3543471877
    }
  },
  "5c798a19-0450-476b-bf7f-8dad382665fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 132",
      "id": "5c798a19-0450-476b-bf7f-8dad382665fc",
      "kilometrage": 1185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5c798a19-0450-476b-bf7f-8dad382665fc",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4271223955,
      "longitude": 30.3712378324
    }
  },
  "5cd0e925-d800-40a6-80ae-c81852b63e73": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 171",
      "id": "5cd0e925-d800-40a6-80ae-c81852b63e73",
      "kilometrage": 1192,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5cd0e925-d800-40a6-80ae-c81852b63e73",
    "image": "perev_right",
    "point": {
      "latitude": 52.4616602428,
      "longitude": 30.3340044716
    }
  },
  "5cd32d1b-b88c-41f3-8bff-cebf55ca36de": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 6",
      "id": "5cd32d1b-b88c-41f3-8bff-cebf55ca36de",
      "kilometrage": 1498,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5cd32d1b-b88c-41f3-8bff-cebf55ca36de",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8637798063,
      "longitude": 30.2794314338
    }
  },
  "5d0f82bf-1ac5-427c-a7dc-26a8f4dad3ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 131",
      "id": "5d0f82bf-1ac5-427c-a7dc-26a8f4dad3ba",
      "kilometrage": 1391,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5d0f82bf-1ac5-427c-a7dc-26a8f4dad3ba",
    "image": "perev_right",
    "point": {
      "latitude": 53.2883584197,
      "longitude": 30.3747800138
    }
  },
  "5d9b8e06-de5f-476f-bc4f-23f210afdd66": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "5d9b8e06-de5f-476f-bc4f-23f210afdd66",
      "kilometrage": 1152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5d9b8e06-de5f-476f-bc4f-23f210afdd66",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2859472186,
      "longitude": 30.5536580703
    }
  },
  "5dc5bef0-0302-4dcc-861f-aa09e8d451c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 147",
      "id": "5dc5bef0-0302-4dcc-861f-aa09e8d451c1",
      "kilometrage": 1400,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5dc5bef0-0302-4dcc-861f-aa09e8d451c1",
    "image": "perev_left",
    "point": {
      "latitude": 53.3413233319,
      "longitude": 30.3781749898
    }
  },
  "5e0b79d0-8e8b-4d43-9479-53a89fd296d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 191",
      "id": "5e0b79d0-8e8b-4d43-9479-53a89fd296d2",
      "kilometrage": 1426,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5e0b79d0-8e8b-4d43-9479-53a89fd296d2",
    "image": "perev_left",
    "point": {
      "latitude": 53.4839567223,
      "longitude": 30.3195183835
    }
  },
  "5e7610cc-ece5-44a4-9b0c-21794755c9ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 187",
      "id": "5e7610cc-ece5-44a4-9b0c-21794755c9ae",
      "kilometrage": 1204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5e7610cc-ece5-44a4-9b0c-21794755c9ae",
    "image": "perev_right",
    "point": {
      "latitude": 52.5316858984,
      "longitude": 30.2427807889
    }
  },
  "5eaf93d1-52b8-474a-b35b-fb2cdb553530": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 76",
      "id": "5eaf93d1-52b8-474a-b35b-fb2cdb553530",
      "kilometrage": 1110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5eaf93d1-52b8-474a-b35b-fb2cdb553530",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0695302446,
      "longitude": 30.7287683577
    }
  },
  "5ee59919-0505-45dd-9e60-e8b445db906c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 136",
      "id": "5ee59919-0505-45dd-9e60-e8b445db906c",
      "kilometrage": 1393,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ee59919-0505-45dd-9e60-e8b445db906c",
    "image": "perev_left",
    "point": {
      "latitude": 53.3001876994,
      "longitude": 30.3758323597
    }
  },
  "5f9b2981-451b-4288-b096-0eed2008d90c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 78",
      "id": "5f9b2981-451b-4288-b096-0eed2008d90c",
      "kilometrage": 1247,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5f9b2981-451b-4288-b096-0eed2008d90c",
    "image": "perev_left",
    "point": {
      "latitude": 52.7097493598,
      "longitude": 30.1454976848
    }
  },
  "5fcdf20d-e74f-43f9-8f12-219d0789c70c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 153",
      "id": "5fcdf20d-e74f-43f9-8f12-219d0789c70c",
      "kilometrage": 1404,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5fcdf20d-e74f-43f9-8f12-219d0789c70c",
    "image": "perev_right",
    "point": {
      "latitude": 53.3594236621,
      "longitude": 30.366103885
    }
  },
  "5fd93030-3d9d-419e-985c-227e7fde4e7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 71",
      "id": "5fd93030-3d9d-419e-985c-227e7fde4e7d",
      "kilometrage": 1115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5fd93030-3d9d-419e-985c-227e7fde4e7d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1000598723,
      "longitude": 30.7168582283
    }
  },
  "5ff606f1-5f92-40ee-a1ac-2c7ba93961a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1310",
      "id": "5ff606f1-5f92-40ee-a1ac-2c7ba93961a8",
      "kilometrage": 1310,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "5ff606f1-5f92-40ee-a1ac-2c7ba93961a8",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0419176792,
      "longitude": 30.02194533
    }
  },
  "602168f0-1c5d-4f1d-9c7d-af1f5295477d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1360",
      "id": "602168f0-1c5d-4f1d-9c7d-af1f5295477d",
      "kilometrage": 1360,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "602168f0-1c5d-4f1d-9c7d-af1f5295477d",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1554598945,
      "longitude": 30.2696501262
    }
  },
  "6032f0fb-b608-41a6-913e-88d6ced52b63": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 17",
      "id": "6032f0fb-b608-41a6-913e-88d6ced52b63",
      "kilometrage": 1324,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6032f0fb-b608-41a6-913e-88d6ced52b63",
    "image": "perev_left",
    "point": {
      "latitude": 53.1174646006,
      "longitude": 30.0854997275
    }
  },
  "604454f2-d277-4229-9bd2-d47836263c96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1140",
      "id": "604454f2-d277-4229-9bd2-d47836263c96",
      "kilometrage": 1140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "604454f2-d277-4229-9bd2-d47836263c96",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2319882512,
      "longitude": 30.5643481169
    }
  },
  "60533638-303c-4ce6-bb25-ae2753133879": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1155",
      "id": "60533638-303c-4ce6-bb25-ae2753133879",
      "kilometrage": 1155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "60533638-303c-4ce6-bb25-ae2753133879",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3036983244,
      "longitude": 30.5300364802
    }
  },
  "612c39fa-c37c-4f10-8791-ca2e77f75ee3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 81",
      "id": "612c39fa-c37c-4f10-8791-ca2e77f75ee3",
      "kilometrage": 1489,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "612c39fa-c37c-4f10-8791-ca2e77f75ee3",
    "image": "perev_left",
    "point": {
      "latitude": 53.792127416,
      "longitude": 30.2731989523
    }
  },
  "619ad9d8-bcb7-46b6-b0da-9b3f12c08f37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 111",
      "id": "619ad9d8-bcb7-46b6-b0da-9b3f12c08f37",
      "kilometrage": 1517,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "619ad9d8-bcb7-46b6-b0da-9b3f12c08f37",
    "image": "perev_left",
    "point": {
      "latitude": 53.9386248784,
      "longitude": 30.4351713149
    }
  },
  "61be415b-fe0d-4bee-87a4-95fc819586f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 126",
      "id": "61be415b-fe0d-4bee-87a4-95fc819586f4",
      "kilometrage": 1274,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61be415b-fe0d-4bee-87a4-95fc819586f4",
    "image": "perev_left",
    "point": {
      "latitude": 52.8555752541,
      "longitude": 30.1035505016
    }
  },
  "61c9db7e-09ae-4135-b918-d22ec223a763": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 103",
      "id": "61c9db7e-09ae-4135-b918-d22ec223a763",
      "kilometrage": 1139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "61c9db7e-09ae-4135-b918-d22ec223a763",
    "image": "perev_left",
    "point": {
      "latitude": 52.235126212,
      "longitude": 30.5600277043
    }
  },
  "62061534-7efa-473c-8776-46dd175278f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 51",
      "id": "62061534-7efa-473c-8776-46dd175278f5",
      "kilometrage": 1082,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62061534-7efa-473c-8776-46dd175278f5",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9403133592,
      "longitude": 30.8080461513
    }
  },
  "621f7cdf-c0da-44fc-a3d2-39650e4a52f8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1555",
      "id": "621f7cdf-c0da-44fc-a3d2-39650e4a52f8",
      "kilometrage": 1555,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "621f7cdf-c0da-44fc-a3d2-39650e4a52f8",
    "image": "kilometrage",
    "point": {
      "latitude": 54.2085719235,
      "longitude": 30.3051613298
    }
  },
  "62205b6d-639f-4040-a7e8-902e42ba8147": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 137",
      "id": "62205b6d-639f-4040-a7e8-902e42ba8147",
      "kilometrage": 1284,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62205b6d-639f-4040-a7e8-902e42ba8147",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.9076570939,
      "longitude": 30.0718045743
    }
  },
  "62234fe6-45b2-4aba-9a34-b5c08781e38c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 8",
      "id": "62234fe6-45b2-4aba-9a34-b5c08781e38c",
      "kilometrage": 1319,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62234fe6-45b2-4aba-9a34-b5c08781e38c",
    "image": "perev_right",
    "point": {
      "latitude": 53.0894509125,
      "longitude": 30.0703803527
    }
  },
  "6255f7b6-fb06-493c-b297-8aa952efd33a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "6255f7b6-fb06-493c-b297-8aa952efd33a",
      "kilometrage": 1105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6255f7b6-fb06-493c-b297-8aa952efd33a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0355696145,
      "longitude": 30.7425337399
    }
  },
  "62a5b70e-a25d-430c-8712-f400eaba5865": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый 6",
      "id": "62a5b70e-a25d-430c-8712-f400eaba5865",
      "kilometrage": 1570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62a5b70e-a25d-430c-8712-f400eaba5865",
    "image": "buyo_left",
    "point": {
      "latitude": 54.3194967466,
      "longitude": 30.2816890801
    }
  },
  "62b2ce66-5ae9-4159-abff-75b87a118d82": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 118",
      "id": "62b2ce66-5ae9-4159-abff-75b87a118d82",
      "kilometrage": 1267,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62b2ce66-5ae9-4159-abff-75b87a118d82",
    "image": "perev_left",
    "point": {
      "latitude": 52.8360557647,
      "longitude": 30.0929953379
    }
  },
  "62d567bb-eb07-4c80-9ee6-fcb3526aa46b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "62d567bb-eb07-4c80-9ee6-fcb3526aa46b",
      "kilometrage": 1570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62d567bb-eb07-4c80-9ee6-fcb3526aa46b",
    "image": "axis_romb",
    "point": {
      "latitude": 54.3197554882,
      "longitude": 30.2815322156
    }
  },
  "62d5a2a4-cc6f-44aa-9641-fc250a24c981": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 3",
      "id": "62d5a2a4-cc6f-44aa-9641-fc250a24c981",
      "kilometrage": 1316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62d5a2a4-cc6f-44aa-9641-fc250a24c981",
    "image": "perev_right",
    "point": {
      "latitude": 53.0688420199,
      "longitude": 30.0520093766
    }
  },
  "62d72239-9d89-4cae-8ddf-604985422d24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда правый задний  ",
      "id": "62d72239-9d89-4cae-8ddf-604985422d24",
      "kilometrage": 1353,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "62d72239-9d89-4cae-8ddf-604985422d24",
    "image": "raid_end_right",
    "point": {
      "latitude": 53.1264899886,
      "longitude": 30.3010000056
    }
  },
  "63100e27-6ded-4541-97bb-4fe3ec772e10": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 12",
      "id": "63100e27-6ded-4541-97bb-4fe3ec772e10",
      "kilometrage": 1212,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63100e27-6ded-4541-97bb-4fe3ec772e10",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.574372478,
      "longitude": 30.2799253108
    }
  },
  "6315ac26-328c-4a9f-8e90-eb2d9d69df4e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 42",
      "id": "6315ac26-328c-4a9f-8e90-eb2d9d69df4e",
      "kilometrage": 1465,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6315ac26-328c-4a9f-8e90-eb2d9d69df4e",
    "image": "perev_left",
    "point": {
      "latitude": 53.6445902487,
      "longitude": 30.2957366932
    }
  },
  "631eceac-02d3-47a3-83ea-29dc01397e8e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 95",
      "id": "631eceac-02d3-47a3-83ea-29dc01397e8e",
      "kilometrage": 1504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "631eceac-02d3-47a3-83ea-29dc01397e8e",
    "image": "perev_right",
    "point": {
      "latitude": 53.8889149803,
      "longitude": 30.3478522364
    }
  },
  "636ad5a7-ea2a-42db-9f46-b74a1bae1042": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "636ad5a7-ea2a-42db-9f46-b74a1bae1042",
      "kilometrage": 1439,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "636ad5a7-ea2a-42db-9f46-b74a1bae1042",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.5205608821,
      "longitude": 30.2712827537
    }
  },
  "63d89331-a4de-4b6d-ba4f-67381277673f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 39",
      "id": "63d89331-a4de-4b6d-ba4f-67381277673f",
      "kilometrage": 1335,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63d89331-a4de-4b6d-ba4f-67381277673f",
    "image": "perev_right",
    "point": {
      "latitude": 53.104851849,
      "longitude": 30.1750106194
    }
  },
  "63d9f481-ba3c-4667-bf5b-914e149a2211": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1405",
      "id": "63d9f481-ba3c-4667-bf5b-914e149a2211",
      "kilometrage": 1405,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63d9f481-ba3c-4667-bf5b-914e149a2211",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3630939416,
      "longitude": 30.3704516344
    }
  },
  "63dab500-2b95-4161-953e-8500925659f2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 63",
      "id": "63dab500-2b95-4161-953e-8500925659f2",
      "kilometrage": 1108,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "63dab500-2b95-4161-953e-8500925659f2",
    "image": "perev_right",
    "point": {
      "latitude": 52.0543403234,
      "longitude": 30.7196555911
    }
  },
  "640e488d-6d42-4191-b7ae-5682811d4387": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 118",
      "id": "640e488d-6d42-4191-b7ae-5682811d4387",
      "kilometrage": 1522,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "640e488d-6d42-4191-b7ae-5682811d4387",
    "image": "perev_right",
    "point": {
      "latitude": 53.9712754135,
      "longitude": 30.38253813
    }
  },
  "6422f1cf-120e-4778-8b5e-89c27f151bd8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 50",
      "id": "6422f1cf-120e-4778-8b5e-89c27f151bd8",
      "kilometrage": 1232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6422f1cf-120e-4778-8b5e-89c27f151bd8",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.6606798631,
      "longitude": 30.2013983891
    }
  },
  "644ec51f-d09e-4daa-a75c-684c0c63b7ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 27В",
      "id": "644ec51f-d09e-4daa-a75c-684c0c63b7ce",
      "kilometrage": 1077,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "644ec51f-d09e-4daa-a75c-684c0c63b7ce",
    "image": "perev_left",
    "point": {
      "latitude": 51.8965705164,
      "longitude": 30.7930074356
    }
  },
  "64bf6f1b-cc42-40a9-8ac9-69d2d9716f56": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 79",
      "id": "64bf6f1b-cc42-40a9-8ac9-69d2d9716f56",
      "kilometrage": 1247,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64bf6f1b-cc42-40a9-8ac9-69d2d9716f56",
    "image": "perev_right",
    "point": {
      "latitude": 52.7083193195,
      "longitude": 30.1434644875
    }
  },
  "64ecaf23-4e30-48bf-9e58-bc640e1c7c87": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "64ecaf23-4e30-48bf-9e58-bc640e1c7c87",
      "kilometrage": 1333,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "64ecaf23-4e30-48bf-9e58-bc640e1c7c87",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1142242542,
      "longitude": 30.1525759233
    }
  },
  "65945ea9-c687-4c88-a9d6-11eb780420c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 8",
      "id": "65945ea9-c687-4c88-a9d6-11eb780420c9",
      "kilometrage": 1282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65945ea9-c687-4c88-a9d6-11eb780420c9",
    "image": "buyo_left",
    "point": {
      "latitude": 52.8943489989,
      "longitude": 30.0657418533
    }
  },
  "65e6d819-76bf-4be2-95c9-98fd20756c9b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 87",
      "id": "65e6d819-76bf-4be2-95c9-98fd20756c9b",
      "kilometrage": 1495,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "65e6d819-76bf-4be2-95c9-98fd20756c9b",
    "image": "perev_left",
    "point": {
      "latitude": 53.841020615,
      "longitude": 30.2794639519
    }
  },
  "663c8216-78de-486f-af98-6161302f56a3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 104",
      "id": "663c8216-78de-486f-af98-6161302f56a3",
      "kilometrage": 1140,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "663c8216-78de-486f-af98-6161302f56a3",
    "image": "perev_right",
    "point": {
      "latitude": 52.2291384509,
      "longitude": 30.5688425969
    }
  },
  "6653e13e-f5aa-4593-8a2f-584b6c5378fe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 53",
      "id": "6653e13e-f5aa-4593-8a2f-584b6c5378fe",
      "kilometrage": 1344,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6653e13e-f5aa-4593-8a2f-584b6c5378fe",
    "image": "perev_left",
    "point": {
      "latitude": 53.0798245555,
      "longitude": 30.237640122
    }
  },
  "665e895c-bd1e-4ff2-a3d4-38318b3a55dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 99",
      "id": "665e895c-bd1e-4ff2-a3d4-38318b3a55dc",
      "kilometrage": 1137,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "665e895c-bd1e-4ff2-a3d4-38318b3a55dc",
    "image": "perev_left",
    "point": {
      "latitude": 52.225789744,
      "longitude": 30.5846458596
    }
  },
  "6662a82b-7c26-4f13-80cd-8f2fcf7f707f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 158",
      "id": "6662a82b-7c26-4f13-80cd-8f2fcf7f707f",
      "kilometrage": 1182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6662a82b-7c26-4f13-80cd-8f2fcf7f707f",
    "image": "perev_left",
    "point": {
      "latitude": 52.4071872884,
      "longitude": 30.3706828345
    }
  },
  "6665c8a5-b104-408d-8e80-7f88fd85d80b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 96",
      "id": "6665c8a5-b104-408d-8e80-7f88fd85d80b",
      "kilometrage": 1255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6665c8a5-b104-408d-8e80-7f88fd85d80b",
    "image": "perev_left",
    "point": {
      "latitude": 52.7521540031,
      "longitude": 30.115337218
    }
  },
  "6674abbe-2db5-4173-a10b-272f6124e172": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 102",
      "id": "6674abbe-2db5-4173-a10b-272f6124e172",
      "kilometrage": 1139,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6674abbe-2db5-4173-a10b-272f6124e172",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.2402197841,
      "longitude": 30.5668682613
    }
  },
  "66d383d3-92ba-4eb7-a30f-60688f2aef80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 149",
      "id": "66d383d3-92ba-4eb7-a30f-60688f2aef80",
      "kilometrage": 1178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "66d383d3-92ba-4eb7-a30f-60688f2aef80",
    "image": "perev_left",
    "point": {
      "latitude": 52.3949328585,
      "longitude": 30.3802579122
    }
  },
  "673164c2-7c0b-4d9f-b533-08b3baccfe0d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "673164c2-7c0b-4d9f-b533-08b3baccfe0d",
      "kilometrage": 1326,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "673164c2-7c0b-4d9f-b533-08b3baccfe0d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.1113833775,
      "longitude": 30.1063412791
    }
  },
  "6743703f-cf3b-4ef5-9a0a-cc3fac1971fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 76",
      "id": "6743703f-cf3b-4ef5-9a0a-cc3fac1971fc",
      "kilometrage": 1358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6743703f-cf3b-4ef5-9a0a-cc3fac1971fc",
    "image": "perev_right",
    "point": {
      "latitude": 53.1433249743,
      "longitude": 30.2739075594
    }
  },
  "676828d2-7d40-4f95-93ad-79cc8c15e48e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 145",
      "id": "676828d2-7d40-4f95-93ad-79cc8c15e48e",
      "kilometrage": 1399,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "676828d2-7d40-4f95-93ad-79cc8c15e48e",
    "image": "perev_left",
    "point": {
      "latitude": 53.3334715861,
      "longitude": 30.3719705005
    }
  },
  "6772f022-5dea-4991-b7ff-1d0a7f52fe0d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "6772f022-5dea-4991-b7ff-1d0a7f52fe0d",
      "kilometrage": 1082,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6772f022-5dea-4991-b7ff-1d0a7f52fe0d",
    "image": "main_way",
    "point": {
      "latitude": 51.93519638808907,
      "longitude": 30.809715966890366
    }
  },
  "68a57558-7295-488b-88c5-4e727649d1c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 105",
      "id": "68a57558-7295-488b-88c5-4e727649d1c3",
      "kilometrage": 1379,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "68a57558-7295-488b-88c5-4e727649d1c3",
    "image": "perev_right",
    "point": {
      "latitude": 53.2507298898,
      "longitude": 30.3186494878
    }
  },
  "691c77ff-a48f-4326-b715-584eba114a77": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 61",
      "id": "691c77ff-a48f-4326-b715-584eba114a77",
      "kilometrage": 1239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "691c77ff-a48f-4326-b715-584eba114a77",
    "image": "perev_left",
    "point": {
      "latitude": 52.6781925185,
      "longitude": 30.1937669477
    }
  },
  "69408f18-3d95-402a-86ba-223a52610666": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "69408f18-3d95-402a-86ba-223a52610666",
      "kilometrage": 1506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69408f18-3d95-402a-86ba-223a52610666",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8886545217,
      "longitude": 30.3729625276
    }
  },
  "695ae523-261d-44af-bd9a-eb0a141d9788": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 56",
      "id": "695ae523-261d-44af-bd9a-eb0a141d9788",
      "kilometrage": 1084,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "695ae523-261d-44af-bd9a-eb0a141d9788",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9542697903,
      "longitude": 30.8013743062
    }
  },
  "696c772f-37b4-40db-bf51-703f277c9dfa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "696c772f-37b4-40db-bf51-703f277c9dfa",
      "kilometrage": 1407,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "696c772f-37b4-40db-bf51-703f277c9dfa",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.3778432874,
      "longitude": 30.3700356736
    }
  },
  "698dcce2-eeb3-48a6-b328-ab9befca2c31": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "698dcce2-eeb3-48a6-b328-ab9befca2c31",
      "kilometrage": 1157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "698dcce2-eeb3-48a6-b328-ab9befca2c31",
    "image": "main_way",
    "point": {
      "latitude": 52.3103537699,
      "longitude": 30.5508688439
    }
  },
  "69dafc98-3d11-420f-bb11-ab3f1f9fd3d4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1320",
      "id": "69dafc98-3d11-420f-bb11-ab3f1f9fd3d4",
      "kilometrage": 1320,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "69dafc98-3d11-420f-bb11-ab3f1f9fd3d4",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0942221031,
      "longitude": 30.0682178001
    }
  },
  "6a08fa32-94a8-4aee-8bce-3a1ac64793d6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 67",
      "id": "6a08fa32-94a8-4aee-8bce-3a1ac64793d6",
      "kilometrage": 1351,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a08fa32-94a8-4aee-8bce-3a1ac64793d6",
    "image": "perev_right",
    "point": {
      "latitude": 53.1180442288,
      "longitude": 30.2905762144
    }
  },
  "6a465120-e002-47e9-b538-abaaa17d32ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 17",
      "id": "6a465120-e002-47e9-b538-abaaa17d32ce",
      "kilometrage": 1214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a465120-e002-47e9-b538-abaaa17d32ce",
    "image": "perev_right",
    "point": {
      "latitude": 52.5852857946,
      "longitude": 30.2724763372
    }
  },
  "6a47b223-9359-462f-b595-147d8dc374fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 55",
      "id": "6a47b223-9359-462f-b595-147d8dc374fc",
      "kilometrage": 1473,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a47b223-9359-462f-b595-147d8dc374fc",
    "image": "perev_right",
    "point": {
      "latitude": 53.6934808249,
      "longitude": 30.2847004642
    }
  },
  "6a7302b2-18f0-45fc-9f41-273d1aa4510f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый 13м",
      "id": "6a7302b2-18f0-45fc-9f41-273d1aa4510f",
      "kilometrage": 1050,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6a7302b2-18f0-45fc-9f41-273d1aa4510f",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7610024914,
      "longitude": 30.6305606189
    }
  },
  "6ac5f2c3-2304-4c5a-beb5-19fe0d5f115b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 135м",
      "id": "6ac5f2c3-2304-4c5a-beb5-19fe0d5f115b",
      "kilometrage": 1190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ac5f2c3-2304-4c5a-beb5-19fe0d5f115b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4505040807,
      "longitude": 30.3493403007
    }
  },
  "6b697686-73c4-4f6a-afe7-3a5993e67e27": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 3",
      "id": "6b697686-73c4-4f6a-afe7-3a5993e67e27",
      "kilometrage": 1207,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6b697686-73c4-4f6a-afe7-3a5993e67e27",
    "image": "perev_right",
    "point": {
      "latitude": 52.5565984017,
      "longitude": 30.2499915943
    }
  },
  "6ba10d23-6e79-410a-a9e2-6572644aea5b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 96",
      "id": "6ba10d23-6e79-410a-a9e2-6572644aea5b",
      "kilometrage": 1152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6ba10d23-6e79-410a-a9e2-6572644aea5b",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2897405093,
      "longitude": 30.5423383759
    }
  },
  "6bdd9962-c3c8-4c01-898c-7550467d9a5c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 28",
      "id": "6bdd9962-c3c8-4c01-898c-7550467d9a5c",
      "kilometrage": 1065,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6bdd9962-c3c8-4c01-898c-7550467d9a5c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8402948373,
      "longitude": 30.6962676109
    }
  },
  "6bebb341-5534-4600-bb96-ca08dc99733d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1215",
      "id": "6bebb341-5534-4600-bb96-ca08dc99733d",
      "kilometrage": 1215,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6bebb341-5534-4600-bb96-ca08dc99733d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5910781483,
      "longitude": 30.2829570097
    }
  },
  "6c299d42-6ccb-403b-9fe8-a4d2232ae2f1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 53",
      "id": "6c299d42-6ccb-403b-9fe8-a4d2232ae2f1",
      "kilometrage": 1098,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c299d42-6ccb-403b-9fe8-a4d2232ae2f1",
    "image": "perev_left",
    "point": {
      "latitude": 52.0301041601,
      "longitude": 30.7989001974
    }
  },
  "6c47e2de-70c4-4226-936f-bb5e197d559d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 53м",
      "id": "6c47e2de-70c4-4226-936f-bb5e197d559d",
      "kilometrage": 1083,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c47e2de-70c4-4226-936f-bb5e197d559d",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9443561064,
      "longitude": 30.8054735888
    }
  },
  "6c682c9e-5b0f-442e-a697-b1e88b49f6b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1415",
      "id": "6c682c9e-5b0f-442e-a697-b1e88b49f6b4",
      "kilometrage": 1415,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c682c9e-5b0f-442e-a697-b1e88b49f6b4",
    "image": "kilometrage",
    "point": {
      "latitude": 53.422057947,
      "longitude": 30.3198912219
    }
  },
  "6c6aa9d2-ef57-4c58-a6ec-cd781b411891": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1100",
      "id": "6c6aa9d2-ef57-4c58-a6ec-cd781b411891",
      "kilometrage": 1100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c6aa9d2-ef57-4c58-a6ec-cd781b411891",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0203396691,
      "longitude": 30.7756331149
    }
  },
  "6c8ab669-7821-41e0-a805-8c4056826042": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 48",
      "id": "6c8ab669-7821-41e0-a805-8c4056826042",
      "kilometrage": 1081,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6c8ab669-7821-41e0-a805-8c4056826042",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9270358062,
      "longitude": 30.8194072672
    }
  },
  "6cc60962-9593-4073-b5ee-ff9515a5e85d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 43в",
      "id": "6cc60962-9593-4073-b5ee-ff9515a5e85d",
      "kilometrage": 1078,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6cc60962-9593-4073-b5ee-ff9515a5e85d",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9057801145,
      "longitude": 30.8049587446
    }
  },
  "6d11ab38-801d-4ceb-988a-fd8f229a3046": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "6d11ab38-801d-4ceb-988a-fd8f229a3046",
      "kilometrage": 1170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d11ab38-801d-4ceb-988a-fd8f229a3046",
    "image": "axis_romb",
    "point": {
      "latitude": 52.3591530218,
      "longitude": 30.4470920427
    }
  },
  "6d6a16fb-5aac-4dc1-b703-8cd8e9d8b35f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 173",
      "id": "6d6a16fb-5aac-4dc1-b703-8cd8e9d8b35f",
      "kilometrage": 1307,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d6a16fb-5aac-4dc1-b703-8cd8e9d8b35f",
    "image": "perev_right",
    "point": {
      "latitude": 53.0179999955,
      "longitude": 30.0197980296
    }
  },
  "6d7b177c-e54a-4740-8ca5-8a7287e343e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1085",
      "id": "6d7b177c-e54a-4740-8ca5-8a7287e343e9",
      "kilometrage": 1085,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d7b177c-e54a-4740-8ca5-8a7287e343e9",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9607231772,
      "longitude": 30.7944740972
    }
  },
  "6d9e1735-c0ad-4d8c-be9b-8a4d1bb2ac16": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 13",
      "id": "6d9e1735-c0ad-4d8c-be9b-8a4d1bb2ac16",
      "kilometrage": 1060,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6d9e1735-c0ad-4d8c-be9b-8a4d1bb2ac16",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.811266799,
      "longitude": 30.6613889808
    }
  },
  "6dc1ece1-f1b9-4909-8c78-7964306ee733": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1490",
      "id": "6dc1ece1-f1b9-4909-8c78-7964306ee733",
      "kilometrage": 1490,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6dc1ece1-f1b9-4909-8c78-7964306ee733",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7967015482,
      "longitude": 30.2720812691
    }
  },
  "6deafebd-9e92-4ca2-a84f-d3fba82e6b3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 180",
      "id": "6deafebd-9e92-4ca2-a84f-d3fba82e6b3b",
      "kilometrage": 1199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6deafebd-9e92-4ca2-a84f-d3fba82e6b3b",
    "image": "perev_right",
    "point": {
      "latitude": 52.4975447165,
      "longitude": 30.2758807119
    }
  },
  "6e17aacf-a782-41d3-9a25-cf1ff6d5a2e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 15",
      "id": "6e17aacf-a782-41d3-9a25-cf1ff6d5a2e6",
      "kilometrage": 1062,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e17aacf-a782-41d3-9a25-cf1ff6d5a2e6",
    "image": "perev_right",
    "point": {
      "latitude": 51.8230456387,
      "longitude": 30.6676345973
    }
  },
  "6e1bffb6-72fc-4b6c-96ec-01d7ef533e48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 110",
      "id": "6e1bffb6-72fc-4b6c-96ec-01d7ef533e48",
      "kilometrage": 1171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e1bffb6-72fc-4b6c-96ec-01d7ef533e48",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3667964375,
      "longitude": 30.4339702854
    }
  },
  "6e3316a2-fa55-4cb9-a82a-9c423320abb3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 170",
      "id": "6e3316a2-fa55-4cb9-a82a-9c423320abb3",
      "kilometrage": 1305,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e3316a2-fa55-4cb9-a82a-9c423320abb3",
    "image": "perev_right",
    "point": {
      "latitude": 53.0152683667,
      "longitude": 30.0452253757
    }
  },
  "6e3ca46e-1605-499e-9843-9f88ef088096": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1425",
      "id": "6e3ca46e-1605-499e-9843-9f88ef088096",
      "kilometrage": 1425,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e3ca46e-1605-499e-9843-9f88ef088096",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4754794418,
      "longitude": 30.3168869739
    }
  },
  "6e45ae30-0585-4712-b376-53c76afce7aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1175",
      "id": "6e45ae30-0585-4712-b376-53c76afce7aa",
      "kilometrage": 1175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6e45ae30-0585-4712-b376-53c76afce7aa",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3720178959,
      "longitude": 30.4009287332
    }
  },
  "6eb7384a-23a7-4b8a-a164-4d82896f4e6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 131",
      "id": "6eb7384a-23a7-4b8a-a164-4d82896f4e6c",
      "kilometrage": 1279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6eb7384a-23a7-4b8a-a164-4d82896f4e6c",
    "image": "perev_right",
    "point": {
      "latitude": 52.8703691408,
      "longitude": 30.072848314
    }
  },
  "6fc81642-9771-41ee-9c0f-f533a0283a38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "6fc81642-9771-41ee-9c0f-f533a0283a38",
      "kilometrage": 1492,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fc81642-9771-41ee-9c0f-f533a0283a38",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8160247648,
      "longitude": 30.2806185522
    }
  },
  "6fce823b-8c3f-475a-8a6d-06a882c4ee19": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 125",
      "id": "6fce823b-8c3f-475a-8a6d-06a882c4ee19",
      "kilometrage": 1387,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fce823b-8c3f-475a-8a6d-06a882c4ee19",
    "image": "perev_left",
    "point": {
      "latitude": 53.2600149772,
      "longitude": 30.389192407
    }
  },
  "6fd5d7a3-ebb2-4690-95d7-4afd8c30b446": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 58",
      "id": "6fd5d7a3-ebb2-4690-95d7-4afd8c30b446",
      "kilometrage": 1237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "6fd5d7a3-ebb2-4690-95d7-4afd8c30b446",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.6705642819,
      "longitude": 30.2014084131
    }
  },
  "7044ccd3-89c4-4a30-be35-c89cfad5fdd2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 51",
      "id": "7044ccd3-89c4-4a30-be35-c89cfad5fdd2",
      "kilometrage": 1342,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7044ccd3-89c4-4a30-be35-c89cfad5fdd2",
    "image": "perev_right",
    "point": {
      "latitude": 53.0858343369,
      "longitude": 30.2237934955
    }
  },
  "705f47ce-46ca-4149-80e4-d5f777149884": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 55",
      "id": "705f47ce-46ca-4149-80e4-d5f777149884",
      "kilometrage": 1345,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "705f47ce-46ca-4149-80e4-d5f777149884",
    "image": "perev_left",
    "point": {
      "latitude": 53.0828437488,
      "longitude": 30.2512353433
    }
  },
  "7076e2d0-6166-4e2b-b415-114d3b8c4655": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 148",
      "id": "7076e2d0-6166-4e2b-b415-114d3b8c4655",
      "kilometrage": 1401,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7076e2d0-6166-4e2b-b415-114d3b8c4655",
    "image": "perev_left",
    "point": {
      "latitude": 53.3459807904,
      "longitude": 30.3796736028
    }
  },
  "70c6af94-8876-4c3c-80a9-9db682df9d67": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 58",
      "id": "70c6af94-8876-4c3c-80a9-9db682df9d67",
      "kilometrage": 1474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70c6af94-8876-4c3c-80a9-9db682df9d67",
    "image": "perev_left",
    "point": {
      "latitude": 53.700596728,
      "longitude": 30.3022397202
    }
  },
  "70d970cf-1584-4e2b-b61e-919f8ab49dd7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "70d970cf-1584-4e2b-b61e-919f8ab49dd7",
      "kilometrage": 1508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70d970cf-1584-4e2b-b61e-919f8ab49dd7",
    "image": "name_of",
    "point": {
      "latitude": 53.8959725616,
      "longitude": 30.3868920207
    }
  },
  "70ff6018-4fdf-47ff-b33f-5d211fa39a2e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 83",
      "id": "70ff6018-4fdf-47ff-b33f-5d211fa39a2e",
      "kilometrage": 1128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "70ff6018-4fdf-47ff-b33f-5d211fa39a2e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1712778438,
      "longitude": 30.6100443147
    }
  },
  "711810e9-55c6-48b6-9930-23af750eac80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 28",
      "id": "711810e9-55c6-48b6-9930-23af750eac80",
      "kilometrage": 1078,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "711810e9-55c6-48b6-9930-23af750eac80",
    "image": "perev_right",
    "point": {
      "latitude": 51.9093672375,
      "longitude": 30.8050728773
    }
  },
  "711be6d0-bc9f-47de-ad5c-86abc05c47bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 151",
      "id": "711be6d0-bc9f-47de-ad5c-86abc05c47bd",
      "kilometrage": 1294,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "711be6d0-bc9f-47de-ad5c-86abc05c47bd",
    "image": "perev_left",
    "point": {
      "latitude": 52.970090164,
      "longitude": 30.0548539772
    }
  },
  "715c2fa9-0ac2-4a20-8ff7-8e9fb86f2622": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1070",
      "id": "715c2fa9-0ac2-4a20-8ff7-8e9fb86f2622",
      "kilometrage": 1070,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "715c2fa9-0ac2-4a20-8ff7-8e9fb86f2622",
    "image": "kilometrage",
    "point": {
      "latitude": 51.8774099962,
      "longitude": 30.7211183141
    }
  },
  "718fe0bc-39ba-45cf-a39b-e70b69961df2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 77",
      "id": "718fe0bc-39ba-45cf-a39b-e70b69961df2",
      "kilometrage": 1486,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "718fe0bc-39ba-45cf-a39b-e70b69961df2",
    "image": "perev_right",
    "point": {
      "latitude": 53.7758725489,
      "longitude": 30.2741462669
    }
  },
  "7196b448-abe3-4baa-accd-f1fe19a95388": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 197",
      "id": "7196b448-abe3-4baa-accd-f1fe19a95388",
      "kilometrage": 1429,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7196b448-abe3-4baa-accd-f1fe19a95388",
    "image": "perev_right",
    "point": {
      "latitude": 53.4878353419,
      "longitude": 30.3024924726
    }
  },
  "71fb12a6-ec2b-4c87-ad61-bdfe1c2d51df": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 164",
      "id": "71fb12a6-ec2b-4c87-ad61-bdfe1c2d51df",
      "kilometrage": 1302,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "71fb12a6-ec2b-4c87-ad61-bdfe1c2d51df",
    "image": "perev_right",
    "point": {
      "latitude": 53.0016160646,
      "longitude": 30.0410815796
    }
  },
  "72636344-45b3-4efe-bb2f-8fa0168586bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 66",
      "id": "72636344-45b3-4efe-bb2f-8fa0168586bc",
      "kilometrage": 1097,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72636344-45b3-4efe-bb2f-8fa0168586bc",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0216771336,
      "longitude": 30.7965692319
    }
  },
  "72826cdf-a2ad-4e6f-aaf1-a0fa7c10d75a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1550",
      "id": "72826cdf-a2ad-4e6f-aaf1-a0fa7c10d75a",
      "kilometrage": 1550,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72826cdf-a2ad-4e6f-aaf1-a0fa7c10d75a",
    "image": "kilometrage",
    "point": {
      "latitude": 54.1770515091,
      "longitude": 30.3284447796
    }
  },
  "72a5aac7-3086-4ba3-9c7c-15b5a46e9171": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 97",
      "id": "72a5aac7-3086-4ba3-9c7c-15b5a46e9171",
      "kilometrage": 1256,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72a5aac7-3086-4ba3-9c7c-15b5a46e9171",
    "image": "perev_right",
    "point": {
      "latitude": 52.7560697955,
      "longitude": 30.1096714814
    }
  },
  "72e18743-e0d8-4f2c-be81-cfb3f01e0fde": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 102",
      "id": "72e18743-e0d8-4f2c-be81-cfb3f01e0fde",
      "kilometrage": 1377,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "72e18743-e0d8-4f2c-be81-cfb3f01e0fde",
    "image": "perev_left",
    "point": {
      "latitude": 53.2440065763,
      "longitude": 30.2981793898
    }
  },
  "730acb97-7106-493c-b2ee-9f6d35ac2fa5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 10",
      "id": "730acb97-7106-493c-b2ee-9f6d35ac2fa5",
      "kilometrage": 1306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "730acb97-7106-493c-b2ee-9f6d35ac2fa5",
    "image": "buyo_left",
    "point": {
      "latitude": 53.0140117125,
      "longitude": 30.0270313163
    }
  },
  "73506d8f-e165-4267-8a45-1a2ae687b504": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1145",
      "id": "73506d8f-e165-4267-8a45-1a2ae687b504",
      "kilometrage": 1145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73506d8f-e165-4267-8a45-1a2ae687b504",
    "image": "kilometrage",
    "point": {
      "latitude": 52.24283288,
      "longitude": 30.5315749473
    }
  },
  "7392af16-0ca8-4a48-ab89-2e37455e9c11": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "7392af16-0ca8-4a48-ab89-2e37455e9c11",
      "kilometrage": 1519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7392af16-0ca8-4a48-ab89-2e37455e9c11",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.9493261793,
      "longitude": 30.4198862376
    }
  },
  "739d3712-9668-4628-90a6-9fd1c7abf4d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 40",
      "id": "739d3712-9668-4628-90a6-9fd1c7abf4d3",
      "kilometrage": 1089,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "739d3712-9668-4628-90a6-9fd1c7abf4d3",
    "image": "perev_left",
    "point": {
      "latitude": 51.9894606774,
      "longitude": 30.8095733806
    }
  },
  "73a37d3e-4588-4f4b-b65f-df8ca258470f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1245",
      "id": "73a37d3e-4588-4f4b-b65f-df8ca258470f",
      "kilometrage": 1245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73a37d3e-4588-4f4b-b65f-df8ca258470f",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7082535582,
      "longitude": 30.1705109491
    }
  },
  "73b1a8a3-552a-472f-a940-6f8e46d10a5d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 81",
      "id": "73b1a8a3-552a-472f-a940-6f8e46d10a5d",
      "kilometrage": 1248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73b1a8a3-552a-472f-a940-6f8e46d10a5d",
    "image": "perev_left",
    "point": {
      "latitude": 52.7123061096,
      "longitude": 30.1282833857
    }
  },
  "73e57063-df18-465c-bc91-74cdd3047372": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 112",
      "id": "73e57063-df18-465c-bc91-74cdd3047372",
      "kilometrage": 1146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "73e57063-df18-465c-bc91-74cdd3047372",
    "image": "perev_right",
    "point": {
      "latitude": 52.2485765255,
      "longitude": 30.5284593176
    }
  },
  "7415a65c-4472-40b6-bd82-0cb4b3b467ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1135",
      "id": "7415a65c-4472-40b6-bd82-0cb4b3b467ad",
      "kilometrage": 1135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7415a65c-4472-40b6-bd82-0cb4b3b467ad",
    "image": "kilometrage",
    "point": {
      "latitude": 52.211759286,
      "longitude": 30.5812262995
    }
  },
  "741f062d-1e0a-4cf0-a52d-a77e9115ca4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 46",
      "id": "741f062d-1e0a-4cf0-a52d-a77e9115ca4a",
      "kilometrage": 1340,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "741f062d-1e0a-4cf0-a52d-a77e9115ca4a",
    "image": "perev_right",
    "point": {
      "latitude": 53.0881532344,
      "longitude": 30.2052962681
    }
  },
  "7465265d-6e50-4170-83f5-5989434906e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй  ",
      "id": "7465265d-6e50-4170-83f5-5989434906e0",
      "kilometrage": 1206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7465265d-6e50-4170-83f5-5989434906e0",
    "image": "buyo_separator",
    "point": {
      "latitude": 52.5500645509,
      "longitude": 30.2503843396
    }
  },
  "74afbbe5-7633-4460-9697-f95068e0633a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 50",
      "id": "74afbbe5-7633-4460-9697-f95068e0633a",
      "kilometrage": 1096,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "74afbbe5-7633-4460-9697-f95068e0633a",
    "image": "perev_left",
    "point": {
      "latitude": 52.0136463661,
      "longitude": 30.7882849042
    }
  },
  "750e6025-cdf1-4bce-96ab-b513968d0c3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1410",
      "id": "750e6025-cdf1-4bce-96ab-b513968d0c3b",
      "kilometrage": 1410,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "750e6025-cdf1-4bce-96ab-b513968d0c3b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4002107359,
      "longitude": 30.3543366934
    }
  },
  "752e0e2d-e92c-49e4-9be7-afff735fa733": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 27",
      "id": "752e0e2d-e92c-49e4-9be7-afff735fa733",
      "kilometrage": 1065,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "752e0e2d-e92c-49e4-9be7-afff735fa733",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8364506254,
      "longitude": 30.6941866203
    }
  },
  "756db5de-3186-462a-a232-7999951ffcfe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 96",
      "id": "756db5de-3186-462a-a232-7999951ffcfe",
      "kilometrage": 1505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "756db5de-3186-462a-a232-7999951ffcfe",
    "image": "perev_left",
    "point": {
      "latitude": 53.8885491005,
      "longitude": 30.3523830568
    }
  },
  "75ed8a36-6d22-4f19-a9f3-8ed3e69ab55e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "75ed8a36-6d22-4f19-a9f3-8ed3e69ab55e",
      "kilometrage": 1186,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75ed8a36-6d22-4f19-a9f3-8ed3e69ab55e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4342846763,
      "longitude": 30.375004921
    }
  },
  "75f02487-a778-4d08-b1d7-46e136054b4a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 142",
      "id": "75f02487-a778-4d08-b1d7-46e136054b4a",
      "kilometrage": 1169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75f02487-a778-4d08-b1d7-46e136054b4a",
    "image": "perev_left",
    "point": {
      "latitude": 52.3563577399,
      "longitude": 30.4520809804
    }
  },
  "75f9cf38-90ba-469d-9c88-166da49a45d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 18",
      "id": "75f9cf38-90ba-469d-9c88-166da49a45d2",
      "kilometrage": 1216,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "75f9cf38-90ba-469d-9c88-166da49a45d2",
    "image": "perev_left",
    "point": {
      "latitude": 52.5958706762,
      "longitude": 30.28841392
    }
  },
  "76569f4b-582e-45d5-bab1-8e396d4f9e3a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 175",
      "id": "76569f4b-582e-45d5-bab1-8e396d4f9e3a",
      "kilometrage": 1308,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76569f4b-582e-45d5-bab1-8e396d4f9e3a",
    "image": "perev_left",
    "point": {
      "latitude": 53.0252905257,
      "longitude": 30.0284298593
    }
  },
  "76972a86-1858-425d-badc-2295d1479f28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 22а",
      "id": "76972a86-1858-425d-badc-2295d1479f28",
      "kilometrage": 1454,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76972a86-1858-425d-badc-2295d1479f28",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.5984708256,
      "longitude": 30.2580084292
    }
  },
  "76ca9d13-83e2-4970-8a52-ab1b2337857b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1480",
      "id": "76ca9d13-83e2-4970-8a52-ab1b2337857b",
      "kilometrage": 1480,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76ca9d13-83e2-4970-8a52-ab1b2337857b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7254534243,
      "longitude": 30.2884637257
    }
  },
  "76e84ec0-41f1-4d81-89c0-8f1d948a7ce9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 64",
      "id": "76e84ec0-41f1-4d81-89c0-8f1d948a7ce9",
      "kilometrage": 1109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "76e84ec0-41f1-4d81-89c0-8f1d948a7ce9",
    "image": "perev_left",
    "point": {
      "latitude": 52.0624093339,
      "longitude": 30.7303360758
    }
  },
  "770b0960-ac84-4386-a0af-fc8f7a557f62": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 121",
      "id": "770b0960-ac84-4386-a0af-fc8f7a557f62",
      "kilometrage": 1269,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "770b0960-ac84-4386-a0af-fc8f7a557f62",
    "image": "perev_left",
    "point": {
      "latitude": 52.8429724645,
      "longitude": 30.0707981959
    }
  },
  "770d3d89-0a46-45b2-931a-dbfe2fbc8809": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 181",
      "id": "770d3d89-0a46-45b2-931a-dbfe2fbc8809",
      "kilometrage": 1311,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "770d3d89-0a46-45b2-931a-dbfe2fbc8809",
    "image": "perev_left",
    "point": {
      "latitude": 53.0494859353,
      "longitude": 30.0415740957
    }
  },
  "77173a05-1ee7-4460-8d77-adfa8a993569": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "77173a05-1ee7-4460-8d77-adfa8a993569",
      "kilometrage": 1497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77173a05-1ee7-4460-8d77-adfa8a993569",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8579996978,
      "longitude": 30.2780910929
    }
  },
  "776e3156-ca77-41a3-9679-9542e7f266bd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 57",
      "id": "776e3156-ca77-41a3-9679-9542e7f266bd",
      "kilometrage": 1346,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "776e3156-ca77-41a3-9679-9542e7f266bd",
    "image": "perev_right",
    "point": {
      "latitude": 53.0877211334,
      "longitude": 30.2558071703
    }
  },
  "778e5df0-6181-4a79-8138-2f84de3f93d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "778e5df0-6181-4a79-8138-2f84de3f93d2",
      "kilometrage": 1187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "778e5df0-6181-4a79-8138-2f84de3f93d2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.437019858,
      "longitude": 30.3788449436
    }
  },
  "77d7580f-d4bb-455e-90b0-db84d3a57319": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 177",
      "id": "77d7580f-d4bb-455e-90b0-db84d3a57319",
      "kilometrage": 1309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77d7580f-d4bb-455e-90b0-db84d3a57319",
    "image": "perev_left",
    "point": {
      "latitude": 53.0365532158,
      "longitude": 30.0264104958
    }
  },
  "77f3840c-861b-4f94-a412-fa8d1358855b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 14",
      "id": "77f3840c-861b-4f94-a412-fa8d1358855b",
      "kilometrage": 1448,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "77f3840c-861b-4f94-a412-fa8d1358855b",
    "image": "perev_right",
    "point": {
      "latitude": 53.5600844209,
      "longitude": 30.266829231
    }
  },
  "7828bd7e-4910-41b7-b18c-849657a175e8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 45",
      "id": "7828bd7e-4910-41b7-b18c-849657a175e8",
      "kilometrage": 1229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7828bd7e-4910-41b7-b18c-849657a175e8",
    "image": "perev_right",
    "point": {
      "latitude": 52.6651419019,
      "longitude": 30.2296334382
    }
  },
  "782f5921-5cbf-478a-8249-10c26793199b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 155",
      "id": "782f5921-5cbf-478a-8249-10c26793199b",
      "kilometrage": 1297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "782f5921-5cbf-478a-8249-10c26793199b",
    "image": "perev_right",
    "point": {
      "latitude": 52.9789981653,
      "longitude": 30.0371155291
    }
  },
  "78fb8633-cabc-41ae-a693-b9c9a2f52480": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 74",
      "id": "78fb8633-cabc-41ae-a693-b9c9a2f52480",
      "kilometrage": 1107,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "78fb8633-cabc-41ae-a693-b9c9a2f52480",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0447560656,
      "longitude": 30.7226370362
    }
  },
  "79062c7b-afc2-43b3-894c-21015e801233": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 119",
      "id": "79062c7b-afc2-43b3-894c-21015e801233",
      "kilometrage": 1268,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "79062c7b-afc2-43b3-894c-21015e801233",
    "image": "perev_right",
    "point": {
      "latitude": 52.8343296501,
      "longitude": 30.0834586153
    }
  },
  "79373224-fd1c-418f-a3d2-71ed3be6435a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 89",
      "id": "79373224-fd1c-418f-a3d2-71ed3be6435a",
      "kilometrage": 1252,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "79373224-fd1c-418f-a3d2-71ed3be6435a",
    "image": "perev_right",
    "point": {
      "latitude": 52.7304055732,
      "longitude": 30.1188752187
    }
  },
  "79db9d2c-1527-4609-859f-dff206b3946d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 72",
      "id": "79db9d2c-1527-4609-859f-dff206b3946d",
      "kilometrage": 1483,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "79db9d2c-1527-4609-859f-dff206b3946d",
    "image": "perev_right",
    "point": {
      "latitude": 53.7530429752,
      "longitude": 30.2657007734
    }
  },
  "79e63e69-1fc5-4411-910a-1a48e1f90512": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "79e63e69-1fc5-4411-910a-1a48e1f90512",
      "kilometrage": 1487,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "79e63e69-1fc5-4411-910a-1a48e1f90512",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.7779512054,
      "longitude": 30.2791247879
    }
  },
  "7a56d6d4-5afd-4fa9-8064-534f24d8d097": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 18",
      "id": "7a56d6d4-5afd-4fa9-8064-534f24d8d097",
      "kilometrage": 1450,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a56d6d4-5afd-4fa9-8064-534f24d8d097",
    "image": "perev_left",
    "point": {
      "latitude": 53.5774453962,
      "longitude": 30.2789674214
    }
  },
  "7a7af4be-f49d-4103-af57-a55fc918506a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 3",
      "id": "7a7af4be-f49d-4103-af57-a55fc918506a",
      "kilometrage": 1441,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a7af4be-f49d-4103-af57-a55fc918506a",
    "image": "perev_right",
    "point": {
      "latitude": 53.5299607681,
      "longitude": 30.2599624026
    }
  },
  "7a8d3b51-06d6-412e-a738-ff01b7cc000a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 119",
      "id": "7a8d3b51-06d6-412e-a738-ff01b7cc000a",
      "kilometrage": 1384,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a8d3b51-06d6-412e-a738-ff01b7cc000a",
    "image": "perev_left",
    "point": {
      "latitude": 53.2511975428,
      "longitude": 30.3634653269
    }
  },
  "7a93c6e0-9d23-48fa-aeba-1ef2b2f5e0d3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 69",
      "id": "7a93c6e0-9d23-48fa-aeba-1ef2b2f5e0d3",
      "kilometrage": 1354,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7a93c6e0-9d23-48fa-aeba-1ef2b2f5e0d3",
    "image": "perev_left",
    "point": {
      "latitude": 53.129938063,
      "longitude": 30.2927174034
    }
  },
  "7ac3ecec-9624-479e-8ed5-593e15d1591c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "7ac3ecec-9624-479e-8ed5-593e15d1591c",
      "kilometrage": 1206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7ac3ecec-9624-479e-8ed5-593e15d1591c",
    "image": "name_of",
    "point": {
      "latitude": 52.5480054868,
      "longitude": 30.2505183436
    }
  },
  "7b094b9c-ecc9-43ca-8ee0-955529e7a177": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1170",
      "id": "7b094b9c-ecc9-43ca-8ee0-955529e7a177",
      "kilometrage": 1170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b094b9c-ecc9-43ca-8ee0-955529e7a177",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3611060461,
      "longitude": 30.4466919842
    }
  },
  "7b945b6f-950f-4518-a980-0e7105b1d900": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1270",
      "id": "7b945b6f-950f-4518-a980-0e7105b1d900",
      "kilometrage": 1270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7b945b6f-950f-4518-a980-0e7105b1d900",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8435832879,
      "longitude": 30.066261691
    }
  },
  "7be2aa85-34c5-4c77-97ab-ed665b62737e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 170",
      "id": "7be2aa85-34c5-4c77-97ab-ed665b62737e",
      "kilometrage": 1413,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7be2aa85-34c5-4c77-97ab-ed665b62737e",
    "image": "perev_right",
    "point": {
      "latitude": 53.4095145383,
      "longitude": 30.3219722574
    }
  },
  "7c16f8f6-49f3-41e3-8a00-514306a5d7e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 128",
      "id": "7c16f8f6-49f3-41e3-8a00-514306a5d7e4",
      "kilometrage": 1389,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c16f8f6-49f3-41e3-8a00-514306a5d7e4",
    "image": "perev_left",
    "point": {
      "latitude": 53.2742566853,
      "longitude": 30.3867782127
    }
  },
  "7c19ff44-7428-44de-9953-cacbe0383dbd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 165",
      "id": "7c19ff44-7428-44de-9953-cacbe0383dbd",
      "kilometrage": 1411,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c19ff44-7428-44de-9953-cacbe0383dbd",
    "image": "perev_right",
    "point": {
      "latitude": 53.4046155193,
      "longitude": 30.344218207
    }
  },
  "7c617a69-4808-4689-a25a-d3482308e776": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 189",
      "id": "7c617a69-4808-4689-a25a-d3482308e776",
      "kilometrage": 1205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c617a69-4808-4689-a25a-d3482308e776",
    "image": "perev_left",
    "point": {
      "latitude": 52.5375445458,
      "longitude": 30.2379552913
    }
  },
  "7c7e987c-6c64-48f2-9b4e-f542171956b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 132",
      "id": "7c7e987c-6c64-48f2-9b4e-f542171956b2",
      "kilometrage": 1279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7c7e987c-6c64-48f2-9b4e-f542171956b2",
    "image": "perev_left",
    "point": {
      "latitude": 52.874932969,
      "longitude": 30.079986842
    }
  },
  "7ccee36a-3daa-4c5d-8186-0758705ee160": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 63",
      "id": "7ccee36a-3daa-4c5d-8186-0758705ee160",
      "kilometrage": 1240,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7ccee36a-3daa-4c5d-8186-0758705ee160",
    "image": "perev_left",
    "point": {
      "latitude": 52.6881163453,
      "longitude": 30.1936284714
    }
  },
  "7d0bcc48-be42-4d20-9b91-95b370a1488a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "7d0bcc48-be42-4d20-9b91-95b370a1488a",
      "kilometrage": 1555,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d0bcc48-be42-4d20-9b91-95b370a1488a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 54.2119958221,
      "longitude": 30.3053316793
    }
  },
  "7d16146e-996d-4385-9ea4-b927ea327bcf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 82",
      "id": "7d16146e-996d-4385-9ea4-b927ea327bcf",
      "kilometrage": 1249,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d16146e-996d-4385-9ea4-b927ea327bcf",
    "image": "perev_right",
    "point": {
      "latitude": 52.7144446873,
      "longitude": 30.1231419571
    }
  },
  "7d19642b-4689-492c-b444-80621a59d7b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 100",
      "id": "7d19642b-4689-492c-b444-80621a59d7b8",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d19642b-4689-492c-b444-80621a59d7b8",
    "image": "perev_right",
    "point": {
      "latitude": 53.8943025095,
      "longitude": 30.3788893754
    }
  },
  "7d660e62-e17c-49b6-aec8-6eeb0d386ffa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 48",
      "id": "7d660e62-e17c-49b6-aec8-6eeb0d386ffa",
      "kilometrage": 1469,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d660e62-e17c-49b6-aec8-6eeb0d386ffa",
    "image": "perev_left",
    "point": {
      "latitude": 53.6675882025,
      "longitude": 30.3033169374
    }
  },
  "7d77ea3e-2730-4dbc-b4df-9825032e39b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 144",
      "id": "7d77ea3e-2730-4dbc-b4df-9825032e39b8",
      "kilometrage": 1399,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7d77ea3e-2730-4dbc-b4df-9825032e39b8",
    "image": "perev_left",
    "point": {
      "latitude": 53.3332335823,
      "longitude": 30.3645649055
    }
  },
  "7dad3bf2-e3ac-448b-8a21-79f69537e5ee": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 10",
      "id": "7dad3bf2-e3ac-448b-8a21-79f69537e5ee",
      "kilometrage": 1445,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7dad3bf2-e3ac-448b-8a21-79f69537e5ee",
    "image": "perev_left",
    "point": {
      "latitude": 53.5485251984,
      "longitude": 30.2662095301
    }
  },
  "7dc561cf-c58a-405b-ae35-173ca9f8c3a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 45в",
      "id": "7dc561cf-c58a-405b-ae35-173ca9f8c3a9",
      "kilometrage": 1079,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7dc561cf-c58a-405b-ae35-173ca9f8c3a9",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9139712364,
      "longitude": 30.8176381832
    }
  },
  "7dd2e0db-b321-43d5-ac7d-70b73a5bb6f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 68",
      "id": "7dd2e0db-b321-43d5-ac7d-70b73a5bb6f7",
      "kilometrage": 1352,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7dd2e0db-b321-43d5-ac7d-70b73a5bb6f7",
    "image": "perev_left",
    "point": {
      "latitude": 53.1159087274,
      "longitude": 30.2967281275
    }
  },
  "7de999a9-daa2-40e2-a603-fc4602ae31bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 66",
      "id": "7de999a9-daa2-40e2-a603-fc4602ae31bb",
      "kilometrage": 1109,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7de999a9-daa2-40e2-a603-fc4602ae31bb",
    "image": "perev_left",
    "point": {
      "latitude": 52.0659422483,
      "longitude": 30.7313768228
    }
  },
  "7ee06b69-cdaa-4384-a386-ebd9611a8d17": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 117",
      "id": "7ee06b69-cdaa-4384-a386-ebd9611a8d17",
      "kilometrage": 1266,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7ee06b69-cdaa-4384-a386-ebd9611a8d17",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.8308296619,
      "longitude": 30.104185457
    }
  },
  "7f0b1faf-7476-49b4-9ce5-d48eecb7fcd3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 7",
      "id": "7f0b1faf-7476-49b4-9ce5-d48eecb7fcd3",
      "kilometrage": 1281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f0b1faf-7476-49b4-9ce5-d48eecb7fcd3",
    "image": "buyo_right",
    "point": {
      "latitude": 52.8832347453,
      "longitude": 30.0608441727
    }
  },
  "7f8d4ce9-01be-48ff-853f-e8837410c042": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "7f8d4ce9-01be-48ff-853f-e8837410c042",
      "kilometrage": 1286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7f8d4ce9-01be-48ff-853f-e8837410c042",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.9181262179,
      "longitude": 30.0473794779
    }
  },
  "7fb63827-9fab-42fd-be9a-ac1858f5de29": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 71",
      "id": "7fb63827-9fab-42fd-be9a-ac1858f5de29",
      "kilometrage": 1356,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fb63827-9fab-42fd-be9a-ac1858f5de29",
    "image": "perev_right",
    "point": {
      "latitude": 53.1287142187,
      "longitude": 30.2727927673
    }
  },
  "7fbdcbad-1c71-4b61-8534-caee09f304db": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 150",
      "id": "7fbdcbad-1c71-4b61-8534-caee09f304db",
      "kilometrage": 1180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "7fbdcbad-1c71-4b61-8534-caee09f304db",
    "image": "perev_right",
    "point": {
      "latitude": 52.3965834977,
      "longitude": 30.358579501
    }
  },
  "803dcefa-2bd1-4e15-800c-22805acc1240": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 1",
      "id": "803dcefa-2bd1-4e15-800c-22805acc1240",
      "kilometrage": 1313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "803dcefa-2bd1-4e15-800c-22805acc1240",
    "image": "perev_right",
    "point": {
      "latitude": 53.0577287989,
      "longitude": 30.0310887645
    }
  },
  "806513bf-53d1-4103-9039-d6289de4dba0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 68а",
      "id": "806513bf-53d1-4103-9039-d6289de4dba0",
      "kilometrage": 1353,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "806513bf-53d1-4103-9039-d6289de4dba0",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.1275768931,
      "longitude": 30.3026446601
    }
  },
  "808ba8bd-3aa5-40cc-bc1a-83474894ae35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 106",
      "id": "808ba8bd-3aa5-40cc-bc1a-83474894ae35",
      "kilometrage": 1142,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "808ba8bd-3aa5-40cc-bc1a-83474894ae35",
    "image": "perev_right",
    "point": {
      "latitude": 52.2215484044,
      "longitude": 30.554882803
    }
  },
  "809b70c1-702d-433a-a66e-8f77b527e7a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 52",
      "id": "809b70c1-702d-433a-a66e-8f77b527e7a8",
      "kilometrage": 1471,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "809b70c1-702d-433a-a66e-8f77b527e7a8",
    "image": "perev_right",
    "point": {
      "latitude": 53.6791565461,
      "longitude": 30.285927948
    }
  },
  "80bfbabe-5d8b-4689-85e1-d4d92df07d9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 1",
      "id": "80bfbabe-5d8b-4689-85e1-d4d92df07d9c",
      "kilometrage": 1554,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "80bfbabe-5d8b-4689-85e1-d4d92df07d9c",
    "image": "buyo_right",
    "point": {
      "latitude": 54.2031844396,
      "longitude": 30.3081748684
    }
  },
  "80cdb22f-4c3e-4e5a-9ee3-d4049484b7d8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 124",
      "id": "80cdb22f-4c3e-4e5a-9ee3-d4049484b7d8",
      "kilometrage": 1272,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "80cdb22f-4c3e-4e5a-9ee3-d4049484b7d8",
    "image": "perev_right",
    "point": {
      "latitude": 52.8523841139,
      "longitude": 30.0821182243
    }
  },
  "810ac132-79bf-4710-a240-e3a461d5bd99": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 140",
      "id": "810ac132-79bf-4710-a240-e3a461d5bd99",
      "kilometrage": 1167,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "810ac132-79bf-4710-a240-e3a461d5bd99",
    "image": "perev_right",
    "point": {
      "latitude": 52.3391467162,
      "longitude": 30.4522491816
    }
  },
  "8113047f-62b1-42bf-b472-e92ab44647bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1545",
      "id": "8113047f-62b1-42bf-b472-e92ab44647bc",
      "kilometrage": 1545,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8113047f-62b1-42bf-b472-e92ab44647bc",
    "image": "kilometrage",
    "point": {
      "latitude": 54.1436909456,
      "longitude": 30.3525471462
    }
  },
  "8114b11c-5b9b-42b0-9088-e9fab34dda95": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 116",
      "id": "8114b11c-5b9b-42b0-9088-e9fab34dda95",
      "kilometrage": 1148,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8114b11c-5b9b-42b0-9088-e9fab34dda95",
    "image": "perev_right",
    "point": {
      "latitude": 52.2592707904,
      "longitude": 30.5438180788
    }
  },
  "81c32b0d-ea32-49ec-a915-fccb77cbb472": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 134",
      "id": "81c32b0d-ea32-49ec-a915-fccb77cbb472",
      "kilometrage": 1281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81c32b0d-ea32-49ec-a915-fccb77cbb472",
    "image": "perev_right",
    "point": {
      "latitude": 52.8805497433,
      "longitude": 30.0651137447
    }
  },
  "81d3cfbd-2a88-43ee-8205-7c31e8f79470": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 29",
      "id": "81d3cfbd-2a88-43ee-8205-7c31e8f79470",
      "kilometrage": 1080,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "81d3cfbd-2a88-43ee-8205-7c31e8f79470",
    "image": "perev_left",
    "point": {
      "latitude": 51.9206361166,
      "longitude": 30.8272140724
    }
  },
  "820317a3-ed3e-4d5a-8732-48a761391fbc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1285",
      "id": "820317a3-ed3e-4d5a-8732-48a761391fbc",
      "kilometrage": 1285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "820317a3-ed3e-4d5a-8732-48a761391fbc",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9120729599,
      "longitude": 30.0624587703
    }
  },
  "820f8b58-e53c-4bbe-b457-a3eb2e7ee958": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "820f8b58-e53c-4bbe-b457-a3eb2e7ee958",
      "kilometrage": 1502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "820f8b58-e53c-4bbe-b457-a3eb2e7ee958",
    "image": "bridge_low",
    "point": {
      "latitude": 53.8919908237,
      "longitude": 30.3294297683
    }
  },
  "824df8e4-0d22-4d4f-9660-7f25dc570df5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "824df8e4-0d22-4d4f-9660-7f25dc570df5",
      "kilometrage": 1500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "824df8e4-0d22-4d4f-9660-7f25dc570df5",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8830451569,
      "longitude": 30.3040606595
    }
  },
  "8252fd03-a1ab-40cd-9ce1-1d46a0ac7ee9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 92",
      "id": "8252fd03-a1ab-40cd-9ce1-1d46a0ac7ee9",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8252fd03-a1ab-40cd-9ce1-1d46a0ac7ee9",
    "image": "perev_right",
    "point": {
      "latitude": 53.891428585,
      "longitude": 30.3330304908
    }
  },
  "826e5a67-5041-4665-b374-251122696e47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 40",
      "id": "826e5a67-5041-4665-b374-251122696e47",
      "kilometrage": 1336,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "826e5a67-5041-4665-b374-251122696e47",
    "image": "perev_left",
    "point": {
      "latitude": 53.0998624785,
      "longitude": 30.1787573549
    }
  },
  "82902030-3c31-4a15-97f0-a2493ff3cc57": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 168",
      "id": "82902030-3c31-4a15-97f0-a2493ff3cc57",
      "kilometrage": 1304,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82902030-3c31-4a15-97f0-a2493ff3cc57",
    "image": "perev_left",
    "point": {
      "latitude": 53.0125591267,
      "longitude": 30.0545683672
    }
  },
  "82954f95-3e13-4fa0-85bb-f8eaf58b6f96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 66",
      "id": "82954f95-3e13-4fa0-85bb-f8eaf58b6f96",
      "kilometrage": 1479,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82954f95-3e13-4fa0-85bb-f8eaf58b6f96",
    "image": "perev_left",
    "point": {
      "latitude": 53.7240688083,
      "longitude": 30.2895083236
    }
  },
  "82b184ab-a342-48bc-add8-c609745a579a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1290",
      "id": "82b184ab-a342-48bc-add8-c609745a579a",
      "kilometrage": 1290,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82b184ab-a342-48bc-add8-c609745a579a",
    "image": "kilometrage",
    "point": {
      "latitude": 52.9483089732,
      "longitude": 30.0491585225
    }
  },
  "82e12be2-d7bd-4432-8ddb-501b967ec616": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 87",
      "id": "82e12be2-d7bd-4432-8ddb-501b967ec616",
      "kilometrage": 1366,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "82e12be2-d7bd-4432-8ddb-501b967ec616",
    "image": "perev_right",
    "point": {
      "latitude": 53.2051393083,
      "longitude": 30.244549419
    }
  },
  "83429987-43d2-4431-b9d8-e435514654eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 124",
      "id": "83429987-43d2-4431-b9d8-e435514654eb",
      "kilometrage": 1153,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83429987-43d2-4431-b9d8-e435514654eb",
    "image": "perev_right",
    "point": {
      "latitude": 52.2891604989,
      "longitude": 30.5345277836
    }
  },
  "83629ac1-572b-4727-82e4-275a759dec22": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "83629ac1-572b-4727-82e4-275a759dec22",
      "kilometrage": 1447,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83629ac1-572b-4727-82e4-275a759dec22",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.5504390256,
      "longitude": 30.2590276613
    }
  },
  "83804cbc-506a-4980-b82d-fe87ea9fedbf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "83804cbc-506a-4980-b82d-fe87ea9fedbf",
      "kilometrage": 1278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83804cbc-506a-4980-b82d-fe87ea9fedbf",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8633143195,
      "longitude": 30.0707264323
    }
  },
  "83b1382f-19a4-4a50-9eab-b06210042e79": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 101",
      "id": "83b1382f-19a4-4a50-9eab-b06210042e79",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83b1382f-19a4-4a50-9eab-b06210042e79",
    "image": "perev_right",
    "point": {
      "latitude": 53.8956207227,
      "longitude": 30.3849469169
    }
  },
  "83e6457f-9bc9-41f4-abaa-03027a275226": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 176",
      "id": "83e6457f-9bc9-41f4-abaa-03027a275226",
      "kilometrage": 1417,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "83e6457f-9bc9-41f4-abaa-03027a275226",
    "image": "perev_left",
    "point": {
      "latitude": 53.4341629416,
      "longitude": 30.3414620778
    }
  },
  "8423013c-15b7-41ba-a64e-b25f86376893": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "8423013c-15b7-41ba-a64e-b25f86376893",
      "kilometrage": 1559,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8423013c-15b7-41ba-a64e-b25f86376893",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.2431215604,
      "longitude": 30.2792755471
    }
  },
  "842bd283-e2df-45c7-a4a4-00256240036a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 133",
      "id": "842bd283-e2df-45c7-a4a4-00256240036a",
      "kilometrage": 1280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "842bd283-e2df-45c7-a4a4-00256240036a",
    "image": "perev_left",
    "point": {
      "latitude": 52.8795447344,
      "longitude": 30.0776538061
    }
  },
  "84318980-38f9-46d9-bd89-22c8b36e9b1d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 68",
      "id": "84318980-38f9-46d9-bd89-22c8b36e9b1d",
      "kilometrage": 1100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84318980-38f9-46d9-bd89-22c8b36e9b1d",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0204420283,
      "longitude": 30.77285173
    }
  },
  "84823cc9-ea52-44ac-b3f6-28a6520dec21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 93",
      "id": "84823cc9-ea52-44ac-b3f6-28a6520dec21",
      "kilometrage": 1151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84823cc9-ea52-44ac-b3f6-28a6520dec21",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2816704031,
      "longitude": 30.551746047
    }
  },
  "84b297ad-0ee7-42bd-b056-d456de26c59b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "84b297ad-0ee7-42bd-b056-d456de26c59b",
      "kilometrage": 1086,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84b297ad-0ee7-42bd-b056-d456de26c59b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9702958517,
      "longitude": 30.7923431275
    }
  },
  "84b939ed-ff80-44ab-b154-16b254733f23": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 138",
      "id": "84b939ed-ff80-44ab-b154-16b254733f23",
      "kilometrage": 1285,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84b939ed-ff80-44ab-b154-16b254733f23",
    "image": "perev_left",
    "point": {
      "latitude": 52.9131609626,
      "longitude": 30.0639712446
    }
  },
  "84d04f87-61da-49b1-a9db-4ab6fc2f353c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 59",
      "id": "84d04f87-61da-49b1-a9db-4ab6fc2f353c",
      "kilometrage": 1347,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84d04f87-61da-49b1-a9db-4ab6fc2f353c",
    "image": "perev_right",
    "point": {
      "latitude": 53.0965095818,
      "longitude": 30.2490367039
    }
  },
  "84edb3a8-2014-405e-b600-e08b85e0089f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 61",
      "id": "84edb3a8-2014-405e-b600-e08b85e0089f",
      "kilometrage": 1105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "84edb3a8-2014-405e-b600-e08b85e0089f",
    "image": "perev_left",
    "point": {
      "latitude": 52.0379540852,
      "longitude": 30.7415834649
    }
  },
  "8507b4d7-e7be-4604-ad15-60463d862667": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 114",
      "id": "8507b4d7-e7be-4604-ad15-60463d862667",
      "kilometrage": 1173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8507b4d7-e7be-4604-ad15-60463d862667",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3809715006,
      "longitude": 30.4261376265
    }
  },
  "85269b9e-5f5c-4726-8531-236eb9b2e1b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 80",
      "id": "85269b9e-5f5c-4726-8531-236eb9b2e1b6",
      "kilometrage": 1489,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85269b9e-5f5c-4726-8531-236eb9b2e1b6",
    "image": "perev_right",
    "point": {
      "latitude": 53.7892198976,
      "longitude": 30.2686958827
    }
  },
  "853de9b8-18a7-41d8-b520-1e06585f4c9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 132",
      "id": "853de9b8-18a7-41d8-b520-1e06585f4c9c",
      "kilometrage": 1391,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "853de9b8-18a7-41d8-b520-1e06585f4c9c",
    "image": "perev_left",
    "point": {
      "latitude": 53.2927522405,
      "longitude": 30.3771575497
    }
  },
  "855302ee-bd4c-4b70-8a65-f57134df65d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 36",
      "id": "855302ee-bd4c-4b70-8a65-f57134df65d5",
      "kilometrage": 1461,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "855302ee-bd4c-4b70-8a65-f57134df65d5",
    "image": "perev_left",
    "point": {
      "latitude": 53.6283018124,
      "longitude": 30.2876774182
    }
  },
  "85616d6d-ef4b-4c13-b451-14a05b1cbe32": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 135",
      "id": "85616d6d-ef4b-4c13-b451-14a05b1cbe32",
      "kilometrage": 1283,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "85616d6d-ef4b-4c13-b451-14a05b1cbe32",
    "image": "perev_right",
    "point": {
      "latitude": 52.8970902497,
      "longitude": 30.0635481005
    }
  },
  "862b2390-9c60-4539-9f67-7b759337248d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "862b2390-9c60-4539-9f67-7b759337248d",
      "kilometrage": 1086,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "862b2390-9c60-4539-9f67-7b759337248d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9688618423,
      "longitude": 30.7965474877
    }
  },
  "8631bceb-21f7-44d8-9449-97bd0494334e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 82",
      "id": "8631bceb-21f7-44d8-9449-97bd0494334e",
      "kilometrage": 1125,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8631bceb-21f7-44d8-9449-97bd0494334e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.155317536,
      "longitude": 30.635514677
    }
  },
  "864a0ef6-9d06-4dd4-a171-36d60a2c0a5c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 173",
      "id": "864a0ef6-9d06-4dd4-a171-36d60a2c0a5c",
      "kilometrage": 1415,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "864a0ef6-9d06-4dd4-a171-36d60a2c0a5c",
    "image": "perev_right",
    "point": {
      "latitude": 53.4231405019,
      "longitude": 30.3198513709
    }
  },
  "8659a459-2967-4ea6-ac9f-30dfce11b176": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 156",
      "id": "8659a459-2967-4ea6-ac9f-30dfce11b176",
      "kilometrage": 1405,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8659a459-2967-4ea6-ac9f-30dfce11b176",
    "image": "perev_left",
    "point": {
      "latitude": 53.3655123935,
      "longitude": 30.3725488581
    }
  },
  "869c5fcb-df34-44a1-bf4a-58d83b373d43": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 185",
      "id": "869c5fcb-df34-44a1-bf4a-58d83b373d43",
      "kilometrage": 1422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "869c5fcb-df34-44a1-bf4a-58d83b373d43",
    "image": "perev_left",
    "point": {
      "latitude": 53.4698232688,
      "longitude": 30.3310889837
    }
  },
  "86abe673-240a-45f2-b2c9-3f2b53b8d647": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 28",
      "id": "86abe673-240a-45f2-b2c9-3f2b53b8d647",
      "kilometrage": 1457,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86abe673-240a-45f2-b2c9-3f2b53b8d647",
    "image": "perev_left",
    "point": {
      "latitude": 53.5989592287,
      "longitude": 30.2916379178
    }
  },
  "86c46578-49a3-4efe-a5b5-12c98687a885": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 32",
      "id": "86c46578-49a3-4efe-a5b5-12c98687a885",
      "kilometrage": 1459,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "86c46578-49a3-4efe-a5b5-12c98687a885",
    "image": "perev_left",
    "point": {
      "latitude": 53.6104918033,
      "longitude": 30.2892556046
    }
  },
  "872b9e89-a677-4571-ab87-8ac558277ad4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 7",
      "id": "872b9e89-a677-4571-ab87-8ac558277ad4",
      "kilometrage": 1500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "872b9e89-a677-4571-ab87-8ac558277ad4",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8783237973,
      "longitude": 30.2954346124
    }
  },
  "87331e02-7783-4a9d-af68-979ba9d1b5c1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 42",
      "id": "87331e02-7783-4a9d-af68-979ba9d1b5c1",
      "kilometrage": 1091,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87331e02-7783-4a9d-af68-979ba9d1b5c1",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.9861503021,
      "longitude": 30.77714735
    }
  },
  "8772cd40-aee6-423d-9d3d-d3459471cbe1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 40в",
      "id": "8772cd40-aee6-423d-9d3d-d3459471cbe1",
      "kilometrage": 1076,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8772cd40-aee6-423d-9d3d-d3459471cbe1",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8976380621,
      "longitude": 30.7872308795
    }
  },
  "87a361fb-63df-40cd-81d1-cb43c8803af9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "87a361fb-63df-40cd-81d1-cb43c8803af9",
      "kilometrage": 1453,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87a361fb-63df-40cd-81d1-cb43c8803af9",
    "image": "perev_right",
    "point": {
      "latitude": 53.5903843587,
      "longitude": 30.2594910811
    }
  },
  "87fec760-375b-4bb3-9db3-f07279110af7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 17",
      "id": "87fec760-375b-4bb3-9db3-f07279110af7",
      "kilometrage": 1051,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "87fec760-375b-4bb3-9db3-f07279110af7",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7589694647,
      "longitude": 30.6197676147
    }
  },
  "88d9d6f8-3b90-418e-9d89-664a18be04b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 121",
      "id": "88d9d6f8-3b90-418e-9d89-664a18be04b7",
      "kilometrage": 1175,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88d9d6f8-3b90-418e-9d89-664a18be04b7",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3711142591,
      "longitude": 30.3976956678
    }
  },
  "88ea77a2-f413-43b3-a754-d5436691f7e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 1",
      "id": "88ea77a2-f413-43b3-a754-d5436691f7e1",
      "kilometrage": 1047,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88ea77a2-f413-43b3-a754-d5436691f7e1",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7491868758,
      "longitude": 30.6457085009
    }
  },
  "88f11fcf-cc89-447e-8fae-63001c8475aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 125",
      "id": "88f11fcf-cc89-447e-8fae-63001c8475aa",
      "kilometrage": 1176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "88f11fcf-cc89-447e-8fae-63001c8475aa",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3791569967,
      "longitude": 30.3928761567
    }
  },
  "8912d325-06b7-4f00-90cc-31bc6b4a862a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 47",
      "id": "8912d325-06b7-4f00-90cc-31bc6b4a862a",
      "kilometrage": 1094,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8912d325-06b7-4f00-90cc-31bc6b4a862a",
    "image": "perev_right",
    "point": {
      "latitude": 52.0049031138,
      "longitude": 30.77810599
    }
  },
  "8928eba1-2c3d-4389-9242-c2d4a3ac00bf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 38",
      "id": "8928eba1-2c3d-4389-9242-c2d4a3ac00bf",
      "kilometrage": 1335,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8928eba1-2c3d-4389-9242-c2d4a3ac00bf",
    "image": "perev_left",
    "point": {
      "latitude": 53.106320595,
      "longitude": 30.1644922914
    }
  },
  "8a5b2e8e-c6ff-4a96-a7a4-fcaa9bb16398": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 42",
      "id": "8a5b2e8e-c6ff-4a96-a7a4-fcaa9bb16398",
      "kilometrage": 1337,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8a5b2e8e-c6ff-4a96-a7a4-fcaa9bb16398",
    "image": "perev_right",
    "point": {
      "latitude": 53.10052611,
      "longitude": 30.1897057781
    }
  },
  "8b1847cc-3faf-4060-9324-4514d0c6ca21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 190",
      "id": "8b1847cc-3faf-4060-9324-4514d0c6ca21",
      "kilometrage": 1206,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b1847cc-3faf-4060-9324-4514d0c6ca21",
    "image": "perev_right",
    "point": {
      "latitude": 52.5442951781,
      "longitude": 30.245095613
    }
  },
  "8b63be95-6618-4147-8017-a774070f248e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 126",
      "id": "8b63be95-6618-4147-8017-a774070f248e",
      "kilometrage": 1176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b63be95-6618-4147-8017-a774070f248e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3816124719,
      "longitude": 30.3922363187
    }
  },
  "8b78c4de-39dd-45df-a174-11f616efc659": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 65",
      "id": "8b78c4de-39dd-45df-a174-11f616efc659",
      "kilometrage": 1350,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b78c4de-39dd-45df-a174-11f616efc659",
    "image": "perev_right",
    "point": {
      "latitude": 53.1176104691,
      "longitude": 30.2750917497
    }
  },
  "8b83ff71-3097-45d6-963d-7bbb1b96fbcc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 10",
      "id": "8b83ff71-3097-45d6-963d-7bbb1b96fbcc",
      "kilometrage": 1057,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8b83ff71-3097-45d6-963d-7bbb1b96fbcc",
    "image": "running_sign_left",
    "point": {
      "latitude": 51.7845789856,
      "longitude": 30.6653771939
    }
  },
  "8ba18edc-e88b-43e1-94c2-e6aea5d31ff0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 97",
      "id": "8ba18edc-e88b-43e1-94c2-e6aea5d31ff0",
      "kilometrage": 1373,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ba18edc-e88b-43e1-94c2-e6aea5d31ff0",
    "image": "perev_right",
    "point": {
      "latitude": 53.2492565571,
      "longitude": 30.2729315655
    }
  },
  "8c09653a-f43e-4517-a4dc-37da6250e426": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 4",
      "id": "8c09653a-f43e-4517-a4dc-37da6250e426",
      "kilometrage": 1208,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c09653a-f43e-4517-a4dc-37da6250e426",
    "image": "perev_right",
    "point": {
      "latitude": 52.5618433469,
      "longitude": 30.251582407
    }
  },
  "8c387e97-ea64-4193-818f-3207c819b291": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 82",
      "id": "8c387e97-ea64-4193-818f-3207c819b291",
      "kilometrage": 1124,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c387e97-ea64-4193-818f-3207c819b291",
    "image": "perev_left",
    "point": {
      "latitude": 52.1480895558,
      "longitude": 30.6547363525
    }
  },
  "8c40d9e1-9183-402e-b3a1-c06fbc939c69": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 52",
      "id": "8c40d9e1-9183-402e-b3a1-c06fbc939c69",
      "kilometrage": 1097,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c40d9e1-9183-402e-b3a1-c06fbc939c69",
    "image": "perev_left",
    "point": {
      "latitude": 52.0230577118,
      "longitude": 30.8002978955
    }
  },
  "8c5792f6-c9f5-48e3-80e0-d5fd4cb75c96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 22",
      "id": "8c5792f6-c9f5-48e3-80e0-d5fd4cb75c96",
      "kilometrage": 1217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c5792f6-c9f5-48e3-80e0-d5fd4cb75c96",
    "image": "perev_right",
    "point": {
      "latitude": 52.6049190201,
      "longitude": 30.2822205475
    }
  },
  "8c65f719-0e2d-4a5e-8563-5704a65cc618": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 183",
      "id": "8c65f719-0e2d-4a5e-8563-5704a65cc618",
      "kilometrage": 1201,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c65f719-0e2d-4a5e-8563-5704a65cc618",
    "image": "perev_right",
    "point": {
      "latitude": 52.5131809751,
      "longitude": 30.2693372489
    }
  },
  "8c667fb7-042a-4f5c-9160-28badc90c30a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 54",
      "id": "8c667fb7-042a-4f5c-9160-28badc90c30a",
      "kilometrage": 1234,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c667fb7-042a-4f5c-9160-28badc90c30a",
    "image": "perev_left",
    "point": {
      "latitude": 52.6804209381,
      "longitude": 30.2148453507
    }
  },
  "8c72f992-277a-4dd3-93f3-3ecd41dd0cf3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 83",
      "id": "8c72f992-277a-4dd3-93f3-3ecd41dd0cf3",
      "kilometrage": 1249,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c72f992-277a-4dd3-93f3-3ecd41dd0cf3",
    "image": "perev_left",
    "point": {
      "latitude": 52.7159782274,
      "longitude": 30.1261669678
    }
  },
  "8c9a03b2-807a-421c-ab99-be37e96bc61a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 104",
      "id": "8c9a03b2-807a-421c-ab99-be37e96bc61a",
      "kilometrage": 1513,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8c9a03b2-807a-421c-ab99-be37e96bc61a",
    "image": "perev_left",
    "point": {
      "latitude": 53.9073283372,
      "longitude": 30.4526249988
    }
  },
  "8ca6f4fc-9285-4454-8103-23ec1bdc78b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "8ca6f4fc-9285-4454-8103-23ec1bdc78b6",
      "kilometrage": 1454,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ca6f4fc-9285-4454-8103-23ec1bdc78b6",
    "image": "name_of",
    "point": {
      "latitude": 53.5988776945,
      "longitude": 30.26324223
    }
  },
  "8cc29ba6-2eba-4219-985e-3aa3aa74344b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 69",
      "id": "8cc29ba6-2eba-4219-985e-3aa3aa74344b",
      "kilometrage": 1100,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8cc29ba6-2eba-4219-985e-3aa3aa74344b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0177421974,
      "longitude": 30.7688692184
    }
  },
  "8ce9de15-5422-4503-83b1-7c07f2be2fda": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 115",
      "id": "8ce9de15-5422-4503-83b1-7c07f2be2fda",
      "kilometrage": 1265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8ce9de15-5422-4503-83b1-7c07f2be2fda",
    "image": "perev_right",
    "point": {
      "latitude": 52.8227953447,
      "longitude": 30.0901511677
    }
  },
  "8cf9a28b-7d64-4144-921f-50f0cc339022": {
    "data": {
      "color": false,
      "comment": "10 м",
      "description": "Соблюдать надводный габарит  ",
      "id": "8cf9a28b-7d64-4144-921f-50f0cc339022",
      "kilometrage": 1524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8cf9a28b-7d64-4144-921f-50f0cc339022",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.980798016503584,
      "longitude": 30.39370203301152
    }
  },
  "8d283628-9c4b-4c9c-8c54-8cfc6966437e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "8d283628-9c4b-4c9c-8c54-8cfc6966437e",
      "kilometrage": 1502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d283628-9c4b-4c9c-8c54-8cfc6966437e",
    "image": "name_of",
    "point": {
      "latitude": 53.8916492048,
      "longitude": 30.3232845688
    }
  },
  "8d373afc-bcd7-4f42-9e71-4f3feea1dd73": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 166",
      "id": "8d373afc-bcd7-4f42-9e71-4f3feea1dd73",
      "kilometrage": 1188,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d373afc-bcd7-4f42-9e71-4f3feea1dd73",
    "image": "perev_right",
    "point": {
      "latitude": 52.4421293687,
      "longitude": 30.3667862603
    }
  },
  "8d5046e9-9ffb-4e5f-8edf-0fcf439e2534": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 120",
      "id": "8d5046e9-9ffb-4e5f-8edf-0fcf439e2534",
      "kilometrage": 1384,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d5046e9-9ffb-4e5f-8edf-0fcf439e2534",
    "image": "perev_right",
    "point": {
      "latitude": 53.2552121391,
      "longitude": 30.3676127108
    }
  },
  "8d876459-0a7f-4584-93b5-3ee1a7b89f35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 111",
      "id": "8d876459-0a7f-4584-93b5-3ee1a7b89f35",
      "kilometrage": 1263,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8d876459-0a7f-4584-93b5-3ee1a7b89f35",
    "image": "perev_left",
    "point": {
      "latitude": 52.8033973782,
      "longitude": 30.1076004929
    }
  },
  "8da5f727-70e2-40bc-8072-3be34f38b16e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 35",
      "id": "8da5f727-70e2-40bc-8072-3be34f38b16e",
      "kilometrage": 1333,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8da5f727-70e2-40bc-8072-3be34f38b16e",
    "image": "perev_left",
    "point": {
      "latitude": 53.1106059573,
      "longitude": 30.1433714246
    }
  },
  "8dade97d-bcb4-4a46-81da-9a0f97b196c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "8dade97d-bcb4-4a46-81da-9a0f97b196c3",
      "kilometrage": 1158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8dade97d-bcb4-4a46-81da-9a0f97b196c3",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3167607028,
      "longitude": 30.5367406879
    }
  },
  "8df79d54-d9df-4ff8-a991-3c6e6ed92df2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 13",
      "id": "8df79d54-d9df-4ff8-a991-3c6e6ed92df2",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8df79d54-d9df-4ff8-a991-3c6e6ed92df2",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8912967152,
      "longitude": 30.3315164955
    }
  },
  "8dfaf277-d492-4f76-bce7-a5fb4ec939cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 58",
      "id": "8dfaf277-d492-4f76-bce7-a5fb4ec939cd",
      "kilometrage": 1085,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8dfaf277-d492-4f76-bce7-a5fb4ec939cd",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9634385117,
      "longitude": 30.7991282867
    }
  },
  "8f03ce56-5cd5-402c-961e-7cb19e8af084": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый задний  ",
      "id": "8f03ce56-5cd5-402c-961e-7cb19e8af084",
      "kilometrage": 1281,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f03ce56-5cd5-402c-961e-7cb19e8af084",
    "image": "raid_end_left",
    "point": {
      "latitude": 52.8835460307,
      "longitude": 30.0636892317
    }
  },
  "8f0e6671-9df0-4cae-bf64-a5abb6a4284d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 35",
      "id": "8f0e6671-9df0-4cae-bf64-a5abb6a4284d",
      "kilometrage": 1461,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f0e6671-9df0-4cae-bf64-a5abb6a4284d",
    "image": "perev_right",
    "point": {
      "latitude": 53.6262829018,
      "longitude": 30.280427079
    }
  },
  "8f683dd2-4773-41a3-aab6-79b8117d9fc2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "8f683dd2-4773-41a3-aab6-79b8117d9fc2",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f683dd2-4773-41a3-aab6-79b8117d9fc2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3208635354,
      "longitude": 30.5242141643
    }
  },
  "8f736330-737b-4113-ba3c-13c936e1d7d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 165",
      "id": "8f736330-737b-4113-ba3c-13c936e1d7d5",
      "kilometrage": 1187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8f736330-737b-4113-ba3c-13c936e1d7d5",
    "image": "perev_left",
    "point": {
      "latitude": 52.442601129,
      "longitude": 30.3793719317
    }
  },
  "8fa42e3c-52a7-4f19-bdc1-6a39a9a5a4d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 136",
      "id": "8fa42e3c-52a7-4f19-bdc1-6a39a9a5a4d1",
      "kilometrage": 1162,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8fa42e3c-52a7-4f19-bdc1-6a39a9a5a4d1",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.3187458643,
      "longitude": 30.4971299994
    }
  },
  "8fdadfe3-62f0-449e-997a-1bed6e30fb86": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 107",
      "id": "8fdadfe3-62f0-449e-997a-1bed6e30fb86",
      "kilometrage": 1380,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "8fdadfe3-62f0-449e-997a-1bed6e30fb86",
    "image": "perev_right",
    "point": {
      "latitude": 53.2499942827,
      "longitude": 30.3276091008
    }
  },
  "9059291b-35b1-40ac-9b19-919cf6f415da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 109",
      "id": "9059291b-35b1-40ac-9b19-919cf6f415da",
      "kilometrage": 1144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9059291b-35b1-40ac-9b19-919cf6f415da",
    "image": "perev_left",
    "point": {
      "latitude": 52.2391755056,
      "longitude": 30.5391558074
    }
  },
  "912e911f-972a-4213-9834-b783f0a05b86": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 8",
      "id": "912e911f-972a-4213-9834-b783f0a05b86",
      "kilometrage": 1444,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "912e911f-972a-4213-9834-b783f0a05b86",
    "image": "perev_left",
    "point": {
      "latitude": 53.5446981199,
      "longitude": 30.2777427339
    }
  },
  "91e4c8e7-1296-4c1c-bf08-032a0efb1e7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "91e4c8e7-1296-4c1c-bf08-032a0efb1e7b",
      "kilometrage": 1570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "91e4c8e7-1296-4c1c-bf08-032a0efb1e7b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.3202262933,
      "longitude": 30.2811544315
    }
  },
  "9206761e-e365-4910-a23a-4c9e6b3495eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "9206761e-e365-4910-a23a-4c9e6b3495eb",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9206761e-e365-4910-a23a-4c9e6b3495eb",
    "image": "axis_romb",
    "point": {
      "latitude": 53.8918621856,
      "longitude": 30.3306183288
    }
  },
  "928f4e5b-40cf-46bc-8b1b-ca16644c803a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 16",
      "id": "928f4e5b-40cf-46bc-8b1b-ca16644c803a",
      "kilometrage": 1214,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "928f4e5b-40cf-46bc-8b1b-ca16644c803a",
    "image": "perev_right",
    "point": {
      "latitude": 52.5820868189,
      "longitude": 30.2748705176
    }
  },
  "929467f8-337d-430a-89fa-48167d3be6a0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 37",
      "id": "929467f8-337d-430a-89fa-48167d3be6a0",
      "kilometrage": 1225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "929467f8-337d-430a-89fa-48167d3be6a0",
    "image": "perev_right",
    "point": {
      "latitude": 52.6436049286,
      "longitude": 30.208379621
    }
  },
  "92cbbc1d-e89c-4952-8c9d-1cf6540bc04d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 159",
      "id": "92cbbc1d-e89c-4952-8c9d-1cf6540bc04d",
      "kilometrage": 1183,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92cbbc1d-e89c-4952-8c9d-1cf6540bc04d",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.4089232708,
      "longitude": 30.3813947818
    }
  },
  "92e99448-f114-45b1-af3d-e79cf7924c2d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 110",
      "id": "92e99448-f114-45b1-af3d-e79cf7924c2d",
      "kilometrage": 1145,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92e99448-f114-45b1-af3d-e79cf7924c2d",
    "image": "perev_right",
    "point": {
      "latitude": 52.2433106592,
      "longitude": 30.5301560876
    }
  },
  "92fe23d7-1a73-4649-85d6-7efcb08f1f36": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 126",
      "id": "92fe23d7-1a73-4649-85d6-7efcb08f1f36",
      "kilometrage": 1528,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "92fe23d7-1a73-4649-85d6-7efcb08f1f36",
    "image": "perev_left",
    "point": {
      "latitude": 54.0151287578,
      "longitude": 30.3887059985
    }
  },
  "9314e32f-15a6-416a-a21a-3490482a772c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 115м",
      "id": "9314e32f-15a6-416a-a21a-3490482a772c",
      "kilometrage": 1173,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9314e32f-15a6-416a-a21a-3490482a772c",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3797908755,
      "longitude": 30.4227728465
    }
  },
  "931e1d05-1b21-4fdf-9c23-3383102ac0a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 7",
      "id": "931e1d05-1b21-4fdf-9c23-3383102ac0a8",
      "kilometrage": 1053,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "931e1d05-1b21-4fdf-9c23-3383102ac0a8",
    "image": "perev_right",
    "point": {
      "latitude": 51.7690472581,
      "longitude": 30.6125524937
    }
  },
  "9420c3e3-8296-4f8d-8e17-eab858571716": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1430",
      "id": "9420c3e3-8296-4f8d-8e17-eab858571716",
      "kilometrage": 1430,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9420c3e3-8296-4f8d-8e17-eab858571716",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4942083376,
      "longitude": 30.3091738685
    }
  },
  "95005d3e-d6d5-464c-87c6-7174ca1ea759": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 140",
      "id": "95005d3e-d6d5-464c-87c6-7174ca1ea759",
      "kilometrage": 1199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95005d3e-d6d5-464c-87c6-7174ca1ea759",
    "image": "buyo_right",
    "point": {
      "latitude": 52.4999529705,
      "longitude": 30.2743445347
    }
  },
  "956d4ba3-b4c3-4218-93d9-f1a0a8d23a13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 16",
      "id": "956d4ba3-b4c3-4218-93d9-f1a0a8d23a13",
      "kilometrage": 1323,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "956d4ba3-b4c3-4218-93d9-f1a0a8d23a13",
    "image": "perev_right",
    "point": {
      "latitude": 53.1189643462,
      "longitude": 30.0789738959
    }
  },
  "95d53eae-b331-4c60-acba-42fc4868992d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "95d53eae-b331-4c60-acba-42fc4868992d",
      "kilometrage": 1560,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95d53eae-b331-4c60-acba-42fc4868992d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.2430273505,
      "longitude": 30.2763289989
    }
  },
  "95da1d1a-fc61-4cf8-9d60-ee336260b9d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 31",
      "id": "95da1d1a-fc61-4cf8-9d60-ee336260b9d7",
      "kilometrage": 1069,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95da1d1a-fc61-4cf8-9d60-ee336260b9d7",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8700365456,
      "longitude": 30.7112902818
    }
  },
  "95e24259-a028-4e9e-b698-ad8a6bad7550": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1195",
      "id": "95e24259-a028-4e9e-b698-ad8a6bad7550",
      "kilometrage": 1195,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95e24259-a028-4e9e-b698-ad8a6bad7550",
    "image": "kilometrage",
    "point": {
      "latitude": 52.4775353871,
      "longitude": 30.3068651777
    }
  },
  "95fa64da-e8f0-45b6-8256-0ea388e6d4a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 68",
      "id": "95fa64da-e8f0-45b6-8256-0ea388e6d4a5",
      "kilometrage": 1481,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95fa64da-e8f0-45b6-8256-0ea388e6d4a5",
    "image": "perev_left",
    "point": {
      "latitude": 53.7346440541,
      "longitude": 30.2796120764
    }
  },
  "95fcfc63-a091-4e14-8064-63664bbb3e0a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 18",
      "id": "95fcfc63-a091-4e14-8064-63664bbb3e0a",
      "kilometrage": 1505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "95fcfc63-a091-4e14-8064-63664bbb3e0a",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8886382972,
      "longitude": 30.3550526716
    }
  },
  "962ec454-c2b2-4757-b3f0-b95a3635d79e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 28",
      "id": "962ec454-c2b2-4757-b3f0-b95a3635d79e",
      "kilometrage": 1329,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "962ec454-c2b2-4757-b3f0-b95a3635d79e",
    "image": "perev_left",
    "point": {
      "latitude": 53.1278894305,
      "longitude": 30.1228747003
    }
  },
  "963abde6-7e72-45f3-bdba-fef8f878d581": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 28",
      "id": "963abde6-7e72-45f3-bdba-fef8f878d581",
      "kilometrage": 1221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "963abde6-7e72-45f3-bdba-fef8f878d581",
    "image": "perev_right",
    "point": {
      "latitude": 52.6189005172,
      "longitude": 30.2395940381
    }
  },
  "968fd33a-b995-41e1-b379-f057abf32556": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1340",
      "id": "968fd33a-b995-41e1-b379-f057abf32556",
      "kilometrage": 1340,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "968fd33a-b995-41e1-b379-f057abf32556",
    "image": "kilometrage",
    "point": {
      "latitude": 53.089403831,
      "longitude": 30.2018843366
    }
  },
  "96c10def-5767-4fcf-bdaf-acc51a9e1697": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 99",
      "id": "96c10def-5767-4fcf-bdaf-acc51a9e1697",
      "kilometrage": 1506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96c10def-5767-4fcf-bdaf-acc51a9e1697",
    "image": "perev_left",
    "point": {
      "latitude": 53.886520011,
      "longitude": 30.3696102214
    }
  },
  "96c31fa4-6b7f-48d1-b747-9e02c70a92b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 55",
      "id": "96c31fa4-6b7f-48d1-b747-9e02c70a92b8",
      "kilometrage": 1235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96c31fa4-6b7f-48d1-b747-9e02c70a92b8",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.6856442967,
      "longitude": 30.2118174702
    }
  },
  "96cd4b36-98d1-4e75-afde-88c1964ba3cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "96cd4b36-98d1-4e75-afde-88c1964ba3cf",
      "kilometrage": 1316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96cd4b36-98d1-4e75-afde-88c1964ba3cf",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.0684490696,
      "longitude": 30.054779137
    }
  },
  "96ee08e6-d519-4ba1-b91e-e57ca1ec604d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 108",
      "id": "96ee08e6-d519-4ba1-b91e-e57ca1ec604d",
      "kilometrage": 1380,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "96ee08e6-d519-4ba1-b91e-e57ca1ec604d",
    "image": "perev_left",
    "point": {
      "latitude": 53.2491866902,
      "longitude": 30.3330808235
    }
  },
  "972d65e7-7ea4-4db9-af30-c0e2948b1aed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 184",
      "id": "972d65e7-7ea4-4db9-af30-c0e2948b1aed",
      "kilometrage": 1202,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "972d65e7-7ea4-4db9-af30-c0e2948b1aed",
    "image": "perev_right",
    "point": {
      "latitude": 52.5191375656,
      "longitude": 30.2652775899
    }
  },
  "97473c9e-cda0-4e4c-805e-9ec3cffad700": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 208",
      "id": "97473c9e-cda0-4e4c-805e-9ec3cffad700",
      "kilometrage": 1436,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "97473c9e-cda0-4e4c-805e-9ec3cffad700",
    "image": "perev_right",
    "point": {
      "latitude": 53.500356303,
      "longitude": 30.2770178263
    }
  },
  "9801e706-c056-4a24-b6ca-9b5da7343f7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1525",
      "id": "9801e706-c056-4a24-b6ca-9b5da7343f7a",
      "kilometrage": 1525,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9801e706-c056-4a24-b6ca-9b5da7343f7a",
    "image": "kilometrage",
    "point": {
      "latitude": 53.9849096305,
      "longitude": 30.392969577
    }
  },
  "985b2434-883a-416a-a124-849c780972e6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 195",
      "id": "985b2434-883a-416a-a124-849c780972e6",
      "kilometrage": 1428,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "985b2434-883a-416a-a124-849c780972e6",
    "image": "perev_left",
    "point": {
      "latitude": 53.4904478324,
      "longitude": 30.3124330055
    }
  },
  "98946afb-853a-4162-85e1-73c958ca94cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 23",
      "id": "98946afb-853a-4162-85e1-73c958ca94cf",
      "kilometrage": 1063,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "98946afb-853a-4162-85e1-73c958ca94cf",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8233047647,
      "longitude": 30.677260647
    }
  },
  "99139fb8-6ee0-4a50-a2b3-7a29fcf5fc39": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 72",
      "id": "99139fb8-6ee0-4a50-a2b3-7a29fcf5fc39",
      "kilometrage": 1356,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99139fb8-6ee0-4a50-a2b3-7a29fcf5fc39",
    "image": "perev_left",
    "point": {
      "latitude": 53.1325243478,
      "longitude": 30.2839045518
    }
  },
  "99237056-ad6d-4c0a-bd74-30a5d39e8bbc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 60",
      "id": "99237056-ad6d-4c0a-bd74-30a5d39e8bbc",
      "kilometrage": 1238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99237056-ad6d-4c0a-bd74-30a5d39e8bbc",
    "image": "perev_right",
    "point": {
      "latitude": 52.6748319252,
      "longitude": 30.1899830566
    }
  },
  "99a6d0dc-2639-46bf-9128-8779f8dfce2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 213",
      "id": "99a6d0dc-2639-46bf-9128-8779f8dfce2b",
      "kilometrage": 1438,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "99a6d0dc-2639-46bf-9128-8779f8dfce2b",
    "image": "perev_right",
    "point": {
      "latitude": 53.5120904254,
      "longitude": 30.2605811409
    }
  },
  "9a04c260-1f4b-43b7-8861-97363068883f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 77",
      "id": "9a04c260-1f4b-43b7-8861-97363068883f",
      "kilometrage": 1359,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a04c260-1f4b-43b7-8861-97363068883f",
    "image": "perev_right",
    "point": {
      "latitude": 53.1487862523,
      "longitude": 30.268614689
    }
  },
  "9a8b7a5a-4218-449d-a07c-1facfc11048d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 60",
      "id": "9a8b7a5a-4218-449d-a07c-1facfc11048d",
      "kilometrage": 1475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a8b7a5a-4218-449d-a07c-1facfc11048d",
    "image": "perev_left",
    "point": {
      "latitude": 53.7049584734,
      "longitude": 30.3121418251
    }
  },
  "9a9025c0-a1c3-46f1-9691-57b12e08f196": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 160",
      "id": "9a9025c0-a1c3-46f1-9691-57b12e08f196",
      "kilometrage": 1300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9a9025c0-a1c3-46f1-9691-57b12e08f196",
    "image": "perev_left",
    "point": {
      "latitude": 52.9824458111,
      "longitude": 30.0525874779
    }
  },
  "9aac9faf-66e9-44bc-91e0-af944911155c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1090",
      "id": "9aac9faf-66e9-44bc-91e0-af944911155c",
      "kilometrage": 1090,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9aac9faf-66e9-44bc-91e0-af944911155c",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9882888125,
      "longitude": 30.7975195553
    }
  },
  "9aaca606-b5ec-412a-87dd-7240aff544fc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 11",
      "id": "9aaca606-b5ec-412a-87dd-7240aff544fc",
      "kilometrage": 1210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9aaca606-b5ec-412a-87dd-7240aff544fc",
    "image": "perev_left",
    "point": {
      "latitude": 52.5758840846,
      "longitude": 30.2664769412
    }
  },
  "9b0bb2c1-2cdc-4eeb-a0c1-28f0ad9f204e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 129",
      "id": "9b0bb2c1-2cdc-4eeb-a0c1-28f0ad9f204e",
      "kilometrage": 1530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9b0bb2c1-2cdc-4eeb-a0c1-28f0ad9f204e",
    "image": "perev_left",
    "point": {
      "latitude": 54.0307675457,
      "longitude": 30.3894367651
    }
  },
  "9bab89cb-ee8e-4c13-9800-31a2cdd4c2ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 207",
      "id": "9bab89cb-ee8e-4c13-9800-31a2cdd4c2ab",
      "kilometrage": 1435,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9bab89cb-ee8e-4c13-9800-31a2cdd4c2ab",
    "image": "perev_left",
    "point": {
      "latitude": 53.5038232263,
      "longitude": 30.2790951273
    }
  },
  "9bbb54b2-4ac7-4623-b307-311a3f13e14c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "9bbb54b2-4ac7-4623-b307-311a3f13e14c",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9bbb54b2-4ac7-4623-b307-311a3f13e14c",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3183348433,
      "longitude": 30.5285753826
    }
  },
  "9c0617c1-7aa1-4a0e-8b77-243c8f75f7cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 80",
      "id": "9c0617c1-7aa1-4a0e-8b77-243c8f75f7cb",
      "kilometrage": 1361,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c0617c1-7aa1-4a0e-8b77-243c8f75f7cb",
    "image": "perev_right",
    "point": {
      "latitude": 53.1666721711,
      "longitude": 30.2571931089
    }
  },
  "9c24b5eb-91f6-42af-9b01-7207cd9e4b41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 138",
      "id": "9c24b5eb-91f6-42af-9b01-7207cd9e4b41",
      "kilometrage": 1395,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c24b5eb-91f6-42af-9b01-7207cd9e4b41",
    "image": "perev_right",
    "point": {
      "latitude": 53.3068157914,
      "longitude": 30.3619361066
    }
  },
  "9c3ad71c-5176-402a-9251-cbac496daba7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1150",
      "id": "9c3ad71c-5176-402a-9251-cbac496daba7",
      "kilometrage": 1150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c3ad71c-5176-402a-9251-cbac496daba7",
    "image": "kilometrage",
    "point": {
      "latitude": 52.2746403153,
      "longitude": 30.5365291216
    }
  },
  "9c7f9686-548e-478a-8f8e-a94698f8c258": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 101",
      "id": "9c7f9686-548e-478a-8f8e-a94698f8c258",
      "kilometrage": 1257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c7f9686-548e-478a-8f8e-a94698f8c258",
    "image": "perev_left",
    "point": {
      "latitude": 52.7657875233,
      "longitude": 30.1151189416
    }
  },
  "9c8862ae-2539-46bb-a34e-c8cfb77d3ab2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 5",
      "id": "9c8862ae-2539-46bb-a34e-c8cfb77d3ab2",
      "kilometrage": 1569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9c8862ae-2539-46bb-a34e-c8cfb77d3ab2",
    "image": "buyo_right",
    "point": {
      "latitude": 54.316149376,
      "longitude": 30.2753353055
    }
  },
  "9cc16e5b-771d-4094-91e1-dd432fae3534": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 204",
      "id": "9cc16e5b-771d-4094-91e1-dd432fae3534",
      "kilometrage": 1433,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9cc16e5b-771d-4094-91e1-dd432fae3534",
    "image": "perev_left",
    "point": {
      "latitude": 53.5025503703,
      "longitude": 30.3056421908
    }
  },
  "9d0f70a4-6c1d-4aa7-97cf-55b37c6860dc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 178",
      "id": "9d0f70a4-6c1d-4aa7-97cf-55b37c6860dc",
      "kilometrage": 1197,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d0f70a4-6c1d-4aa7-97cf-55b37c6860dc",
    "image": "perev_right",
    "point": {
      "latitude": 52.4893404665,
      "longitude": 30.2920244175
    }
  },
  "9d331064-6931-4cd3-8f4a-3e74d96ce711": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 123",
      "id": "9d331064-6931-4cd3-8f4a-3e74d96ce711",
      "kilometrage": 1526,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d331064-6931-4cd3-8f4a-3e74d96ce711",
    "image": "perev_left",
    "point": {
      "latitude": 54.0007451798,
      "longitude": 30.3928438694
    }
  },
  "9d46ddbc-3e2d-4ecb-b7e7-80d66e194bc5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 113",
      "id": "9d46ddbc-3e2d-4ecb-b7e7-80d66e194bc5",
      "kilometrage": 1519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9d46ddbc-3e2d-4ecb-b7e7-80d66e194bc5",
    "image": "perev_left",
    "point": {
      "latitude": 53.9469778488,
      "longitude": 30.4218717115
    }
  },
  "9daa3c6d-21de-47b1-93a8-2fa162fb62b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 128",
      "id": "9daa3c6d-21de-47b1-93a8-2fa162fb62b6",
      "kilometrage": 1155,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9daa3c6d-21de-47b1-93a8-2fa162fb62b6",
    "image": "perev_right",
    "point": {
      "latitude": 52.307107171,
      "longitude": 30.5333111661
    }
  },
  "9dbb9b4c-0ef6-4a60-a388-cf8093c44814": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 116",
      "id": "9dbb9b4c-0ef6-4a60-a388-cf8093c44814",
      "kilometrage": 1174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9dbb9b4c-0ef6-4a60-a388-cf8093c44814",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3779981703,
      "longitude": 30.4154792399
    }
  },
  "9e17d106-fd7f-49ee-bd65-1f39ac9f131c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 75",
      "id": "9e17d106-fd7f-49ee-bd65-1f39ac9f131c",
      "kilometrage": 1358,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e17d106-fd7f-49ee-bd65-1f39ac9f131c",
    "image": "perev_left",
    "point": {
      "latitude": 53.1418773517,
      "longitude": 30.2852247869
    }
  },
  "9e3485f5-5f95-469a-98ae-8c501a9c26e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 17",
      "id": "9e3485f5-5f95-469a-98ae-8c501a9c26e3",
      "kilometrage": 1505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e3485f5-5f95-469a-98ae-8c501a9c26e3",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8893586078,
      "longitude": 30.3521465759
    }
  },
  "9e3f5ad3-9051-4d4e-a76b-48208753a058": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 31",
      "id": "9e3f5ad3-9051-4d4e-a76b-48208753a058",
      "kilometrage": 1331,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e3f5ad3-9051-4d4e-a76b-48208753a058",
    "image": "perev_left",
    "point": {
      "latitude": 53.121635103,
      "longitude": 30.1277850751
    }
  },
  "9e62d953-544b-40af-a034-6ab6afb53925": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 103",
      "id": "9e62d953-544b-40af-a034-6ab6afb53925",
      "kilometrage": 1512,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e62d953-544b-40af-a034-6ab6afb53925",
    "image": "perev_left",
    "point": {
      "latitude": 53.9017970603,
      "longitude": 30.4526622155
    }
  },
  "9e96dfc3-2c85-48e2-8ef4-013ede5d0075": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 118",
      "id": "9e96dfc3-2c85-48e2-8ef4-013ede5d0075",
      "kilometrage": 1383,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9e96dfc3-2c85-48e2-8ef4-013ede5d0075",
    "image": "perev_left",
    "point": {
      "latitude": 53.2501303882,
      "longitude": 30.3591069338
    }
  },
  "9ea5e106-e801-4bc8-8e90-64f30fa97a8f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 130",
      "id": "9ea5e106-e801-4bc8-8e90-64f30fa97a8f",
      "kilometrage": 1531,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ea5e106-e801-4bc8-8e90-64f30fa97a8f",
    "image": "perev_left",
    "point": {
      "latitude": 54.0366464312,
      "longitude": 30.3867417627
    }
  },
  "9ec4a3c3-095d-4090-869e-77a0bf7c2f58": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 47",
      "id": "9ec4a3c3-095d-4090-869e-77a0bf7c2f58",
      "kilometrage": 1230,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ec4a3c3-095d-4090-869e-77a0bf7c2f58",
    "image": "perev_left",
    "point": {
      "latitude": 52.6667287269,
      "longitude": 30.2210272466
    }
  },
  "9ec4bbd1-ae51-4666-b941-58853a9ff8aa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1305",
      "id": "9ec4bbd1-ae51-4666-b941-58853a9ff8aa",
      "kilometrage": 1305,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ec4bbd1-ae51-4666-b941-58853a9ff8aa",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0156789299,
      "longitude": 30.0469102234
    }
  },
  "9edcaebd-eb2e-4942-94f6-af1828f88642": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 85",
      "id": "9edcaebd-eb2e-4942-94f6-af1828f88642",
      "kilometrage": 1132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9edcaebd-eb2e-4942-94f6-af1828f88642",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1955510998,
      "longitude": 30.6014167047
    }
  },
  "9ee32107-824c-4b83-9b7a-87722d75c88f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 157",
      "id": "9ee32107-824c-4b83-9b7a-87722d75c88f",
      "kilometrage": 1298,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ee32107-824c-4b83-9b7a-87722d75c88f",
    "image": "perev_right",
    "point": {
      "latitude": 52.9883703313,
      "longitude": 30.0411964812
    }
  },
  "9ef39b37-a7ea-471a-9f14-408d3016d260": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 99",
      "id": "9ef39b37-a7ea-471a-9f14-408d3016d260",
      "kilometrage": 1257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ef39b37-a7ea-471a-9f14-408d3016d260",
    "image": "perev_left",
    "point": {
      "latitude": 52.7621940291,
      "longitude": 30.1138368809
    }
  },
  "9f03fdc3-d513-4162-88cc-795d2f4211a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 12",
      "id": "9f03fdc3-d513-4162-88cc-795d2f4211a7",
      "kilometrage": 1322,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f03fdc3-d513-4162-88cc-795d2f4211a7",
    "image": "perev_right",
    "point": {
      "latitude": 53.1090483874,
      "longitude": 30.0719082721
    }
  },
  "9f25b0e3-3dea-4c14-83c7-f0b03f1bb1e3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1110",
      "id": "9f25b0e3-3dea-4c14-83c7-f0b03f1bb1e3",
      "kilometrage": 1110,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f25b0e3-3dea-4c14-83c7-f0b03f1bb1e3",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0713649029,
      "longitude": 30.7260803033
    }
  },
  "9f82e9af-3441-4fa2-9452-ce9a5e436854": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 44м",
      "id": "9f82e9af-3441-4fa2-9452-ce9a5e436854",
      "kilometrage": 1079,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9f82e9af-3441-4fa2-9452-ce9a5e436854",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9133098082,
      "longitude": 30.8128153942
    }
  },
  "9fe2c1ef-98f8-44c9-94fa-fe94daae1758": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 127",
      "id": "9fe2c1ef-98f8-44c9-94fa-fe94daae1758",
      "kilometrage": 1529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9fe2c1ef-98f8-44c9-94fa-fe94daae1758",
    "image": "perev_right",
    "point": {
      "latitude": 54.0190000282,
      "longitude": 30.3867057366
    }
  },
  "9fe9ab5f-e93e-49ac-ba09-c2f2a23ff7e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 167",
      "id": "9fe9ab5f-e93e-49ac-ba09-c2f2a23ff7e1",
      "kilometrage": 1189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9fe9ab5f-e93e-49ac-ba09-c2f2a23ff7e1",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.4416366857,
      "longitude": 30.3587959261
    }
  },
  "9fed4028-2756-46d4-ac24-ae5dc09306f0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 37",
      "id": "9fed4028-2756-46d4-ac24-ae5dc09306f0",
      "kilometrage": 1074,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9fed4028-2756-46d4-ac24-ae5dc09306f0",
    "image": "buyo_right",
    "point": {
      "latitude": 51.90422309,
      "longitude": 30.7533179286
    }
  },
  "9ff4355f-0c23-425e-8eba-c04aaa1ba4dd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 84",
      "id": "9ff4355f-0c23-425e-8eba-c04aaa1ba4dd",
      "kilometrage": 1250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "9ff4355f-0c23-425e-8eba-c04aaa1ba4dd",
    "image": "perev_right",
    "point": {
      "latitude": 52.722194554,
      "longitude": 30.1259981904
    }
  },
  "a0114e01-fae5-413b-9fe0-14501a4eecc8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 64",
      "id": "a0114e01-fae5-413b-9fe0-14501a4eecc8",
      "kilometrage": 1095,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0114e01-fae5-413b-9fe0-14501a4eecc8",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0102006522,
      "longitude": 30.7769174077
    }
  },
  "a04b09e0-7604-4eb9-b914-df66104861da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 41",
      "id": "a04b09e0-7604-4eb9-b914-df66104861da",
      "kilometrage": 1091,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a04b09e0-7604-4eb9-b914-df66104861da",
    "image": "perev_right",
    "point": {
      "latitude": 51.9858828861,
      "longitude": 30.7895829202
    }
  },
  "a04f969b-bd0c-4435-90c7-48dcabe0d034": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 36",
      "id": "a04f969b-bd0c-4435-90c7-48dcabe0d034",
      "kilometrage": 1224,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a04f969b-bd0c-4435-90c7-48dcabe0d034",
    "image": "perev_left",
    "point": {
      "latitude": 52.6412345798,
      "longitude": 30.2136792871
    }
  },
  "a0b2a3d0-8615-4a06-9301-90189651380c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 158",
      "id": "a0b2a3d0-8615-4a06-9301-90189651380c",
      "kilometrage": 1299,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0b2a3d0-8615-4a06-9301-90189651380c",
    "image": "perev_left",
    "point": {
      "latitude": 52.9828276111,
      "longitude": 30.0407791562
    }
  },
  "a0badbf2-c706-417a-83b8-97e4c93e7a05": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1380",
      "id": "a0badbf2-c706-417a-83b8-97e4c93e7a05",
      "kilometrage": 1380,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0badbf2-c706-417a-83b8-97e4c93e7a05",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2494868668,
      "longitude": 30.3270738119
    }
  },
  "a0d53987-cce9-4cf1-be52-142136785a80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 93",
      "id": "a0d53987-cce9-4cf1-be52-142136785a80",
      "kilometrage": 1255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a0d53987-cce9-4cf1-be52-142136785a80",
    "image": "perev_right",
    "point": {
      "latitude": 52.7493411402,
      "longitude": 30.1066770545
    }
  },
  "a13f3fc2-6fd3-4541-bf7d-000c0cddd1e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 73",
      "id": "a13f3fc2-6fd3-4541-bf7d-000c0cddd1e5",
      "kilometrage": 1104,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a13f3fc2-6fd3-4541-bf7d-000c0cddd1e5",
    "image": "buyo_left",
    "point": {
      "latitude": 52.027482217,
      "longitude": 30.7355564355
    }
  },
  "a17e8f8c-9564-4c60-adfc-a8aa7a374516": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 80",
      "id": "a17e8f8c-9564-4c60-adfc-a8aa7a374516",
      "kilometrage": 1121,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a17e8f8c-9564-4c60-adfc-a8aa7a374516",
    "image": "perev_left",
    "point": {
      "latitude": 52.1351859017,
      "longitude": 30.6822771742
    }
  },
  "a181c477-147a-42ef-b827-558141af547a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "a181c477-147a-42ef-b827-558141af547a",
      "kilometrage": 1441,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a181c477-147a-42ef-b827-558141af547a",
    "image": "name_of",
    "point": {
      "latitude": 53.5266764201,
      "longitude": 30.2615051824
    }
  },
  "a1918748-769e-4611-b3ae-9c122c874fd3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 103",
      "id": "a1918748-769e-4611-b3ae-9c122c874fd3",
      "kilometrage": 1258,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1918748-769e-4611-b3ae-9c122c874fd3",
    "image": "perev_left",
    "point": {
      "latitude": 52.7696809216,
      "longitude": 30.1161354757
    }
  },
  "a1971c84-583d-41a5-b090-fd0812dd7fa1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 203",
      "id": "a1971c84-583d-41a5-b090-fd0812dd7fa1",
      "kilometrage": 1430,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a1971c84-583d-41a5-b090-fd0812dd7fa1",
    "image": "perev_left",
    "point": {
      "latitude": 53.4960657594,
      "longitude": 30.3024832967
    }
  },
  "a249dcf5-c9df-4f66-8a3b-b5d302297a2b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a249dcf5-c9df-4f66-8a3b-b5d302297a2b",
      "kilometrage": 1158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a249dcf5-c9df-4f66-8a3b-b5d302297a2b",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3165629213,
      "longitude": 30.5320568529
    }
  },
  "a2902263-7c0a-4870-9171-c73b92c0c25e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 127",
      "id": "a2902263-7c0a-4870-9171-c73b92c0c25e",
      "kilometrage": 1389,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2902263-7c0a-4870-9171-c73b92c0c25e",
    "image": "perev_right",
    "point": {
      "latitude": 53.2730596973,
      "longitude": 30.3812265368
    }
  },
  "a294b4b5-048b-43c4-bc2c-0782306652e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 79",
      "id": "a294b4b5-048b-43c4-bc2c-0782306652e1",
      "kilometrage": 1114,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a294b4b5-048b-43c4-bc2c-0782306652e1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0998221621,
      "longitude": 30.7059907611
    }
  },
  "a2a94459-57d1-422b-8fa5-9557157faebe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 76",
      "id": "a2a94459-57d1-422b-8fa5-9557157faebe",
      "kilometrage": 1245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2a94459-57d1-422b-8fa5-9557157faebe",
    "image": "perev_right",
    "point": {
      "latitude": 52.705727286,
      "longitude": 30.1623180038
    }
  },
  "a2a97db2-f958-42d6-b5e7-093a22ea972b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 14",
      "id": "a2a97db2-f958-42d6-b5e7-093a22ea972b",
      "kilometrage": 1322,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a2a97db2-f958-42d6-b5e7-093a22ea972b",
    "image": "perev_left",
    "point": {
      "latitude": 53.11314774,
      "longitude": 30.0821632481
    }
  },
  "a3be6994-fdac-43b6-83aa-724f4709ebaf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 43м",
      "id": "a3be6994-fdac-43b6-83aa-724f4709ebaf",
      "kilometrage": 1077,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3be6994-fdac-43b6-83aa-724f4709ebaf",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9042879,
      "longitude": 30.8021197923
    }
  },
  "a3bf234e-b9ba-4bec-b84d-441a743bc6fa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 79",
      "id": "a3bf234e-b9ba-4bec-b84d-441a743bc6fa",
      "kilometrage": 1360,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3bf234e-b9ba-4bec-b84d-441a743bc6fa",
    "image": "perev_left",
    "point": {
      "latitude": 53.1589256415,
      "longitude": 30.270986341
    }
  },
  "a3c94a8c-40ee-43f3-9d33-112c42cde3ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 33",
      "id": "a3c94a8c-40ee-43f3-9d33-112c42cde3ad",
      "kilometrage": 1084,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a3c94a8c-40ee-43f3-9d33-112c42cde3ad",
    "image": "perev_left",
    "point": {
      "latitude": 51.9520052841,
      "longitude": 30.8064086604
    }
  },
  "a41096b4-e874-48df-b6f9-da4d5472b6d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a41096b4-e874-48df-b6f9-da4d5472b6d2",
      "kilometrage": 1152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a41096b4-e874-48df-b6f9-da4d5472b6d2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.2865858701,
      "longitude": 30.5411911668
    }
  },
  "a4127e19-05b7-4bea-a699-a5e5f5d2aec9": {
    "data": {
      "color": true,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a4127e19-05b7-4bea-a699-a5e5f5d2aec9",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a4127e19-05b7-4bea-a699-a5e5f5d2aec9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8923094051,
      "longitude": 30.375917361
    }
  },
  "a42ce633-9941-4967-b0d1-6cc5fb6bfa7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a42ce633-9941-4967-b0d1-6cc5fb6bfa7a",
      "kilometrage": 1193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a42ce633-9941-4967-b0d1-6cc5fb6bfa7a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.4674400903,
      "longitude": 30.3172886739
    }
  },
  "a48704a3-4cd1-4f64-ae58-e05a25549f3e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a48704a3-4cd1-4f64-ae58-e05a25549f3e",
      "kilometrage": 1530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a48704a3-4cd1-4f64-ae58-e05a25549f3e",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.0323207727,
      "longitude": 30.3894841177
    }
  },
  "a4928c41-bf8b-4681-92b2-f40fc4f50df1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "a4928c41-bf8b-4681-92b2-f40fc4f50df1",
      "kilometrage": 1199,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a4928c41-bf8b-4681-92b2-f40fc4f50df1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4993909808,
      "longitude": 30.2736944593
    }
  },
  "a4a80018-3db3-4321-aab2-917d56739010": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 63",
      "id": "a4a80018-3db3-4321-aab2-917d56739010",
      "kilometrage": 1349,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a4a80018-3db3-4321-aab2-917d56739010",
    "image": "perev_right",
    "point": {
      "latitude": 53.1117425694,
      "longitude": 30.2671402221
    }
  },
  "a4b791d5-2dbf-427e-a54b-0943c6b334b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 2",
      "id": "a4b791d5-2dbf-427e-a54b-0943c6b334b6",
      "kilometrage": 1259,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a4b791d5-2dbf-427e-a54b-0943c6b334b6",
    "image": "buyo_right",
    "point": {
      "latitude": 52.7776696183,
      "longitude": 30.1210679777
    }
  },
  "a4ef5747-8616-4a10-b2db-eeaad82c30cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности правый 16м",
      "id": "a4ef5747-8616-4a10-b2db-eeaad82c30cb",
      "kilometrage": 1051,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a4ef5747-8616-4a10-b2db-eeaad82c30cb",
    "image": "buyo_danger_right",
    "point": {
      "latitude": 51.7588895974,
      "longitude": 30.6244191141
    }
  },
  "a5355847-1e21-4ed4-9233-c94cd91a14a7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "a5355847-1e21-4ed4-9233-c94cd91a14a7",
      "kilometrage": 1554,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5355847-1e21-4ed4-9233-c94cd91a14a7",
    "image": "bridge_low",
    "point": {
      "latitude": 54.2059511853,
      "longitude": 30.3076836159
    }
  },
  "a5846dbc-c6fe-4010-a514-218225206953": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 135",
      "id": "a5846dbc-c6fe-4010-a514-218225206953",
      "kilometrage": 1162,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a5846dbc-c6fe-4010-a514-218225206953",
    "image": "perev_right",
    "point": {
      "latitude": 52.3242527016,
      "longitude": 30.5021069361
    }
  },
  "a601e219-9a3a-4d6f-96ae-ff7a17ae9b7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1390",
      "id": "a601e219-9a3a-4d6f-96ae-ff7a17ae9b7b",
      "kilometrage": 1390,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a601e219-9a3a-4d6f-96ae-ff7a17ae9b7b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2794317901,
      "longitude": 30.3829666257
    }
  },
  "a65648ef-e292-42c1-bff7-f779925d71b5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "a65648ef-e292-42c1-bff7-f779925d71b5",
      "kilometrage": 1086,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a65648ef-e292-42c1-bff7-f779925d71b5",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9681085446,
      "longitude": 30.7951268445
    }
  },
  "a6bcdf40-dad4-455a-9eef-20fbc29d74c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 152",
      "id": "a6bcdf40-dad4-455a-9eef-20fbc29d74c8",
      "kilometrage": 1403,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a6bcdf40-dad4-455a-9eef-20fbc29d74c8",
    "image": "perev_left",
    "point": {
      "latitude": 53.3595938959,
      "longitude": 30.3768178981
    }
  },
  "a6c5ce04-06f8-4ab7-a486-d38f7a223669": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 97",
      "id": "a6c5ce04-06f8-4ab7-a486-d38f7a223669",
      "kilometrage": 1135,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a6c5ce04-06f8-4ab7-a486-d38f7a223669",
    "image": "perev_left",
    "point": {
      "latitude": 52.2141661702,
      "longitude": 30.582950723
    }
  },
  "a6d8dbac-9d4c-4d56-bc65-3924f5ee947a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 4",
      "id": "a6d8dbac-9d4c-4d56-bc65-3924f5ee947a",
      "kilometrage": 1051,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a6d8dbac-9d4c-4d56-bc65-3924f5ee947a",
    "image": "perev_right",
    "point": {
      "latitude": 51.7578676326,
      "longitude": 30.6178739782
    }
  },
  "a7021320-e894-4c09-8332-76a823f53cd1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 116",
      "id": "a7021320-e894-4c09-8332-76a823f53cd1",
      "kilometrage": 1383,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a7021320-e894-4c09-8332-76a823f53cd1",
    "image": "perev_right",
    "point": {
      "latitude": 53.2511371929,
      "longitude": 30.353060614
    }
  },
  "a71033b9-2b82-4fba-a608-e917fbe2fc37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 112",
      "id": "a71033b9-2b82-4fba-a608-e917fbe2fc37",
      "kilometrage": 1382,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a71033b9-2b82-4fba-a608-e917fbe2fc37",
    "image": "perev_left",
    "point": {
      "latitude": 53.2431317848,
      "longitude": 30.3493951961
    }
  },
  "a731d709-da6e-4512-bbe0-b05093fcb94e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 51",
      "id": "a731d709-da6e-4512-bbe0-b05093fcb94e",
      "kilometrage": 1470,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a731d709-da6e-4512-bbe0-b05093fcb94e",
    "image": "perev_left",
    "point": {
      "latitude": 53.6736840948,
      "longitude": 30.2932864592
    }
  },
  "a7f97f48-0c10-4389-a9ed-3c1dff6bc444": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 6",
      "id": "a7f97f48-0c10-4389-a9ed-3c1dff6bc444",
      "kilometrage": 1052,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a7f97f48-0c10-4389-a9ed-3c1dff6bc444",
    "image": "running_sign_right",
    "point": {
      "latitude": 51.7634043532,
      "longitude": 30.6096028277
    }
  },
  "a822ed94-3bd7-4df0-80de-ed0691e2a83d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 73",
      "id": "a822ed94-3bd7-4df0-80de-ed0691e2a83d",
      "kilometrage": 1116,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a822ed94-3bd7-4df0-80de-ed0691e2a83d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1085491413,
      "longitude": 30.7168334491
    }
  },
  "a864a7af-0126-4f15-8e76-f95987ece3ed": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1565",
      "id": "a864a7af-0126-4f15-8e76-f95987ece3ed",
      "kilometrage": 1564,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a864a7af-0126-4f15-8e76-f95987ece3ed",
    "image": "kilometrage",
    "point": {
      "latitude": 54.2789737734,
      "longitude": 30.2649333181
    }
  },
  "a8b42940-094c-4a99-ae53-246f03a28b21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "a8b42940-094c-4a99-ae53-246f03a28b21",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a8b42940-094c-4a99-ae53-246f03a28b21",
    "image": "bridge_low",
    "point": {
      "latitude": 53.8845428445,
      "longitude": 30.3112668913
    }
  },
  "a8ed7fef-e8bf-41de-a93d-6a032090e838": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "a8ed7fef-e8bf-41de-a93d-6a032090e838",
      "kilometrage": 1497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a8ed7fef-e8bf-41de-a93d-6a032090e838",
    "image": "name_of",
    "point": {
      "latitude": 53.8568057362,
      "longitude": 30.2770572713
    }
  },
  "a8f3f653-94a8-48fb-9130-b15c1c651be0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 9",
      "id": "a8f3f653-94a8-48fb-9130-b15c1c651be0",
      "kilometrage": 1320,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a8f3f653-94a8-48fb-9130-b15c1c651be0",
    "image": "perev_right",
    "point": {
      "latitude": 53.096284345,
      "longitude": 30.0685759992
    }
  },
  "a9681988-2783-4adf-9fc3-250ee93c7e7a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 100",
      "id": "a9681988-2783-4adf-9fc3-250ee93c7e7a",
      "kilometrage": 1376,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9681988-2783-4adf-9fc3-250ee93c7e7a",
    "image": "perev_right",
    "point": {
      "latitude": 53.2479168465,
      "longitude": 30.2806798374
    }
  },
  "a97298d2-268e-49cb-a7fa-19f91ba411ef": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 92",
      "id": "a97298d2-268e-49cb-a7fa-19f91ba411ef",
      "kilometrage": 1370,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a97298d2-268e-49cb-a7fa-19f91ba411ef",
    "image": "perev_right",
    "point": {
      "latitude": 53.2294661464,
      "longitude": 30.2468959092
    }
  },
  "a9d3f8f9-da30-4e67-b7d4-2461d132a2ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 38",
      "id": "a9d3f8f9-da30-4e67-b7d4-2461d132a2ce",
      "kilometrage": 1462,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "a9d3f8f9-da30-4e67-b7d4-2461d132a2ce",
    "image": "perev_right",
    "point": {
      "latitude": 53.6363153289,
      "longitude": 30.2859046342
    }
  },
  "aa2e8c1b-7982-4f60-9b7e-e2882c463a84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "aa2e8c1b-7982-4f60-9b7e-e2882c463a84",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa2e8c1b-7982-4f60-9b7e-e2882c463a84",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8757607801,
      "longitude": 30.2955860769
    }
  },
  "aa388ab3-0c93-4b32-8de1-a9a143c142ae": {
    "data": {
      "color": false,
      "comment": "10 м",
      "description": "Соблюдать надводный габарит  ",
      "id": "aa388ab3-0c93-4b32-8de1-a9a143c142ae",
      "kilometrage": 1524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aa388ab3-0c93-4b32-8de1-a9a143c142ae",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.98046085496316,
      "longitude": 30.395755179261982
    }
  },
  "aab73cc3-218b-4ff4-bdc9-d02372715be8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 149",
      "id": "aab73cc3-218b-4ff4-bdc9-d02372715be8",
      "kilometrage": 1293,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aab73cc3-218b-4ff4-bdc9-d02372715be8",
    "image": "perev_right",
    "point": {
      "latitude": 52.9599267173,
      "longitude": 30.0651550892
    }
  },
  "ab1d8350-9bc5-4a2b-88aa-57edad48e43c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 78",
      "id": "ab1d8350-9bc5-4a2b-88aa-57edad48e43c",
      "kilometrage": 1112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab1d8350-9bc5-4a2b-88aa-57edad48e43c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.0915304941,
      "longitude": 30.7151214203
    }
  },
  "ab39f243-0fbf-45d7-a7f6-73b2bf331d47": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 86",
      "id": "ab39f243-0fbf-45d7-a7f6-73b2bf331d47",
      "kilometrage": 1366,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab39f243-0fbf-45d7-a7f6-73b2bf331d47",
    "image": "perev_left",
    "point": {
      "latitude": 53.2003530112,
      "longitude": 30.2511160552
    }
  },
  "ab3da254-830d-4080-84ba-d1ad20fa79b1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 178",
      "id": "ab3da254-830d-4080-84ba-d1ad20fa79b1",
      "kilometrage": 1418,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab3da254-830d-4080-84ba-d1ad20fa79b1",
    "image": "perev_right",
    "point": {
      "latitude": 53.4407151518,
      "longitude": 30.3393602191
    }
  },
  "ab3ec34f-27b7-4fec-a75e-97361e2c9f03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1260",
      "id": "ab3ec34f-27b7-4fec-a75e-97361e2c9f03",
      "kilometrage": 1260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab3ec34f-27b7-4fec-a75e-97361e2c9f03",
    "image": "kilometrage",
    "point": {
      "latitude": 52.7840117126,
      "longitude": 30.1107763773
    }
  },
  "ab443e8b-906e-4ac6-89ed-a53d854c18f7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 95",
      "id": "ab443e8b-906e-4ac6-89ed-a53d854c18f7",
      "kilometrage": 1152,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab443e8b-906e-4ac6-89ed-a53d854c18f7",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2868826033,
      "longitude": 30.5492818693
    }
  },
  "ab8565a5-73d3-4621-b7be-c22991718630": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 44",
      "id": "ab8565a5-73d3-4621-b7be-c22991718630",
      "kilometrage": 1466,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ab8565a5-73d3-4621-b7be-c22991718630",
    "image": "perev_right",
    "point": {
      "latitude": 53.65182572,
      "longitude": 30.3045347778
    }
  },
  "aba4d7ec-0f9c-4766-a910-fb5801fe5b17": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 57",
      "id": "aba4d7ec-0f9c-4766-a910-fb5801fe5b17",
      "kilometrage": 1474,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aba4d7ec-0f9c-4766-a910-fb5801fe5b17",
    "image": "perev_left",
    "point": {
      "latitude": 53.6976630531,
      "longitude": 30.2953090864
    }
  },
  "ac2f00b5-2354-4e4f-a46d-0aad0004f611": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1205",
      "id": "ac2f00b5-2354-4e4f-a46d-0aad0004f611",
      "kilometrage": 1205,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac2f00b5-2354-4e4f-a46d-0aad0004f611",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5394681204,
      "longitude": 30.2376837446
    }
  },
  "ac69b711-d57e-46fe-a8d2-80f16c0237d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 113",
      "id": "ac69b711-d57e-46fe-a8d2-80f16c0237d1",
      "kilometrage": 1382,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac69b711-d57e-46fe-a8d2-80f16c0237d1",
    "image": "perev_left",
    "point": {
      "latitude": 53.2422277133,
      "longitude": 30.3548324401
    }
  },
  "ac6ed926-d86a-4063-9e00-611e9b7e4028": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 84",
      "id": "ac6ed926-d86a-4063-9e00-611e9b7e4028",
      "kilometrage": 1493,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ac6ed926-d86a-4063-9e00-611e9b7e4028",
    "image": "perev_right",
    "point": {
      "latitude": 53.8237001407,
      "longitude": 30.2748487154
    }
  },
  "ad99ed07-cb15-4e16-9194-738236f52dd3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 49",
      "id": "ad99ed07-cb15-4e16-9194-738236f52dd3",
      "kilometrage": 1342,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ad99ed07-cb15-4e16-9194-738236f52dd3",
    "image": "perev_left",
    "point": {
      "latitude": 53.0821406882,
      "longitude": 30.2127669776
    }
  },
  "ae0fd260-1d9d-4621-8740-53c785bc46a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 83",
      "id": "ae0fd260-1d9d-4621-8740-53c785bc46a4",
      "kilometrage": 1126,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae0fd260-1d9d-4621-8740-53c785bc46a4",
    "image": "perev_left",
    "point": {
      "latitude": 52.1585478111,
      "longitude": 30.6330225842
    }
  },
  "ae44eb82-fa83-4df2-bcbf-400553c60e99": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 90",
      "id": "ae44eb82-fa83-4df2-bcbf-400553c60e99",
      "kilometrage": 1138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae44eb82-fa83-4df2-bcbf-400553c60e99",
    "image": "buyo_left",
    "point": {
      "latitude": 52.237158817,
      "longitude": 30.5795033916
    }
  },
  "ae47a27d-95ae-444b-9772-dc6004b41a3d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1420",
      "id": "ae47a27d-95ae-444b-9772-dc6004b41a3d",
      "kilometrage": 1420,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae47a27d-95ae-444b-9772-dc6004b41a3d",
    "image": "kilometrage",
    "point": {
      "latitude": 53.4513749645,
      "longitude": 30.3369913481
    }
  },
  "ae925827-2fd0-4006-bbd3-c2abe85233d2": {
    "data": {
      "color": false,
      "comment": "15 м",
      "description": "Соблюдать надводный габарит  ",
      "id": "ae925827-2fd0-4006-bbd3-c2abe85233d2",
      "kilometrage": 1508,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae925827-2fd0-4006-bbd3-c2abe85233d2",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8961026212,
      "longitude": 30.3892405208
    }
  },
  "ae9e184e-259e-4715-982e-225576c8f2c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 106",
      "id": "ae9e184e-259e-4715-982e-225576c8f2c5",
      "kilometrage": 1514,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ae9e184e-259e-4715-982e-225576c8f2c5",
    "image": "perev_left",
    "point": {
      "latitude": 53.9156544318,
      "longitude": 30.4499122176
    }
  },
  "aef35c9c-7dae-4f76-a642-f30de22fc949": {
    "data": {
      "color": false,
      "comment": "15 м",
      "description": "Соблюдать надводный габарит  ",
      "id": "aef35c9c-7dae-4f76-a642-f30de22fc949",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "aef35c9c-7dae-4f76-a642-f30de22fc949",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.89609879482523,
      "longitude": 30.38739686734337
    }
  },
  "af2ce9d0-3660-491d-8237-147fff9c7a9a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 45",
      "id": "af2ce9d0-3660-491d-8237-147fff9c7a9a",
      "kilometrage": 1339,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af2ce9d0-3660-491d-8237-147fff9c7a9a",
    "image": "perev_left",
    "point": {
      "latitude": 53.0913664911,
      "longitude": 30.1888503383
    }
  },
  "af8266c0-6feb-47d7-97b6-0def7560b594": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 51",
      "id": "af8266c0-6feb-47d7-97b6-0def7560b594",
      "kilometrage": 1232,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "af8266c0-6feb-47d7-97b6-0def7560b594",
    "image": "perev_right",
    "point": {
      "latitude": 52.6664835999,
      "longitude": 30.2001530854
    }
  },
  "afa8e033-978c-4276-bba6-bbd6288f361b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 3",
      "id": "afa8e033-978c-4276-bba6-bbd6288f361b",
      "kilometrage": 1559,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afa8e033-978c-4276-bba6-bbd6288f361b",
    "image": "buyo_right",
    "point": {
      "latitude": 54.2423336893,
      "longitude": 30.2800113781
    }
  },
  "afbb51b9-a8cb-4595-b05e-296930424107": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "afbb51b9-a8cb-4595-b05e-296930424107",
      "kilometrage": 1180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afbb51b9-a8cb-4595-b05e-296930424107",
    "image": "main_way",
    "point": {
      "latitude": 52.3957329751,
      "longitude": 30.3608744881
    }
  },
  "afd7cc26-9e39-414d-9a60-4678cec8a3cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 91",
      "id": "afd7cc26-9e39-414d-9a60-4678cec8a3cf",
      "kilometrage": 1253,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "afd7cc26-9e39-414d-9a60-4678cec8a3cf",
    "image": "perev_left",
    "point": {
      "latitude": 52.7393018977,
      "longitude": 30.1132738377
    }
  },
  "affd76c5-479a-4078-a146-869d718987b2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 188",
      "id": "affd76c5-479a-4078-a146-869d718987b2",
      "kilometrage": 1204,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "affd76c5-479a-4078-a146-869d718987b2",
    "image": "perev_right",
    "point": {
      "latitude": 52.535025103,
      "longitude": 30.2350261796
    }
  },
  "b00d1626-c562-40fe-a0be-8a790a3c0dc4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 161",
      "id": "b00d1626-c562-40fe-a0be-8a790a3c0dc4",
      "kilometrage": 1300,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b00d1626-c562-40fe-a0be-8a790a3c0dc4",
    "image": "perev_right",
    "point": {
      "latitude": 52.9850250972,
      "longitude": 30.0464170933
    }
  },
  "b0744095-8df8-4a9d-9d0e-1804337cbf35": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 27",
      "id": "b0744095-8df8-4a9d-9d0e-1804337cbf35",
      "kilometrage": 1220,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0744095-8df8-4a9d-9d0e-1804337cbf35",
    "image": "perev_left",
    "point": {
      "latitude": 52.6129679878,
      "longitude": 30.2474388705
    }
  },
  "b08dbf54-6ea0-4886-97c0-841087ef1a6b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 162",
      "id": "b08dbf54-6ea0-4886-97c0-841087ef1a6b",
      "kilometrage": 1301,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b08dbf54-6ea0-4886-97c0-841087ef1a6b",
    "image": "perev_left",
    "point": {
      "latitude": 52.991484457,
      "longitude": 30.0470623304
    }
  },
  "b0ad6200-7af0-4715-ac01-6bc161aa6031": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 71",
      "id": "b0ad6200-7af0-4715-ac01-6bc161aa6031",
      "kilometrage": 1244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0ad6200-7af0-4715-ac01-6bc161aa6031",
    "image": "perev_left",
    "point": {
      "latitude": 52.7162712967,
      "longitude": 30.1715383524
    }
  },
  "b0feaf94-6f33-48eb-ab78-5179aa339c7c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 56",
      "id": "b0feaf94-6f33-48eb-ab78-5179aa339c7c",
      "kilometrage": 1236,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b0feaf94-6f33-48eb-ab78-5179aa339c7c",
    "image": "perev_left",
    "point": {
      "latitude": 52.682094078,
      "longitude": 30.2000975307
    }
  },
  "b11977b6-bb2d-4272-bbaa-535a3bd95dea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 75",
      "id": "b11977b6-bb2d-4272-bbaa-535a3bd95dea",
      "kilometrage": 1245,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b11977b6-bb2d-4272-bbaa-535a3bd95dea",
    "image": "perev_left",
    "point": {
      "latitude": 52.706656639,
      "longitude": 30.1669829812
    }
  },
  "b13d2a98-a8e9-4140-9bdd-eb0159b59653": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 13",
      "id": "b13d2a98-a8e9-4140-9bdd-eb0159b59653",
      "kilometrage": 1448,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b13d2a98-a8e9-4140-9bdd-eb0159b59653",
    "image": "perev_left",
    "point": {
      "latitude": 53.5534636496,
      "longitude": 30.2663150432
    }
  },
  "b16bc9e0-29df-401b-8e51-2aaae9fe3ef1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b16bc9e0-29df-401b-8e51-2aaae9fe3ef1",
      "kilometrage": 1507,
      "place": false,
      "size": true,
      "visibility": false
    },
    "id": "b16bc9e0-29df-401b-8e51-2aaae9fe3ef1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8939059633,
      "longitude": 30.3808802118
    }
  },
  "b1ab7eed-3d38-418e-bbb3-01a6ad639a55": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b1ab7eed-3d38-418e-bbb3-01a6ad639a55",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b1ab7eed-3d38-418e-bbb3-01a6ad639a55",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8773014398,
      "longitude": 30.2946303469
    }
  },
  "b2428502-5f2c-4cfa-96ee-1cc0c84c084a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 150",
      "id": "b2428502-5f2c-4cfa-96ee-1cc0c84c084a",
      "kilometrage": 1293,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2428502-5f2c-4cfa-96ee-1cc0c84c084a",
    "image": "perev_left",
    "point": {
      "latitude": 52.966221283,
      "longitude": 30.0676978257
    }
  },
  "b282e891-11fc-41ca-95ee-1fd8c91e51b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "b282e891-11fc-41ca-95ee-1fd8c91e51b4",
      "kilometrage": 1524,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b282e891-11fc-41ca-95ee-1fd8c91e51b4",
    "image": "axis_romb",
    "point": {
      "latitude": 53.9808030344,
      "longitude": 30.3953975725
    }
  },
  "b28e0d77-7291-4d17-b03e-b7bc75243544": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый 106м",
      "id": "b28e0d77-7291-4d17-b03e-b7bc75243544",
      "kilometrage": 1168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b28e0d77-7291-4d17-b03e-b7bc75243544",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3499372299,
      "longitude": 30.4519737496
    }
  },
  "b2e21509-4fb7-4f84-8075-ec6eb5c265b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 194",
      "id": "b2e21509-4fb7-4f84-8075-ec6eb5c265b6",
      "kilometrage": 1428,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b2e21509-4fb7-4f84-8075-ec6eb5c265b6",
    "image": "perev_left",
    "point": {
      "latitude": 53.4861495223,
      "longitude": 30.3122765689
    }
  },
  "b3b179a2-fc07-4838-ac51-761e66d60393": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b3b179a2-fc07-4838-ac51-761e66d60393",
      "kilometrage": 1502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3b179a2-fc07-4838-ac51-761e66d60393",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8927103451,
      "longitude": 30.328581418
    }
  },
  "b3e6faa0-c398-4bf4-9d89-c0542319983f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1445",
      "id": "b3e6faa0-c398-4bf4-9d89-c0542319983f",
      "kilometrage": 1445,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b3e6faa0-c398-4bf4-9d89-c0542319983f",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5474945561,
      "longitude": 30.2765239667
    }
  },
  "b4208fe3-102e-46e2-86dc-9e406852969c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда правый передний  ",
      "id": "b4208fe3-102e-46e2-86dc-9e406852969c",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4208fe3-102e-46e2-86dc-9e406852969c",
    "image": "raid_start_right",
    "point": {
      "latitude": 53.87382002,
      "longitude": 30.2910794648
    }
  },
  "b467225a-a1e3-41cb-b299-d93be387b4e5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 14",
      "id": "b467225a-a1e3-41cb-b299-d93be387b4e5",
      "kilometrage": 1213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b467225a-a1e3-41cb-b299-d93be387b4e5",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.5792372973,
      "longitude": 30.2822465171
    }
  },
  "b4bef1d1-9a7e-429d-8eb6-669a7498fb6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1165",
      "id": "b4bef1d1-9a7e-429d-8eb6-669a7498fb6c",
      "kilometrage": 1165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b4bef1d1-9a7e-429d-8eb6-669a7498fb6c",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3341238004,
      "longitude": 30.4819339817
    }
  },
  "b5373efa-1e98-4e17-996a-7c0c5d00c097": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 157",
      "id": "b5373efa-1e98-4e17-996a-7c0c5d00c097",
      "kilometrage": 1182,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5373efa-1e98-4e17-996a-7c0c5d00c097",
    "image": "perev_right",
    "point": {
      "latitude": 52.4100243339,
      "longitude": 30.3660052872
    }
  },
  "b543e5e7-b14a-48df-9b0c-497a4b25ed6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b543e5e7-b14a-48df-9b0c-497a4b25ed6f",
      "kilometrage": 1127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b543e5e7-b14a-48df-9b0c-497a4b25ed6f",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1655194544,
      "longitude": 30.6177530309
    }
  },
  "b5550dea-7832-47d8-804a-73615d8c9b5c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 138",
      "id": "b5550dea-7832-47d8-804a-73615d8c9b5c",
      "kilometrage": 1164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5550dea-7832-47d8-804a-73615d8c9b5c",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.3270260498,
      "longitude": 30.4900160954
    }
  },
  "b5787b15-5ea1-41a6-991f-6833a0dd4353": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 141м",
      "id": "b5787b15-5ea1-41a6-991f-6833a0dd4353",
      "kilometrage": 1203,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5787b15-5ea1-41a6-991f-6833a0dd4353",
    "image": "buyo_right",
    "point": {
      "latitude": 52.5294533159,
      "longitude": 30.2505778173
    }
  },
  "b580dad2-a426-4348-a189-ffa0a9e43ccd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 130",
      "id": "b580dad2-a426-4348-a189-ffa0a9e43ccd",
      "kilometrage": 1157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b580dad2-a426-4348-a189-ffa0a9e43ccd",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.3143305555,
      "longitude": 30.5518917281
    }
  },
  "b58ff084-eecd-4641-a581-084558788dc7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b58ff084-eecd-4641-a581-084558788dc7",
      "kilometrage": 1519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b58ff084-eecd-4641-a581-084558788dc7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.9503129887,
      "longitude": 30.4185568543
    }
  },
  "b5c7dfef-53bd-42bc-8212-60e9a09300ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b5c7dfef-53bd-42bc-8212-60e9a09300ec",
      "kilometrage": 1198,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5c7dfef-53bd-42bc-8212-60e9a09300ec",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.4936515732,
      "longitude": 30.2800890568
    }
  },
  "b5f01492-39dd-4046-8ad9-3e0748818abd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 29",
      "id": "b5f01492-39dd-4046-8ad9-3e0748818abd",
      "kilometrage": 1330,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5f01492-39dd-4046-8ad9-3e0748818abd",
    "image": "perev_right",
    "point": {
      "latitude": 53.1292488129,
      "longitude": 30.1270575588
    }
  },
  "b5f29e82-7f9a-4c2c-9ae8-b8dac758ee8d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 167",
      "id": "b5f29e82-7f9a-4c2c-9ae8-b8dac758ee8d",
      "kilometrage": 1412,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5f29e82-7f9a-4c2c-9ae8-b8dac758ee8d",
    "image": "perev_left",
    "point": {
      "latitude": 53.4071727561,
      "longitude": 30.3349497049
    }
  },
  "b5f41f09-434d-4b30-b4a6-9bb11deaed52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 15",
      "id": "b5f41f09-434d-4b30-b4a6-9bb11deaed52",
      "kilometrage": 1449,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5f41f09-434d-4b30-b4a6-9bb11deaed52",
    "image": "perev_left",
    "point": {
      "latitude": 53.5631557157,
      "longitude": 30.2726011423
    }
  },
  "b5fc9292-f044-40d9-94f8-4b6dd3979cd9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1180",
      "id": "b5fc9292-f044-40d9-94f8-4b6dd3979cd9",
      "kilometrage": 1180,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b5fc9292-f044-40d9-94f8-4b6dd3979cd9",
    "image": "kilometrage",
    "point": {
      "latitude": 52.3978016956,
      "longitude": 30.3558581999
    }
  },
  "b63f8d86-714e-43da-a737-828877548cae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 11",
      "id": "b63f8d86-714e-43da-a737-828877548cae",
      "kilometrage": 1058,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b63f8d86-714e-43da-a737-828877548cae",
    "image": "perev_left",
    "point": {
      "latitude": 51.788559073,
      "longitude": 30.6701551633
    }
  },
  "b670760e-b8be-420f-86eb-1dd7e2502b68": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 132",
      "id": "b670760e-b8be-420f-86eb-1dd7e2502b68",
      "kilometrage": 1158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b670760e-b8be-420f-86eb-1dd7e2502b68",
    "image": "perev_right",
    "point": {
      "latitude": 52.3174148391,
      "longitude": 30.5345969518
    }
  },
  "b67b9fc3-06b1-4952-8fe3-1e3fcbdf10b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b67b9fc3-06b1-4952-8fe3-1e3fcbdf10b7",
      "kilometrage": 1278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b67b9fc3-06b1-4952-8fe3-1e3fcbdf10b7",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8651083411,
      "longitude": 30.0711175202
    }
  },
  "b67bdb1a-e886-4e13-9a42-9be29254e896": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 131",
      "id": "b67bdb1a-e886-4e13-9a42-9be29254e896",
      "kilometrage": 1531,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b67bdb1a-e886-4e13-9a42-9be29254e896",
    "image": "perev_right",
    "point": {
      "latitude": 54.0375080687,
      "longitude": 30.3801894175
    }
  },
  "b6d341f1-95bb-4a25-acb3-0fbdadb39e61": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 19",
      "id": "b6d341f1-95bb-4a25-acb3-0fbdadb39e61",
      "kilometrage": 1068,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6d341f1-95bb-4a25-acb3-0fbdadb39e61",
    "image": "perev_right",
    "point": {
      "latitude": 51.8625400538,
      "longitude": 30.7013994115
    }
  },
  "b6f29bb8-b87c-442a-a9ce-fef01dd2680a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1485",
      "id": "b6f29bb8-b87c-442a-a9ce-fef01dd2680a",
      "kilometrage": 1485,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b6f29bb8-b87c-442a-a9ce-fef01dd2680a",
    "image": "kilometrage",
    "point": {
      "latitude": 53.7639804913,
      "longitude": 30.2618023237
    }
  },
  "b700bf03-ab2c-4252-b764-f46f254a57eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 179",
      "id": "b700bf03-ab2c-4252-b764-f46f254a57eb",
      "kilometrage": 1310,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b700bf03-ab2c-4252-b764-f46f254a57eb",
    "image": "perev_right",
    "point": {
      "latitude": 53.0444663572,
      "longitude": 30.0238813025
    }
  },
  "b70eeb23-92ac-426c-b62d-bc831107aad4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 113м",
      "id": "b70eeb23-92ac-426c-b62d-bc831107aad4",
      "kilometrage": 1172,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b70eeb23-92ac-426c-b62d-bc831107aad4",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3794534559,
      "longitude": 30.4300289356
    }
  },
  "b725a327-063d-4542-a81b-6e623d92e031": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 40м",
      "id": "b725a327-063d-4542-a81b-6e623d92e031",
      "kilometrage": 1076,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b725a327-063d-4542-a81b-6e623d92e031",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9006724365,
      "longitude": 30.7778176169
    }
  },
  "b74efdb9-21d4-4fdc-813a-e4d60a169d5a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "b74efdb9-21d4-4fdc-813a-e4d60a169d5a",
      "kilometrage": 1168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b74efdb9-21d4-4fdc-813a-e4d60a169d5a",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.3410156517,
      "longitude": 30.4494428903
    }
  },
  "b7a42ded-30e4-43c8-8e3b-70d2f537ce9b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 119",
      "id": "b7a42ded-30e4-43c8-8e3b-70d2f537ce9b",
      "kilometrage": 1523,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7a42ded-30e4-43c8-8e3b-70d2f537ce9b",
    "image": "perev_left",
    "point": {
      "latitude": 53.972517338,
      "longitude": 30.3917541781
    }
  },
  "b7d6c7da-d783-4e10-9703-a6580cdda460": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Буй опасности левый 6м",
      "id": "b7d6c7da-d783-4e10-9703-a6580cdda460",
      "kilometrage": 1049,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7d6c7da-d783-4e10-9703-a6580cdda460",
    "image": "buyo_danger_left",
    "point": {
      "latitude": 51.7665980807,
      "longitude": 30.6444551109
    }
  },
  "b7dafa8c-b9b3-45fd-9ddd-eff628b0c277": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 126",
      "id": "b7dafa8c-b9b3-45fd-9ddd-eff628b0c277",
      "kilometrage": 1154,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7dafa8c-b9b3-45fd-9ddd-eff628b0c277",
    "image": "perev_left",
    "point": {
      "latitude": 52.2956500915,
      "longitude": 30.5322977685
    }
  },
  "b7fe43c1-7c5d-418f-a9de-550390e0b2e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 68",
      "id": "b7fe43c1-7c5d-418f-a9de-550390e0b2e1",
      "kilometrage": 1111,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b7fe43c1-7c5d-418f-a9de-550390e0b2e1",
    "image": "perev_left",
    "point": {
      "latitude": 52.0829406853,
      "longitude": 30.7248061178
    }
  },
  "b80abfef-ad45-45b6-880a-258cc0229a14": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 33",
      "id": "b80abfef-ad45-45b6-880a-258cc0229a14",
      "kilometrage": 1332,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b80abfef-ad45-45b6-880a-258cc0229a14",
    "image": "perev_right",
    "point": {
      "latitude": 53.1171028649,
      "longitude": 30.1395310192
    }
  },
  "b8852815-6221-4e10-8d9c-55c1a3566b41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 67",
      "id": "b8852815-6221-4e10-8d9c-55c1a3566b41",
      "kilometrage": 1481,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8852815-6221-4e10-8d9c-55c1a3566b41",
    "image": "perev_right",
    "point": {
      "latitude": 53.7307723144,
      "longitude": 30.2768290675
    }
  },
  "b8967b14-ba4b-43ab-b1f5-0fe461a89c6f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 59",
      "id": "b8967b14-ba4b-43ab-b1f5-0fe461a89c6f",
      "kilometrage": 1103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8967b14-ba4b-43ab-b1f5-0fe461a89c6f",
    "image": "perev_right",
    "point": {
      "latitude": 52.02221036,
      "longitude": 30.7336935505
    }
  },
  "b8c1e73e-91e1-4f33-9a00-de39ad803fba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 106",
      "id": "b8c1e73e-91e1-4f33-9a00-de39ad803fba",
      "kilometrage": 1260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b8c1e73e-91e1-4f33-9a00-de39ad803fba",
    "image": "perev_left",
    "point": {
      "latitude": 52.7890572727,
      "longitude": 30.1077028924
    }
  },
  "b9498060-cc2f-44d4-8278-38d3ea591e78": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 39",
      "id": "b9498060-cc2f-44d4-8278-38d3ea591e78",
      "kilometrage": 1225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b9498060-cc2f-44d4-8278-38d3ea591e78",
    "image": "perev_left",
    "point": {
      "latitude": 52.6485122286,
      "longitude": 30.2132714139
    }
  },
  "b96aa8da-6c83-4b23-b53f-0b1143edf681": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "b96aa8da-6c83-4b23-b53f-0b1143edf681",
      "kilometrage": 1487,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b96aa8da-6c83-4b23-b53f-0b1143edf681",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.7768699368,
      "longitude": 30.2754833911
    }
  },
  "b9e66db6-b1f7-4c9a-a710-9f990eedf71b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 90",
      "id": "b9e66db6-b1f7-4c9a-a710-9f990eedf71b",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "b9e66db6-b1f7-4c9a-a710-9f990eedf71b",
    "image": "perev_left",
    "point": {
      "latitude": 53.8864836061,
      "longitude": 30.3175396213
    }
  },
  "ba24c0dc-2407-4976-9967-3aaa54127c6c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 49",
      "id": "ba24c0dc-2407-4976-9967-3aaa54127c6c",
      "kilometrage": 1082,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba24c0dc-2407-4976-9967-3aaa54127c6c",
    "image": "buyo_left",
    "point": {
      "latitude": 51.935320089,
      "longitude": 30.8124477357
    }
  },
  "ba9ef28a-a3fd-4a3a-b74d-53d962eccc7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 53",
      "id": "ba9ef28a-a3fd-4a3a-b74d-53d962eccc7d",
      "kilometrage": 1471,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ba9ef28a-a3fd-4a3a-b74d-53d962eccc7d",
    "image": "perev_right",
    "point": {
      "latitude": 53.6839366591,
      "longitude": 30.285184531
    }
  },
  "bac6c9cd-252f-4af5-9222-95dcaae5e33b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1455",
      "id": "bac6c9cd-252f-4af5-9222-95dcaae5e33b",
      "kilometrage": 1455,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bac6c9cd-252f-4af5-9222-95dcaae5e33b",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5938895119,
      "longitude": 30.2666667936
    }
  },
  "bad0fbe4-1a09-4515-a630-80f8156f5662": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 5",
      "id": "bad0fbe4-1a09-4515-a630-80f8156f5662",
      "kilometrage": 1265,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bad0fbe4-1a09-4515-a630-80f8156f5662",
    "image": "buyo_left",
    "point": {
      "latitude": 52.8232794465,
      "longitude": 30.0918543909
    }
  },
  "bb139da4-dfa6-4f8f-bb42-c41027f0e4c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 57м",
      "id": "bb139da4-dfa6-4f8f-bb42-c41027f0e4c5",
      "kilometrage": 1085,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb139da4-dfa6-4f8f-bb42-c41027f0e4c5",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9573729064,
      "longitude": 30.7982684599
    }
  },
  "bb2755ed-95a9-4478-a61c-6d886bbf1615": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 89",
      "id": "bb2755ed-95a9-4478-a61c-6d886bbf1615",
      "kilometrage": 1138,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb2755ed-95a9-4478-a61c-6d886bbf1615",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2349574282,
      "longitude": 30.5823203553
    }
  },
  "bb7e5863-959b-4e39-8bf8-bbe94b286acb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 118",
      "id": "bb7e5863-959b-4e39-8bf8-bbe94b286acb",
      "kilometrage": 1174,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb7e5863-959b-4e39-8bf8-bbe94b286acb",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3745107974,
      "longitude": 30.410250206
    }
  },
  "bb92b6f7-10ab-423c-af9f-35c231ca02d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 60",
      "id": "bb92b6f7-10ab-423c-af9f-35c231ca02d5",
      "kilometrage": 1087,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bb92b6f7-10ab-423c-af9f-35c231ca02d5",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9774054443,
      "longitude": 30.7962368764
    }
  },
  "bba5c294-0156-497a-be79-366d06db512d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 19",
      "id": "bba5c294-0156-497a-be79-366d06db512d",
      "kilometrage": 1216,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bba5c294-0156-497a-be79-366d06db512d",
    "image": "perev_right",
    "point": {
      "latitude": 52.5985838538,
      "longitude": 30.2878636706
    }
  },
  "bbd885a7-84e1-49b2-8c6f-8d236b05829c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 58",
      "id": "bbd885a7-84e1-49b2-8c6f-8d236b05829c",
      "kilometrage": 1103,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbd885a7-84e1-49b2-8c6f-8d236b05829c",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.0178212482,
      "longitude": 30.7386639379
    }
  },
  "bbe4860f-8b39-4e3b-900e-78a7c067b8ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 66",
      "id": "bbe4860f-8b39-4e3b-900e-78a7c067b8ad",
      "kilometrage": 1242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbe4860f-8b39-4e3b-900e-78a7c067b8ad",
    "image": "perev_right",
    "point": {
      "latitude": 52.7043369116,
      "longitude": 30.176693593
    }
  },
  "bbeb1bef-13fa-4d37-b343-b7f13b26c034": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 115",
      "id": "bbeb1bef-13fa-4d37-b343-b7f13b26c034",
      "kilometrage": 1147,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbeb1bef-13fa-4d37-b343-b7f13b26c034",
    "image": "perev_left",
    "point": {
      "latitude": 52.253041293,
      "longitude": 30.5450988855
    }
  },
  "bbf069da-6a94-49ea-b89b-76f66024f0ce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 77",
      "id": "bbf069da-6a94-49ea-b89b-76f66024f0ce",
      "kilometrage": 1112,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bbf069da-6a94-49ea-b89b-76f66024f0ce",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0882309388,
      "longitude": 30.7183653191
    }
  },
  "bc237384-db68-4a49-bb02-b4b46014c20d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1330",
      "id": "bc237384-db68-4a49-bb02-b4b46014c20d",
      "kilometrage": 1330,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc237384-db68-4a49-bb02-b4b46014c20d",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1289221367,
      "longitude": 30.1288717121
    }
  },
  "bc4f067a-60f8-477b-9db8-84cf3e47b2c9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 89",
      "id": "bc4f067a-60f8-477b-9db8-84cf3e47b2c9",
      "kilometrage": 1130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bc4f067a-60f8-477b-9db8-84cf3e47b2c9",
    "image": "perev_left",
    "point": {
      "latitude": 52.1883064124,
      "longitude": 30.6194531521
    }
  },
  "bcc27e42-66db-49e9-8c0e-7fa7421a531e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 133",
      "id": "bcc27e42-66db-49e9-8c0e-7fa7421a531e",
      "kilometrage": 1187,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcc27e42-66db-49e9-8c0e-7fa7421a531e",
    "image": "buyo_right",
    "point": {
      "latitude": 52.437950722,
      "longitude": 30.3770069824
    }
  },
  "bcff6e8a-9823-410d-8d54-5007625b0db7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1400",
      "id": "bcff6e8a-9823-410d-8d54-5007625b0db7",
      "kilometrage": 1400,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bcff6e8a-9823-410d-8d54-5007625b0db7",
    "image": "kilometrage",
    "point": {
      "latitude": 53.3389035319,
      "longitude": 30.3725324819
    }
  },
  "bd8072e7-b09b-4153-94f1-657d2be47173": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый 15м",
      "id": "bd8072e7-b09b-4153-94f1-657d2be47173",
      "kilometrage": 1051,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd8072e7-b09b-4153-94f1-657d2be47173",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7593942708,
      "longitude": 30.6255219698
    }
  },
  "bd8d519b-fff6-4158-8734-73acee387ccf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда правый передний  ",
      "id": "bd8d519b-fff6-4158-8734-73acee387ccf",
      "kilometrage": 1352,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd8d519b-fff6-4158-8734-73acee387ccf",
    "image": "raid_start_right",
    "point": {
      "latitude": 53.1213217996,
      "longitude": 30.3014901443
    }
  },
  "bd99335b-cb4d-4b41-8c8c-91a83760ca34": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 97",
      "id": "bd99335b-cb4d-4b41-8c8c-91a83760ca34",
      "kilometrage": 1505,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd99335b-cb4d-4b41-8c8c-91a83760ca34",
    "image": "perev_right",
    "point": {
      "latitude": 53.8893007035,
      "longitude": 30.3558307947
    }
  },
  "bd9c9789-7555-4816-b488-773bc6f1b824": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "bd9c9789-7555-4816-b488-773bc6f1b824",
      "kilometrage": 1085,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd9c9789-7555-4816-b488-773bc6f1b824",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 51.9599272346,
      "longitude": 30.7973239191
    }
  },
  "bd9ea83d-ca3e-44b0-ac6b-0ddea48fbbb2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "bd9ea83d-ca3e-44b0-ac6b-0ddea48fbbb2",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bd9ea83d-ca3e-44b0-ac6b-0ddea48fbbb2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8859328501,
      "longitude": 30.3132240546
    }
  },
  "bda5689a-c9e5-4f72-b233-a473c17f5c8c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй правый 10в",
      "id": "bda5689a-c9e5-4f72-b233-a473c17f5c8c",
      "kilometrage": 1050,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bda5689a-c9e5-4f72-b233-a473c17f5c8c",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7621063649,
      "longitude": 30.628846699
    }
  },
  "bdae0063-0c9c-42c4-855b-cbc92cb26d37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый  ",
      "id": "bdae0063-0c9c-42c4-855b-cbc92cb26d37",
      "kilometrage": 1556,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bdae0063-0c9c-42c4-855b-cbc92cb26d37",
    "image": "perev_left",
    "point": {
      "latitude": 54.2240884972,
      "longitude": 30.2995357595
    }
  },
  "bdf1e0e3-ad35-49c3-8e5c-e97cb5ab4815": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 124",
      "id": "bdf1e0e3-ad35-49c3-8e5c-e97cb5ab4815",
      "kilometrage": 1527,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bdf1e0e3-ad35-49c3-8e5c-e97cb5ab4815",
    "image": "perev_right",
    "point": {
      "latitude": 54.0052379942,
      "longitude": 30.3846534119
    }
  },
  "be199275-d02f-44f7-bdaf-92f07e9a9e60": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 23",
      "id": "be199275-d02f-44f7-bdaf-92f07e9a9e60",
      "kilometrage": 1073,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be199275-d02f-44f7-bdaf-92f07e9a9e60",
    "image": "perev_right",
    "point": {
      "latitude": 51.8964583612,
      "longitude": 30.7398231009
    }
  },
  "be3da769-7d59-401d-9a02-84a7e7c43c05": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 71",
      "id": "be3da769-7d59-401d-9a02-84a7e7c43c05",
      "kilometrage": 1483,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "be3da769-7d59-401d-9a02-84a7e7c43c05",
    "image": "perev_left",
    "point": {
      "latitude": 53.7497616634,
      "longitude": 30.2699249966
    }
  },
  "bec76136-ad2d-4a4b-acb8-5ad54a29099a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 130",
      "id": "bec76136-ad2d-4a4b-acb8-5ad54a29099a",
      "kilometrage": 1178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bec76136-ad2d-4a4b-acb8-5ad54a29099a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.394584792,
      "longitude": 30.3763412879
    }
  },
  "bf20dc88-2537-4434-bc9d-8c291ca86103": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 128",
      "id": "bf20dc88-2537-4434-bc9d-8c291ca86103",
      "kilometrage": 1529,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf20dc88-2537-4434-bc9d-8c291ca86103",
    "image": "perev_right",
    "point": {
      "latitude": 54.027000647,
      "longitude": 30.3874511893
    }
  },
  "bf7edd95-d0a8-412a-932f-d76eda619639": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 83",
      "id": "bf7edd95-d0a8-412a-932f-d76eda619639",
      "kilometrage": 1363,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf7edd95-d0a8-412a-932f-d76eda619639",
    "image": "perev_right",
    "point": {
      "latitude": 53.1796600518,
      "longitude": 30.2510920109
    }
  },
  "bf9a3e57-eba1-4adf-a5de-7fc7275cb567": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 124",
      "id": "bf9a3e57-eba1-4adf-a5de-7fc7275cb567",
      "kilometrage": 1176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bf9a3e57-eba1-4adf-a5de-7fc7275cb567",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3758948991,
      "longitude": 30.3915949931
    }
  },
  "bfb01140-f7cb-4a63-92bc-25994533e49c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 94",
      "id": "bfb01140-f7cb-4a63-92bc-25994533e49c",
      "kilometrage": 1151,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bfb01140-f7cb-4a63-92bc-25994533e49c",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2839659674,
      "longitude": 30.5517128491
    }
  },
  "bfdc4f93-13f6-47ab-885c-ea633c44fc8d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "bfdc4f93-13f6-47ab-885c-ea633c44fc8d",
      "kilometrage": 1494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "bfdc4f93-13f6-47ab-885c-ea633c44fc8d",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8348725257,
      "longitude": 30.2759927113
    }
  },
  "c0d41891-92bd-4d76-a0c0-b2aa6715bc3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 147",
      "id": "c0d41891-92bd-4d76-a0c0-b2aa6715bc3b",
      "kilometrage": 1292,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c0d41891-92bd-4d76-a0c0-b2aa6715bc3b",
    "image": "perev_left",
    "point": {
      "latitude": 52.9534691546,
      "longitude": 30.0640104696
    }
  },
  "c1090812-9c76-4a84-a470-b18321dbb2cb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 146",
      "id": "c1090812-9c76-4a84-a470-b18321dbb2cb",
      "kilometrage": 1291,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1090812-9c76-4a84-a470-b18321dbb2cb",
    "image": "perev_right",
    "point": {
      "latitude": 52.9572285396,
      "longitude": 30.0556968653
    }
  },
  "c1201f63-c7e0-4764-b94c-0cfe5485c007": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "c1201f63-c7e0-4764-b94c-0cfe5485c007",
      "kilometrage": 1241,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1201f63-c7e0-4764-b94c-0cfe5485c007",
    "image": "name_of",
    "point": {
      "latitude": 52.6965488437,
      "longitude": 30.1787194164
    }
  },
  "c170c5a9-55e3-4912-a0de-13ea59598b24": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 76",
      "id": "c170c5a9-55e3-4912-a0de-13ea59598b24",
      "kilometrage": 1486,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c170c5a9-55e3-4912-a0de-13ea59598b24",
    "image": "perev_left",
    "point": {
      "latitude": 53.7719152926,
      "longitude": 30.2713599916
    }
  },
  "c1795ffd-cc3b-4d54-a213-b3f30607385d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 32",
      "id": "c1795ffd-cc3b-4d54-a213-b3f30607385d",
      "kilometrage": 1223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1795ffd-cc3b-4d54-a213-b3f30607385d",
    "image": "perev_left",
    "point": {
      "latitude": 52.6343721427,
      "longitude": 30.2314256242
    }
  },
  "c1b27f4d-7329-40df-94e1-7f0327bae3eb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 140",
      "id": "c1b27f4d-7329-40df-94e1-7f0327bae3eb",
      "kilometrage": 1288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c1b27f4d-7329-40df-94e1-7f0327bae3eb",
    "image": "perev_right",
    "point": {
      "latitude": 52.930965247,
      "longitude": 30.0452469831
    }
  },
  "c234350f-34b4-4218-be86-8375606bdd96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 108",
      "id": "c234350f-34b4-4218-be86-8375606bdd96",
      "kilometrage": 1515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c234350f-34b4-4218-be86-8375606bdd96",
    "image": "perev_right",
    "point": {
      "latitude": 53.92355864,
      "longitude": 30.4378400103
    }
  },
  "c24213ad-4629-4b80-ae01-18c4460a2f4b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 95",
      "id": "c24213ad-4629-4b80-ae01-18c4460a2f4b",
      "kilometrage": 1371,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c24213ad-4629-4b80-ae01-18c4460a2f4b",
    "image": "perev_left",
    "point": {
      "latitude": 53.2413328712,
      "longitude": 30.2537643222
    }
  },
  "c253a203-af81-4b98-b7cb-bc94980e61ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 91",
      "id": "c253a203-af81-4b98-b7cb-bc94980e61ba",
      "kilometrage": 1369,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c253a203-af81-4b98-b7cb-bc94980e61ba",
    "image": "perev_left",
    "point": {
      "latitude": 53.225667564,
      "longitude": 30.2496368951
    }
  },
  "c2970d14-45c6-43fa-884c-62c7e4ef9bec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c2970d14-45c6-43fa-884c-62c7e4ef9bec",
      "kilometrage": 1087,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2970d14-45c6-43fa-884c-62c7e4ef9bec",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 51.9709684008,
      "longitude": 30.793638423
    }
  },
  "c2daa80a-fb99-4c57-8eda-84160b42b107": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 108",
      "id": "c2daa80a-fb99-4c57-8eda-84160b42b107",
      "kilometrage": 1143,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c2daa80a-fb99-4c57-8eda-84160b42b107",
    "image": "perev_right",
    "point": {
      "latitude": 52.2304603976,
      "longitude": 30.543059343
    }
  },
  "c3321eaf-4a8c-4b1f-a52d-ff87628fc047": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 63",
      "id": "c3321eaf-4a8c-4b1f-a52d-ff87628fc047",
      "kilometrage": 1476,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c3321eaf-4a8c-4b1f-a52d-ff87628fc047",
    "image": "perev_right",
    "point": {
      "latitude": 53.7069494645,
      "longitude": 30.3022232028
    }
  },
  "c35d86e3-7290-4228-bc74-cd1f42aa27c4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 172",
      "id": "c35d86e3-7290-4228-bc74-cd1f42aa27c4",
      "kilometrage": 1306,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c35d86e3-7290-4228-bc74-cd1f42aa27c4",
    "image": "perev_right",
    "point": {
      "latitude": 53.013542876,
      "longitude": 30.0258754003
    }
  },
  "c37c8e43-ea78-4a22-8485-45c36fca4c1a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 60",
      "id": "c37c8e43-ea78-4a22-8485-45c36fca4c1a",
      "kilometrage": 1105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c37c8e43-ea78-4a22-8485-45c36fca4c1a",
    "image": "perev_left",
    "point": {
      "latitude": 52.032855351,
      "longitude": 30.7421108782
    }
  },
  "c381761e-814d-4723-a535-1ddb428ae6ab": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 200",
      "id": "c381761e-814d-4723-a535-1ddb428ae6ab",
      "kilometrage": 1429,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c381761e-814d-4723-a535-1ddb428ae6ab",
    "image": "perev_right",
    "point": {
      "latitude": 53.4908489594,
      "longitude": 30.3017045768
    }
  },
  "c443f3e1-ec2c-4a4e-a725-330b6a1b2200": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1185",
      "id": "c443f3e1-ec2c-4a4e-a725-330b6a1b2200",
      "kilometrage": 1185,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c443f3e1-ec2c-4a4e-a725-330b6a1b2200",
    "image": "kilometrage",
    "point": {
      "latitude": 52.4218524625,
      "longitude": 30.3697716636
    }
  },
  "c461a386-d4bd-4c8f-b9dd-58cd5dd10974": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 116",
      "id": "c461a386-d4bd-4c8f-b9dd-58cd5dd10974",
      "kilometrage": 1266,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c461a386-d4bd-4c8f-b9dd-58cd5dd10974",
    "image": "perev_left",
    "point": {
      "latitude": 52.825773296,
      "longitude": 30.0992174152
    }
  },
  "c472814f-a822-48b6-91cb-3e93ca0390b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 40",
      "id": "c472814f-a822-48b6-91cb-3e93ca0390b6",
      "kilometrage": 1226,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c472814f-a822-48b6-91cb-3e93ca0390b6",
    "image": "perev_right",
    "point": {
      "latitude": 52.6508561028,
      "longitude": 30.2133093437
    }
  },
  "c4b3e70a-eb3a-426e-9530-4b2e46d4b3e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "c4b3e70a-eb3a-426e-9530-4b2e46d4b3e7",
      "kilometrage": 1486,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4b3e70a-eb3a-426e-9530-4b2e46d4b3e7",
    "image": "bridge_low",
    "point": {
      "latitude": 53.7755041881,
      "longitude": 30.2750407639
    }
  },
  "c4ea2209-083f-4c4e-9cc6-00367aa0d3cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 61",
      "id": "c4ea2209-083f-4c4e-9cc6-00367aa0d3cf",
      "kilometrage": 1475,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c4ea2209-083f-4c4e-9cc6-00367aa0d3cf",
    "image": "running_sign_left",
    "point": {
      "latitude": 53.7075164921,
      "longitude": 30.3131965739
    }
  },
  "c52e866c-acff-4fc1-8d55-198876db46f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 130",
      "id": "c52e866c-acff-4fc1-8d55-198876db46f5",
      "kilometrage": 1277,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c52e866c-acff-4fc1-8d55-198876db46f5",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.8548972097,
      "longitude": 30.0726827216
    }
  },
  "c5554229-e910-435e-9daa-52025daa25b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 7",
      "id": "c5554229-e910-435e-9daa-52025daa25b8",
      "kilometrage": 1570,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5554229-e910-435e-9daa-52025daa25b8",
    "image": "buyo_right",
    "point": {
      "latitude": 54.3218164592,
      "longitude": 30.2819664008
    }
  },
  "c58406a9-85cb-46e4-90a0-f87987c53ce9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1520",
      "id": "c58406a9-85cb-46e4-90a0-f87987c53ce9",
      "kilometrage": 1520,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c58406a9-85cb-46e4-90a0-f87987c53ce9",
    "image": "kilometrage",
    "point": {
      "latitude": 53.9523887134,
      "longitude": 30.4116949411
    }
  },
  "c5a33dcb-1670-4f70-85da-7b0f9cb80239": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 29",
      "id": "c5a33dcb-1670-4f70-85da-7b0f9cb80239",
      "kilometrage": 1458,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5a33dcb-1670-4f70-85da-7b0f9cb80239",
    "image": "perev_left",
    "point": {
      "latitude": 53.6030881367,
      "longitude": 30.2868059582
    }
  },
  "c5a73cb5-43f6-45f5-bd5a-403b240e7139": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 24",
      "id": "c5a73cb5-43f6-45f5-bd5a-403b240e7139",
      "kilometrage": 1217,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5a73cb5-43f6-45f5-bd5a-403b240e7139",
    "image": "perev_left",
    "point": {
      "latitude": 52.6094274753,
      "longitude": 30.2740939775
    }
  },
  "c5eb4486-8add-4d78-8af6-3c737af6ad7d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 18",
      "id": "c5eb4486-8add-4d78-8af6-3c737af6ad7d",
      "kilometrage": 1324,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c5eb4486-8add-4d78-8af6-3c737af6ad7d",
    "image": "perev_right",
    "point": {
      "latitude": 53.1200128756,
      "longitude": 30.0954409439
    }
  },
  "c603feca-3f40-4b79-817c-e335c9b87636": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "c603feca-3f40-4b79-817c-e335c9b87636",
      "kilometrage": 1317,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c603feca-3f40-4b79-817c-e335c9b87636",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.0757999604,
      "longitude": 30.0588472057
    }
  },
  "c6974d63-98d9-4547-93de-7d5bcb925991": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 32",
      "id": "c6974d63-98d9-4547-93de-7d5bcb925991",
      "kilometrage": 1069,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6974d63-98d9-4547-93de-7d5bcb925991",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8720912665,
      "longitude": 30.7199382737
    }
  },
  "c6f08a97-1aab-46ec-82d1-50d6437c5bf2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c6f08a97-1aab-46ec-82d1-50d6437c5bf2",
      "kilometrage": 1158,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c6f08a97-1aab-46ec-82d1-50d6437c5bf2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.3176777006,
      "longitude": 30.53304437
    }
  },
  "c719c47c-1450-4557-a398-8090a6870ebe": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 69",
      "id": "c719c47c-1450-4557-a398-8090a6870ebe",
      "kilometrage": 1243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c719c47c-1450-4557-a398-8090a6870ebe",
    "image": "perev_left",
    "point": {
      "latitude": 52.7148832343,
      "longitude": 30.1794301011
    }
  },
  "c72ae9ac-fa8c-4a85-8257-452ca4837489": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 20",
      "id": "c72ae9ac-fa8c-4a85-8257-452ca4837489",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c72ae9ac-fa8c-4a85-8257-452ca4837489",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8954800977,
      "longitude": 30.3855834668
    }
  },
  "c7409764-babe-4d44-a00f-76e6387d9449": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 70",
      "id": "c7409764-babe-4d44-a00f-76e6387d9449",
      "kilometrage": 1113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c7409764-babe-4d44-a00f-76e6387d9449",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.096346632,
      "longitude": 30.7025165237
    }
  },
  "c81936f3-51b5-4bca-9b21-412c195247c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Пересечение судового хода  ",
      "id": "c81936f3-51b5-4bca-9b21-412c195247c5",
      "kilometrage": 1085,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c81936f3-51b5-4bca-9b21-412c195247c5",
    "image": "crossing_way",
    "point": {
      "latitude": 51.9616748765,
      "longitude": 30.7998321218
    }
  },
  "c81ffd3e-3994-401b-b2b0-34ea1d1b371b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 161",
      "id": "c81ffd3e-3994-401b-b2b0-34ea1d1b371b",
      "kilometrage": 1408,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c81ffd3e-3994-401b-b2b0-34ea1d1b371b",
    "image": "perev_left",
    "point": {
      "latitude": 53.386557579,
      "longitude": 30.3623324841
    }
  },
  "c83e97f6-941b-4de7-9c3b-100d49a29879": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1235",
      "id": "c83e97f6-941b-4de7-9c3b-100d49a29879",
      "kilometrage": 1235,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c83e97f6-941b-4de7-9c3b-100d49a29879",
    "image": "kilometrage",
    "point": {
      "latitude": 52.6853977468,
      "longitude": 30.2126574715
    }
  },
  "c890589a-147d-435b-849a-c074d85cf3c5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "c890589a-147d-435b-849a-c074d85cf3c5",
      "kilometrage": 1287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c890589a-147d-435b-849a-c074d85cf3c5",
    "image": "name_of",
    "point": {
      "latitude": 52.9223221983,
      "longitude": 30.0430853325
    }
  },
  "c8b1f4c4-da1b-4c01-890c-097aa116116f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "c8b1f4c4-da1b-4c01-890c-097aa116116f",
      "kilometrage": 1502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c8b1f4c4-da1b-4c01-890c-097aa116116f",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8884387135,
      "longitude": 30.3179687904
    }
  },
  "c9a683e3-b1dd-4c0f-90cf-a071d7605b1b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 185",
      "id": "c9a683e3-b1dd-4c0f-90cf-a071d7605b1b",
      "kilometrage": 1202,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9a683e3-b1dd-4c0f-90cf-a071d7605b1b",
    "image": "perev_left",
    "point": {
      "latitude": 52.5245863253,
      "longitude": 30.2630794555
    }
  },
  "c9dd33ea-d0f6-40a0-b257-ea4f609e2552": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 156",
      "id": "c9dd33ea-d0f6-40a0-b257-ea4f609e2552",
      "kilometrage": 1181,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9dd33ea-d0f6-40a0-b257-ea4f609e2552",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.4043276391,
      "longitude": 30.3507060646
    }
  },
  "c9e43299-1101-49c9-951d-d3c510fe7592": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1335",
      "id": "c9e43299-1101-49c9-951d-d3c510fe7592",
      "kilometrage": 1335,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9e43299-1101-49c9-951d-d3c510fe7592",
    "image": "kilometrage",
    "point": {
      "latitude": 53.1073252,
      "longitude": 30.1662167226
    }
  },
  "c9fa03ee-a0f6-4bf5-91d3-be969de53d74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 77",
      "id": "c9fa03ee-a0f6-4bf5-91d3-be969de53d74",
      "kilometrage": 1246,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "c9fa03ee-a0f6-4bf5-91d3-be969de53d74",
    "image": "perev_left",
    "point": {
      "latitude": 52.7074396562,
      "longitude": 30.1563723736
    }
  },
  "ca9890a1-436d-44bd-9579-156f33cc948e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 122",
      "id": "ca9890a1-436d-44bd-9579-156f33cc948e",
      "kilometrage": 1526,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ca9890a1-436d-44bd-9579-156f33cc948e",
    "image": "perev_left",
    "point": {
      "latitude": 53.9942763217,
      "longitude": 30.3943210855
    }
  },
  "cad07460-b601-4cc8-8b8b-1d013c0df257": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 69",
      "id": "cad07460-b601-4cc8-8b8b-1d013c0df257",
      "kilometrage": 1482,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cad07460-b601-4cc8-8b8b-1d013c0df257",
    "image": "perev_left",
    "point": {
      "latitude": 53.7420583144,
      "longitude": 30.274849194
    }
  },
  "cb2b894e-8433-4e33-ab25-a344bf572f98": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1130",
      "id": "cb2b894e-8433-4e33-ab25-a344bf572f98",
      "kilometrage": 1130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb2b894e-8433-4e33-ab25-a344bf572f98",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1858788091,
      "longitude": 30.6206446553
    }
  },
  "cb9a7d7c-9e42-4db0-bf74-5582bae27d3d": {
    "data": {
      "color": false,
      "comment": "нету",
      "description": "Соблюдать надводный габарит  ",
      "id": "cb9a7d7c-9e42-4db0-bf74-5582bae27d3d",
      "kilometrage": 1500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb9a7d7c-9e42-4db0-bf74-5582bae27d3d",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8804581554,
      "longitude": 30.296933145
    }
  },
  "cb9baea4-6e1b-4ca2-b05c-decc681a207b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 11",
      "id": "cb9baea4-6e1b-4ca2-b05c-decc681a207b",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cb9baea4-6e1b-4ca2-b05c-decc681a207b",
    "image": "buyo_right",
    "point": {
      "latitude": 53.8863827255,
      "longitude": 30.3147523493
    }
  },
  "cbe2507e-d217-4703-b8c1-1ed339a1a74b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "cbe2507e-d217-4703-b8c1-1ed339a1a74b",
      "kilometrage": 1279,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cbe2507e-d217-4703-b8c1-1ed339a1a74b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.8719870395,
      "longitude": 30.0742669707
    }
  },
  "cc3166ea-4700-4308-af18-68884206ef13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "cc3166ea-4700-4308-af18-68884206ef13",
      "kilometrage": 1497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc3166ea-4700-4308-af18-68884206ef13",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8616489536,
      "longitude": 30.2789185399
    }
  },
  "cc3ef560-9867-4723-9464-dcc0c2aa3a13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 73",
      "id": "cc3ef560-9867-4723-9464-dcc0c2aa3a13",
      "kilometrage": 1484,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc3ef560-9867-4723-9464-dcc0c2aa3a13",
    "image": "perev_left",
    "point": {
      "latitude": 53.760522859,
      "longitude": 30.2654311881
    }
  },
  "cc56780d-1cb2-42a2-8c64-9ce384b31a9d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1105",
      "id": "cc56780d-1cb2-42a2-8c64-9ce384b31a9d",
      "kilometrage": 1105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc56780d-1cb2-42a2-8c64-9ce384b31a9d",
    "image": "kilometrage",
    "point": {
      "latitude": 52.0364983481,
      "longitude": 30.7396171584
    }
  },
  "cc75ba94-576f-4db4-a846-ce2726087b31": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "cc75ba94-576f-4db4-a846-ce2726087b31",
      "kilometrage": 1461,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cc75ba94-576f-4db4-a846-ce2726087b31",
    "image": "name_of",
    "point": {
      "latitude": 53.6290983387,
      "longitude": 30.2890210471
    }
  },
  "ccafaf9d-976d-4518-87ea-cc5cc6995b74": {
    "data": {
      "color": false,
      "comment": "отвутствует",
      "description": "Якорь не бросать  ",
      "id": "ccafaf9d-976d-4518-87ea-cc5cc6995b74",
      "kilometrage": 1504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ccafaf9d-976d-4518-87ea-cc5cc6995b74",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8868272249,
      "longitude": 30.3420762112
    }
  },
  "cceca98d-cfc4-4c36-99f1-d0aa242ac00d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 87",
      "id": "cceca98d-cfc4-4c36-99f1-d0aa242ac00d",
      "kilometrage": 1128,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cceca98d-cfc4-4c36-99f1-d0aa242ac00d",
    "image": "perev_left",
    "point": {
      "latitude": 52.1720789301,
      "longitude": 30.6156349734
    }
  },
  "cd17176a-e6e8-4721-8bdf-53e4e9f68566": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 113",
      "id": "cd17176a-e6e8-4721-8bdf-53e4e9f68566",
      "kilometrage": 1146,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cd17176a-e6e8-4721-8bdf-53e4e9f68566",
    "image": "perev_left",
    "point": {
      "latitude": 52.247600762,
      "longitude": 30.5344842283
    }
  },
  "ce10fb94-8857-47b6-9b5f-ffd8767bb194": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 186",
      "id": "ce10fb94-8857-47b6-9b5f-ffd8767bb194",
      "kilometrage": 1423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce10fb94-8857-47b6-9b5f-ffd8767bb194",
    "image": "perev_right",
    "point": {
      "latitude": 53.4694746807,
      "longitude": 30.3229900677
    }
  },
  "ce376dc8-ae68-48d2-8bb2-a33986f6ce3a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 20",
      "id": "ce376dc8-ae68-48d2-8bb2-a33986f6ce3a",
      "kilometrage": 1216,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce376dc8-ae68-48d2-8bb2-a33986f6ce3a",
    "image": "perev_left",
    "point": {
      "latitude": 52.6027638662,
      "longitude": 30.2899210735
    }
  },
  "ce5523eb-7184-4aca-8287-17586d22ecd0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ce5523eb-7184-4aca-8287-17586d22ecd0",
      "kilometrage": 1288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce5523eb-7184-4aca-8287-17586d22ecd0",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.9353730237,
      "longitude": 30.0489377383
    }
  },
  "ce63bf5b-aef7-4401-9000-35929ac5bc30": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 62",
      "id": "ce63bf5b-aef7-4401-9000-35929ac5bc30",
      "kilometrage": 1090,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce63bf5b-aef7-4401-9000-35929ac5bc30",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9913522921,
      "longitude": 30.801224577
    }
  },
  "ce82d9ad-2484-4750-833c-dd0a4c341275": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 60",
      "id": "ce82d9ad-2484-4750-833c-dd0a4c341275",
      "kilometrage": 1347,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ce82d9ad-2484-4750-833c-dd0a4c341275",
    "image": "perev_left",
    "point": {
      "latitude": 53.1005703827,
      "longitude": 30.257057631
    }
  },
  "cf4a3112-62d0-4a6b-b0fa-3e291b5d5cf4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "cf4a3112-62d0-4a6b-b0fa-3e291b5d5cf4",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf4a3112-62d0-4a6b-b0fa-3e291b5d5cf4",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.320945144,
      "longitude": 30.5268269681
    }
  },
  "cf61288d-6a63-4cea-a166-55549d55c355": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "cf61288d-6a63-4cea-a166-55549d55c355",
      "kilometrage": 1105,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf61288d-6a63-4cea-a166-55549d55c355",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.0370320929,
      "longitude": 30.744418423
    }
  },
  "cf69c92b-a8a7-436e-8d4b-a8c71c17b3c8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 80",
      "id": "cf69c92b-a8a7-436e-8d4b-a8c71c17b3c8",
      "kilometrage": 1118,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "cf69c92b-a8a7-436e-8d4b-a8c71c17b3c8",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1148026363,
      "longitude": 30.6911110527
    }
  },
  "d0066b38-d38f-41a0-afd7-a605083aa675": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 159",
      "id": "d0066b38-d38f-41a0-afd7-a605083aa675",
      "kilometrage": 1407,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0066b38-d38f-41a0-afd7-a605083aa675",
    "image": "perev_left",
    "point": {
      "latitude": 53.3792444987,
      "longitude": 30.3695809423
    }
  },
  "d0106f00-8152-4639-87c2-c2cb4c6c274f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 49",
      "id": "d0106f00-8152-4639-87c2-c2cb4c6c274f",
      "kilometrage": 1469,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0106f00-8152-4639-87c2-c2cb4c6c274f",
    "image": "perev_left",
    "point": {
      "latitude": 53.6709839138,
      "longitude": 30.3032563341
    }
  },
  "d06376e0-ef99-447d-9cfa-d62dfc2af176": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 134",
      "id": "d06376e0-ef99-447d-9cfa-d62dfc2af176",
      "kilometrage": 1161,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d06376e0-ef99-447d-9cfa-d62dfc2af176",
    "image": "perev_left",
    "point": {
      "latitude": 52.331261023,
      "longitude": 30.5054945767
    }
  },
  "d0691398-59c6-436a-bd98-7c67d29701ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 23",
      "id": "d0691398-59c6-436a-bd98-7c67d29701ec",
      "kilometrage": 1454,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0691398-59c6-436a-bd98-7c67d29701ec",
    "image": "perev_right",
    "point": {
      "latitude": 53.599518693,
      "longitude": 30.2615124228
    }
  },
  "d06e5816-943b-4e96-a250-0ae5f9bab14c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 156",
      "id": "d06e5816-943b-4e96-a250-0ae5f9bab14c",
      "kilometrage": 1297,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d06e5816-943b-4e96-a250-0ae5f9bab14c",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.9863864131,
      "longitude": 30.0339632609
    }
  },
  "d0cc7686-b9d7-4869-8f56-4a85d604e317": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 62",
      "id": "d0cc7686-b9d7-4869-8f56-4a85d604e317",
      "kilometrage": 1476,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d0cc7686-b9d7-4869-8f56-4a85d604e317",
    "image": "perev_left",
    "point": {
      "latitude": 53.7096778765,
      "longitude": 30.3060366937
    }
  },
  "d16549f1-cd52-45f9-a2f9-36025fc16479": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 174",
      "id": "d16549f1-cd52-45f9-a2f9-36025fc16479",
      "kilometrage": 1415,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d16549f1-cd52-45f9-a2f9-36025fc16479",
    "image": "perev_left",
    "point": {
      "latitude": 53.426638924,
      "longitude": 30.3252878665
    }
  },
  "d168cd64-af90-49b5-ace0-4758f4d392a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 80",
      "id": "d168cd64-af90-49b5-ace0-4758f4d392a1",
      "kilometrage": 1248,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d168cd64-af90-49b5-ace0-4758f4d392a1",
    "image": "perev_right",
    "point": {
      "latitude": 52.7095846086,
      "longitude": 30.1312480685
    }
  },
  "d17f0d73-8102-40d0-9e0d-4ab58e5f02a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 107",
      "id": "d17f0d73-8102-40d0-9e0d-4ab58e5f02a2",
      "kilometrage": 1261,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d17f0d73-8102-40d0-9e0d-4ab58e5f02a2",
    "image": "perev_right",
    "point": {
      "latitude": 52.7901939024,
      "longitude": 30.1043576316
    }
  },
  "d17fd8ad-a40f-4638-bb7d-f3e25cd651ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 32",
      "id": "d17fd8ad-a40f-4638-bb7d-f3e25cd651ae",
      "kilometrage": 1083,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d17fd8ad-a40f-4638-bb7d-f3e25cd651ae",
    "image": "perev_right",
    "point": {
      "latitude": 51.947510605,
      "longitude": 30.8036496935
    }
  },
  "d1d6f16b-9e66-4be1-be9a-ba95eafceffa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 102",
      "id": "d1d6f16b-9e66-4be1-be9a-ba95eafceffa",
      "kilometrage": 1257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d1d6f16b-9e66-4be1-be9a-ba95eafceffa",
    "image": "perev_right",
    "point": {
      "latitude": 52.7674432191,
      "longitude": 30.113405135
    }
  },
  "d203ca7b-04ae-4aca-8ff8-d2d0f11dcbfa": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "d203ca7b-04ae-4aca-8ff8-d2d0f11dcbfa",
      "kilometrage": 1440,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d203ca7b-04ae-4aca-8ff8-d2d0f11dcbfa",
    "image": "perev_left",
    "point": {
      "latitude": 53.5252937499,
      "longitude": 30.2714717293
    }
  },
  "d20cb29e-e872-4c11-bf1a-14040a5709ff": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 47",
      "id": "d20cb29e-e872-4c11-bf1a-14040a5709ff",
      "kilometrage": 1468,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d20cb29e-e872-4c11-bf1a-14040a5709ff",
    "image": "perev_right",
    "point": {
      "latitude": 53.6660586687,
      "longitude": 30.2958637793
    }
  },
  "d2120e1b-c1a7-429d-b37b-ab7c908a0aae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 56",
      "id": "d2120e1b-c1a7-429d-b37b-ab7c908a0aae",
      "kilometrage": 1473,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2120e1b-c1a7-429d-b37b-ab7c908a0aae",
    "image": "perev_right",
    "point": {
      "latitude": 53.6972525131,
      "longitude": 30.2881631196
    }
  },
  "d2300ebc-edda-48ff-9762-ddbd41ee5e01": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Разделительный буй  ",
      "id": "d2300ebc-edda-48ff-9762-ddbd41ee5e01",
      "kilometrage": 1083,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2300ebc-edda-48ff-9762-ddbd41ee5e01",
    "image": "buyo_separator",
    "point": {
      "latitude": 51.9480601379,
      "longitude": 30.8054063102
    }
  },
  "d24a1e0c-ac79-40cd-add6-b54a90bb3831": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 62",
      "id": "d24a1e0c-ac79-40cd-add6-b54a90bb3831",
      "kilometrage": 1239,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d24a1e0c-ac79-40cd-add6-b54a90bb3831",
    "image": "perev_right",
    "point": {
      "latitude": 52.6843167121,
      "longitude": 30.1929934476
    }
  },
  "d27ba3c6-3ddb-4a93-8995-52047bd05230": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 123м",
      "id": "d27ba3c6-3ddb-4a93-8995-52047bd05230",
      "kilometrage": 1176,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d27ba3c6-3ddb-4a93-8995-52047bd05230",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3746091124,
      "longitude": 30.3941250138
    }
  },
  "d2e75c8b-3774-4e68-8ad5-e88ceac52b57": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "d2e75c8b-3774-4e68-8ad5-e88ceac52b57",
      "kilometrage": 1132,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2e75c8b-3774-4e68-8ad5-e88ceac52b57",
    "image": "main_way",
    "point": {
      "latitude": 52.1951043812,
      "longitude": 30.6025329049
    }
  },
  "d2f49e9d-5041-4318-b517-a2fe2d56f76e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "d2f49e9d-5041-4318-b517-a2fe2d56f76e",
      "kilometrage": 1554,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d2f49e9d-5041-4318-b517-a2fe2d56f76e",
    "image": "axis_romb",
    "point": {
      "latitude": 54.206398324,
      "longitude": 30.3074827969
    }
  },
  "d300a4cb-0b4d-4fd2-9689-4ed13185efd4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 78",
      "id": "d300a4cb-0b4d-4fd2-9689-4ed13185efd4",
      "kilometrage": 1360,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d300a4cb-0b4d-4fd2-9689-4ed13185efd4",
    "image": "perev_left",
    "point": {
      "latitude": 53.1538727498,
      "longitude": 30.2720446414
    }
  },
  "d35f64a0-4ff4-4198-9357-162f9210bf96": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 41",
      "id": "d35f64a0-4ff4-4198-9357-162f9210bf96",
      "kilometrage": 1337,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d35f64a0-4ff4-4198-9357-162f9210bf96",
    "image": "perev_left",
    "point": {
      "latitude": 53.0971171426,
      "longitude": 30.1849480053
    }
  },
  "d3f7cfc8-9d83-4599-b61a-bdd502223c52": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 33",
      "id": "d3f7cfc8-9d83-4599-b61a-bdd502223c52",
      "kilometrage": 1459,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d3f7cfc8-9d83-4599-b61a-bdd502223c52",
    "image": "perev_left",
    "point": {
      "latitude": 53.6153715858,
      "longitude": 30.2887485142
    }
  },
  "d40120c3-039a-4000-947c-66d0f70732d2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 2",
      "id": "d40120c3-039a-4000-947c-66d0f70732d2",
      "kilometrage": 1314,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d40120c3-039a-4000-947c-66d0f70732d2",
    "image": "perev_left",
    "point": {
      "latitude": 53.0582745901,
      "longitude": 30.0463590776
    }
  },
  "d420f779-92e0-4e88-8bd4-936066467c44": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 1",
      "id": "d420f779-92e0-4e88-8bd4-936066467c44",
      "kilometrage": 1046,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d420f779-92e0-4e88-8bd4-936066467c44",
    "image": "perev_left",
    "point": {
      "latitude": 51.7399965994,
      "longitude": 30.6378538173
    }
  },
  "d423c3a5-e28e-4138-b07b-56a11ef9ba0e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 85",
      "id": "d423c3a5-e28e-4138-b07b-56a11ef9ba0e",
      "kilometrage": 1365,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d423c3a5-e28e-4138-b07b-56a11ef9ba0e",
    "image": "perev_right",
    "point": {
      "latitude": 53.1935929091,
      "longitude": 30.2481924367
    }
  },
  "d4c0e37e-8394-4e68-bd3b-e889fc9e9b4c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 38",
      "id": "d4c0e37e-8394-4e68-bd3b-e889fc9e9b4c",
      "kilometrage": 1225,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4c0e37e-8394-4e68-bd3b-e889fc9e9b4c",
    "image": "perev_right",
    "point": {
      "latitude": 52.6485565107,
      "longitude": 30.2090296614
    }
  },
  "d4d34b03-731d-43cd-b553-f88ad5103fd6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 41в",
      "id": "d4d34b03-731d-43cd-b553-f88ad5103fd6",
      "kilometrage": 1077,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d4d34b03-731d-43cd-b553-f88ad5103fd6",
    "image": "buyo_right",
    "point": {
      "latitude": 51.8995085357,
      "longitude": 30.8018202182
    }
  },
  "d5d52c94-c829-4fa8-86bd-22ebfdbc6d31": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 92",
      "id": "d5d52c94-c829-4fa8-86bd-22ebfdbc6d31",
      "kilometrage": 1149,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5d52c94-c829-4fa8-86bd-22ebfdbc6d31",
    "image": "buyo_left",
    "point": {
      "latitude": 52.2675830708,
      "longitude": 30.5480552129
    }
  },
  "d5f2a29b-df50-439a-aa62-71c1dac3c788": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d5f2a29b-df50-439a-aa62-71c1dac3c788",
      "kilometrage": 1553,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d5f2a29b-df50-439a-aa62-71c1dac3c788",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.1974126629,
      "longitude": 30.3106674677
    }
  },
  "d6189078-16c6-491d-a619-ad5d50c1112c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 193",
      "id": "d6189078-16c6-491d-a619-ad5d50c1112c",
      "kilometrage": 1427,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6189078-16c6-491d-a619-ad5d50c1112c",
    "image": "perev_right",
    "point": {
      "latitude": 53.4844233618,
      "longitude": 30.3067214274
    }
  },
  "d626fc04-b6ad-42a2-ab9d-6a5e7c616896": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 122",
      "id": "d626fc04-b6ad-42a2-ab9d-6a5e7c616896",
      "kilometrage": 1385,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d626fc04-b6ad-42a2-ab9d-6a5e7c616896",
    "image": "perev_left",
    "point": {
      "latitude": 53.2511405233,
      "longitude": 30.3780851106
    }
  },
  "d6316aaf-89b4-47ac-81ba-f0df3ba59ba1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 46",
      "id": "d6316aaf-89b4-47ac-81ba-f0df3ba59ba1",
      "kilometrage": 1229,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6316aaf-89b4-47ac-81ba-f0df3ba59ba1",
    "image": "perev_right",
    "point": {
      "latitude": 52.6636419822,
      "longitude": 30.2242444874
    }
  },
  "d652b37c-a76e-428a-80e0-8e6518aef79d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 167",
      "id": "d652b37c-a76e-428a-80e0-8e6518aef79d",
      "kilometrage": 1303,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d652b37c-a76e-428a-80e0-8e6518aef79d",
    "image": "perev_right",
    "point": {
      "latitude": 53.0094217922,
      "longitude": 30.0501691196
    }
  },
  "d656f136-d521-430a-a41f-1ee04ccabbe7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 19",
      "id": "d656f136-d521-430a-a41f-1ee04ccabbe7",
      "kilometrage": 1056,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d656f136-d521-430a-a41f-1ee04ccabbe7",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7849252043,
      "longitude": 30.6409666447
    }
  },
  "d6671509-e2eb-4d58-a920-388b454fbba9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d6671509-e2eb-4d58-a920-388b454fbba9",
      "kilometrage": 1439,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6671509-e2eb-4d58-a920-388b454fbba9",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.5173778356,
      "longitude": 30.2678980408
    }
  },
  "d6c2d8aa-a625-4bb4-8a94-c394ed0b7583": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 59",
      "id": "d6c2d8aa-a625-4bb4-8a94-c394ed0b7583",
      "kilometrage": 1238,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6c2d8aa-a625-4bb4-8a94-c394ed0b7583",
    "image": "running_sign_right",
    "point": {
      "latitude": 52.6707177093,
      "longitude": 30.1938013557
    }
  },
  "d6c4286a-f41e-4c8f-898b-3c199b44e861": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 85",
      "id": "d6c4286a-f41e-4c8f-898b-3c199b44e861",
      "kilometrage": 1494,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6c4286a-f41e-4c8f-898b-3c199b44e861",
    "image": "perev_right",
    "point": {
      "latitude": 53.8335752546,
      "longitude": 30.2730847452
    }
  },
  "d6cb1468-1a39-4136-8313-233d2be7371d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 15",
      "id": "d6cb1468-1a39-4136-8313-233d2be7371d",
      "kilometrage": 1213,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6cb1468-1a39-4136-8313-233d2be7371d",
    "image": "perev_left",
    "point": {
      "latitude": 52.5813934214,
      "longitude": 30.2792383791
    }
  },
  "d6faf405-aabd-4379-8afa-4a97b730a2a5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1575",
      "id": "d6faf405-aabd-4379-8afa-4a97b730a2a5",
      "kilometrage": 1574,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6faf405-aabd-4379-8afa-4a97b730a2a5",
    "image": "kilometrage",
    "point": {
      "latitude": 54.3505319194,
      "longitude": 30.3212679336
    }
  },
  "d6ff30f4-88c6-4527-880e-ed0826f70213": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 56",
      "id": "d6ff30f4-88c6-4527-880e-ed0826f70213",
      "kilometrage": 1345,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d6ff30f4-88c6-4527-880e-ed0826f70213",
    "image": "perev_left",
    "point": {
      "latitude": 53.0834870846,
      "longitude": 30.2558556726
    }
  },
  "d71c3a45-12cc-4002-8b46-5c2e810222d5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 85",
      "id": "d71c3a45-12cc-4002-8b46-5c2e810222d5",
      "kilometrage": 1250,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d71c3a45-12cc-4002-8b46-5c2e810222d5",
    "image": "perev_left",
    "point": {
      "latitude": 52.7242193788,
      "longitude": 30.1313788426
    }
  },
  "d7968b19-6102-477b-83c6-ca18cd606b3f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 125",
      "id": "d7968b19-6102-477b-83c6-ca18cd606b3f",
      "kilometrage": 1528,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7968b19-6102-477b-83c6-ca18cd606b3f",
    "image": "perev_right",
    "point": {
      "latitude": 54.0111469545,
      "longitude": 30.3844447629
    }
  },
  "d7bc1f2a-da29-45bd-a4c0-f18f1935e33e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 7",
      "id": "d7bc1f2a-da29-45bd-a4c0-f18f1935e33e",
      "kilometrage": 1319,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7bc1f2a-da29-45bd-a4c0-f18f1935e33e",
    "image": "perev_left",
    "point": {
      "latitude": 53.0867799458,
      "longitude": 30.0767639567
    }
  },
  "d7e840bb-497b-4050-9ac1-9c56135eaa80": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "d7e840bb-497b-4050-9ac1-9c56135eaa80",
      "kilometrage": 1519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d7e840bb-497b-4050-9ac1-9c56135eaa80",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.9516947128,
      "longitude": 30.4136026754
    }
  },
  "d84c4dd3-934a-49a2-9100-38a5094f53e7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 168",
      "id": "d84c4dd3-934a-49a2-9100-38a5094f53e7",
      "kilometrage": 1189,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d84c4dd3-934a-49a2-9100-38a5094f53e7",
    "image": "perev_right",
    "point": {
      "latitude": 52.4453568934,
      "longitude": 30.3504986455
    }
  },
  "d855dcd0-338c-43c8-a867-47ee16ca7f41": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1440",
      "id": "d855dcd0-338c-43c8-a867-47ee16ca7f41",
      "kilometrage": 1440,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d855dcd0-338c-43c8-a867-47ee16ca7f41",
    "image": "kilometrage",
    "point": {
      "latitude": 53.5222111372,
      "longitude": 30.2725591127
    }
  },
  "d8bc1904-2ff4-4110-89fb-23f6d9740ece": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 35",
      "id": "d8bc1904-2ff4-4110-89fb-23f6d9740ece",
      "kilometrage": 1224,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d8bc1904-2ff4-4110-89fb-23f6d9740ece",
    "image": "perev_right",
    "point": {
      "latitude": 52.635743327,
      "longitude": 30.2178037863
    }
  },
  "d8d43edb-cb84-4afd-811a-8b942e82f787": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Свальный буй 12",
      "id": "d8d43edb-cb84-4afd-811a-8b942e82f787",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d8d43edb-cb84-4afd-811a-8b942e82f787",
    "image": "buyo_sval_right",
    "point": {
      "latitude": 53.8921523088,
      "longitude": 30.3308757849
    }
  },
  "d8db6e56-8019-465a-adb0-1be8d3ffe852": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 69",
      "id": "d8db6e56-8019-465a-adb0-1be8d3ffe852",
      "kilometrage": 1113,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d8db6e56-8019-465a-adb0-1be8d3ffe852",
    "image": "perev_right",
    "point": {
      "latitude": 52.0924861455,
      "longitude": 30.7099667709
    }
  },
  "d9029f54-4191-4291-a651-c8480535b8b7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 39",
      "id": "d9029f54-4191-4291-a651-c8480535b8b7",
      "kilometrage": 1464,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9029f54-4191-4291-a651-c8480535b8b7",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.6480226015,
      "longitude": 30.276933163
    }
  },
  "d93edb90-f784-4c12-a917-5daa3c31fea5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 24",
      "id": "d93edb90-f784-4c12-a917-5daa3c31fea5",
      "kilometrage": 1455,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d93edb90-f784-4c12-a917-5daa3c31fea5",
    "image": "perev_left",
    "point": {
      "latitude": 53.5929286012,
      "longitude": 30.2657479023
    }
  },
  "d940176a-47fa-4fa3-9b5e-c57fc574966b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 211",
      "id": "d940176a-47fa-4fa3-9b5e-c57fc574966b",
      "kilometrage": 1437,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d940176a-47fa-4fa3-9b5e-c57fc574966b",
    "image": "perev_left",
    "point": {
      "latitude": 53.5084548004,
      "longitude": 30.2744362578
    }
  },
  "d99201d1-a3af-4937-8596-c73ef4faa63a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 62",
      "id": "d99201d1-a3af-4937-8596-c73ef4faa63a",
      "kilometrage": 1349,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d99201d1-a3af-4937-8596-c73ef4faa63a",
    "image": "perev_left",
    "point": {
      "latitude": 53.1087285809,
      "longitude": 30.2668497991
    }
  },
  "d9b54cb7-e55b-4fd3-a10a-4a948e98e2bb": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 91",
      "id": "d9b54cb7-e55b-4fd3-a10a-4a948e98e2bb",
      "kilometrage": 1502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9b54cb7-e55b-4fd3-a10a-4a948e98e2bb",
    "image": "perev_right",
    "point": {
      "latitude": 53.8923064115,
      "longitude": 30.3249849666
    }
  },
  "d9cbaad3-9012-4f71-9db3-c235c539814a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 42в",
      "id": "d9cbaad3-9012-4f71-9db3-c235c539814a",
      "kilometrage": 1077,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "d9cbaad3-9012-4f71-9db3-c235c539814a",
    "image": "buyo_right",
    "point": {
      "latitude": 51.903174861,
      "longitude": 30.8032282055
    }
  },
  "da295873-b525-47f7-977d-1e9fdb08d76c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 44",
      "id": "da295873-b525-47f7-977d-1e9fdb08d76c",
      "kilometrage": 1338,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da295873-b525-47f7-977d-1e9fdb08d76c",
    "image": "perev_left",
    "point": {
      "latitude": 53.0948129566,
      "longitude": 30.1884682794
    }
  },
  "da3837ad-8346-4bd5-a6da-250f0104da49": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1535",
      "id": "da3837ad-8346-4bd5-a6da-250f0104da49",
      "kilometrage": 1534,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da3837ad-8346-4bd5-a6da-250f0104da49",
    "image": "kilometrage",
    "point": {
      "latitude": 54.0673531627,
      "longitude": 30.3795437857
    }
  },
  "da4695fc-b5d4-43b3-9285-1239a6a9b1d0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "da4695fc-b5d4-43b3-9285-1239a6a9b1d0",
      "kilometrage": 1422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da4695fc-b5d4-43b3-9285-1239a6a9b1d0",
    "image": "name_of",
    "point": {
      "latitude": 53.4708340756,
      "longitude": 30.3277157443
    }
  },
  "da52aaa0-77d8-4cef-b72b-4f33b5b875bc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 53",
      "id": "da52aaa0-77d8-4cef-b72b-4f33b5b875bc",
      "kilometrage": 1237,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da52aaa0-77d8-4cef-b72b-4f33b5b875bc",
    "image": "perev_right",
    "point": {
      "latitude": 52.6737634148,
      "longitude": 30.2091531174
    }
  },
  "da80bca7-ab28-4c5e-b7c0-8e9f409aec75": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 37",
      "id": "da80bca7-ab28-4c5e-b7c0-8e9f409aec75",
      "kilometrage": 1334,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "da80bca7-ab28-4c5e-b7c0-8e9f409aec75",
    "image": "perev_right",
    "point": {
      "latitude": 53.1140604493,
      "longitude": 30.1586660523
    }
  },
  "daa7415c-2f51-4712-ae93-f0fe98bcc94d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 55",
      "id": "daa7415c-2f51-4712-ae93-f0fe98bcc94d",
      "kilometrage": 1083,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "daa7415c-2f51-4712-ae93-f0fe98bcc94d",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9490589312,
      "longitude": 30.8055782661
    }
  },
  "db0eda26-9871-4bbc-b877-e41e8e10903f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда правый задний  ",
      "id": "db0eda26-9871-4bbc-b877-e41e8e10903f",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "db0eda26-9871-4bbc-b877-e41e8e10903f",
    "image": "raid_end_right",
    "point": {
      "latitude": 53.872920204,
      "longitude": 30.2896566067
    }
  },
  "db8b69bb-dac0-4d41-abdc-46cc16e74cc6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 171",
      "id": "db8b69bb-dac0-4d41-abdc-46cc16e74cc6",
      "kilometrage": 1414,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "db8b69bb-dac0-4d41-abdc-46cc16e74cc6",
    "image": "perev_left",
    "point": {
      "latitude": 53.4145595826,
      "longitude": 30.3249061477
    }
  },
  "dbbbe941-c3e9-4850-b393-c6f51d5a9a13": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 78",
      "id": "dbbbe941-c3e9-4850-b393-c6f51d5a9a13",
      "kilometrage": 1120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbbbe941-c3e9-4850-b393-c6f51d5a9a13",
    "image": "perev_left",
    "point": {
      "latitude": 52.1301446901,
      "longitude": 30.7011746828
    }
  },
  "dbfdbfb6-8637-46cb-9ff6-0646ba8284a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 100",
      "id": "dbfdbfb6-8637-46cb-9ff6-0646ba8284a2",
      "kilometrage": 1257,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dbfdbfb6-8637-46cb-9ff6-0646ba8284a2",
    "image": "perev_right",
    "point": {
      "latitude": 52.7640606395,
      "longitude": 30.1126904263
    }
  },
  "dc0cf555-ffe8-4e62-b63e-9d1f57ddda9c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1500",
      "id": "dc0cf555-ffe8-4e62-b63e-9d1f57ddda9c",
      "kilometrage": 1500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc0cf555-ffe8-4e62-b63e-9d1f57ddda9c",
    "image": "kilometrage",
    "point": {
      "latitude": 53.8780794834,
      "longitude": 30.2951367595
    }
  },
  "dc189f1d-a9fc-4d09-ba8e-088e24ad624d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 146",
      "id": "dc189f1d-a9fc-4d09-ba8e-088e24ad624d",
      "kilometrage": 1400,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc189f1d-a9fc-4d09-ba8e-088e24ad624d",
    "image": "perev_right",
    "point": {
      "latitude": 53.3397769026,
      "longitude": 30.3728098152
    }
  },
  "dc8c6f7b-50f4-4a58-8b8d-4dacd9b0a2ba": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1280",
      "id": "dc8c6f7b-50f4-4a58-8b8d-4dacd9b0a2ba",
      "kilometrage": 1280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dc8c6f7b-50f4-4a58-8b8d-4dacd9b0a2ba",
    "image": "kilometrage",
    "point": {
      "latitude": 52.8805039886,
      "longitude": 30.0757746063
    }
  },
  "dcd2bdae-06ed-499d-ac7a-10cd927276b4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 157",
      "id": "dcd2bdae-06ed-499d-ac7a-10cd927276b4",
      "kilometrage": 1406,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dcd2bdae-06ed-499d-ac7a-10cd927276b4",
    "image": "perev_right",
    "point": {
      "latitude": 53.3697498286,
      "longitude": 30.3650279109
    }
  },
  "dd32a953-7e6c-47c8-a46d-e8c0910f0008": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 2",
      "id": "dd32a953-7e6c-47c8-a46d-e8c0910f0008",
      "kilometrage": 1207,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd32a953-7e6c-47c8-a46d-e8c0910f0008",
    "image": "perev_left",
    "point": {
      "latitude": 52.5527016949,
      "longitude": 30.2560306642
    }
  },
  "dd35dab9-8ab5-4255-b219-804c21cfcc3b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 4",
      "id": "dd35dab9-8ab5-4255-b219-804c21cfcc3b",
      "kilometrage": 1316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd35dab9-8ab5-4255-b219-804c21cfcc3b",
    "image": "perev_left",
    "point": {
      "latitude": 53.071726848,
      "longitude": 30.0586054826
    }
  },
  "dd483dc1-7a77-4ab8-b730-310642c09921": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 70",
      "id": "dd483dc1-7a77-4ab8-b730-310642c09921",
      "kilometrage": 1244,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd483dc1-7a77-4ab8-b730-310642c09921",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.7169299874,
      "longitude": 30.1752087613
    }
  },
  "dd8b6bd0-00d2-4880-8e75-4a5e07c5820f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "dd8b6bd0-00d2-4880-8e75-4a5e07c5820f",
      "kilometrage": 1316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd8b6bd0-00d2-4880-8e75-4a5e07c5820f",
    "image": "bridge_low",
    "point": {
      "latitude": 53.0734848171,
      "longitude": 30.0585646782
    }
  },
  "dd96276b-1a00-4149-88e0-891a8f04eb8a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 25",
      "id": "dd96276b-1a00-4149-88e0-891a8f04eb8a",
      "kilometrage": 1064,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dd96276b-1a00-4149-88e0-891a8f04eb8a",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8266993075,
      "longitude": 30.6903009771
    }
  },
  "dda55993-548d-4da5-8830-179368767225": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "dda55993-548d-4da5-8830-179368767225",
      "kilometrage": 1498,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dda55993-548d-4da5-8830-179368767225",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8623970696,
      "longitude": 30.2808401271
    }
  },
  "ddaa2698-fff8-452b-a2bd-773755f803cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "ddaa2698-fff8-452b-a2bd-773755f803cd",
      "kilometrage": 1316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ddaa2698-fff8-452b-a2bd-773755f803cd",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.0729924444,
      "longitude": 30.0590545733
    }
  },
  "ddb01955-dd2e-405c-a27c-b29debbc02e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 178",
      "id": "ddb01955-dd2e-405c-a27c-b29debbc02e1",
      "kilometrage": 1309,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ddb01955-dd2e-405c-a27c-b29debbc02e1",
    "image": "perev_right",
    "point": {
      "latitude": 53.0394032631,
      "longitude": 30.0230665425
    }
  },
  "ddfb1be1-e88d-4854-ad06-25c5a3299955": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 41",
      "id": "ddfb1be1-e88d-4854-ad06-25c5a3299955",
      "kilometrage": 1226,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ddfb1be1-e88d-4854-ad06-25c5a3299955",
    "image": "perev_left",
    "point": {
      "latitude": 52.6525435588,
      "longitude": 30.2198445671
    }
  },
  "de3c836b-8f8c-4f47-80ac-1b80cacd8227": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 172",
      "id": "de3c836b-8f8c-4f47-80ac-1b80cacd8227",
      "kilometrage": 1193,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de3c836b-8f8c-4f47-80ac-1b80cacd8227",
    "image": "perev_left",
    "point": {
      "latitude": 52.4687599777,
      "longitude": 30.3211833094
    }
  },
  "de8d7386-15c0-4dd9-a305-6a6b1d9a65c3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 25",
      "id": "de8d7386-15c0-4dd9-a305-6a6b1d9a65c3",
      "kilometrage": 1455,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de8d7386-15c0-4dd9-a305-6a6b1d9a65c3",
    "image": "perev_left",
    "point": {
      "latitude": 53.5928356084,
      "longitude": 30.2679765718
    }
  },
  "de8eddd4-5627-4508-860b-5e7491417a84": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1080",
      "id": "de8eddd4-5627-4508-860b-5e7491417a84",
      "kilometrage": 1080,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "de8eddd4-5627-4508-860b-5e7491417a84",
    "image": "kilometrage",
    "point": {
      "latitude": 51.9220662875,
      "longitude": 30.8231322682
    }
  },
  "debb48fb-491e-4871-9596-939c0985be03": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1200",
      "id": "debb48fb-491e-4871-9596-939c0985be03",
      "kilometrage": 1200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "debb48fb-491e-4871-9596-939c0985be03",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5062043881,
      "longitude": 30.2794298457
    }
  },
  "df3fa2d6-ee22-4b05-839b-32eb28c9c88c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "df3fa2d6-ee22-4b05-839b-32eb28c9c88c",
      "kilometrage": 1144,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df3fa2d6-ee22-4b05-839b-32eb28c9c88c",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.2336109401,
      "longitude": 30.5455471911
    }
  },
  "df45c244-6475-43bb-9cff-07ffbea19256": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 158",
      "id": "df45c244-6475-43bb-9cff-07ffbea19256",
      "kilometrage": 1406,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "df45c244-6475-43bb-9cff-07ffbea19256",
    "image": "perev_left",
    "point": {
      "latitude": 53.37395815,
      "longitude": 30.3689312872
    }
  },
  "dfa31c9d-b8be-4e6b-a086-860d3815864c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый передний  ",
      "id": "dfa31c9d-b8be-4e6b-a086-860d3815864c",
      "kilometrage": 1280,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dfa31c9d-b8be-4e6b-a086-860d3815864c",
    "image": "raid_start_left",
    "point": {
      "latitude": 52.8812012644,
      "longitude": 30.0691386341
    }
  },
  "dfdc2106-0e09-40df-b669-e4d10cab9c70": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 126",
      "id": "dfdc2106-0e09-40df-b669-e4d10cab9c70",
      "kilometrage": 1388,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "dfdc2106-0e09-40df-b669-e4d10cab9c70",
    "image": "perev_right",
    "point": {
      "latitude": 53.266020151,
      "longitude": 30.3768818645
    }
  },
  "e022e5ae-d75a-4826-9cc0-a4920c6d335c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 154",
      "id": "e022e5ae-d75a-4826-9cc0-a4920c6d335c",
      "kilometrage": 1296,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e022e5ae-d75a-4826-9cc0-a4920c6d335c",
    "image": "perev_left",
    "point": {
      "latitude": 52.9753847949,
      "longitude": 30.0420677536
    }
  },
  "e04b2ea6-c490-4ad1-af2d-48083d4c90da": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 127",
      "id": "e04b2ea6-c490-4ad1-af2d-48083d4c90da",
      "kilometrage": 1275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e04b2ea6-c490-4ad1-af2d-48083d4c90da",
    "image": "perev_right",
    "point": {
      "latitude": 52.8583149225,
      "longitude": 30.0952358093
    }
  },
  "e0840f3b-bbbc-4d76-a20c-762ef1798909": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 94",
      "id": "e0840f3b-bbbc-4d76-a20c-762ef1798909",
      "kilometrage": 1255,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0840f3b-bbbc-4d76-a20c-762ef1798909",
    "image": "perev_right",
    "point": {
      "latitude": 52.7516492862,
      "longitude": 30.1091937783
    }
  },
  "e09b1625-0469-4f37-9946-d17cf722889b": {
    "data": {
      "color": false,
      "comment": "нету",
      "description": "Соблюдать надводный габарит  ",
      "id": "e09b1625-0469-4f37-9946-d17cf722889b",
      "kilometrage": 1500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e09b1625-0469-4f37-9946-d17cf722889b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8807264479,
      "longitude": 30.2989615424
    }
  },
  "e0b76a7f-4fc0-4b27-bc9a-2c9e0f023966": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "e0b76a7f-4fc0-4b27-bc9a-2c9e0f023966",
      "kilometrage": 1313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e0b76a7f-4fc0-4b27-bc9a-2c9e0f023966",
    "image": "name_of",
    "point": {
      "latitude": 53.0575599624,
      "longitude": 30.0284253416
    }
  },
  "e11c8e9f-7a65-49c5-a4c6-5259ca3d2d37": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "e11c8e9f-7a65-49c5-a4c6-5259ca3d2d37",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e11c8e9f-7a65-49c5-a4c6-5259ca3d2d37",
    "image": "bridge_low",
    "point": {
      "latitude": 53.8941675489,
      "longitude": 30.3817271317
    }
  },
  "e1416989-83d2-45a4-ad0c-3546823ab26e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 38",
      "id": "e1416989-83d2-45a4-ad0c-3546823ab26e",
      "kilometrage": 1074,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1416989-83d2-45a4-ad0c-3546823ab26e",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9014253627,
      "longitude": 30.7589588517
    }
  },
  "e150cafc-1864-41af-a45b-e64e2e591cc3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 74",
      "id": "e150cafc-1864-41af-a45b-e64e2e591cc3",
      "kilometrage": 1357,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e150cafc-1864-41af-a45b-e64e2e591cc3",
    "image": "perev_left",
    "point": {
      "latitude": 53.1390545316,
      "longitude": 30.2848356564
    }
  },
  "e16d61b0-c717-4f48-9e00-efd51f5b789b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 84",
      "id": "e16d61b0-c717-4f48-9e00-efd51f5b789b",
      "kilometrage": 1130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e16d61b0-c717-4f48-9e00-efd51f5b789b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.1848997324,
      "longitude": 30.6184057297
    }
  },
  "e1e36a1d-3058-43f2-8c87-0b8c62d38503": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 210",
      "id": "e1e36a1d-3058-43f2-8c87-0b8c62d38503",
      "kilometrage": 1437,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1e36a1d-3058-43f2-8c87-0b8c62d38503",
    "image": "perev_left",
    "point": {
      "latitude": 53.504078037,
      "longitude": 30.273486796
    }
  },
  "e1f08564-a05b-4ebb-b3bf-57652de6ca87": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e1f08564-a05b-4ebb-b3bf-57652de6ca87",
      "kilometrage": 1440,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e1f08564-a05b-4ebb-b3bf-57652de6ca87",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.5217348627,
      "longitude": 30.2702785758
    }
  },
  "e2c3b17e-da8e-4cdf-a079-dd7ae800a74c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 175",
      "id": "e2c3b17e-da8e-4cdf-a079-dd7ae800a74c",
      "kilometrage": 1416,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2c3b17e-da8e-4cdf-a079-dd7ae800a74c",
    "image": "perev_right",
    "point": {
      "latitude": 53.4338839903,
      "longitude": 30.3286639148
    }
  },
  "e2d6be00-8871-4546-9638-3cfb132c0812": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 188",
      "id": "e2d6be00-8871-4546-9638-3cfb132c0812",
      "kilometrage": 1423,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2d6be00-8871-4546-9638-3cfb132c0812",
    "image": "perev_right",
    "point": {
      "latitude": 53.4692128173,
      "longitude": 30.3112341557
    }
  },
  "e2e96dfd-55a0-45da-91bb-9aff03b232a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e2e96dfd-55a0-45da-91bb-9aff03b232a2",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e2e96dfd-55a0-45da-91bb-9aff03b232a2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8856514097,
      "longitude": 30.3157941506
    }
  },
  "e32ecef9-938b-485b-a2f4-8fa7bc08d64e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 98",
      "id": "e32ecef9-938b-485b-a2f4-8fa7bc08d64e",
      "kilometrage": 1159,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e32ecef9-938b-485b-a2f4-8fa7bc08d64e",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3244942223,
      "longitude": 30.5246897556
    }
  },
  "e36b619a-1ab6-43ad-ae5d-3caa3102dde6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 52м",
      "id": "e36b619a-1ab6-43ad-ae5d-3caa3102dde6",
      "kilometrage": 1082,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e36b619a-1ab6-43ad-ae5d-3caa3102dde6",
    "image": "buyo_left",
    "point": {
      "latitude": 51.9405273086,
      "longitude": 30.8092464096
    }
  },
  "e36f3dfb-7429-4250-b7dd-a0d4f8f811a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e36f3dfb-7429-4250-b7dd-a0d4f8f811a2",
      "kilometrage": 1506,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e36f3dfb-7429-4250-b7dd-a0d4f8f811a2",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8903859391,
      "longitude": 30.3733142861
    }
  },
  "e3a1703b-4de9-492a-810b-c25455c71d43": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1375",
      "id": "e3a1703b-4de9-492a-810b-c25455c71d43",
      "kilometrage": 1375,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3a1703b-4de9-492a-810b-c25455c71d43",
    "image": "kilometrage",
    "point": {
      "latitude": 53.2416799205,
      "longitude": 30.269226177
    }
  },
  "e3ce1015-4871-47c3-956e-8aea11101ed9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 122",
      "id": "e3ce1015-4871-47c3-956e-8aea11101ed9",
      "kilometrage": 1270,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e3ce1015-4871-47c3-956e-8aea11101ed9",
    "image": "perev_right",
    "point": {
      "latitude": 52.8442215273,
      "longitude": 30.0637364172
    }
  },
  "e4911e80-3d3c-458c-99a1-7885cde860a1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 27",
      "id": "e4911e80-3d3c-458c-99a1-7885cde860a1",
      "kilometrage": 1329,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4911e80-3d3c-458c-99a1-7885cde860a1",
    "image": "perev_right",
    "point": {
      "latitude": 53.1282660543,
      "longitude": 30.1146021294
    }
  },
  "e4c4a48e-80c8-4ac4-8758-020bef652645": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e4c4a48e-80c8-4ac4-8758-020bef652645",
      "kilometrage": 1288,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4c4a48e-80c8-4ac4-8758-020bef652645",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.93420502,
      "longitude": 30.0477016007
    }
  },
  "e4cb28fa-1404-4eee-8953-737957b7e991": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e4cb28fa-1404-4eee-8953-737957b7e991",
      "kilometrage": 1557,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e4cb28fa-1404-4eee-8953-737957b7e991",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 54.2274258558,
      "longitude": 30.2954660377
    }
  },
  "e52b38de-2d99-4527-bdb7-aa96ab5d400e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 67",
      "id": "e52b38de-2d99-4527-bdb7-aa96ab5d400e",
      "kilometrage": 1242,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e52b38de-2d99-4527-bdb7-aa96ab5d400e",
    "image": "perev_left",
    "point": {
      "latitude": 52.7063579654,
      "longitude": 30.1792960493
    }
  },
  "e52d5aba-8dbd-4bdb-82f8-55b90f10e04a": {
    "data": {
      "color": false,
      "comment": "отсутствует",
      "description": "Якорь не бросать  ",
      "id": "e52d5aba-8dbd-4bdb-82f8-55b90f10e04a",
      "kilometrage": 1502,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e52d5aba-8dbd-4bdb-82f8-55b90f10e04a",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8881702877,
      "longitude": 30.3199008765
    }
  },
  "e5626914-eefc-4c1c-ba6c-0ca5fe40d959": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 66",
      "id": "e5626914-eefc-4c1c-ba6c-0ca5fe40d959",
      "kilometrage": 1351,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e5626914-eefc-4c1c-ba6c-0ca5fe40d959",
    "image": "perev_left",
    "point": {
      "latitude": 53.1163709294,
      "longitude": 30.2845800604
    }
  },
  "e63554c9-1f68-44ec-b5e2-36ab048c82cc": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "e63554c9-1f68-44ec-b5e2-36ab048c82cc",
      "kilometrage": 1507,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e63554c9-1f68-44ec-b5e2-36ab048c82cc",
    "image": "axis_romb",
    "point": {
      "latitude": 53.8943321546,
      "longitude": 30.382686507
    }
  },
  "e642f1a9-cf08-46c2-a313-b28eed1a831e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 57",
      "id": "e642f1a9-cf08-46c2-a313-b28eed1a831e",
      "kilometrage": 1102,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e642f1a9-cf08-46c2-a313-b28eed1a831e",
    "image": "perev_right",
    "point": {
      "latitude": 52.0161891184,
      "longitude": 30.7511226569
    }
  },
  "e6e687ed-0528-42d8-9228-36fef1453d28": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак левый 159",
      "id": "e6e687ed-0528-42d8-9228-36fef1453d28",
      "kilometrage": 1299,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e6e687ed-0528-42d8-9228-36fef1453d28",
    "image": "running_sign_left",
    "point": {
      "latitude": 52.9797924775,
      "longitude": 30.0503317293
    }
  },
  "e74aa2fa-0153-4bf5-99ab-724665ce1442": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый  ",
      "id": "e74aa2fa-0153-4bf5-99ab-724665ce1442",
      "kilometrage": 1569,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e74aa2fa-0153-4bf5-99ab-724665ce1442",
    "image": "perev_right",
    "point": {
      "latitude": 54.3122303935,
      "longitude": 30.2720433233
    }
  },
  "e783881c-8c21-466e-ac5f-e2962b14535e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 141",
      "id": "e783881c-8c21-466e-ac5f-e2962b14535e",
      "kilometrage": 1168,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e783881c-8c21-466e-ac5f-e2962b14535e",
    "image": "perev_left",
    "point": {
      "latitude": 52.347654296,
      "longitude": 30.4534789057
    }
  },
  "e7ad972e-c935-44b5-847f-126da20ab726": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 5",
      "id": "e7ad972e-c935-44b5-847f-126da20ab726",
      "kilometrage": 1317,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7ad972e-c935-44b5-847f-126da20ab726",
    "image": "perev_right",
    "point": {
      "latitude": 53.0784991134,
      "longitude": 30.0574417431
    }
  },
  "e7d42183-3caf-4ac9-92c1-f3d6ae404171": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 181",
      "id": "e7d42183-3caf-4ac9-92c1-f3d6ae404171",
      "kilometrage": 1420,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e7d42183-3caf-4ac9-92c1-f3d6ae404171",
    "image": "perev_left",
    "point": {
      "latitude": 53.4502357243,
      "longitude": 30.33805492
    }
  },
  "e80576c2-20f3-4d72-a3bf-9e16dad65a7b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 112",
      "id": "e80576c2-20f3-4d72-a3bf-9e16dad65a7b",
      "kilometrage": 1263,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e80576c2-20f3-4d72-a3bf-9e16dad65a7b",
    "image": "perev_left",
    "point": {
      "latitude": 52.8055295862,
      "longitude": 30.1082537956
    }
  },
  "e83ced94-f1e1-4739-bb7d-3f6fb936ebb2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "e83ced94-f1e1-4739-bb7d-3f6fb936ebb2",
      "kilometrage": 1127,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e83ced94-f1e1-4739-bb7d-3f6fb936ebb2",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.1627885469,
      "longitude": 30.6179648209
    }
  },
  "e8963642-c2a2-4a47-91b7-d2c9426bb40e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 107",
      "id": "e8963642-c2a2-4a47-91b7-d2c9426bb40e",
      "kilometrage": 1515,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e8963642-c2a2-4a47-91b7-d2c9426bb40e",
    "image": "perev_right",
    "point": {
      "latitude": 53.9194578794,
      "longitude": 30.4388100383
    }
  },
  "e9088f06-5b68-4211-9090-b073cec915fd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "e9088f06-5b68-4211-9090-b073cec915fd",
      "kilometrage": 1286,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9088f06-5b68-4211-9090-b073cec915fd",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 52.9185785197,
      "longitude": 30.0442598439
    }
  },
  "e93caec3-ab51-4683-a864-ae1571f35b6a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 182",
      "id": "e93caec3-ab51-4683-a864-ae1571f35b6a",
      "kilometrage": 1312,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e93caec3-ab51-4683-a864-ae1571f35b6a",
    "image": "perev_right",
    "point": {
      "latitude": 53.0503103128,
      "longitude": 30.0295555787
    }
  },
  "e96ae697-a4ec-4656-a528-5259cc4ce97b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 129м",
      "id": "e96ae697-a4ec-4656-a528-5259cc4ce97b",
      "kilometrage": 1178,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e96ae697-a4ec-4656-a528-5259cc4ce97b",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3920302068,
      "longitude": 30.3833638668
    }
  },
  "e9bd6b0d-ec6d-4c86-8cd8-49d4337b6e83": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 139",
      "id": "e9bd6b0d-ec6d-4c86-8cd8-49d4337b6e83",
      "kilometrage": 1164,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9bd6b0d-ec6d-4c86-8cd8-49d4337b6e83",
    "image": "perev_left",
    "point": {
      "latitude": 52.3309674686,
      "longitude": 30.4894070009
    }
  },
  "e9fa090b-dbdd-47fc-bfe2-81587dfa66f5": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 117",
      "id": "e9fa090b-dbdd-47fc-bfe2-81587dfa66f5",
      "kilometrage": 1521,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "e9fa090b-dbdd-47fc-bfe2-81587dfa66f5",
    "image": "perev_right",
    "point": {
      "latitude": 53.961446198,
      "longitude": 30.3906596743
    }
  },
  "eaa35a13-ac39-45b6-b4e3-75d08c426218": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 84",
      "id": "eaa35a13-ac39-45b6-b4e3-75d08c426218",
      "kilometrage": 1126,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eaa35a13-ac39-45b6-b4e3-75d08c426218",
    "image": "perev_left",
    "point": {
      "latitude": 52.162618787,
      "longitude": 30.6266850411
    }
  },
  "eab8b2cf-c741-44b6-9b84-c14b7b75368e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1530",
      "id": "eab8b2cf-c741-44b6-9b84-c14b7b75368e",
      "kilometrage": 1530,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eab8b2cf-c741-44b6-9b84-c14b7b75368e",
    "image": "kilometrage",
    "point": {
      "latitude": 54.0278883937,
      "longitude": 30.3873844352
    }
  },
  "eb0d1a62-3410-4a7a-8749-147336bb51a9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "eb0d1a62-3410-4a7a-8749-147336bb51a9",
      "kilometrage": 1497,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb0d1a62-3410-4a7a-8749-147336bb51a9",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.8578569523,
      "longitude": 30.279629563
    }
  },
  "eb5b5891-2fde-42d3-adf8-e4cfab8e125d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 111м",
      "id": "eb5b5891-2fde-42d3-adf8-e4cfab8e125d",
      "kilometrage": 1171,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb5b5891-2fde-42d3-adf8-e4cfab8e125d",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3700713467,
      "longitude": 30.4339033411
    }
  },
  "eb6618a7-a17f-4b20-92bc-e1ba9ef7e8e9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 29",
      "id": "eb6618a7-a17f-4b20-92bc-e1ba9ef7e8e9",
      "kilometrage": 1221,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb6618a7-a17f-4b20-92bc-e1ba9ef7e8e9",
    "image": "perev_left",
    "point": {
      "latitude": 52.6232351819,
      "longitude": 30.2385702778
    }
  },
  "eb961a9b-532f-47b4-8425-10cc0a6096d7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих сверху  ",
      "id": "eb961a9b-532f-47b4-8425-10cc0a6096d7",
      "kilometrage": 1316,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eb961a9b-532f-47b4-8425-10cc0a6096d7",
    "image": "axis_romb",
    "point": {
      "latitude": 53.074318602,
      "longitude": 30.0586751316
    }
  },
  "ebb68b11-4091-4b95-933b-1d674e9c20ac": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 32",
      "id": "ebb68b11-4091-4b95-933b-1d674e9c20ac",
      "kilometrage": 1331,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebb68b11-4091-4b95-933b-1d674e9c20ac",
    "image": "perev_left",
    "point": {
      "latitude": 53.1164524708,
      "longitude": 30.1311659628
    }
  },
  "ebc8ddb0-a6a1-4abd-b285-e8412a076931": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 33",
      "id": "ebc8ddb0-a6a1-4abd-b285-e8412a076931",
      "kilometrage": 1223,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebc8ddb0-a6a1-4abd-b285-e8412a076931",
    "image": "perev_left",
    "point": {
      "latitude": 52.6351149977,
      "longitude": 30.2285069733
    }
  },
  "ebcd4e8b-eea8-4f02-b029-1ecec8a7c977": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 75",
      "id": "ebcd4e8b-eea8-4f02-b029-1ecec8a7c977",
      "kilometrage": 1117,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ebcd4e8b-eea8-4f02-b029-1ecec8a7c977",
    "image": "perev_right",
    "point": {
      "latitude": 52.1082232589,
      "longitude": 30.7001990422
    }
  },
  "ec287cf3-2073-4eca-b103-0ee2f960af7e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 36",
      "id": "ec287cf3-2073-4eca-b103-0ee2f960af7e",
      "kilometrage": 1086,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ec287cf3-2073-4eca-b103-0ee2f960af7e",
    "image": "perev_right",
    "point": {
      "latitude": 51.967716527,
      "longitude": 30.7978353279
    }
  },
  "ec3e992c-25ce-4a81-8c93-052e25563e5a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 91",
      "id": "ec3e992c-25ce-4a81-8c93-052e25563e5a",
      "kilometrage": 1141,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ec3e992c-25ce-4a81-8c93-052e25563e5a",
    "image": "buyo_left",
    "point": {
      "latitude": 52.22702094724622,
      "longitude": 30.56919230223741
    }
  },
  "ece731a7-764d-4147-b801-002a81c49c74": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 89",
      "id": "ece731a7-764d-4147-b801-002a81c49c74",
      "kilometrage": 1368,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ece731a7-764d-4147-b801-002a81c49c74",
    "image": "perev_right",
    "point": {
      "latitude": 53.2150016044,
      "longitude": 30.2396381725
    }
  },
  "ed045ffa-b73c-40a0-b032-60c60d22f65e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Якорь не бросать  ",
      "id": "ed045ffa-b73c-40a0-b032-60c60d22f65e",
      "kilometrage": 1519,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed045ffa-b73c-40a0-b032-60c60d22f65e",
    "image": "anchor_forbidden",
    "point": {
      "latitude": 53.9495558397,
      "longitude": 30.4173562534
    }
  },
  "ed8672d5-7294-4d09-935e-5d884bb5d738": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 35",
      "id": "ed8672d5-7294-4d09-935e-5d884bb5d738",
      "kilometrage": 1085,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ed8672d5-7294-4d09-935e-5d884bb5d738",
    "image": "perev_left",
    "point": {
      "latitude": 51.9632824212,
      "longitude": 30.8016209514
    }
  },
  "edc1780a-07a0-459c-a251-a5c3ac215d42": {
    "data": {
      "color": false,
      "comment": "отсутствует",
      "description": "Соблюдать надводный габарит  ",
      "id": "edc1780a-07a0-459c-a251-a5c3ac215d42",
      "kilometrage": 1501,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edc1780a-07a0-459c-a251-a5c3ac215d42",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8847179219,
      "longitude": 30.3126286312
    }
  },
  "edc7dc60-ecfb-4b30-8ff0-a14ae720f41c": {
    "data": {
      "color": false,
      "comment": "Отсутствует ",
      "description": "Левый буй 15",
      "id": "edc7dc60-ecfb-4b30-8ff0-a14ae720f41c",
      "kilometrage": 1504,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edc7dc60-ecfb-4b30-8ff0-a14ae720f41c",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8866758688,
      "longitude": 30.3434614825
    }
  },
  "edd1444a-28c3-4b3c-9642-2b4d72d12f72": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 52",
      "id": "edd1444a-28c3-4b3c-9642-2b4d72d12f72",
      "kilometrage": 1343,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edd1444a-28c3-4b3c-9642-2b4d72d12f72",
    "image": "perev_left",
    "point": {
      "latitude": 53.0802473635,
      "longitude": 30.2318952251
    }
  },
  "edd83db1-bba9-4caa-8689-708eeb325079": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "edd83db1-bba9-4caa-8689-708eeb325079",
      "kilometrage": 1438,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "edd83db1-bba9-4caa-8689-708eeb325079",
    "image": "name_of",
    "point": {
      "latitude": 53.508998177,
      "longitude": 30.2665777943
    }
  },
  "ee077921-af86-4f03-9263-89b84cd9c139": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 22",
      "id": "ee077921-af86-4f03-9263-89b84cd9c139",
      "kilometrage": 1060,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee077921-af86-4f03-9263-89b84cd9c139",
    "image": "buyo_left",
    "point": {
      "latitude": 51.8045873064,
      "longitude": 30.6651664854
    }
  },
  "ee413688-647a-4deb-a53b-e767c173606a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель местности  ",
      "id": "ee413688-647a-4deb-a53b-e767c173606a",
      "kilometrage": 1056,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee413688-647a-4deb-a53b-e767c173606a",
    "image": "name_of",
    "point": {
      "latitude": 51.7867610798,
      "longitude": 30.6465982833
    }
  },
  "ee67d3d8-0b7f-4fbd-9119-939e5e3fb99c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1540",
      "id": "ee67d3d8-0b7f-4fbd-9119-939e5e3fb99c",
      "kilometrage": 1540,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ee67d3d8-0b7f-4fbd-9119-939e5e3fb99c",
    "image": "kilometrage",
    "point": {
      "latitude": 54.1046786882,
      "longitude": 30.3711746094
    }
  },
  "efcf0c9a-f98c-4ed7-9a64-d8fdb37f2910": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 6",
      "id": "efcf0c9a-f98c-4ed7-9a64-d8fdb37f2910",
      "kilometrage": 1209,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "efcf0c9a-f98c-4ed7-9a64-d8fdb37f2910",
    "image": "perev_right",
    "point": {
      "latitude": 52.5652355031,
      "longitude": 30.2611281705
    }
  },
  "eff18985-0904-4021-bd24-25240859c215": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 2",
      "id": "eff18985-0904-4021-bd24-25240859c215",
      "kilometrage": 1491,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "eff18985-0904-4021-bd24-25240859c215",
    "image": "buyo_left",
    "point": {
      "latitude": 53.8082372639,
      "longitude": 30.2797578951
    }
  },
  "f00a28e3-c72e-40a5-9867-a4f6fbc25182": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f00a28e3-c72e-40a5-9867-a4f6fbc25182",
      "kilometrage": 1084,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f00a28e3-c72e-40a5-9867-a4f6fbc25182",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 51.9562278108,
      "longitude": 30.7985569198
    }
  },
  "f0259bd1-df01-41b2-9f94-24a1f27b2ff9": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1210",
      "id": "f0259bd1-df01-41b2-9f94-24a1f27b2ff9",
      "kilometrage": 1210,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0259bd1-df01-41b2-9f94-24a1f27b2ff9",
    "image": "kilometrage",
    "point": {
      "latitude": 52.5715541435,
      "longitude": 30.267358373
    }
  },
  "f0631063-0509-465c-8c58-a8e8f953a3e0": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 21",
      "id": "f0631063-0509-465c-8c58-a8e8f953a3e0",
      "kilometrage": 1059,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0631063-0509-465c-8c58-a8e8f953a3e0",
    "image": "buyo_right",
    "point": {
      "latitude": 51.7951020614,
      "longitude": 30.668802785
    }
  },
  "f07edbeb-0a8d-453f-a0cf-100d63b1ed38": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 40",
      "id": "f07edbeb-0a8d-453f-a0cf-100d63b1ed38",
      "kilometrage": 1464,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f07edbeb-0a8d-453f-a0cf-100d63b1ed38",
    "image": "perev_right",
    "point": {
      "latitude": 53.6496738568,
      "longitude": 30.2828815545
    }
  },
  "f08e7893-b47b-45f0-8a52-198e3a36f187": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f08e7893-b47b-45f0-8a52-198e3a36f187",
      "kilometrage": 1260,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f08e7893-b47b-45f0-8a52-198e3a36f187",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 52.7853586509,
      "longitude": 30.1112957175
    }
  },
  "f0bb30ff-2463-49b6-8d7e-d81ca72f0ed1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 6",
      "id": "f0bb30ff-2463-49b6-8d7e-d81ca72f0ed1",
      "kilometrage": 1275,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0bb30ff-2463-49b6-8d7e-d81ca72f0ed1",
    "image": "buyo_left",
    "point": {
      "latitude": 52.8606127016,
      "longitude": 30.0857585297
    }
  },
  "f0ec8426-85f4-47a3-8a77-0bf2b8105fea": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1345",
      "id": "f0ec8426-85f4-47a3-8a77-0bf2b8105fea",
      "kilometrage": 1345,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0ec8426-85f4-47a3-8a77-0bf2b8105fea",
    "image": "kilometrage",
    "point": {
      "latitude": 53.0844369845,
      "longitude": 30.250034351
    }
  },
  "f0f361e8-4a94-4865-85a2-a4f263df1b81": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 79",
      "id": "f0f361e8-4a94-4865-85a2-a4f263df1b81",
      "kilometrage": 1120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0f361e8-4a94-4865-85a2-a4f263df1b81",
    "image": "perev_right",
    "point": {
      "latitude": 52.1324405723,
      "longitude": 30.6947732043
    }
  },
  "f0f9464d-1c39-4d68-a1b2-18456645b127": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 49",
      "id": "f0f9464d-1c39-4d68-a1b2-18456645b127",
      "kilometrage": 1231,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f0f9464d-1c39-4d68-a1b2-18456645b127",
    "image": "perev_right",
    "point": {
      "latitude": 52.659794562,
      "longitude": 30.2131137524
    }
  },
  "f102b716-7a48-4a0a-bd72-b22d2aeb0e75": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 3",
      "id": "f102b716-7a48-4a0a-bd72-b22d2aeb0e75",
      "kilometrage": 1048,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f102b716-7a48-4a0a-bd72-b22d2aeb0e75",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7590475204,
      "longitude": 30.652387295
    }
  },
  "f13e4380-af97-4350-a125-099a31f13f21": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 149",
      "id": "f13e4380-af97-4350-a125-099a31f13f21",
      "kilometrage": 1401,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f13e4380-af97-4350-a125-099a31f13f21",
    "image": "perev_right",
    "point": {
      "latitude": 53.3457326588,
      "longitude": 30.3703755193
    }
  },
  "f16a1719-b290-4111-9f71-a328f086d3f4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 182",
      "id": "f16a1719-b290-4111-9f71-a328f086d3f4",
      "kilometrage": 1200,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f16a1719-b290-4111-9f71-a328f086d3f4",
    "image": "perev_left",
    "point": {
      "latitude": 52.5049920859,
      "longitude": 30.2784809634
    }
  },
  "f17434c9-7bee-4105-b523-2eba2b85e524": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 189",
      "id": "f17434c9-7bee-4105-b523-2eba2b85e524",
      "kilometrage": 1424,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f17434c9-7bee-4105-b523-2eba2b85e524",
    "image": "perev_right",
    "point": {
      "latitude": 53.4754038139,
      "longitude": 30.3093864326
    }
  },
  "f17bd157-c7af-4c69-8fa7-58bab83a8d18": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 54",
      "id": "f17bd157-c7af-4c69-8fa7-58bab83a8d18",
      "kilometrage": 1472,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f17bd157-c7af-4c69-8fa7-58bab83a8d18",
    "image": "perev_left",
    "point": {
      "latitude": 53.689731475,
      "longitude": 30.2916690816
    }
  },
  "f1c8da09-47d4-45ef-80fa-1d23993334ad": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1045",
      "id": "f1c8da09-47d4-45ef-80fa-1d23993334ad",
      "kilometrage": 1045,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1c8da09-47d4-45ef-80fa-1d23993334ad",
    "image": "kilometrage",
    "point": {
      "latitude": 51.7362725018,
      "longitude": 30.6330339915
    }
  },
  "f1d31aca-0ee4-46e5-9366-474f1f9b7076": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "f1d31aca-0ee4-46e5-9366-474f1f9b7076",
      "kilometrage": 1282,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1d31aca-0ee4-46e5-9366-474f1f9b7076",
    "image": "bridge_low",
    "point": {
      "latitude": 52.8885343406,
      "longitude": 30.0605725966
    }
  },
  "f1e5f5fe-3946-409b-af53-635729d46b59": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 25",
      "id": "f1e5f5fe-3946-409b-af53-635729d46b59",
      "kilometrage": 1331,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f1e5f5fe-3946-409b-af53-635729d46b59",
    "image": "perev_left",
    "point": {
      "latitude": 53.1183974979,
      "longitude": 30.1249072596
    }
  },
  "f2814840-7ecf-4709-9636-076a15c75bce": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый 201",
      "id": "f2814840-7ecf-4709-9636-076a15c75bce",
      "kilometrage": 1432,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2814840-7ecf-4709-9636-076a15c75bce",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.4966416798,
      "longitude": 30.2901914492
    }
  },
  "f2c5f6fe-9708-422d-85f2-604a36b8fdbf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 5",
      "id": "f2c5f6fe-9708-422d-85f2-604a36b8fdbf",
      "kilometrage": 1208,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f2c5f6fe-9708-422d-85f2-604a36b8fdbf",
    "image": "perev_left",
    "point": {
      "latitude": 52.5622325226,
      "longitude": 30.2577588093
    }
  },
  "f3027eaf-b070-4202-adf7-fbf1ae720bca": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 78",
      "id": "f3027eaf-b070-4202-adf7-fbf1ae720bca",
      "kilometrage": 1488,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3027eaf-b070-4202-adf7-fbf1ae720bca",
    "image": "perev_left",
    "point": {
      "latitude": 53.7844718066,
      "longitude": 30.2786400388
    }
  },
  "f3a6b50b-3e2c-47c3-af31-d8ca38a1d97a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 65",
      "id": "f3a6b50b-3e2c-47c3-af31-d8ca38a1d97a",
      "kilometrage": 1096,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3a6b50b-3e2c-47c3-af31-d8ca38a1d97a",
    "image": "buyo_right",
    "point": {
      "latitude": 52.0154790131,
      "longitude": 30.7891046252
    }
  },
  "f3bd075f-4143-481e-ad52-e5915a2f085a": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 9",
      "id": "f3bd075f-4143-481e-ad52-e5915a2f085a",
      "kilometrage": 1057,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3bd075f-4143-481e-ad52-e5915a2f085a",
    "image": "perev_left",
    "point": {
      "latitude": 51.7826227489,
      "longitude": 30.6540066623
    }
  },
  "f3ef95f3-53d5-456c-ba9b-b5ab78f1b6e1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f3ef95f3-53d5-456c-ba9b-b5ab78f1b6e1",
      "kilometrage": 1313,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f3ef95f3-53d5-456c-ba9b-b5ab78f1b6e1",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.0570866062,
      "longitude": 30.0271158185
    }
  },
  "f45ca4a2-1d55-4091-b7a4-4213fcbb26e2": {
    "data": {
      "color": false,
      "comment": "Буй правый 112 а не перевальный",
      "description": "Перевальный знак правый 112",
      "id": "f45ca4a2-1d55-4091-b7a4-4213fcbb26e2",
      "kilometrage": 1518,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f45ca4a2-1d55-4091-b7a4-4213fcbb26e2",
    "image": "perev_right",
    "point": {
      "latitude": 53.940077947,
      "longitude": 30.4252356527
    }
  },
  "f4cc3550-7881-44d0-875a-0ed56a4c8947": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 46",
      "id": "f4cc3550-7881-44d0-875a-0ed56a4c8947",
      "kilometrage": 1079,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4cc3550-7881-44d0-875a-0ed56a4c8947",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9157020582,
      "longitude": 30.8166686739
    }
  },
  "f4f8ecfe-8b54-4bc3-9721-95419f529c7f": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 214",
      "id": "f4f8ecfe-8b54-4bc3-9721-95419f529c7f",
      "kilometrage": 1439,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f4f8ecfe-8b54-4bc3-9721-95419f529c7f",
    "image": "perev_left",
    "point": {
      "latitude": 53.5161195879,
      "longitude": 30.2692341646
    }
  },
  "f51147d6-6c08-4ad8-baec-a7b04794b4a2": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "f51147d6-6c08-4ad8-baec-a7b04794b4a2",
      "kilometrage": 1278,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f51147d6-6c08-4ad8-baec-a7b04794b4a2",
    "image": "bridge_low",
    "point": {
      "latitude": 52.8634828082,
      "longitude": 30.071724429
    }
  },
  "f52b433e-cab2-41c6-abdd-396e19e01545": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 120",
      "id": "f52b433e-cab2-41c6-abdd-396e19e01545",
      "kilometrage": 1150,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f52b433e-cab2-41c6-abdd-396e19e01545",
    "image": "perev_right",
    "point": {
      "latitude": 52.2763767803,
      "longitude": 30.5375806399
    }
  },
  "f56198aa-999c-4aa1-9dbd-51762c9cb5b8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 184",
      "id": "f56198aa-999c-4aa1-9dbd-51762c9cb5b8",
      "kilometrage": 1422,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f56198aa-999c-4aa1-9dbd-51762c9cb5b8",
    "image": "perev_left",
    "point": {
      "latitude": 53.4659491416,
      "longitude": 30.3337978222
    }
  },
  "f5baf2fd-3280-4486-abde-2a171055c03c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1465",
      "id": "f5baf2fd-3280-4486-abde-2a171055c03c",
      "kilometrage": 1465,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5baf2fd-3280-4486-abde-2a171055c03c",
    "image": "kilometrage",
    "point": {
      "latitude": 53.6463011938,
      "longitude": 30.2903193289
    }
  },
  "f5e113ad-637b-41c9-8d95-c4333451b4b6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 61",
      "id": "f5e113ad-637b-41c9-8d95-c4333451b4b6",
      "kilometrage": 1348,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5e113ad-637b-41c9-8d95-c4333451b4b6",
    "image": "perev_right",
    "point": {
      "latitude": 53.1068282067,
      "longitude": 30.2591858224
    }
  },
  "f5e148b7-5af3-431f-b36d-efeb2b9405ae": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 79",
      "id": "f5e148b7-5af3-431f-b36d-efeb2b9405ae",
      "kilometrage": 1488,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f5e148b7-5af3-431f-b36d-efeb2b9405ae",
    "image": "perev_right",
    "point": {
      "latitude": 53.7852460492,
      "longitude": 30.2709188321
    }
  },
  "f6254f88-88bf-422a-af25-4ad5aacfa1f6": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 62",
      "id": "f6254f88-88bf-422a-af25-4ad5aacfa1f6",
      "kilometrage": 1106,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6254f88-88bf-422a-af25-4ad5aacfa1f6",
    "image": "perev_right",
    "point": {
      "latitude": 52.0394160747,
      "longitude": 30.7298854515
    }
  },
  "f658d9f3-b4b2-4152-a029-fb94d0706344": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 30",
      "id": "f658d9f3-b4b2-4152-a029-fb94d0706344",
      "kilometrage": 1222,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f658d9f3-b4b2-4152-a029-fb94d0706344",
    "image": "perev_right",
    "point": {
      "latitude": 52.6275724775,
      "longitude": 30.2321540565
    }
  },
  "f6950455-5df6-4d09-86c4-0e3e61303acf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 63",
      "id": "f6950455-5df6-4d09-86c4-0e3e61303acf",
      "kilometrage": 1090,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6950455-5df6-4d09-86c4-0e3e61303acf",
    "image": "buyo_right",
    "point": {
      "latitude": 51.9896389461,
      "longitude": 30.7988304063
    }
  },
  "f6a1b244-6a1c-4b41-84cd-58ef9963e91b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Соблюдать надводный габарит  ",
      "id": "f6a1b244-6a1c-4b41-84cd-58ef9963e91b",
      "kilometrage": 1500,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6a1b244-6a1c-4b41-84cd-58ef9963e91b",
    "image": "follow_surf_dimension",
    "point": {
      "latitude": 53.8831865389,
      "longitude": 30.3009281059
    }
  },
  "f6aeb575-5e2e-4318-9a25-6f3de1c041ec": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 9",
      "id": "f6aeb575-5e2e-4318-9a25-6f3de1c041ec",
      "kilometrage": 1287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6aeb575-5e2e-4318-9a25-6f3de1c041ec",
    "image": "buyo_left",
    "point": {
      "latitude": 52.9221361362,
      "longitude": 30.044916576
    }
  },
  "f6bc13ab-1725-4bb3-bb5a-90093cdac623": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "f6bc13ab-1725-4bb3-bb5a-90093cdac623",
      "kilometrage": 1287,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6bc13ab-1725-4bb3-bb5a-90093cdac623",
    "image": "bridge_low",
    "point": {
      "latitude": 52.9275295254,
      "longitude": 30.0453230223
    }
  },
  "f6be1437-4499-4ea8-96b7-ffc67dbf9a46": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 96",
      "id": "f6be1437-4499-4ea8-96b7-ffc67dbf9a46",
      "kilometrage": 1372,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6be1437-4499-4ea8-96b7-ffc67dbf9a46",
    "image": "perev_right",
    "point": {
      "latitude": 53.2472919156,
      "longitude": 30.2566646639
    }
  },
  "f6d9cd57-b4d7-45b9-b28e-0bef80b979e4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 163",
      "id": "f6d9cd57-b4d7-45b9-b28e-0bef80b979e4",
      "kilometrage": 1302,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f6d9cd57-b4d7-45b9-b28e-0bef80b979e4",
    "image": "perev_right",
    "point": {
      "latitude": 52.9975040011,
      "longitude": 30.0404379646
    }
  },
  "f7275030-e7df-4d87-873f-624de8adbbf7": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 2",
      "id": "f7275030-e7df-4d87-873f-624de8adbbf7",
      "kilometrage": 1441,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f7275030-e7df-4d87-873f-624de8adbbf7",
    "image": "perev_right",
    "point": {
      "latitude": 53.5270517538,
      "longitude": 30.2600588548
    }
  },
  "f781c872-313f-4765-8a74-bef9552e72a8": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1190",
      "id": "f781c872-313f-4765-8a74-bef9552e72a8",
      "kilometrage": 1190,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f781c872-313f-4765-8a74-bef9552e72a8",
    "image": "kilometrage",
    "point": {
      "latitude": 52.4501627301,
      "longitude": 30.3483617785
    }
  },
  "f787d088-eecc-411a-9371-6520f108e5a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 123",
      "id": "f787d088-eecc-411a-9371-6520f108e5a4",
      "kilometrage": 1386,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f787d088-eecc-411a-9371-6520f108e5a4",
    "image": "perev_right",
    "point": {
      "latitude": 53.2574388981,
      "longitude": 30.381054162
    }
  },
  "f87bdddf-36d2-44fe-8e6b-20c7e39acac1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 180",
      "id": "f87bdddf-36d2-44fe-8e6b-20c7e39acac1",
      "kilometrage": 1311,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f87bdddf-36d2-44fe-8e6b-20c7e39acac1",
    "image": "perev_left",
    "point": {
      "latitude": 53.0455860674,
      "longitude": 30.0395677218
    }
  },
  "f8ed551c-b098-4372-bca5-ac9368f964a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 30",
      "id": "f8ed551c-b098-4372-bca5-ac9368f964a4",
      "kilometrage": 1330,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8ed551c-b098-4372-bca5-ac9368f964a4",
    "image": "perev_right",
    "point": {
      "latitude": 53.1260701904,
      "longitude": 30.1321422805
    }
  },
  "f8fdf967-f4c6-4847-b829-6072a10f29cf": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 101",
      "id": "f8fdf967-f4c6-4847-b829-6072a10f29cf",
      "kilometrage": 1165,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f8fdf967-f4c6-4847-b829-6072a10f29cf",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3377897468,
      "longitude": 30.4808420789
    }
  },
  "f94b1ae8-31b6-4053-b362-14e9cdd87322": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 107",
      "id": "f94b1ae8-31b6-4053-b362-14e9cdd87322",
      "kilometrage": 1169,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f94b1ae8-31b6-4053-b362-14e9cdd87322",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3567595455,
      "longitude": 30.4485572792
    }
  },
  "f9559b80-e4b2-4d42-91da-e873026b5858": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1115",
      "id": "f9559b80-e4b2-4d42-91da-e873026b5858",
      "kilometrage": 1115,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9559b80-e4b2-4d42-91da-e873026b5858",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1026823571,
      "longitude": 30.720051018
    }
  },
  "f9fee665-8d8d-45d9-a071-93504c766481": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1365",
      "id": "f9fee665-8d8d-45d9-a071-93504c766481",
      "kilometrage": 1365,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "f9fee665-8d8d-45d9-a071-93504c766481",
    "image": "kilometrage",
    "point": {
      "latitude": 53.192765967,
      "longitude": 30.2483806827
    }
  },
  "fa42b669-ce1e-46af-bab8-af170f02d851": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Знак рейда левый задний  ",
      "id": "fa42b669-ce1e-46af-bab8-af170f02d851",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa42b669-ce1e-46af-bab8-af170f02d851",
    "image": "raid_end_left",
    "point": {
      "latitude": 53.8720449351,
      "longitude": 30.2914490624
    }
  },
  "fa5dbd29-e552-49c2-806c-e1ccc3372308": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1560",
      "id": "fa5dbd29-e552-49c2-806c-e1ccc3372308",
      "kilometrage": 1560,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fa5dbd29-e552-49c2-806c-e1ccc3372308",
    "image": "kilometrage",
    "point": {
      "latitude": 54.2426543657,
      "longitude": 30.2776159306
    }
  },
  "fab17355-5350-4de0-bc5d-0fe593d0b869": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 198",
      "id": "fab17355-5350-4de0-bc5d-0fe593d0b869",
      "kilometrage": 1430,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fab17355-5350-4de0-bc5d-0fe593d0b869",
    "image": "perev_left",
    "point": {
      "latitude": 53.4921382302,
      "longitude": 30.3075597762
    }
  },
  "faf38aed-2b01-4b8e-af85-8d1d1c55ab4e": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Выход на основной судовой путь  ",
      "id": "faf38aed-2b01-4b8e-af85-8d1d1c55ab4e",
      "kilometrage": 1130,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "faf38aed-2b01-4b8e-af85-8d1d1c55ab4e",
    "image": "main_way",
    "point": {
      "latitude": 52.1860365489,
      "longitude": 30.6167757172
    }
  },
  "fb154125-8fe6-4b5e-8a79-bbfbb3280db3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 125",
      "id": "fb154125-8fe6-4b5e-8a79-bbfbb3280db3",
      "kilometrage": 1273,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb154125-8fe6-4b5e-8a79-bbfbb3280db3",
    "image": "perev_left",
    "point": {
      "latitude": 52.8502189988,
      "longitude": 30.1015862547
    }
  },
  "fb497f58-9eff-4a65-9478-317258e8e419": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Левый буй 97",
      "id": "fb497f58-9eff-4a65-9478-317258e8e419",
      "kilometrage": 1157,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fb497f58-9eff-4a65-9478-317258e8e419",
    "image": "buyo_left",
    "point": {
      "latitude": 52.3115436848,
      "longitude": 30.5520504045
    }
  },
  "fbc8136f-9a81-479a-b221-96195a42ae48": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Малый буй левый 8в",
      "id": "fbc8136f-9a81-479a-b221-96195a42ae48",
      "kilometrage": 1049,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fbc8136f-9a81-479a-b221-96195a42ae48",
    "image": "buyo_left",
    "point": {
      "latitude": 51.7663218229,
      "longitude": 30.6370920552
    }
  },
  "fbcaefcc-d599-4dd4-80cb-1ccbc19d2398": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 21",
      "id": "fbcaefcc-d599-4dd4-80cb-1ccbc19d2398",
      "kilometrage": 1326,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fbcaefcc-d599-4dd4-80cb-1ccbc19d2398",
    "image": "perev_left",
    "point": {
      "latitude": 53.1111475356,
      "longitude": 30.1051526472
    }
  },
  "fbe56343-552a-4ed7-ab8d-f6f6a07d548b": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Ходовой знак правый  ",
      "id": "fbe56343-552a-4ed7-ab8d-f6f6a07d548b",
      "kilometrage": 1373,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fbe56343-552a-4ed7-ab8d-f6f6a07d548b",
    "image": "running_sign_right",
    "point": {
      "latitude": 53.2525440911,
      "longitude": 30.2714462772
    }
  },
  "fc0b11dc-1d9e-4cf5-a54d-e9dcbdea9c06": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 104",
      "id": "fc0b11dc-1d9e-4cf5-a54d-e9dcbdea9c06",
      "kilometrage": 1378,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fc0b11dc-1d9e-4cf5-a54d-e9dcbdea9c06",
    "image": "perev_left",
    "point": {
      "latitude": 53.2468283155,
      "longitude": 30.3109601886
    }
  },
  "fccb1025-fcd8-430e-ae37-44e028b0701c": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 176",
      "id": "fccb1025-fcd8-430e-ae37-44e028b0701c",
      "kilometrage": 1196,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fccb1025-fcd8-430e-ae37-44e028b0701c",
    "image": "perev_left",
    "point": {
      "latitude": 52.4873320349,
      "longitude": 30.311377012
    }
  },
  "fd5e10ca-e0a8-4f83-9648-576d9d820435": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 89",
      "id": "fd5e10ca-e0a8-4f83-9648-576d9d820435",
      "kilometrage": 1499,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd5e10ca-e0a8-4f83-9648-576d9d820435",
    "image": "perev_left",
    "point": {
      "latitude": 53.8747613726,
      "longitude": 30.2950370025
    }
  },
  "fd66fec8-590c-4390-8b93-006e089bc7b3": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 137",
      "id": "fd66fec8-590c-4390-8b93-006e089bc7b3",
      "kilometrage": 1163,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd66fec8-590c-4390-8b93-006e089bc7b3",
    "image": "perev_right",
    "point": {
      "latitude": 52.3202169425,
      "longitude": 30.4866304648
    }
  },
  "fd6d45d6-5619-4478-8890-d990f7301061": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 26",
      "id": "fd6d45d6-5619-4478-8890-d990f7301061",
      "kilometrage": 1328,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fd6d45d6-5619-4478-8890-d990f7301061",
    "image": "perev_right",
    "point": {
      "latitude": 53.1219609302,
      "longitude": 30.1155764504
    }
  },
  "fda2edbf-1840-4982-a3b9-4166f07ab2cd": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак правый 68",
      "id": "fda2edbf-1840-4982-a3b9-4166f07ab2cd",
      "kilometrage": 1243,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fda2edbf-1840-4982-a3b9-4166f07ab2cd",
    "image": "perev_right",
    "point": {
      "latitude": 52.7102983587,
      "longitude": 30.1791727494
    }
  },
  "fe299019-2ae7-4ff2-9c03-4ec70abb8718": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 64",
      "id": "fe299019-2ae7-4ff2-9c03-4ec70abb8718",
      "kilometrage": 1349,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe299019-2ae7-4ff2-9c03-4ec70abb8718",
    "image": "perev_left",
    "point": {
      "latitude": 53.1117499494,
      "longitude": 30.2735134921
    }
  },
  "fe52c52e-c504-46d8-8c19-cdf7bcadfdc1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Правый буй 128м",
      "id": "fe52c52e-c504-46d8-8c19-cdf7bcadfdc1",
      "kilometrage": 1177,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe52c52e-c504-46d8-8c19-cdf7bcadfdc1",
    "image": "buyo_right",
    "point": {
      "latitude": 52.3880498955,
      "longitude": 30.3887216052
    }
  },
  "fe8dc165-3d6a-4005-acc2-9f7c687cc3a4": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель расстояний 1120",
      "id": "fe8dc165-3d6a-4005-acc2-9f7c687cc3a4",
      "kilometrage": 1120,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fe8dc165-3d6a-4005-acc2-9f7c687cc3a4",
    "image": "kilometrage",
    "point": {
      "latitude": 52.1316462446,
      "longitude": 30.7006611703
    }
  },
  "fecc8f1d-108b-42b8-9e33-0df5baf06339": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Указатель оси судового хода в судоходном пролете моста для судов и составов, идущих снизу  ",
      "id": "fecc8f1d-108b-42b8-9e33-0df5baf06339",
      "kilometrage": 1170,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "fecc8f1d-108b-42b8-9e33-0df5baf06339",
    "image": "bridge_low",
    "point": {
      "latitude": 52.3585907865,
      "longitude": 30.447694672
    }
  },
  "ff8e088e-1cfb-4e81-907a-76017d61c4d1": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 151",
      "id": "ff8e088e-1cfb-4e81-907a-76017d61c4d1",
      "kilometrage": 1402,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ff8e088e-1cfb-4e81-907a-76017d61c4d1",
    "image": "perev_left",
    "point": {
      "latitude": 53.3544718038,
      "longitude": 30.3759572538
    }
  },
  "ffecb5ae-4475-400b-8006-c4d692fca77d": {
    "data": {
      "color": false,
      "comment": "",
      "description": "Перевальный знак левый 93",
      "id": "ffecb5ae-4475-400b-8006-c4d692fca77d",
      "kilometrage": 1503,
      "place": false,
      "size": false,
      "visibility": false
    },
    "id": "ffecb5ae-4475-400b-8006-c4d692fca77d",
    "image": "perev_left",
    "point": {
      "latitude": 53.8874769716,
      "longitude": 30.3320684348
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

let arrayForChange = [
  
]


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
