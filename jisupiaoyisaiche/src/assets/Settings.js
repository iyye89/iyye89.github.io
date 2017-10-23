var Config = {
    Cars: [{
        name: "Car 1",
        shopImage: "Shop_Car_01",
        raceImage: "Car_01",
        speed: [100, 120, 140, 160, 180, 200],
        control: [10, 13, 16, 19, 22, 25],
        turnPower: 140,
        turnSpeed: 5,
        turnDumping: 4,
        price: 0
    }, {
        name: "Car 2",
        shopImage: "Shop_Car_02",
        raceImage: "Car_02",
        speed: [200, 220, 240, 260, 280, 300],
        control: [28, 31, 34, 37, 40, 43],
        turnPower: 140,
        turnSpeed: 5,
        turnDumping: 4,
        price: 4e3
    }, {
        name: "Car 3",
        shopImage: "Shop_Car_03",
        raceImage: "Car_03",
        speed: [300, 320, 340, 360, 380, 400],
        control: [46, 49, 52, 55, 58, 61],
        turnPower: 140,
        turnSpeed: 5,
        turnDumping: 4,
        price: 8e3
    }, {
        name: "Car 4",
        shopImage: "Shop_Car_04",
        raceImage: "Car_04",
        speed: [400, 420, 440, 460, 480, 500],
        control: [64, 67, 70, 73, 76, 79],
        turnPower: 140,
        turnSpeed: 5,
        turnDumping: 4,
        price: 2e4
    }, {
        name: "Car 5",
        shopImage: "Shop_Car_05",
        raceImage: "Car_05",
        speed: [500, 520, 540, 560, 580, 600],
        control: [82, 85, 88, 91, 94, 97],
        turnPower: 140,
        turnSpeed: 5,
        turnDumping: 4,
        price: 5e4
    }, {
        name: "Car 6",
        shopImage: "Shop_Car_06",
        raceImage: "Car_06",
        speed: [620, 640, 660, 680, 700, 720],
        control: [100, 103, 106, 109, 112, 115],
        turnPower: 140,
        turnSpeed: 5,
        turnDumping: 4,
        price: 11e4
    }, {
        name: "Car 7",
        shopImage: "Shop_Car_07",
        raceImage: "Car_07",
        speed: [740, 760, 780, 800, 820, 840],
        control: [118, 121, 124, 127, 130, 133],
        turnPower: 140,
        turnSpeed: 5,
        turnDumping: 4,
        price: 3e5
    }],
    WinGrades: [
        [2.5, 0],
        [3.5, 2, 0],
        [3.5, 2.5, 1.5, 0]
    ],
    Tracks: [{
        trackFile: "Track_0"
    }, {
        trackFile: "Track_A"
    }, {
        trackFile: "Track_B"
    }, {
        trackFile: "Track_C"
    }, {
        trackFile: "Track_D"
    }, {
        trackFile: "Track_E"
    }, {
        trackFile: "Track_F"
    }, {
        trackFile: "Track_G"
    }, {
        trackFile: "Track_H"
    }, {
        trackFile: "Track_I"
    }],
    Levels: [
        [{
            price: 0,
            opponents: 1,
            opponentsTime: [65, 67, 69],
            trackIndex: 0
        }, {
            price: 100,
            opponents: 2,
            opponentsTime: [74, 77, 79],
            trackIndex: 1
        }, {
            price: 200,
            opponents: 3,
            opponentsTime: [58, 60, 63],
            trackIndex: 2
        }, {
            price: 300,
            opponents: 1,
            opponentsTime: [62, 63, 65],
            trackIndex: 3
        }, {
            price: 400,
            opponents: 2,
            opponentsTime: [72, 76, 78],
            trackIndex: 4
        }, {
            price: 500,
            opponents: 3,
            opponentsTime: [80, 83, 87],
            trackIndex: 5
        }, {
            price: 600,
            opponents: 1,
            opponentsTime: [88, 89, 74],
            trackIndex: 6
        }, {
            price: 700,
            opponents: 2,
            opponentsTime: [78, 80, 83],
            trackIndex: 7
        }, {
            price: 800,
            opponents: 3,
            opponentsTime: [97, 98, 103],
            trackIndex: 8
        }, {
            price: 900,
            opponents: 1,
            opponentsTime: [92, 93, 94],
            trackIndex: 9
        }],
        [{
            price: 1e3,
            opponents: 1,
            opponentsTime: [54, 56, 58],
            trackIndex: 0
        }, {
            price: 1500,
            opponents: 2,
            opponentsTime: [62, 64, 65],
            trackIndex: 1
        }, {
            price: 2e3,
            opponents: 1,
            opponentsTime: [46, 48, 50],
            trackIndex: 2
        }, {
            price: 2500,
            opponents: 2,
            opponentsTime: [51, 53, 54],
            trackIndex: 3
        }, {
            price: 3e3,
            opponents: 1,
            opponentsTime: [62, 64, 66],
            trackIndex: 4
        }, {
            price: 3500,
            opponents: 2,
            opponentsTime: [71, 72, 73],
            trackIndex: 5
        }, {
            price: 4e3,
            opponents: 1,
            opponentsTime: [81, 82, 83],
            trackIndex: 6
        }, {
            price: 4500,
            opponents: 2,
            opponentsTime: [75, 76, 77],
            trackIndex: 7
        }, {
            price: 5e3,
            opponents: 1,
            opponentsTime: [93, 94, 95],
            trackIndex: 8
        }, {
            price: 5500,
            opponents: 2,
            opponentsTime: [91, 92, 93],
            trackIndex: 9
        }],
        [{
            price: 1e4,
            opponents: 2,
            opponentsTime: [51, 52, 53],
            trackIndex: 0
        }, {
            price: 11e3,
            opponents: 3,
            opponentsTime: [60, 61, 62],
            trackIndex: 1
        }, {
            price: 12e3,
            opponents: 2,
            opponentsTime: [44, 45, 46],
            trackIndex: 2
        }, {
            price: 13e3,
            opponents: 3,
            opponentsTime: [49, 50, 51],
            trackIndex: 3
        }, {
            price: 14e3,
            opponents: 2,
            opponentsTime: [59, 61, 63],
            trackIndex: 4
        }, {
            price: 15e3,
            opponents: 3,
            opponentsTime: [68, 69, 70],
            trackIndex: 5
        }, {
            price: 16e3,
            opponents: 2,
            opponentsTime: [78, 80, 81],
            trackIndex: 6
        }, {
            price: 17e3,
            opponents: 3,
            opponentsTime: [72, 73, 74],
            trackIndex: 7
        }, {
            price: 18e3,
            opponents: 2,
            opponentsTime: [90, 91, 92],
            trackIndex: 8
        }, {
            price: 19e3,
            opponents: 3,
            opponentsTime: [88, 89, 90],
            trackIndex: 9
        }]
    ]
};