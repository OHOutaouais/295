var APP_DATA = {
  "scenes": [
    {
      "id": "0-entr-cuisine",
      "name": "entré cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2630662124922,
          "pitch": 0.19864060119260607,
          "rotation": 0,
          "target": "7-entr-toilette"
        },
        {
          "yaw": 3.073030966666643,
          "pitch": 0.28972109701827975,
          "rotation": 0,
          "target": "5-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon-cuisine",
      "name": "salon cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.194505707280845,
          "pitch": 0.22381162506175833,
          "rotation": 0,
          "target": "2-porte-patio"
        },
        {
          "yaw": -0.7926819950611659,
          "pitch": 0.236755627731851,
          "rotation": 0,
          "target": "6-chambre-porte-patio"
        },
        {
          "yaw": 1.712775836365645,
          "pitch": 0.3958381005310283,
          "rotation": 0,
          "target": "5-cuisine"
        },
        {
          "yaw": 0.287060732235906,
          "pitch": 0.2776969429502252,
          "rotation": 0,
          "target": "7-entr-toilette"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-porte-patio",
      "name": "porte patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8520660067134314,
          "pitch": 0.0904110027632008,
          "rotation": 0,
          "target": "1-salon-cuisine"
        },
        {
          "yaw": 1.1044857909907755,
          "pitch": 0.19933288819856188,
          "rotation": 0,
          "target": "3-salon-porte-chambre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salon-porte-chambre",
      "name": "salon porte chambre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.23653804336237805,
          "pitch": 0.22380194353337757,
          "rotation": 0,
          "target": "6-chambre-porte-patio"
        },
        {
          "yaw": -1.6840052462056292,
          "pitch": 0.30133381072884546,
          "rotation": 0,
          "target": "2-porte-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-chambre-",
      "name": "chambre ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.215753994255456,
          "pitch": 0.10850024828226523,
          "rotation": 0,
          "target": "3-salon-porte-chambre"
        },
        {
          "yaw": 1.2176648284692764,
          "pitch": 0.11003869948886447,
          "rotation": 0,
          "target": "6-chambre-porte-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cuisine",
      "name": "cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3496594273672837,
          "pitch": 0.11017601416846645,
          "rotation": 0,
          "target": "0-entr-cuisine"
        },
        {
          "yaw": -0.421361411576175,
          "pitch": 0.14116595522073183,
          "rotation": 0,
          "target": "7-entr-toilette"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-chambre-porte-patio",
      "name": "chambre porte patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.019660587287852,
          "pitch": 0.014189460940382759,
          "rotation": 0,
          "target": "4-chambre-"
        },
        {
          "yaw": -2.9172890740279556,
          "pitch": 0.25012754761826805,
          "rotation": 0,
          "target": "3-salon-porte-chambre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-entr-toilette",
      "name": "entré toilette",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3641900286373101,
          "pitch": 0.11325123352861688,
          "rotation": 0,
          "target": "8-toilette"
        },
        {
          "yaw": 1.9161006974507577,
          "pitch": 0.3030660725604335,
          "rotation": 0,
          "target": "0-entr-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-toilette",
      "name": "toilette",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.22336905820638,
          "pitch": 0.16681966204083842,
          "rotation": 0,
          "target": "1-salon-cuisine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
