var snowMax = 35;
var snowLetter = "*";
var fallSpeed = 0.6;
var snowMaxSize = 40;
var snowMinSize = 8;
var snow = new Array();
var windowHeight;
var windowWidth;
var xStep = new Array();
var cords = new Array();
var amplitude = new Array();
for (var i = 0; i <= snowMax; i++) {
    document.write("<span id='s" + i + "' style='user-select:none;position:absolute;top:-" + snowMaxSize + "px;'>" + snowLetter + "</span>");
}
window.onload = generateSnow;
function generateSnow() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    for (var i = 0; i <= snowMax; i++) {
        cords[i] = 0;
        amplitude[i] = Math.random() * 15;
        xStep[i] = 0.02 + Math.random() / 10;
        snow[i] = document.getElementById("s" + i);
        snow[i].size = randomMaker(snowMaxSize - snowMinSize) + snowMinSize;
        snow[i].style.fontSize = snow[i].size + "px";
        snow[i].style.color = "#FFFFFF";
        snow[i].fall = fallSpeed * snow[i].size / 5;
        snow[i].posX = randomMaker(windowWidth - snow[i].size);
        snow[i].posY = randomMaker(windowHeight - 2 * snow[i].size);
        snow[i].style.left = snow[i].posX + "px";
        snow[i].style.top = snow [i].posY + "px";
    }
    moveSnow();
}
function moveSnow() {
    for (var i = 0; i <= snowMax; i++) {
        cords[i] += xStep[i];
        snow[i].posY += snow[i].fall;
        snow[i].style.left = snow[i].posX + amplitude[i] * Math.sin(cords[i]) + "px";
        snow[i].style.top = snow[i].posY + "px";
        if (snow[i].posY >= windowHeight - 2 * snow[i].size || parseInt(snow[i].style.left) > (windowWidth - 3 * amplitude[i])) {
            snow[i].posX = randomMaker(windowWidth - snow[i].size);
            snow[i].posY = 0;
        }
    }
    var timer = setTimeout("moveSnow()", 50);
}
function randomMaker(range) {
    var rand = Math.floor(range * Math.random());
    return rand;
}
