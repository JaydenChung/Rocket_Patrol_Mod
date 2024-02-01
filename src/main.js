// Jayden Chung
// Rocket Patrol: Rocket Exchange
// 6 hours est time 
// New Spaceship with new artwork that is smaller, faster, and is worth more points + 5
// Mouse Control for player movement and left mouse click to fire + 5
// Timing/scoring mechanism that adds tme to clock for succesful hits and subtracts time for misses + 5
// Display timer on screen + 3
// Create 4 new explosion sound effects that randomize on impact +3
// total points = 21

// physics: {
//     default: 'arcade',
//     arcade: {
//         debug: true
//     }
// }

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
} 



let game = new Phaser.Game(config);

//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

