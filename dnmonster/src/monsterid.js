"use strict";

var seedrandom = require('seedrandom');
var Canvas = require('canvas');

exports.getAvatar = function(seed, width, height, theme) {
    //check width and height
    theme = typeof theme !== 'undefined' ? theme : 'default';

    // Seed RNG. 
    // WARNING: Hashing is left to caller
    var rng = seedrandom(seed);

    var widthHeight = Math.max(width, height);
    widthHeight = Math.max(widthHeight, 12);
    var canvas = new Canvas(widthHeight, widthHeight);

    // Avatar random parts.
    var parts = {
        legs : availableParts[theme].legs[Math.floor(rng() * availableParts[theme].legs.length)],
        hair : availableParts[theme].hair[Math.floor(rng() * availableParts[theme].hair.length)],
        arms : availableParts[theme].arms[Math.floor(rng() * availableParts[theme].arms.length)],
        body : availableParts[theme].body[Math.floor(rng() * availableParts[theme].body.length)],
        eyes : availableParts[theme].eyes[Math.floor(rng() * availableParts[theme].eyes.length)],
        mouth: availableParts[theme].mouth[Math.floor(rng() * availableParts[theme].mouth.length)]
    };

    // Create avatar.
    var avatar = canvas.getContext('2d');

    // Choose a random color
    function gencol() { return (Math.floor(rng() * 200) + 55); }
    var randomColor = 'rgb(' + gencol() + ',' + gencol() + ',' + gencol() + ')';
    avatar.fillStyle   = randomColor;
    avatar.strokeStyle = randomColor;
    avatar.lineWidth   = 1;

    // Fill avatar with random parts.
    for (var iPart in parts) {
        var part = parts[iPart];
        drawPart(part, avatar);
    }

    return canvas.toBuffer();
    };

    var drawPart = function(part, avatar) {
        var dotSize = Math.floor(avatar.canvas.width / part.length);
        var offset = Math.round(0.5 * (avatar.canvas.width - dotSize * part.length));
        // Iterate over lines
        for(var line in part) {
            var y = line * dotSize + offset;
            // Iterate over columns
            for(var col in part[line]) {
                var x = col * dotSize + offset;

                switch(part[line][col]) {
                    case 1:
                        avatar.fillRect(x, y, dotSize, dotSize);

                        break;
                    case 2:
                        avatar.clearRect(x, y, dotSize, dotSize);
                        break;
                }
            }
        }
    };

    var availableParts = {
        default: {
            legs:
                [
                    
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0],
                        [0,0,1,1,0,0,0,0,1,1,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,1,1,1,1,1,1,1,1,1,1,0],
                        [0,1,0,1,0,1,1,0,1,0,1,0],
                        [0,1,0,1,0,1,1,0,1,0,1,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,1,1,1,1,1,1,1,1,1,1,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,1,0,0,0,1,1,0,0,0,1,0],
                        [0,1,0,1,0,1,1,0,1,0,1,0],
                        [0,0,1,1,1,0,0,1,1,1,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,1,0,0,0,0,0,0,1,0,0],
                        [0,1,0,0,0,0,0,0,0,0,1,0],
                        [1,0,0,0,0,0,0,0,0,0,0,1]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,1,1,1,0,0,1,1,1,0,0],
                        [0,0,1,0,1,0,0,1,0,1,0,0],
                        [1,1,1,0,1,0,0,1,0,1,1,1]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [1,1,1,1,1,0,0,1,1,1,1,1],
                        [1,0,1,0,0,0,0,0,0,1,0,1],
                        [1,1,1,0,0,0,0,0,0,1,1,1]
                    ]
                ],
            hair:
                [
                    
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,1,1,0,0,1,1,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,1,0,0,0,0,1,0,0,0],
                        [0,0,0,0,1,0,0,1,0,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,1,0,0,0,0,0,0,1,0,0],
                        [0,0,0,1,0,1,1,0,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [1,1,1,0,0,0,0,0,0,1,1,1],
                        [0,0,0,1,0,1,1,0,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [1,0,1,0,0,1,1,0,0,1,0,1],
                        [0,1,1,1,0,1,1,0,1,1,1,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [1,1,1,1,0,0,0,0,1,1,1,1],
                        [0,1,1,1,1,1,1,1,1,1,1,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [1,1,1,1,1,1,1,1,1,1,1,1],
                        [0,1,1,1,1,0,0,1,1,1,1,0],
                        [0,0,1,1,1,0,0,1,1,1,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,1,0,1,1,0,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ]
                ],
            arms:
                [
                    
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,1,1,0,0,0,0,1,1,0,0],
                        [0,0,1,0,0,0,0,0,0,1,0,0],
                        [1,1,1,0,0,0,0,0,0,1,1,1],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,1,1,1,0,0,0,0,1,1,1,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [1,1,1,0,0,0,0,0,0,1,1,1],
                        [0,0,1,0,0,0,0,0,0,1,0,0],
                        [1,1,1,1,0,0,0,0,1,1,1,1],
                        [0,0,1,0,0,0,0,0,0,1,0,0],
                        [1,1,1,0,0,0,0,0,0,1,1,1],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,1,0,0,0,0,0,0,0,0,1,0],
                        [0,0,1,0,0,0,0,0,0,1,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,1,0,0,0,0,0,0,1,0,0],
                        [0,1,0,0,0,0,0,0,0,0,1,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,1,1],
                        [0,0,0,0,0,0,0,0,0,0,1,0],
                        [0,0,0,0,0,0,0,0,0,0,1,0],
                        [0,1,1,1,0,0,0,0,1,1,1,0],
                        [0,1,0,0,0,0,0,0,0,0,0,0],
                        [0,1,0,0,0,0,0,0,0,0,0,0],
                        [1,1,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [1,0,0,0,0,0,0,0,0,0,0,1],
                        [1,1,1,1,0,0,0,0,1,1,1,1],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [1,0,0,0,0,0,0,0,0,0,0,1],
                        [1,1,1,1,0,0,0,0,1,1,1,1],
                        [1,0,0,0,0,0,0,0,0,0,0,1],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,1,0,0,0,0,1,0,0,0],
                        [0,0,1,0,0,0,0,0,0,1,0,0],
                        [0,1,0,1,0,0,0,0,1,0,1,0],
                        [1,0,1,0,0,0,0,0,0,1,0,1],
                        [1,1,1,1,0,0,0,0,1,1,1,1],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,1,0,0,0,0,0,0,0,0,1,0],
                        [0,1,0,0,0,0,0,0,0,0,1,0],
                        [0,1,0,0,0,0,0,0,0,0,1,0],
                        [0,1,0,0,0,0,0,0,0,0,1,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ]
                ],
            body:
                [
                    
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,1,1,1,1,1,1,1,1,1,1,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,0,1,1,0,0,0,0,0],
                        [0,0,0,1,0,1,1,0,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,1,1,0,0,0,0,1,1,0,0],
                        [0,1,1,1,1,1,1,1,1,1,1,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,0,1,1,1,1,1,1,1,1,0,0],
                        [0,1,1,1,1,1,1,1,1,1,1,0],
                        [0,0,0,0,1,1,1,1,0,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,1,1,1,1,1,1,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ]
                ],
            eyes:
                [
                    
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,2,2,2,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,2,0,2,2,0,2,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,2,2,0,0,2,2,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ]
                ],
            mouth:
                [
                    
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,2,2,2,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,2,2,2,0,0,0,0],
                        [0,0,0,2,0,0,0,0,2,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,2,0,0,0,0,2,0,0,0],
                        [0,0,0,0,2,2,2,2,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,2,2,2,2,2,2,2,2,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,0,2,2,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ],
                    [
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,0,2,0,0,2,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0]
                    ]
                ]
        }
};
