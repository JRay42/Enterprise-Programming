import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './style/site.css'
import me from './img/me.jpg'
import spaceInvaders from './img/spaceInvaders.jpg'
import firstShooter from './img/firstShooter.jpg'
import playBall from './img/playBall.jpg'
import razzleDazzle from './img/razzleDazzle.jpg'
import wolvesOil from './img/wolvesOil.jpg'
import birdsPencil from './img/birdsPencil.jpg'

var meElement = document.getElementById('me');
if (meElement) {
    meElement.src = me;
}
var spaceInvadersElement = document.getElementById('spaceInvaders');
if (spaceInvadersElement) {
    spaceInvadersElement.src = spaceInvaders;
}
var firstShooterElement = document.getElementById('firstShooter');
if (firstShooterElement) {
    firstShooterElement.src = firstShooter;
}
var playBallElement = document.getElementById('playBall');
if (playBallElement) {
    playBallElement.src = playBall;
}
var razzleDazzleElement = document.getElementById('razzleDazzle');
if (razzleDazzleElement) {
    razzleDazzleElement.src = razzleDazzle;
}
var wolvesOilElement = document.getElementById('wolvesOil');
if (wolvesOilElement) {
    wolvesOilElement.src = wolvesOil;
}
var birdsPencilElement = document.getElementById('birdsPencil');
if (birdsPencilElement) {
    birdsPencilElement.src = birdsPencil;
}
