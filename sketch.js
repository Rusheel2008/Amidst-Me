var database;
var logo, logoImage;



function setup(){

    database = firebase.database;
    var canvas = createCanvas(displayWidth-20,displayHeight-30);
}

function preload(){
    logoImage = loadImage("Images/Logo.png.png");

}